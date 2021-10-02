// function guessNum(min, max) {
//   let range = max - min + 1;
//   return Math.floor(Math.random() * range) + min;
// }

function getHalf(max, min) {
  return Math.floor((max - min) / 2 + min);
}

console.log(getHalf(1, 100));
console.log(getHalf(50, 100));
console.log(getHalf(75, 100));

// let minNum = 1;
// let maxNum = 100;

// minNum = 50;

// console.log(guessNum(1, 10));
// console.log(guessNum(23, 56));
// console.log(guessNum(50, 100));
// console.log(guessNum(1, 50));
