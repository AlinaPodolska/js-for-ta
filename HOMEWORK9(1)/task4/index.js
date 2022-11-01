const SELECTION_LIMIT = 3;
const checkboxes = $("input");

const isSelectionLimitReached = (checkboxes) =>
  Array.from(checkboxes)
    .map((chBox) => chBox.checked)
    .filter((checked) => checked).length === SELECTION_LIMIT;

checkboxes.on("change", () => {
  if (isSelectionLimitReached(checkboxes)) {
    checkboxes.prop("disabled", true);
  }
});
