const readline = require('readline');
const { NlpManager } = require('node-nlp');
const trainnlp = require('./train-nlp');

const threshold = 0.5;
const nlpManager = new NlpManager({ languages: ['en'] });

function say(message) {
  // eslint-disable-next-line no-console
  console.log("\n" + message + "\n");
}

(async () => {
  await trainnlp(nlpManager, say);
  say('Say something!');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });
  rl.on('line', async line => {
    if (line.toLowerCase() === 'quit') {
      rl.close();
      process.exit();
    } else {
      const result = await nlpManager.process(line);
      const answer =
        result.score > threshold && result.answer
          ? result.answer
          : "Sorry, I don't understand";
      let sentiment = '';
      if (result.sentiment.score !== 0) {
        sentiment = `  ${result.sentiment.score > 0 ? ':)' : ':('}   (${
          result.sentiment.score
        })`;
      }
      say(`CHATBOT> ${answer}${sentiment}`);
    }
  });
})();