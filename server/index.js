'use strict';
const path = require('path');
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const FacebookStrategy = require('passport-facebook');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const BearerStrategy = require('passport-http-bearer').Strategy;

const {Horoscope, User} = require('./models');
const {PORT, DATABASE_URL} = require('./config');

const app = express();
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(bodyParser.json());
app.use(morgan('common'));
app.use(cors());
app.use(passport.initialize());
mongoose.Promise = global.Promise;

let secret = {
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
    FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET
}

if(process.env.NODE_ENV !== 'production') {
    secret = require('./secret');
}

passport.use(
    new FacebookStrategy({
        clientID: secret.FACEBOOK_APP_ID,
        clientSecret: secret.FACEBOOK_APP_SECRET,
        callbackURL: "/api/auth/facebook/callback",
        profileFields:['id','displayName','email','name']
  },
    (accessToken, refreshToken, profile, cb) => {
      let user;
        User
            .findOne({facebookId: profile.id})
            .exec()
            .then( _user => {
                user = _user;
                if (!user) {
                    return User.create({
                        facebookId:profile.id,
                        name:profile.name.givenName,
                        accessToken:accessToken,
                        email:profile.email,
                        displayName:profile.displayName
                    });
                }
                return User
                    .findByIdAndUpdate(user.id, {accessToken:accessToken}, {new:true})
                    .exec() 
            })
            .then(user => {
                return cb(null, user);
            })
            .catch(err => console.log('error'));
    }
));

passport.use(
    new BearerStrategy((token, done) => {
           const query ={
               accessToken: token
           }
           console.log(query)
      User
        .find(query)
        .exec()
        .then(user => {
            console.log("76 USER", user)
          if (!user) {
            return done(null, false);
          }
          return done(null, user[0]);
        })
        .catch(err => console.log(err));
    })
);

app.get('/api/auth/facebook',
passport.authenticate('facebook'));

app.get('/api/auth/facebook/callback',
    passport.authenticate('facebook', { 
        failureRedirect: '/',
        session: false
    }),
    (req, res) => {
        res.cookie('accessToken',req.user.accessToken, {expires: 0});
        res.redirect('/');
    }
);

app.get('/api/auth/logout', (req, res) => {
    req.logout();
    res.clearCookie('accessToken');
    res.redirect('/');
  });

app.get('/api/me',
  passport.authenticate('bearer', {session: false}),
  (req, res) =>{
      res.json(req.user.apiRepr())
  } 
);

app.get('/api/horoscopes',
    passport.authenticate('bearer', {session:false}),
    (req, res) => {
   
    Horoscope
        .find()
        .then(horoscopes => {
           res.json(horoscopes.map(horoscope => {
            return horoscope.apiRepr()})) 
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({error:'sorry, something went wrong.'})
        })
});


app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});

let server;
function runServer(databaseUrl=DATABASE_URL,port=3001) {
    return new Promise((resolve, reject) => {
        mongoose.connect(databaseUrl, err => {
            if (err) {
                return reject(err)
            }
            server = app.listen(port, () => {
            console.log(`Your app is listening on port ${port}`);
            resolve();
            })
            .on('error', err => {
                mongoose.disconnect();
                reject(err)
            });
        })
    });
}

function closeServer() {
    return new Promise((resolve, reject) => {
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app, runServer, closeServer
};
