const express = require("express");
const router = express.Router();
const path = require('path');
const readline = require('readline');
const { NlpManager } = require('node-nlp');
const trainnlp = require('./train-nlp');

const redis = require("redis");
client = redis.createClient();
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

client.on("error", function (err) {
	console.log("Error " + err);
});
setAsync("cache", JSON.stringify({cache: {
		"goodbye": {response: "bye",
		intent: "bye.bye",
		sentiment: 0}}})).then();

const threshold = 0.3;
const nlpManager = new NlpManager({ languages: ['en'] });

function say(message) {
  console.log("\n" + message + "\n");
}

(async () => {
	await trainnlp(nlpManager, say);
})();

getAnswer = ((request) => {
	return new Promise((resolve, reject) => {
		setTimeout(async () => {
			const c = JSON.parse(await getAsync("cache")).cache;
			if(c.hasOwnProperty(request)) {
				resolve(c[request]);
			}
			else {
				resolve({});
			}
		});
	});
});

addAnswer = ((request, answer, intent, sentiment) => {
	return new Promise((resolve, reject) => {
		setTimeout(async () => {
			const c = JSON.parse(await getAsync("cache")).cache;
			const ks = Object.keys(c);
			if (ks.length === 20) {
				delete c[ks[0]];
			}
			c[request] = {
				response: answer,
				intent: intent,
				sentiment: sentiment
			};
			await setAsync("cache", JSON.stringify({cache: c}));
			resolve("");
		});
	});
});

// Get requests can't have body as a parameter because of the nature
// of GET requests. Instead we can pass it over as a param
router.get("/", async (req, res) => {
	try {
		res.setHeader('Access-Control-Allow-Origin', '*')
		const received = req.query.message ? req.query.message.substring(0, 50) : ''

		const cVal = await getAnswer(received);
		if (Object.entries(cVal).length !== 0) { // see if input is in cache
			res.json(cVal);
		}
		else {
			const result = await nlpManager.process(received);
			const answer =
		    	result.score > threshold && result.answer
		    	? result.answer
		    	: "Sorry, I don't understand";

		    addAnswer(received, answer, result.intent, result.sentiment.score); // add new answer to cache

		    // console.log("sending back response")
			res.json({
				response: answer,
				intent: result.intent,
				sentiment: result.sentiment.score
			});
			// console.log("succesfully json'ed the response" +result.sentiment.score);
		}
	} catch (e) {
		res.json({
			response: "Server error occurred: try again"
		})
		console.log(e);
	}
});

module.exports = router;