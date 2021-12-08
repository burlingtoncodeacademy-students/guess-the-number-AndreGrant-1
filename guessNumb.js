//--------------------------READLINE------------------------------//

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

//-------------------------AYSNC START----------------------------//

guessGame();

async function guessGame() {
  //Setting initial variables, leaving max number open for user input
  let minNum = 1;
  let yesOrNo;
  // let playAgain;

  console.log(
    "Let's play a game! You pick a number for the max and I have to guess what it is! "
  );

  //set max nmuber to number of the players choice. parseInt to turn the guess back into a number
  let maxNum = await ask("What do you want the max number to be?\n>_ ");
  maxNum = parseInt(maxNum);

  console.log(`Okay! the guessing range will be 1-${maxNum}!`);

  let secretNumber = await ask(
    "What is your secret number?\nI won't peek, I promise...\n>_ "
  );

  //sanitization, tells players the only acceptable inputs for gameplay
  console.log(
    `You entered: ${secretNumber}.\nNo worries! this is just so i know you aren't cheating ;).
    Please use: yes, no, higher, and lower to play this game.(Lowercase) `
  );

  //this function give the median for 2 numbers given, used to narrow down computer guesses
  function rangeFinder(minNum, maxNum) {
    return Math.floor((maxNum - minNum) / 2) + minNum;
  }

  let guess = rangeFinder(maxNum, minNum);
  let numOfTries = 1;
  //while loop that runs until the comp guesses the right number
  while (yesOrNo !== "yes") {
    yesOrNo = await ask(`Is your number ${guess}?\n>_ `);
    if (yesOrNo === "yes") {
      let playAgain = await ask(
        `Ha! Too easy, it only took me ${numOfTries} guess(es)! Want to go again?\n>_ `
      );
      if (playAgain === "no") {
        console.log("Thanks for playing!");
        process.exit();
      } else if (playAgain === "yes") {
        `Yay! ${guessGame()}`;
      }
    }

    let highLow = await ask("Higher or Lower?\n>_ ");

    //loop that adjusts the min and max with each incorrect guess
    if (highLow === "higher") {
      minNum = guess + 1;
      numOfTries = numOfTries + 1;
      guess = rangeFinder(maxNum, minNum);
    } else if (highLow === "lower") {
      maxNum = guess - 1;
      numOfTries = numOfTries + 1;
      guess = rangeFinder(maxNum, minNum);
    }
    //Cheat detector, if guesser cheats, this triggers
    if (minNum > maxNum || maxNum < minNum) {
      console.log(
        "Pfft, if you aren't going to play fair then I'm outta here!"
      );
      process.exit();
    }
  }
}
