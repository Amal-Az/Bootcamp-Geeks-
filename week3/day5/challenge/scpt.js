const tasks = [];
let taskIdCounter = 0;

// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const taskInput = document.getElementById('taskInput');
    const todoForm = document.getElementById('todoForm');
    const listTasksContainer = document.getElementById('listTasks');

    // Add event listener for form submission
    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addTask();
    });

    // Initialize empty state
    showEmptyState();
});

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    // Check if input is not empty
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create task object
    const newTask = {
        task_id: taskIdCounter,
        text: taskText,
        done: false
    };

    // Add to tasks array
    tasks.push(newTask);
    
    // Remove empty state if it exists
    const emptyState = document.querySelector('.empty-state');
    if (emptyState) {
        emptyState.remove();
    }
    
    // Add to DOM
    addTaskToDOM(newTask);
    
    // Clear input and increment counter
    taskInput.value = '';
    taskIdCounter++;
}

// Function to add task to DOM
function addTaskToDOM(task) {
    const listTasksContainer = document.getElementById('listTasks');
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task-item';
    taskDiv.setAttribute('data-task-id', task.task_id);

    taskDiv.innerHTML = `
        <button class="delete-btn" onclick="deleteTask(${task.task_id})">
            <i class="fas fa-times"></i>
        </button>
        <input type="checkbox" class="task-checkbox" onchange="doneTask(${task.task_id})" ${task.done ? 'checked' : ''}>
        <label class="task-label ${task.done ? 'completed' : ''}" onclick="toggleTask(${task.task_id})">${task.text}</label>
    `;

    listTasksContainer.appendChild(taskDiv);
}

// Function to mark task as done/undone
function doneTask(taskId) {
    // Find task in array and toggle done status
    const task = tasks.find(t => t.task_id === taskId);
    if (task) {
        task.done = !task.done;
        
        // Update DOM
        const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
        const label = taskElement.querySelector('.task-label');
        const checkbox = taskElement.querySelector('.task-checkbox');
        
        if (task.done) {
            label.classList.add('completed');
            checkbox.checked = true;
        } else {
            label.classList.remove('completed');
            checkbox.checked = false;
        }
    }
}

// Function to toggle task when clicking on label
function toggleTask(taskId) {
    const checkbox = document.querySelector(`[data-task-id="${taskId}"] .task-checkbox`);
    checkbox.click();
}

// Function to delete a specific task
function deleteTask(taskId) {
    // Remove from tasks array
    const taskIndex = tasks.findIndex(t => t.task_id === taskId);
    if (taskIndex > -1) {
        tasks.splice(taskIndex, 1);
    }

    // Remove from DOM
    const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
    if (taskElement) {
        taskElement.remove();
    }

    // Check if list is empty
    if (tasks.length === 0) {
        showEmptyState();
    }
}

// Function to clear all tasks
function clearAllTasks() {
    if (tasks.length === 0) return;
    
    if (confirm('Are you sure you want to clear all tasks?')) {
        tasks.length = 0; // Clear the array
        const listTasksContainer = document.getElementById('listTasks');
        listTasksContainer.innerHTML = ''; // Clear the DOM
        taskIdCounter = 0; // Reset counter
        showEmptyState();
    }
}

// Function to show empty state
function showEmptyState() {
    const listTasksContainer = document.getElementById('listTasks');
    if (tasks.length === 0) {
        listTasksContainer.innerHTML = '<div class="empty-state">No tasks yet. Add one above!</div>';
    }
}