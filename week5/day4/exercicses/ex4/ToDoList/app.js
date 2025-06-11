import { TodoList } from './todo.js';

const myTodo = new TodoList();

myTodo.addTask('Faire les courses');
myTodo.addTask('Apprendre Node.js');
myTodo.addTask('Lire un livre');

myTodo.markComplete(2);

myTodo.listTasks();
