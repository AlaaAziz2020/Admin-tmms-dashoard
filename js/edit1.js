const paragraph = document.getElementById("edit2");
const edit_button2 = document.getElementById("edit-button2");



edit_button2.addEventListener("click", function () {
  paragraph.contentEditable = true;

  paragraph.style.backgroundColor = "#BFBFBF";
});




