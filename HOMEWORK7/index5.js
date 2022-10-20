const btn = document.getElementById("btn");
const logs = document.getElementById("logs");

const mssgsByEventType = {
  click: "I was pressed!",
  mouseenter: "Mouse on me!",
  mouseleave: "Mouse is not on me!",
};

const addLogMssgByEvent = (e) => {
  const p = document.createElement("p");
  p.innerText = mssgsByEventType[e.type];
  logs.appendChild(p);
};

btn.addEventListener("click", addLogMssgByEvent);
btn.addEventListener("mouseenter", addLogMssgByEvent);
btn.addEventListener("mouseleave", addLogMssgByEvent);
