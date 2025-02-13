// variabeln festlegen
const inputfield = document.getElementById("inputfield");
const addButton = document.getElementById("addButton");
const taskListContainer = document.getElementById("taskListContainer");
const dialog = document.getElementById("dialogWindow");
const deleteDialog = document.getElementById("deleteDialog");
const cancelDialog = document.getElementById("cancelDialog");

let currentTask = null;
function addList() {
  const taskInput = inputfield.value.trim();

  if (taskInput === "") {
    alert("Bitte einen Task eingeben!");
    return;
  }

  //Elemene erstellen
  const taskList = document.createElement("div");
  taskList.id = "taskList";

  const checklist = document.createElement("input");
  checklist.type = "radio";
  checklist.id = "checklist";

  const listField = document.createElement("p");
  listField.id = "listField";
  listField.htmlFor = "checklist";
  listField.textContent = taskInput;

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

  //Inputfeld leeren
  inputfield.value = "";

  //Task in Array hinzufügen

  //Event für Löschen einer Task
  deleteButton.addEventListener("click", function () {
    currentTask = taskList;
    dialog.showModal();
  });

  //Event für Löschen Bestätigen
  deleteDialog.onclick = function () {
    dialog.close();
    if (currentTask) {
      currentTask.remove();
      currentTask = null;
    }
  };

  //Event für Abbrechen
  cancelDialog.addEventListener("click", function () {
    dialog.close();
  });

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
