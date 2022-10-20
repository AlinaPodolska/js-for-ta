const blueBtn = document.getElementById("blue");
const pinkBtn = document.getElementById("pink");
const brownBtn = document.getElementById("brown");
const link = document.getElementById("yellow");

const setBgColorById = (id) => (document.body.style.backgroundColor = id);
const eventHandler = (e) => setBgColorById(e.target.id);

blueBtn.addEventListener("click", eventHandler);
pinkBtn.addEventListener("dblclick", eventHandler);

brownBtn.addEventListener("mousedown", eventHandler);
brownBtn.addEventListener("mouseup", () => setBgColorById("white"));

link.addEventListener("mouseenter", eventHandler);
link.addEventListener("mouseleave", () => setBgColorById("white"));
