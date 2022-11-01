// *********** TASK-1 ***********
const arr = ["Tom", "Sam", "Ray", "Bob"];
const [x, y, , ...z] = arr;

console.log(x);
console.log(y);
console.log(z);

// *********** TASK-2 ***********
const data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};
const {
  names: [, name2, , name4],
  ages: [, age2, , age4],
} = data;

console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);

// *********** TASK-3 ***********
const mul = (...args) =>
  args
    .filter((item) => {
      const c = Number(item);
      const isNumber = typeof c === "number" && !Number.isNaN(c);

      return isNumber && c && typeof item !== "boolean";
    })
    .map((x) => Number(x))
    .reduce((sum, num) => sum + num, 0);

console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));

// *********** TASK-4 ***********
let server = {
  data: 0,
  convertToString: function (callback) {
    callback(() => {
      return this.data + "";
    });
  },
};
let client = {
  server: server,
  result: "",
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function () {
    return (callback) => {
      this.result = callback();
    };
  },
};

client.calc(123);
console.log(client.result);
console.log(typeof client.result);

// *********** TASK-5 ***********
const mapBuilder = (keys, values) => {
  const iterable = [];

  for (let i = 0; i < keys.length; i++) {
    iterable.push([keys[i], values[i]]);
  }

  return new Map(iterable);
};

const keys = [1, 2, 3, 4];
const values = ["div", "span", "b", "i"];
const map = mapBuilder(keys, values);
console.log(map.size);
console.log(map.get(2));
