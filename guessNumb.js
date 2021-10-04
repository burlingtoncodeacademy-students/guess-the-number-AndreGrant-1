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
  let firstGuess = 50;

  //This function returns a random number between 2 given integers.

  function randoNum(higher, lower) {
    let range = higher - lower + 1;
    return Math.floor(Math.random() * range) + lower;
  }

  //This function returns the median of 2 given integers.

  function guessNum(max, min) {
    return Math.floor((max - min) / 2 + min);
  }

  console.log(
    "Let's play a game where you, my human friend, pick up a number 1-100 and I, Computer, try to guess it."
  );

  let secretNumber = await ask(
    "What is your secret number?\nI won't peek, I promise...\n>_ "
  );
  console.log(
    `You entered: ${secretNumber}.\nNo worries! this is just so i know you aren't cheating ;) .`
  );
  let compGuess = await ask(`Is your number ${firstGuess}?\n>_ `);

  // I made the first guess 50 so it is easier to narrow down the guess range.

  if (compGuess === "yes") {
    console.log("Ha, Too easy! Thanks for playing!");
    process.exit();

    //The code above only triggers if 50 is the players guess.
  } else {
    //The code below triggers if the computers guess is not correct.

    while (compGuess !== "yes") {
      let highLow = await ask("Higher or Lower?\n>_ ");
      if (highLow === "higher") {
        minNum = firstGuess + 1;

        // The guessNum function returns the median number between the given min and max.

        console.log(minNum);

        //The console.logs above checks if the adjustments for the max & min updated.

        compGuess = await ask(
          `Is your number ${guessNum(minNum, maxNum)}?\n>_ `
        );
        if (compGuess === "no") {
          highLow === (await ask("Higher or Lower?\n>_ "));

          //Trying to trigger lower code.
        } else if (highLow === "lower") {
          maxNum = firstGuess - 1;
          compGuess = await ask(
            `Is your number ${guessNum(minNum, maxNum)}?\n>_ `
          );
        }
      }
    }
  }
}
//Still working on project.
