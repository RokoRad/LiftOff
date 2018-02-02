'use strict'

var APP_ID = 'amzn1.ask.skill.12c0e68a-9a8e-4053-9613-e7fc021e6dac'

var AlexaSkill = require('./AlexaSkill');
var axios = require('axios');
var https = require('https');

var urlPrefix = 'http://liftoffapi.azurewebsites.net/';

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

LifOffSkill.prototype.intentHandlers = {
    "CanIFlyIntent": function(intent, session, response) {
        handleCanIFlyIntent(intent, session, response);
    }
}

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


function handleCanIFlyIntent(intent, session, response) {
    var speechOutput = {
        speech: "<speak>Let's go!</speak>",
        type: AlexaSkill.speechOutputType.SSML
    };

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

    var getKeys = function(obj){
        var keys = [];
        for(var key in obj){
           keys.push(key);
        }
        return keys;
     }

    var request = https.request(options, function(res) {
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
                var weatherRequestOptions = {
                    path: 'https://liftoffapi.azurewebsites.net/api/alexa/getCurrentRating',
                    method: 'GET',
                }
                var weatherRequest = https.request(weatherRequestOptions, function(ratingResponse) {
                    if(res.statusCode == '200') {
                        ratingResponse.on('data', (data) => {
                            for(var key in JSON.parse(data)) {
                                if(key == 'weatherRatingString') {
                                    speechOutput = "<speak>" + JSON.parse(data)[key] + "</speak>";
                                    response.tell(speechOutput);
                                }
                            }
                        });
                    }
                });

                weatherRequest.write(dataForApi);
                weatherRequest.end();
            });
        }
        else {
            speechOutput = "<speak>We are sorry, the device adress could not be accessed.</speak>"
            response.tell(speechOutput);
        }
    });

    request.write(postData);
    request.end();
}

var info = {};
exports.handler = function(event, context) {
    var skill = new LifOffSkill();
    info.deviceId = event.context.System.device.deviceId;
    info.accessToken = event.context.System.apiAccessToken;

    skill.execute(event, context);
}