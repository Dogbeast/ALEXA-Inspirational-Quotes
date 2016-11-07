'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Inspirational Quotes';

/**
 * Array containing space facts.
 */
var FACTS = [
    "The best preparation for tomarrow is doing your best today.",
    "Start by doing what's necessary.  Then do what's possible.  And suddenly you are doing the impossible.",
    "The best and most beautiful things in the world cannot be seen or even touched.  They must be felt with the heart.",
    "What we think, we become.",
    "Keep your face always towards the sunshine and the shadows will fall behind you.",
    "Try to be a rainbow in someone's cloud.",
    "Happiness is not something you postpone for the future.  It is something you design for the present.",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    "It is during our darkest moments that we must focus to see the light.",
    "If opportunity doesn't knock, build a door.",
    "Change your thoughts and you change your world.",
    "Perfection is not attainable, but if we chanse perfection we can catch excellence.",
    "A hero is someone who has given his or her life to something bigger than oneself.",
    "We know what we are, but know not what we may be.",
    "Nothing is impossible, the word itself says 'I'm possible!",
    "Your work is going to fill a large part of your life, and the only way to truly satisfied is to do what you believe is great work.  And the only way to do great work is to love what you do.  If you haven't found it yet, keep looking.  Don't settle.  As with all matters of the heart, you'll know when you find it.",
    "Put your heart, mind, and soul into even your smallest acts.  This is the secret to success.",
    "My mission in life is not to merely survive, but to thrive.  To do so with passion, some compassion, some humor, and some style.",
    "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.",
    "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
    "No act of kindness, no matter how small, is ever wasted.",
    "If you believe in yourself and have dedication, pride, and never quit, you'll be a winner.  THe price of victory is high bu so are the rewards.",
    "Let us sacrifice our today so that our children can have a better tomarrow.",
    "Act like you expect to get into the end zone.",
    "We must let go of the life we have planned, so as to accept the one that is waiting for us.",
    "We can't help everyone, but everyone can help someone.",
    "Today I choose my life.  Every morning when I wake up I can choose joy, happiness, negativity, pain.  To feel the freedom that comes from being able to continue to make mistakes and choices.  Today I choose to feel life, not deny my humanity but to embrace it.",
    "There are two ways of spreading light.  To be the candle or the mirror that reflects it.",
    "Vitality shows in not only the ability to persist but the ability to start over.",
    "Don't judge each day the harvest you reap but by the seeds that you plant.",
    "No matter what people tell you, words and ideas can change the world.",
    "Let us remember that one book, one pen, one child, and one teacher can change the world.",
    "The measure of who we are is what we do with what we have.",
    "When the sun is shining I can do anything.  No mountain is too high.  No trouble too difficult to overcome.",
    "I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars.",
    "If I have seen further than others, it is by standing on the shoulders of giants.",
    "What lies behind you and what lies in front of you pales in comparison to what lies inside you.",
    "Memories of our lives, our works, and our deeds will comtinue in others.",
    "Believe in living today.  Not yesterday or tomarrow.",
    "If you always put limits on everything you do, physical or anything else, then it will spread into your work and into your life.  There are no limits.  There are only plateaus, and you must not stay there.  You must go beyond them.",
    "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    "Happiness is a butterfly, which when pursued, is always just beyond your grasp.  But which, if you will sit down quietly, may alignt upon you.",
    "It is in your moments of decision that your destiny is shaped.",
    "What great thing would you attempt if you knew you could not fail?",
    "Happiness resides not in possessions, and not in gold.  Happiness dwells in the soul.",
    "Thought is the wind, knowledge the sail, and mankind the vessel.",
    "Someone is sitting in the shade today because someone planted a tree a long time ago.",
    "Man never made any material as resilient as the human spirit.",
    "The best way out is always through.",
    "As knowledge increases, wonder deepens.",
    "From a small seed a might trunk may grow.",
    "Each day provides it's own gifts.",
    "People tell you the world looks a certain way.  Parents tell you how to think.  Schools tell you how to think.  TV.  Religion.  And then at a certain point, if your lucky, you realize you can make up your own mind.  Nobody sets the rules but you.  You can design your own life.",
    "We relish news of our heroes, forgetting that we are extraordinary to somebody too.",
    "One today is worth two tomorrows.",
    "Every human being has a finite number of heartbeats.  Don't waste yours.",
    "Wonder rather than doubt is the root of all knowledge.",
    "When deeds speak, words are nothing.",
    "Find out who you are and be that person.  That's what your soul was put on this Earth to be.  Find that truth, live that truth, and everything else will come.",
    "Ideas shape the course of history.",
    "My mind's my kingdom.",
    "Be brave enough to live life creatively.  The creative place where no one else has ever been.",
    "The Wright brothers flew right through the smoke screen of impossibility.",
    "I arise full of eagerness and energy knowing well what achievement lies ahead of me.",
    "Out of difficulties grow miracles.",
    "Your present circumstances don't determine where you can go.  They merely determine where you start.",
    "Hope is but the dream of those who wake.",
    "For a gallant spirit there can never be defeat."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your quote: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a quote, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};