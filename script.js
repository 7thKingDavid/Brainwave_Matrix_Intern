// Flipping animation
    const getStartedBtn = document.getElementById('get-started-btn');
    if (getStartedBtn) {
      getStartedBtn.addEventListener('click', () => {
        const introPage = document.getElementById('intro-page');
        if (introPage) {
          introPage.classList.add('flipped');
  
          // Redirect to the main page
          setTimeout(() => {
            window.location.href = 'todo.html';
          }, 800); // Transition duration
        }
      });
    }
  
    // Todo App functionality
    const todoInput = document.getElementById("todo-input");
    const addBtn = document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");
  
    if (addBtn) {
      addBtn.addEventListener("click", () => {
        const task = todoInput.value.trim();
        if (task === "") {
          alert("Please enter a task!");
          return;
        }
  
        // Create the list item
        const li = document.createElement("li");
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.marginBottom = "10px";
  
        // Add a task completion circle
        const completeCircle = document.createElement("span");
        completeCircle.style.width = "20px";
        completeCircle.style.height = "20px";
        completeCircle.style.border = "2px solid #000";
        completeCircle.style.borderRadius = "50%";
        completeCircle.style.marginRight = "10px";
        completeCircle.style.cursor = "pointer";
        completeCircle.style.display = "inline-block";
  
        // Functionality to toggle completion
        completeCircle.addEventListener("click", () => {
          if (completeCircle.style.backgroundColor === "green") {
            completeCircle.style.backgroundColor = "";
            li.style.textDecoration = "none";
          } else {
            completeCircle.style.backgroundColor = "green";
            li.style.textDecoration = "line-through";
          }
        });
  
        // Add the task text
        const taskText = document.createElement("span");
        taskText.textContent = task;
        taskText.style.flexGrow = "1";
  
        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.marginLeft = "10px";
  
        // Delete button functionality
        deleteBtn.addEventListener("click", () => {
          todoList.removeChild(li);
        });
  
        // Append elements to the list item
        li.appendChild(completeCircle);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
  
        // Append list item to the todo list
        todoList.appendChild(li);
  
        // Clear the input field
        todoInput.value = "";
      });
  
      // Enter key functionality
      todoInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          addBtn.click();
        }
      });
    }
  
  