'use strict'

var APP_ID = 'amzn1.ask.skill.12c0e68a-9a8e-4053-9613-e7fc021e6dac'

var AlexaSkill = require('./AlexaSkill');

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

    response.tell(speechOutput);
}

exports.handler = function(event, context) {
    var skill = new LifOffSkill();

    skill.execute(event, context);
}