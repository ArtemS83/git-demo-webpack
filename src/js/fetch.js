import articleaTemplate from '../templates/articles.hbs';
// console.log('Hello fetch');

const fetchDivRef = document.querySelector('.js-fetch');
const btnRef = document.querySelector('.hidden');

btnRef.addEventListener('click', onClickArticles);

const url = 'https://newsapi.org/v2/everything?q=football&language=ru';
const apiKey = 'e68dce1f1c6e4e2da21f057bdb3efccb';

const options = {
  headers: {
    Authorization: apiKey,
  },
};
function onClickArticles() {
  fetch(url, options)
    .then(response => response.json())
    .then(({ articles }) => {
      console.log(articles);
      const markUp = articleaTemplate(articles);
      // console.log(markUp);
      fetchDivRef.insertAdjacentHTML('beforeend', markUp);
    })
    .catch(console.log);
}
