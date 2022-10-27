const logTaskResult = (taskNumber, logHandler) => {
  console.log(`******** TASK-${taskNumber} ********`);
  logHandler();
  console.log();
  console.log();
};

// ******** TASK-1 ********
const upperCase = (input) => {
  const isCapitalized = /^[A-Z]/.test(input);
  const logMessage = `"${input}" ${
    isCapitalized ? "starts" : "does not start"
  } with uppercase character`;

  return logMessage;
};

logTaskResult(1, () => {
  console.log(upperCase("regexp"));
  console.log(upperCase("RegExp"));
});

// ******** TASK-2 ********
const checkEmail = (email) => {
  const emailRegexp = /^[\w-]+@([\w-]+\.)+[\w-]{2,}$/g;

  return emailRegexp.test(email);
};

logTaskResult(2, () => {
  console.log(checkEmail("test@gmail.com"));
  console.log(checkEmail("testgmail.com"));
});

// ******** TASK-3 ********
const getBLetters = (acc, item, index) => {
  const b = item.match(/b+/gi);
  acc[index] = b;

  return acc;
};

const getDLetters = (item) => {
  const itemLength = item.length;
  const dLetter = item[itemLength - 1];

  return dLetter;
};

const checkX = (str) => {
  const matches = str.match(/d[b]+d/gi);
  const bLetters = matches?.reduce(getBLetters, []);
  const dLetters = matches?.map(getDLetters);

  console.log({ matches, bLetters, dLetters });
};

logTaskResult(3, () => {
  checkX("cdbBDbsdbbbbbbdbz");
});

// ******** TASK-4 ********
const swapWords = (str) => str.replace(/(\w+)\s+(\w+)/i, "$2, $1");

logTaskResult(4, () => {
  console.log(swapWords("Java Script"));
});

// ******** TASK-5 ********
const validateCreditCardNumber = (cardNumber) =>
  /^(\d{4})-(\d{4})-(\d{4})-(\d{4})$/.test(cardNumber);

logTaskResult(5, () => {
  console.log(validateCreditCardNumber("9999-9999-9999-9999"));
  console.log(validateCreditCardNumber("9999-999-999-9999"));
});

// ******** TASK-6 ********
const validateEmail = (email) => {
  const pattern = /^[a-z0-9]+[-|_]\w+@\w+\.\w{2,}$/i;
  const isEmailValid = pattern.test(email);

  return `"${email}" is${isEmailValid ? " " : " not "}correct!`;
};

logTaskResult(6, () => {
  console.log(validateEmail("my_mail@gmail.com"));
  console.log(validateEmail("#my_mail@gmail.com"));
  console.log(validateEmail("my_ma--il@gmail.com"));
  console.log(validateEmail("-my_mail@gmail.com"));
});

// ******** TASK-7 ********
const checkLogin = (login) => {
  const pattern = /^[A-Z][\w]{1,9}$/i;
  const isLoginValid = pattern.test(login);
  const numbers = login.match(/\d+/g);

  return {
    login,
    isValid: isLoginValid,
    numbersInLogin: numbers,
  };
};

logTaskResult(7, () => {
  console.log(checkLogin("ee1.1ret3"));
  console.log(checkLogin("ee1*1ret3"));
  console.log(checkLogin("arc2022"));
  console.log(checkLogin("2arc"));
  console.log(checkLogin("nickname"));
});
