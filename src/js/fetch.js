import articleaTemplate from '../templates/articles.hbs';
import axios from 'axios';
console.log('Hello fetch');

const fetchDivRef = document.querySelector('.js-fetch');
const btn1Ref = document.querySelector('#js-btn1');
const btnRef = document.querySelector('#js-btn');

btn1Ref.addEventListener('click', onClickArticles);
btnRef.addEventListener('click', onClickArticles);

let page = 1;
//==================fetch===============//
// function onClickArticles() {
//   const url = `https://newsapi.org/v2/everything?q=football&language=ru&pageSize=6&page=${page}`;
//   const apiKey = 'e68dce1f1c6e4e2da21f057bdb3efccb';

//   const options = {
//     headers: {
//       Authorization: apiKey,
//     },
//   };

//   fetch(url, options)
//     .then(response => response.json())
//     .then(({ articles }) => {
//       console.log(articles);
//       const markUp = articleaTemplate(articles);
//       // console.log(markUp);
//       fetchDivRef.insertAdjacentHTML('beforeend', markUp);
//       btnRef.classList.add('hidden');
//       btnRef.classList.remove('nohidden');
//       page += 1;
//       console.log(page);
//       window.scrollTo({
//         top: document.documentElement.offsetHeight, //прокрутка на всю длину документа
//         behavior: 'smooth',
//       });
//     })
//     .catch(console.log);

// }
//==================axios===============//
// axios.defaults.baseURL = 'https://newsapi.org/v2';
function onClickArticles() {
  const url = `https://newsapi.org/v2/everything?q=football&language=ru&pageSize=6&page=${page}`;
  const apiKey = 'e68dce1f1c6e4e2da21f057bdb3efccb';

  const options = {
    headers: {
      Authorization: apiKey,
    },
  };

  axios(url, options)
    // .then(res => console.log(res))
    // .then(response => response.json()) // в axios response.json() уже сделан
    // .then(({ articles }) => {
    .then(({ data }) => {
      // console.log(data.articles);
      const articles = data.articles;
      const markUp = articleaTemplate(articles);
      // console.log(markUp);
      fetchDivRef.insertAdjacentHTML('beforeend', markUp);
      btnRef.classList.add('hidden');
      btnRef.classList.remove('nohidden');
      page += 1;
      console.log(page);
      window.scrollTo({
        top: document.documentElement.offsetHeight, //прокрутка на всю длину документа
        behavior: 'smooth',
      });
    })
    .catch(console.log);
}
