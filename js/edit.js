const paragraph = document.getElementById("edit");
const edit_button = document.getElementById("edit-button");
const save_button = document.getElementById("save");
const delete_button = document.getElementById("delete");



edit_button.addEventListener("click", function () {
  paragraph.contentEditable = true;

  paragraph.style.backgroundColor = "#BFBFBF";
});

save_button.addEventListener("click", function () {
  paragraph.contentEditable = false;
  paragraph.style.backgroundColor = "#BFBFBF";
  alert("save");
});







