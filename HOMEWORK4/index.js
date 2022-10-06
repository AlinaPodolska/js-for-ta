// task 1

// function calcRectangleArea(width, height) {
//   if (isNaN(width) || isNaN(height)) {
//     throw "Parameter is not a number";
//   }
//   return width * height;
// }

// try {
//   calcRectangleArea(10, "asf");
// } catch (error) {
//   console.log(error);
// }

//________________________________________________________________

// task 2

// const checkAge = () => {
//   let age = prompt("Enter your age:", "");

//   if (!age) throw new Error("The field is empty! Please enter your age");
//   if (!Number(age)) throw new Error("Incorrect value! Please enter your age");
//   if (age < 14) throw new Error("Incorrect value! Your age is not suitable");

//   return age;
// };

// try {
//   let result = checkAge();
//   console.log("result", result);
// } catch (err) {
//   console.log(err.name, err.message);
// }

//________________________________________________________________
// task 3

// class MonthException {
//   constructor(message) {
//     this.message = message;
//     this.name = "MonthException";
//   }
// }
// function showMonthName(month) {
//   month -= 1;
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   if (months[month] !== undefined) {
//     return months[month];
//   } else {
//     throw new MonthException("Incorrect month number");
//   }
// }

// try {
//   const myMonth = 14;
//   console.log(showMonthName(myMonth));
// } catch (error) {
//   console.error(error.name, error.message);
// }

//________________________________________________________________
// task 4

// const validationId = (id) => id > 0;

// const showUser = (id) => {
//   if (!validationId(id)) {
//     throw new Error(`Error: ID must not be negative: ${id}`);
//   }

//   return { id };
// };

// const showUsers = (arrayOfId) => arrayOfId.map((id) => showUser(id));

// try {
//   const result = showUser(5);
//   //   const result = showUser(-5);
//   //   // const result = showUsers([1,5,8,6]);
//   //   // const result = showUsers([1,5,-8,6]);
//   console.log(result);
// } catch (exception) {
//   console.log(exception.message);
// }
