const express = require("express");
const router = express.Router();
const path = require('path');
const readline = require('readline');
const { NlpManager } = require('node-nlp');
const trainnlp = require('./train-nlp');

const threshold = 0.3;
const nlpManager = new NlpManager({ languages: ['en'] });

function say(message) {
  console.log("\n" + message + "\n");
}

(async () => {
	await trainnlp(nlpManager, say);
})();

// Get requests can't have body as a parameter because of the nature
// of GET requests. Instead we can pass it over as a param
router.get("/", async (req, res) => {
	try {
		res.setHeader('Access-Control-Allow-Origin', '*')
		const received = req.query.message ? req.query.message.substring(0, 50) : ''
		const result = await nlpManager.process(received);
		const answer =
	    	result.score > threshold && result.answer
	    	? result.answer
	    	: "Sorry, I don't understand";

	    // console.log("sending back response")
		res.json({
			response: answer,
			intent: result.intent,
			sentiment: result.sentiment
		});
		// console.log("succesfully json'ed the response")
	} catch (e) {
		res.json({
			response: "Server error occurred: try again"
		})
		console.log(e);
	}
});

module.exports = router;