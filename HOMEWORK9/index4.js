const checkboxesWrapper = document.getElementById("checkboxes");
const checkboxes = document.getElementsByTagName("input");

const getNumOfCheckedCheckboxes = (checkboxes) =>
  Array.from(checkboxes)
    .map((chBox) => chBox.checked)
    .filter((checked) => checked).length;

const disableCheckboxes = (checkboxes) =>
  Array.from(checkboxes).forEach((checkbox) => {
    checkbox.disabled = true;
  });

checkboxesWrapper.addEventListener("click", (e) => {
  const tagName = e.target.tagName;

  if (tagName === "LABEL" || tagName === "INPUT") {
    const numberOfChecked = getNumOfCheckedCheckboxes(checkboxes);

    if (numberOfChecked >= 3) disableCheckboxes(checkboxes);
  }
});
