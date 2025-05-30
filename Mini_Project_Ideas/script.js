let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  const filter = document.getElementById('filterInput').value.toLowerCase();

  tasks
    .filter(task => task.toLowerCase().includes(filter))
    .forEach((task, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<span>${task}</span> 
                      <button onclick="removeTask(${index})">❌</button>`;
      taskList.appendChild(li);
    });
}

function addTask() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  if (task) {
    tasks.push(task);
    input.value = '';
    saveTasks();
    renderTasks();
  }
}

function removeTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function filterTasks() {
  renderTasks();
}

renderTasks();
