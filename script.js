// I'm gonna call the ids with getElementById

const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// now I'll use eventListeners

if (addBtn) {
  addBtn.addEventListener("click", () => {
    const task = todoInput.value.trim();
    if (task === "") {
      alert("Please enter a task!");
      return;
    }
    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button"); // creates the Delete button
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      todoList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    todoInput.value = "";
  });

  todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addBtn.click();
    }
  });
}
