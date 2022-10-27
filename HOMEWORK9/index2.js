const head = document.querySelectorAll(".head");
const inner = document.querySelectorAll(".inner");

Array.from(head).forEach((h2) => {
  h2.style.backgroundColor = "green";
});

Array.from(inner).forEach((span) => {
  span.style.fontSize = "35px";
});
