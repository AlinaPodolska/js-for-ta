// // -------------- task1 --------------
const getPromise = (message, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(message), delay));

getPromise("test promise", 2000).then((msg) => console.log(msg));

// -------------- task2 --------------
const calcArrProduct = (arr) =>
  new Promise((resolve, reject) => {
    const isAllNumbers = arr.every(Number.isInteger);

    if (isAllNumbers) {
      const productOfArr = arr.reduce((product, num) => {
        if (product === 0) return num;
        return product * num;
      }, 0);
      resolve(productOfArr);
    } else {
      reject("Error! Incorrect array!");
    }
  });

calcArrProduct([3, 4, 5])
  .then((product) => console.log(product))
  .catch((err) => console.log(err));

calcArrProduct([5, "user2", 7, 12])
  .then((product) => console.log(product))
  .catch((err) => console.log(err));

// -------------- task3 --------------
const showNumbers = () => {
  let accumulatedDelay = 0;

  for (let i = 0; i < 10; i++) {
    const time = Math.floor(Math.random() * 4000);
    getPromise(i, accumulatedDelay + time).then((num) => console.log(num));
    accumulatedDelay += time;
  }
};

showNumbers();

// -------------- task4 --------------
const showNumbersAsync = async () => {
  for (let i = 0; i < 10; i++) {
    const time = Math.floor(Math.random() * 4000);
    const n = await getPromise(i, time);
    console.log(n);
  }
};

showNumbersAsync();
