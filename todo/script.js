document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const taskText = document.getElementById('newTask').value;
    if (taskText === '') return;
  
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskText;
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    li.appendChild(deleteButton);
  
    taskList.appendChild(li);
  
    document.getElementById('newTask').value = '';
  });
  
  document.getElementById('taskList').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-button')) {
      e.target.parentElement.remove();
    }
  });
  