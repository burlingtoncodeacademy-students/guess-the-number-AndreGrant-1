//--------------------------READLINE------------------------------//

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

//-------------------------AYSNC START----------------------------//

start();

async function start() {
  //set comps answer
  let rightAnswer = 25;

  let playerGuess = await ask(
    "I'm thinking of a number 1-50. What do you think the number is?\n>_ "
  );
  //starts loop, while players guess does not equal the right answer, it keeps looping
  while (playerGuess !== rightAnswer) {
    if (playerGuess > rightAnswer) {
      console.log("Nope! Too high!");
      playerGuess = await ask(">_ ");
    } else if (playerGuess < rightAnswer) {
      console.log("Nope! Too low!");
      playerGuess = await ask(">_ ");
    } else {
      //when the right answer is entered, the win statement is displayed and program ends
      if ((playerGuess = rightAnswer)) {
        console.log("Damn, you're good! Thanks for playing!");
        process.exit();
      }
    }
  }
}
