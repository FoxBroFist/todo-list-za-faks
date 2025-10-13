

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Prosim, vnesi nalogo!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Izbriši';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => li.remove());

    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
}