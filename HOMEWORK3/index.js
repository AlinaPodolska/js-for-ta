// task 1

// const numbers = [2, 3, 4, 5];
// const numbersInArray = numbers.length; // 4

// // #1
// let forSum = 1;

// for (let i = 0; i < numbersInArray; i++) {
//   forSum = forSum * numbers[i];
// }

// console.log(forSum);

// // #2
// let whileCount = 0;
// let whileSum = 1;

// while (whileCount < numbersInArray) {
//   whileSum = whileSum * numbers[whileCount];
//   whileCount = whileCount + 1;
// }

// console.log(whileSum);
//________________________________________________________________

// task 2
// for (let count = 0; count <= 15; count++) {
//     if (count % 2 === 0) {
//       console.log(count, "is even");
//     } else {
//       console.log(count, "is odd");
//     }
//   }

//________________________________________________________________

// task 3
// const min = 1;
// const max = 500;

// function randArray(numCount) {
//   const array = [];

//   for (let i = 0; i < numCount; i++) {
//     const randomNum = Math.floor(Math.random() * (max - min) + min);
//     array.push(randomNum);
//   }

//   return array;
// }

// console.log(randArray(5));

// task 4
// const numberInput = document.getElementById("numberInput");
// const degreeInput = document.getElementById("degreeInput");
// const result = document.getElementById("result");
// const button = document.getElementById("btn");

// let number;
// let degree;

// function raiseToDegree(a, b) {
//   if (a % 1 == 0) {
//     result.innerText = a ** b;
//   }
// }

// function numberChange(e) {
//   number = e.target.value;
// }
// function degreeChange(e) {
//   degree = e.target.value;
// }

// function buttonClick() {
//   raiseToDegree(number, degree);
// }

// // EVENTS
// numberInput.addEventListener("change", numberChange);
// degreeInput.addEventListener("change", degreeChange);
// button.addEventListener("click", buttonClick);

//________________________________________________________________

// task 5
// const findMin = (...args) => Math.min(...args);

// console.log("*****TASK-5*****");
// console.log(findMin(12, 14, 4, -4, 0.2));

//________________________________________________________________

// task 6
// const findUnique = (array) => {
//   const duplicates = array.filter(
//     (item, index) => array.indexOf(item) !== index
//   );
//   const isUnique = !duplicates.length;
//   return isUnique;
// };

// console.log("*****TASK-6*****");
// console.log(findUnique([1, 2, 3, 5, 3]));
// console.log(findUnique([1, 2, 3, 5, 11]));

//________________________________________________________________

// task 7
// const DEFAULT_ELEM_COUNT = 1;

// const lastElem = (target = [], elemCount = DEFAULT_ELEM_COUNT) => {
//   const targetLength = target.length;
//   const lastElemIndex = targetLength - 1;

//   if (elemCount === DEFAULT_ELEM_COUNT) {
//     return target[lastElemIndex];
//   }

//   const lastElements = [];

//   let currentIndex = lastElemIndex;
//   let iterations = elemCount;

//   while (iterations) {
//     const element = target[currentIndex];

//     if (!element) break;

//     lastElements.push(target[currentIndex]);

//     currentIndex--;
//     iterations--;
//   }

//   return lastElements;
// };

// console.log("*****TASK-7*****");
// console.log(lastElem([3, 4, 10, -5]));
// console.log(lastElem([3, 4, 10, -5], 2));
// console.log(lastElem([3, 4, 10, -5], 8));

//________________________________________________________________
// task 8

// const mySentence = "i love java script";

// const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
//   letter.toUpperCase()
// );
// console.log(finalSentence);
