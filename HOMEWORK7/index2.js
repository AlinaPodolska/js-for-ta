const text = document.querySelector("#text");
const btn = document.querySelector("#btn");

const changeCSS = () => {
  const textStyles = text.style;

  textStyles.color = "orange";
  textStyles.fontSize = "20px";
  textStyles.fontFamily = "Comic Sans MS";
};

btn.addEventListener("click", changeCSS);
