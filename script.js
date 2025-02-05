// variabeln festlegen
const inputfield = document.getElementById("inputfield");
const addButton = document.getElementById("addButton");
const taskListContainer = document.getElementById("taskListContainer");

//Event on click
function addList() {
  //Elemene erstellen
  const taskList = document.createElement("div");
  taskList.id = "taskList";

  const checklist = document.createElement("input");
  checklist.type = "radio";
  checklist.id = "checklist";

  const listField = document.createElement("p");
  listField.id = "listField";
  listField.htmlFor = "checklist";
  listField.textContent = inputfield.value;

  const deleteButton = document.createElement("button");
  deleteButton.id = "deleteButton";

  const img = document.createElement("img");
  img.src = "Bilder/image.png";

  // Elemente zu jeweilien komponenten hinzufügen
  taskList.appendChild(checklist);
  taskList.appendChild(listField);
  deleteButton.appendChild(img);
  taskList.appendChild(deleteButton);
  taskListContainer.appendChild(taskList);

  //input field leeren
  inputfield.value = "";

  // Event on click deleteButton
  deleteButton.addEventListener("click", function () {
    taskList.remove();
  });

  //Bei einer leeren Liste
  const emtylist = listField.textContent;
  if (emtylist === "") {
    alert("Bitte eine Task eingeben!");
    taskList.remove();
    return;
  }

  //function on click To_Do streichen
  function strikethrough(checklist, listField) {
    checklist.addEventListener("click", function () {
      if (listField.style.textDecoration === "line-through") {
        listField.style.textDecoration = "none";
        checklist.checked = false;
      } else {
        listField.style.textDecoration = "line-through";
      }
    });
  }
  strikethrough(checklist, listField);
}

addButton.addEventListener("click", addList);

inputfield.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addList();
  }
});
