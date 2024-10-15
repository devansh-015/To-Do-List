function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;
    
    li.addEventListener('click', function() {
        this.classList.toggle('completed');
    });

    document.getElementById('task-list').appendChild(li);

    taskInput.value = '';
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}
