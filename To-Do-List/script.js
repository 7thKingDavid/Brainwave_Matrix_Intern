// loading functionality with the fLlipping animation
const getStartedBtn = document.getElementById('get-started-btn');
const loadingSpinner = document.getElementById('loading-spinner');

if (getStartedBtn) {
    getStartedBtn.addEventListener('click', () => {
        loadingSpinner.style.display = 'flex';

        setTimeout(() => {
            window.location.href = 'todo.html';
        }, 400); // 4 seconds loading
    });
}
  
    // Todo App functionality
   // Grab your elements
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const form = document.getElementById("todo-form"); // Assuming a form element
const emptyState = document.getElementById("empty-state");

// Prevent form submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop the form from reloading the page
});

// Function to toggle the empty state visibility
const toggleEmptyState = () => {
  if (todoList.children.length === 0) {
    emptyState.style.display = "flex";
  } else {
    emptyState.style.display = "none";
  }
};

// Initial empty state
toggleEmptyState();

// Function to add a task
const addTask = () => {
  const task = todoInput.value.trim(); // Get and trim the input value
  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  // Create the list item
  const li = document.createElement("li");

  // Add a task completion circle
  const completeCircle = document.createElement("span");
  completeCircle.style.width = "20px";
  completeCircle.style.height = "20px";
  completeCircle.style.border = "2px solid #000";
  completeCircle.style.borderRadius = "50%";
  completeCircle.style.marginRight = "10px";
  completeCircle.style.cursor = "pointer";
  completeCircle.style.display = "inline-block";

  // Add the task text
  const taskText = document.createElement("span");
  taskText.textContent = task;

  // Functionality to toggle completion
  completeCircle.addEventListener("click", () => {
    if (completeCircle.style.backgroundColor === "green") {
      completeCircle.style.backgroundColor = "";
      taskText.style.textDecoration = "none";
    } else {
      completeCircle.style.backgroundColor = "green";
      taskText.style.textDecoration = "line-through";
    }
  });

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "10px";

  // Delete button functionality
  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(li);
    toggleEmptyState();
  });

  // Append elements to the list item
  li.appendChild(completeCircle);
  li.appendChild(taskText);
  li.appendChild(deleteBtn);

  // Append list item to the todo list
  todoList.appendChild(li);

  // Clear the input field
  todoInput.value = "";

  // Update empty state
  toggleEmptyState();
};

// Add task on button click
addBtn.addEventListener("click", addTask);

// Add task on pressing Enter
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // Prevent form submission
    addTask();
  }
});

  