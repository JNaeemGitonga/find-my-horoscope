const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');




const app = express();
app.use(bodyParser.json());

 const horoscopes = [
    {
        "sign": "capricorn",
        "quotes": ["You'll eat lots of ice cream!", "Wear a swim suit!"]
        
    },
    {
        "sign": "libra",
        "quotes": ["Eat all the chocolate today!", "Do yoga today; you'll feel better!"]
        
    },
    {
        "sign": "aries",
        "quotes": ["You are at the helm, take command!", 
        "Go to the source today, and hear it from the horse's mouth!",
         "Greet the great outdoors with open arms!"]
    },
    {
        "sign": "aquarius",
        "quotes": ["Today is yorur day to make an investment!", 
        "Reward someone's effort!"]
      
    },
    {
        "sign": "cancer",
        "quotes": ["Hands down you are the best!",
         "You will continue to have great successes!", "Invest in yourself!"]
      
    },
    {
        "sign": "gemini",
        "quotes": ["Pick one!", "Always do your best!", "Trust your gut!"]
    },
    {
        "sign": "leo",
        "quotes": ["Go to a bookstore!",
        "Find a person who is smiling and smile with them!", "Help someone in some way."]
    },
    {
        "sign": "sagittarius",
        "quotes": ["Stay out of dark allies!", "Eat more plants!", "Get plenty of rest."]
    },
    {
        "sign": "scorpio",
        "quotes": ["Avoid fools at all cost!",
        "Who says you have to be at their beck and call, treat yourself"]
    },
    {
        "sign": "pisces",
        "quotes": ["Be strong today, stick to your guns!", "Make the best choice!"]
    },
    {
        "sign": "virgo",
        "quotes": ["Today is your day to go above and beyond",
        "Drink some hot apple cider"]
    },
    {
        "sign": "taurus",
        "quotes": ["Ride a cute bus today","Go outside today!", "Talk to a loved one." ]
    }
]
// API endpoints go here!
app.get('/api/horoscopes', (req, res) => {
   

  return res.json(horoscopes);

});




// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});

let server;
function runServer(port=3001) {
    return new Promise((resolve, reject) => {
        server = app.listen(port, () => {
            resolve();
        }).on('error', reject);
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
