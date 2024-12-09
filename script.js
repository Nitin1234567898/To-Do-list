const taskInput = document.getElementById('taskinput');
const addButton = document.getElementById('addButton');
const taskContainer = document.getElementById('taskContainer');

function addTask() {
  const taskName = taskInput.value.trim();

  if (taskName === '') {
    alert("Please enter a task!");
    return;
  }

  const taskDiv = document.createElement('div');
  taskDiv.className = 'task';

  // Checkbox for marking task as done
  const doneCheckbox = document.createElement('input');
  doneCheckbox.type = 'checkbox';
  doneCheckbox.addEventListener('change', () => {
    taskDiv.remove();
  });

  // Text for the task
  const taskText = document.createElement('span');
  taskText.textContent = taskName;

  // Append elements to task container
  taskDiv.appendChild(doneCheckbox);
  taskDiv.appendChild(taskText);
  taskContainer.appendChild(taskDiv);

  // Clear input
  taskInput.value = '';
}

// Event listeners
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
