const namesSelect = document.getElementById("names");
const deleteBtn = document.getElementById("deleteBtn");

let itemToDelete;

namesSelect.addEventListener("change", (e) => {
  itemToDelete = e.target.value;
});

deleteBtn.addEventListener("click", () => {
  const deleteItemIndex = Array.from(namesSelect.children).findIndex(
    (item) => item.value === itemToDelete
  );

  namesSelect.children[deleteItemIndex]?.remove();
  itemToDelete = undefined;
});
