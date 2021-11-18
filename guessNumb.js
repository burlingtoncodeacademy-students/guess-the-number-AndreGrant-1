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
  let maxNum = 100;
  let minNum = 0;
  let yesOrNo;

  function newGuess(maxNum, minNum) {
    return Math.round(Math.random * (maxNum - minNum) + minNum);
  }

  console.log(
    "Let's play a game where you, my human friend, pick up a number 1-100 and I, Computer, try to guess it."
  );

  let secretNumber = await ask(
    "What is your secret number?\nI won't peek, I promise...\n>_ "
  );

  console.log(
    `You entered: ${secretNumber}.\nNo worries! this is just so i know you aren't cheating ;).
    Please use: yes, no, higher, and lower to play this game. (Lowercase) `
  );

  let compGuess = newGuess(minNum, maxNum);

  while (yesOrNo !== "yes") {
    yesOrNo = await ask(`Is your number ${compGuess}?\n>_ `);

    let highLow = await ask("Higher or Lower?\n>_ ");

    if (highLow === "higher") {
      minNum = compGuess;
    } else if (highLow === "lower") {
      maxNum = compGuess;
    }

    compGuess = Math.round((maxNum + minNum) / 2);
  }
}

// if (compGuess === "yes") {
//   console.log("Ha, Too easy! Thanks for playing!");
//   process.exit();
