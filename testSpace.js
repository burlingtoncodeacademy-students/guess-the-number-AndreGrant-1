function randoNum(higher, lower) {
  let range = higher - lower + 1;
  return Math.floor(Math.random() * range) + lower;
}

// function getHalf(max, min) {
//   return Math.floor((max - min) / 2 + min);
// }

// console.log(getHalf(1, 100));
// console.log(getHalf(50, 100));
// console.log(getHalf(75, 100));
// console.log(getHalf(1, 50));
// console.log(getHalf(25, 50));

// let minNum = 1;
// let maxNum = 100;

// minNum = 50;

console.log(randoNum(1, 10));
console.log(randoNum(23, 56));
console.log(randoNum(50, 100));
console.log(randoNum(1, 50));
