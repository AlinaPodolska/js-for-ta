// task 1
// let x = 1;
// let y = 2;

// ********* 1 *********

// let res1 = `${x}` + `${y}`;

// console.log(res1);
// console.log(typeof res1);

// ********* 2 *********

// let res2 = `${typeof x === "number"}${y}`;

// console.log(res2);
// console.log(typeof res2);

// ********* 3 *********

// let res3 = typeof x === "number";

// console.log(res3);
// console.log(typeof res3);

// ********* 4 *********

// let res4 = Math.pow(typeof x, typeof y);

// console.log(res4);
// console.log(typeof res4);

// task 2
// const number = prompt("Enter your number");

// const isEven = number % 2 == 0;
// const isToSeven = number % 7 == 0;

// const oddEvenTxt = isEven ? "even" : "odd";

// const oddEvenMessage = `${number} is ${oddEvenTxt} and${
//  isToSeven ? "" : " не"
// } multiple of 7`;

// console.log(oddEvenMessage);

// task 3
// const array = [42, "rabbit", true, null];

// alert(array.length);

// const userName = prompt("What is your name?");

// array.push(userName);

// alert(array[4]);

// alert(array[0]);
// alert(array);

// task 4
// const cities = ["Rome", "Lviv", "Warsaw"];

// alert(cities.join("*"));

// task 5
// const fullYears = prompt("How old are you?");

// const isAdult = fullYears >= 18;

// const matureEnoughMessage = "You are an adult";
// const notMatureEnoughMessage = "You are too young";

// const ageVerificationMessage = isAdult
//  ? matureEnoughMessage
//  : notMatureEnoughMessage;

// alert(ageVerificationMessage);

// task 6

// const a = prompt("Сторона A");
// const b = prompt("Сторона B");
// const c = prompt("Сторона C");

// const a = 5;
// const b = 6;
// const c = 8;

// const isIncorrectData = isNaN(a) || isNaN(b) || isNaN(c);

// const square = (a + b + c) / 2;
// const area = Math.sqrt(square * ((square - a) * (square - b) * (square - c)));

// const result = isIncorrectData ? "Incorrect data" : area.toFixed(3);

// const isRightTriangle =
//   a ** 2 == b ** 2 + C ** 2 ||
//   b ** 2 == a ** 2 + c ** 2 ||
//   c ** 2 == b ** 2 + a ** 2;

// console.log(result);
// console.log(isRightTriangle);

// task 7
// const morningMessage = "Доброго ранку";
// const dayMesage = "Доброго дня";
// const eveningMessage = "Доброго вечора";
// const nightMessage = "Доброї ночі";

// const currentHour = new Date().getHours();
// console.log(currentHour);

// #1

// switch (currentHour) {
//   case 6:
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//   case 11:
//     console.log(morningMessage);
//     break;
//   case 12:
//   case 13:
//   case 14:
//   case 15:
//   case 16:
//   case 17:
//     console.log(dayMesage);
//     break;
//   case 18:
//   case 19:
//   case 20:
//   case 21:
//   case 22:
//   case 23:
//     console.log(eveningMessage);
//     break;
//   default:
//     console.log(nightMessage);
// }

// #2
// if (currentHour > 5 && currentHour <= 11) {
//   console.log(morningMessage);
// } else if (currentHour > 11 && currentHour <= 17) {
//   console.log(dayMesage);
// } else if (currentHour > 17 && currentHour <= 23) {
//   console.log(eveningMessage);
// } else {
//   console.log(nightMessage);
// }
