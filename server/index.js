'use strict';
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');


const {Horoscope} = require('./models');
const {PORT, DATABASE_URL} = require('./config');

const app = express();
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(bodyParser.json());
app.use(morgan('common'));
app.use(cors());
mongoose.Promise = global.Promise;

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
