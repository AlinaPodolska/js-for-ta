// modal ----------------------
const modal = document.querySelector("#modal");
const modalClose = document.querySelector("#modalClose");
const modalBodyContent = document.querySelector("#modalBodyContent");

const toggleModal = () => {
  if (!modal.className.includes("active")) {
    modal.classList.add("active");
    return;
  }

  modalBodyContent.innerHTML = null;
  modal.classList.remove("active");
};

modalClose.addEventListener("click", toggleModal);

// ********* task-1 *********
const divFirst = document.getElementById("test");
const divSecond = document.querySelector("#test");

divFirst.innerText = "Last";
divSecond.innerText = "Last";

// ********* task-2 *********
const secondTaskBtn = document.querySelector("#secondTaskBtn");
const img = document.querySelector(".image");

img.src = "./img/dog.jpeg";

secondTaskBtn.addEventListener("click", () => {
  modalBodyContent.appendChild(img.cloneNode());
  toggleModal();
});

// ********* task-3 *********
const paragraphs = document.getElementById("text").querySelectorAll("p");

paragraphs.forEach((p, index) =>
  console.log(`Selector text ${index}: ${p.innerText}`)
);

// ********* task-4 *********
const list = document.querySelector("#listTask4");
const fourthTaskBtn = document.querySelector("#fourthTaskBtn");

const getTextFromListItemsByIndexes = (list, indexes) =>
  indexes.map((index) => list?.children[index]?.innerText);

fourthTaskBtn.addEventListener("click", () => {
  const lastElementIndex = list.children.length - 1;
  const output = getTextFromListItemsByIndexes(list, [
    0,
    lastElementIndex,
    1,
    4,
    3,
  ]);

  modalBodyContent.innerText = output;
  toggleModal();
});

// ********* task-5 *********
const task5Wrapper = document.getElementById("task5Wrapper");
const paragraphsWrapper = document.querySelector("#myDiv");
const fifthTaskBtn = document.querySelector("#fifthTaskBtn");

fifthTaskBtn.addEventListener("click", () => {
  // elements
  const h1 = task5Wrapper.getElementsByTagName("h1")[0];

  const firstParagraph = paragraphsWrapper.children[0];
  const secondParagraph = paragraphsWrapper.children[1];
  const thirdParagraph = paragraphsWrapper.children[2];
  const fourthParagraph = paragraphsWrapper.children[3];

  const myList = task5Wrapper.querySelector("#myList");

  const span = task5Wrapper.getElementsByTagName("span")[0];

  // styling
  h1.style.backgroundColor = "green";

  firstParagraph.style.fontWeight = "bold";
  secondParagraph.style.color = "red";
  thirdParagraph.style.textDecoration = "underline";
  fourthParagraph.style.fontStyle = "italic";

  myList.style.listStyle = "none";
  myList.style.display = "flex";

  span.style.visibility = "hidden";
});

// ********* task-6 *********
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const sixthTaskBtn1 = document.querySelector("#sixthTaskBtn1");
const sixthTaskBtn2 = document.querySelector("#sixthTaskBtn2");

sixthTaskBtn1.addEventListener("click", () => {
  const valueForFirstInput = prompt("Enter value for the first input");
  const valueForSecondInput = prompt("Enter value for the second input");

  input1.value = valueForFirstInput;
  input2.value = valueForSecondInput;
});

sixthTaskBtn2.addEventListener("click", () => {
  const val1 = input1.value;
  const val2 = input2.value;

  input1.value = val2;
  input2.value = val1;
});

// ********* task-7 *********
const task7Wrapper = document.querySelector("#task7Wrapper");
const seventhTaskBtn = document.querySelector("#seventhTaskBtn");

seventhTaskBtn.addEventListener("click", () => {
  const main = document.createElement("main");
  main.className = "mainClass check item";

  const div = document.createElement("div");
  div.id = "myDiv";

  const p = document.createElement("p");
  p.innerText = "First paragraph";

  div.appendChild(p);
  main.appendChild(div);

  task7Wrapper.appendChild(main);
});
