console.log('Hello CRUD');
const listRef = document.querySelector('.todos-list');
const inputRef = document.querySelector('.input-crud');
const btnRef = document.querySelector('#js-btn1');

const getTodos = () => {
  fetch('http://localhost:3000/todos').then(res=>res.json().then(console.log));
};
getTodos()