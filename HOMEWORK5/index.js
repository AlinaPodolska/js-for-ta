// task 1

// const mentor = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web-development",
//   };

//   const propsCount = (obj) => Object.keys(obj).length;

//   console.log(propsCount(mentor));

//________________________________________________________________

//task 2

// const user = {
//     id: "dlkjsfjkashdasyte323",
//     firstName: "James",
//     lastName: "Smith",
//     age: 30,
//     job: "QA Automation",
//   };

//   const showProps = (obj) => Object.keys(obj);
//   const showValues = (obj) => Object.values(obj);

//   console.log(showProps(user));
//   console.log(showValues(user));

//________________________________________________________________

//task 3

// class Person {
//     constructor(name, surname) {
//       this.name = name;
//       this.surname = surname;
//     }

//     showFullName() {
//       return `${this.surname} ${this.name}`;
//     }
//   }

//   class Student extends Person {
//     constructor(name, surname, year) {
//       super(name, surname);
//       this.year = year;
//     }

//     showFullName(middleName) {
//       return `${super.showFullName()} ${middleName}`;
//     }

//     showCourse() {
//       const currentYear = new Date().getFullYear();
//       const currentCourse = currentYear - this.year;

//       return currentCourse;
//     }
//   }

//   const stud1 = new Student("Petro", "Petrenko", 2016);

//   console.log(stud1.showFullName("Petrovych"));
//   console.log(`Current course: ${stud1.showCourse()}`);

//________________________________________________________________

// task 4
// class Worker {
//     #experience = 1.2;

//     constructor(fullName, dayRate, workingDays) {
//       this.fullName = fullName;
//       this.dayRate = dayRate;
//       this.workingDays = workingDays;
//     }

//     set setExp(value) {
//       this.#experience = value;
//       console.log(`New experience: ${this.#experience}`);
//     }

//     get showExp() {
//       return this.#experience;
//     }

//     showSalary() {
//       return this.dayRate * this.workingDays;
//     }

//     showSalaryWithExperience() {
//       return this.showSalary() * this.#experience;
//     }
//   }

//   const logWorkers = (...workers) =>
//     workers?.forEach((worker, index) => {
//       const workerIndex = index + 1;

//       console.log(`-----${workerIndex}-----`);

//       console.log(worker.fullName);
//       console.log(`${worker.fullName} salary: ${worker.showSalary()}`);
//       console.log(
//         `${
//           worker.fullName
//         } salary with experience: ${worker.showSalaryWithExperience()}`
//       );
//       worker.setExp = 1.5;
//       console.log(
//         `${
//           worker.fullName
//         } salary with experience: ${worker.showSalaryWithExperience()}`
//       );

//       console.log();
//     });

//   const logWorkersSortedBySalary = (...workers) => {
//     const sortedBySalary = workers.sort(
//       (a, b) => a.showSalary() - b.showSalary()
//     );

//     console.log("Sorted salary:");

//     sortedBySalary?.forEach((worker) => {
//       console.log(`${worker.fullName}: ${worker.showSalary()}`);
//     });
//   };

//   const worker1 = new Worker("John Johnson1", 23, 24);
//   const worker2 = new Worker("John Johnson2", 15, 18);
//   const worker3 = new Worker("John Johnson3", 43, 30);

//   logWorkers(worker1, worker2, worker3);
//   logWorkersSortedBySalary(worker1, worker2, worker3);

//________________________________________________________________

// task 5
// class GeometricFigure {
//     getArea() {
//       return 0;
//     }

//     toString() {
//       return Object.getPrototypeOf(this).constructor.name;
//     }
//   }

//   class Triangle extends GeometricFigure {
//     constructor(sideA, sideB, sideC) {
//       super();
//       this.sideA = sideA;
//       this.sideB = sideB;
//       this.sideC = sideC;
//     }

//     getArea() {
//       const semiPerimeter = (this.sideA + this.sideB + this.sideC) / 2;

//       return Math.sqrt(
//         semiPerimeter *
//           (semiPerimeter - this.sideA) *
//           (semiPerimeter - this.sideB) *
//           (semiPerimeter - this.sideC)
//       );
//     }
//   }

// ----------------

//   class Square extends GeometricFigure {
//     constructor(side) {
//       super();
//       this.side = side;
//     }

//     getArea() {
//       return this.side * this.side;
//     }
//   }

//   class Circle extends GeometricFigure {
//     constructor(radius) {
//       super();
//       this.radius = radius;
//     }

//     getArea() {
//       return Math.PI * this.radius * this.radius;
//     }
//   }

// -----------------

//   const handleFigures = (figures) => {
//     const result = figures?.reduce((acc, figure, index) => {
//       const isInstanceOfGeometricFigure = figure instanceof GeometricFigure;
//       const figureName = figure.toString();
//       const figureArea = figure.getArea();

//       if (!isInstanceOfGeometricFigure) {
//         console.log(`${figureName} is not an instance of GeometricFigure`);
//       }

//       acc[index] = `Geometric figure: ${figureName} - area: ${figureArea}`;

//       return acc;
//     }, []);

//     return result;
//   };

// ------------------

//   const figures = [new Triangle(14, 23, 14), new Square(32), new Circle(75)];

//   console.log(handleFigures(figures));
