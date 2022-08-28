"use strict";

//Coding Challange 1 & 2 🧑🏻‍💻🧑🏻‍💻🧑🏻‍💻
// const heightMark = 1.69;
// const weightMark = 78;
// const heightJohn = 1.95;
// const weightJohn = 92;

// const bmiMark = weightMark / heightMark ** 2;
// const bmiJohn = weightJohn / heightJohn ** 2;
// // console.log(bmiMark, bmiJohn);
// const markHigherBMI = bmiMark > bmiJohn;
// if (markHigherBMI) {
//   console.log(
//     `Mark's BMI (${bmiMark.toFixed(2)}) is higher than John's(${bmiJohn})`
//   );
// } else
//   console.log(` John's(${bmiJohn}) is higher than Mark's BMI (${bmiMark})`);

// //Coding Challange 3 🧑🏻‍💻🧑🏻‍💻🧑🏻‍💻
// const dolphinAverageScore = (96 + 108 + 89) / 3;
// const koalasAverageScore = (88 + 91 + 110) / 3;
// // const dolphinAverageScore = 10;
// // const koalasAverageScore = 10;
// console.log(dolphinAverageScore, koalasAverageScore);
// if (dolphinAverageScore > koalasAverageScore && dolphinAverageScore >= 100) {
//   console.log("Dolphins win");
// } else if (
//   koalasAverageScore > dolphinAverageScore &&
//   koalasAverageScore >= 100
// ) {
//   console.log("Koalas win");
// } else if (
//   dolphinAverageScore === koalasAverageScore &&
//   dolphinAverageScore >= 100
// ) {
//   console.log("Its's a draw");
// } else console.log("No winners");

//Coding Challange 4 🧑🏻‍💻🧑🏻‍💻🧑🏻‍💻 BUG

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? (15 * bill) / 100 : (20 * bill) / 100;

console.log(
  `The bill was ${bill}, the tip was ${tip} and the total value was ${
    bill + tip
  }`
);

//NOTE:
//BUG:
