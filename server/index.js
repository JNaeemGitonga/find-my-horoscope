'use strict';
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const FacebookStragegy = require('passport-facebook');
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
mongoose.Promise = global.Promise;

if(process.env.NODE_ENV !== 'production') {
    secret = require('./secret');
}

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

passport.use(
    new BearerStrategy((token, done) => {
            // Job 3: Update this callback to try to find a user with a
            // matching access token.  If they exist, let em in, if not,
            // don't.
      User
        .find({accessToken: token})
        .exec()
        .then(user => {
          if (!user) {
            return done(null, false);
          }
          return done(null, user[0]);
        })
        .catch(err => console.log(err));
    })
);

app.get('/auth/facebook',
passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
passport.authenticate('facebook', { failureRedirect: '/login' }),
function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/');
});

app.get('/api/horoscopes', (req, res) => {
    Horoscope
        .find().then(horoscopes => {
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
