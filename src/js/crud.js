console.log('Hello CRUD');
const listRef = document.querySelector('.todos-list');
const inputRef = document.querySelector('.input-crud');
const btnRef = document.querySelector('#js-btn1');

const getTodos = () => {
  // fetch('http://localhost:3000/todos').then(res =>
  return fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
    res.json().then(console.log),
  );
};
// getTodos();
// console.log('Hello getTodos', getTodos());
const postToAdd = {
  author: 'Madfghjkngo',
  content: 'CRfghgj tyejyk tyujyfkj awesome',
};
const options = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  body: JSON.stringify(postToAdd),
};
const postTodos = () => {
  return fetch(
    'https://jsonplaceholder.typicode.com/posts',
    options,
  ).then(res => res.json().then(console.log));
};
postTodos();

///===================
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
function randomColor(arr) {
  return arr[randomIntegerFromInterval(arr.length - 1)];
}

function randomIntegerFromInterval(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/*========Решение путем добавления(удаления) на кнопки слушателей EventListener=======*/
// let intervalId = null;

// const startRef = document.querySelector('#start');
// const stopRef = document.querySelector('#stop');
// const bodyRef = document.querySelector('body');
// const ccc = randomIntegerFromInterval(0, colors.length);

// const newColor = () =>
//   (bodyRef.style.backgroundColor =
//     colors[randomIntegerFromInterval(0, colors.length)]);

// btnRef.addEventListener('click', () => {
//   console.log('click');
//   let intervalId = setInterval(() => newColor(), 1000);
// });

// btnRef.addEventListener('click', () => {
//   console.log('click');
//   let intervalId = setInterval(() => {
//     newColor();
//   }, 1000);
// });

// function startColorSwitchHendler() {
//   // startRef.removeEventListener('click', startColorSwitchHendler);
//   // stopRef.addEventListener('click', stoptColorSwitchHendler);
//   // bodyRef.style.backgroundColor = randomColor(colors);
//   // console.log(randomColor(colors));

// }
//  intervalId = setInterval(() => {
//    bodyRef.style.backgroundColor = randomColor(colors);
//  }, 1000);
