const DELAY_MS = 2000;

const delay = (fn, ms) => {
  let timer;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, ms);
  };
};

document.getElementById("start").addEventListener("click", () => {
  const windowInitialFeatures = "popup,width=300,height=300";
  const newWindow = window.open("", "_blank", windowInitialFeatures);

  delay(() => {
    newWindow.resizeTo(500, 500);
    delay(() => {
      newWindow.moveTo(200, 200);
      delay(() => {
        newWindow.close();
      }, DELAY_MS)();
    }, DELAY_MS)();
  }, DELAY_MS)();
});
