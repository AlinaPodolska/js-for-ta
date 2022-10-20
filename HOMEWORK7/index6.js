const widthOutput = document.getElementById("width");
const heightOutput = document.getElementById("height");

// initial values set
widthOutput.innerText = window.innerWidth;
heightOutput.innerText = window.innerHeight;

window.addEventListener("resize", (e) => {
  widthOutput.innerText = e.target.innerWidth;
  heightOutput.innerText = e.target.innerHeight;
});
