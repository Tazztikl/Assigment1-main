'use strict';
// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector('ul');

for (const todo of todoList) {
  let checked = '';
  if (todo.completed) {
    // lisätään checked
    checked = 'checked';
  }

  const html = `<li>
    <input type="checkbox" id="todo-${todo.id}" ${checked}>
    <label for="todo-${todo.id}">${todo.task}</label>
  </li>`;
  ul.insertAdjacentHTML('beforeend', html);
}
