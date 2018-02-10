'use strict'

var APP_ID = 'amzn1.ask.skill.12c0e68a-9a8e-4053-9613-e7fc021e6dac'

var AlexaSkill = require('./AlexaSkill');
var https = require('https');
var request = require('request');

var urlPrefix = 'http://liftoffinfokup.azurewebsites.net/';

//Konfiguracija skilla
var LifOffSkill = function() {
    AlexaSkill.call(this, APP_ID);
}

LifOffSkill.prototype = Object.create(AlexaSkill.prototype);
LifOffSkill.prototype.constructor = LifOffSkill;

LifOffSkill.prototype.eventHandlers.onSessionStarted = function(sessionsStartedRequest, session) {};

LifOffSkill.prototype.eventHandlers.onLaunch = function(launchRequest, session, response) {
    getWelcomeResponse(response);
}

LifOffSkill.prototype.eventHandlers.onSessionEnded = function(sessionEndedRequest, session) {};

//Dodijeljivanje intenta funkcijama
LifOffSkill.prototype.intentHandlers = {
    "CanIFlyIntent": function(intent, session, response) {
        handleCanIFlyIntent(intent, session, response);
    }
}

//Funkcija koja se pokreće prvi prvom ulasku u skill
function getWelcomeResponse(response) {
    var cardTitle = "Welcome to the LiftOff skill";
    var repromptText = "Welcome to the LifOff skill";
    var speechText = "<p>Welcome to the LifOff skill.</p>";
    var cardOutput = "Welcome to the LifOff skill.";
    
    var speechOutput = {
        speech: "<speak>" + speechText + "</speak>",
        type: AlexaSkill.speechOutputType.SSML
    };

    var repromptOutput = {
        speech: repromptText,
        type: AlexaSkill.speechOutputType.PLAIN_TEXT
    };

    response.askWithCard(speechOutput, repromptOutput, cardTitle, cardOutput);
}

//Funkcija koja se pokreće na CanIFlyIntent
function handleCanIFlyIntent(intent, session, response) {
    var speechOutput = {
        speech: "<speak>Let's go!</speak>",
        type: AlexaSkill.speechOutputType.SSML
    };

    //Postavke za Device Adress Api koji će vratiti poštanski broj i državni kod
    //postavljen za uređaj koji poziva intent
    var postData = JSON.stringify({deviceId: info.deviceId});
    var options = {
        hostname: 'api.amazonalexa.com',
        path: 'https://api.amazonalexa.com/v1/devices/'+info.deviceId+'/settings/address/countryAndPostalCode',
        method: 'GET',
        headers: {
             'Content-type': 'application/json',
             'Authorization': 'Bearer ' + info.accessToken
           }
      };

    var adressRequest = https.request(options, function(res) {
        if(res.statusCode == '200') {
            res.on('data', (data) => {
                let responsePayloadObject = JSON.parse(data);
                let dataForApi = {};

                for(var key in responsePayloadObject){
                    if(key == 'postalCode') {
                        dataForApi.postalCode = responsePayloadObject[key];
                    }
                    else if(key == 'countryCode') {
                        dataForApi.countryCode = responsePayloadObject[key];
                    }
                }

                var jsonData = JSON.stringify(dataForApi);

                //Poziv na LiftOff api koji će vratiti WeatherRating u obliku rečenica koje će Alexa pročitati
                request({
                    url: urlPrefix + 'api/alexa/get-current-rating',
                    method: 'POST',
                    body: {
                        postalCode: dataForApi.postalCode,
                        countryCode: dataForApi.countryCode
                    },
                    json: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }, (error, resp, body) => {
                    if(!body.message) {
                        response.tell(body.weatherRatingString);
                    } else {
                        response.tell(body.message);
                    }
                });
                sleep(10000);
            });
        }
        else {
            speechOutput = "<speak>We are sorry, the device adress could not be accessed.</speak>"
            response.tell(speechOutput);
        }
    })
        
    adressRequest.write(postData);
    adressRequest.end();
}

//Funkcija koja će postaviti Timer na određeni broj sekundi.
//Služi za produživanje Alexinog čekanja odgovora
function sleep(miliseconds) {
    setTimeout(() => {console.log('sleepEnd')}, miliseconds);
}

var info = {};

//Glavni handler za skill
exports.handler = function(event, context) {
    var skill = new LifOffSkill();
    info.deviceId = event.context.System.device.deviceId;
    info.accessToken = event.context.System.apiAccessToken;

    skill.execute(event, context);
}
