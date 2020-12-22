import articleaTemplate from '../templates/articles.hbs';
console.log('Hello fetch');

const fetchDivRef = document.querySelector('.js-fetch');
const btn1Ref = document.querySelector('#js-btn1');
const btnRef = document.querySelector('#js-btn');

btn1Ref.addEventListener('click', onClickArticles);
btnRef.addEventListener('click', onClickArticles);

let page = 1;

function onClickArticles() {
  const url = `https://newsapi.org/v2/everything?q=football&language=ru&pageSize=10&page=${page}`;
  const apiKey = 'e68dce1f1c6e4e2da21f057bdb3efccb';

  const options = {
    headers: {
      Authorization: apiKey,
    },
  };
  fetch(url, options)
    .then(response => response.json())
    .then(({ articles }) => {
      console.log(articles);
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
