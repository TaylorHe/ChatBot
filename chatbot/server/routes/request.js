const express = require("express");
const router = express.Router();
const path = require('path');
const readline = require('readline');
const { NlpManager } = require('node-nlp');
const trainnlp = require('./train-nlp');

const threshold = 0.5;
const nlpManager = new NlpManager({ languages: ['en'] });

function say(message) {
  console.log("\n" + message + "\n");
}

(async () => {
	await trainnlp(nlpManager, say);
})();

router.get("/", async (req, res) => {
	try {
		const result = await nlpManager.process(req.body.message); // replace with static value for testing
		const answer =
	    	result.score > threshold && result.answer
	    	? result.answer
	    	: "Sorry, I don't understand";
		res.json({response: answer});
	} catch (e) {
		console.log(e);
	}
});

module.exports = router;