console.log('crud-axios-async');
const refs = {
  signupBtn: document.querySelector('.signup'),
  loginBtn: document.querySelector('.login'),
  logoutBtn: document.querySelector('.logout'),
  signupForm: document.querySelector('.form-signup'),
  loginForm: document.querySelector('.form-login'),
  registrationBtn: document.querySelector('.form-signup button'),
  textError: document.querySelector('.span-error'),
  userName: document.querySelector('.user-info .name'),
  userEmail: document.querySelector('.user-info .email'),
  contentForm: document.querySelector('.content'),
  form: document.querySelector('.form'),
  listContacs: document.querySelector('.js-list'),
};

const BASE_URL = 'https://goit-phonebook-api.herokuapp.com';
let Token = '';
// let contacts = [];

//==================sign up======================//

refs.signupBtn.addEventListener('click', onSingUp);

function onSingUp() {
  // console.log('onSingUp');
  refs.signupBtn.classList.add('is-hidden');
  refs.loginBtn.classList.add('is-hidden');
  refs.signupForm.classList.remove('is-hidden');
  refs.signupForm.addEventListener('submit', onRegistrationUser);
}

function onRegistrationUser(e) {
  e.preventDefault();
  refs.textError.classList.add('is-hidden');
  const userName = e.currentTarget.elements.userName.value;
  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;
  const signupData = {
    name: userName,
    email,
    password,
  };
  // console.log('signupData', signupData); //{name: "userName", email: "email@gmail.com", password: "password"}

  onGetDataUser(signupData);
}

function onGetDataUser(dataValue) {
  fetchSignup(dataValue)
    .then(data => {
      Token = data.token;
      // console.log('Token', Token, data);
      refs.userName.textContent = data.user.name;
      refs.userEmail.textContent = data.user.email;
      refs.signupForm.reset();
      refs.textError.classList.add('is-hidden');
      refs.signupForm.classList.add('is-hidden');
      refs.contentForm.classList.remove('is-hidden');
      refs.logoutBtn.classList.remove('is-hidden');
    })
    .catch(error => console.log(error));
}

function fetchSignup(data) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  return fetch(`${BASE_URL}/users/signup`, options).then(res => {
    if (res.status === 400) {
      refs.textError.classList.remove('is-hidden');

      return;
    } else {
      return res.json();
    }
  });
}

//=================LOGIN===============//
refs.loginBtn.addEventListener('click', onLogin);

function onLogin() {
  console.log('onLogin');
  refs.signupBtn.classList.add('is-hidden');
  refs.loginBtn.classList.add('is-hidden');
  refs.loginForm.classList.remove('is-hidden');
  refs.loginForm.addEventListener('submit', onLoginUser);
}

function onLoginUser(e) {
  e.preventDefault();
  refs.textError.classList.add('is-hidden');
  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;
  const loginData = {
    email,
    password,
  };
  // console.log('signupData', signupData); //{name: "userName", email: "email@gmail.com", password: "password"}

  onLoginDataUser(loginData);
}
function onLoginDataUser(dataValue) {
  fetchLogin(dataValue)
    .then(data => {
      Token = data.token;
      // console.log('Token', Token, data);
      refs.userName.textContent = data.user.name;
      refs.userEmail.textContent = data.user.email;
      refs.loginForm.reset();
      refs.textError.classList.add('is-hidden');
      refs.loginForm.classList.add('is-hidden');
      refs.contentForm.classList.remove('is-hidden');
      refs.logoutBtn.classList.remove('is-hidden');
      getContacts(Token); //
    })
    .catch(error => console.log(error));
}
//
function fetchLogin(data) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  return fetch(`${BASE_URL}/users/login`, options).then(res => {
    if (res.status === 400) {
      refs.textError.classList.remove('is-hidden');
      return;
    } else {
      return res.json();
    }
  });
}

//=================getContacs===============//
function getContacts(tokenValue) {
  console.log('getContacts-Token');
  git;
  fetchСontacts(tokenValue)
    .then(data => {
      // console.log(data);
      render(data);
    })
    .catch(error => console.log(error));
}

function fetchСontacts(token1) {
  const headers = {
    Authorization: `Bearer ${token1}`,
  };

  return fetch(`${BASE_URL}/contacts`, {
    headers,
  }).then(res => res.json());
}

//=============render contacts=======//
function render(contacts) {
  console.log(contacts.length);
  if (contacts.length <= 0) {
    refs.listContacs.innerHTML = 'NO CONTACTS';
    return;
  }
  const items = contacts
    .map(
      ({ id, name, number }) =>
        `<li>
          ${name}: ${number}
          <button class="delete" data-id=${id} data-type="delete">delete</button>
          <button class="update" data-id=${id} data-type="update">update</button>
        </li>`,
    )
    .join('');

  refs.listContacs.insertAdjacentHTML('beforeend', items);
}
