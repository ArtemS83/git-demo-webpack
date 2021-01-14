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
  formADD: document.querySelector('.form'),
  listContacs: document.querySelector('.js-list'),
  textNoContacts: document.querySelector('.span-no-contacts'),
  formUpdate: document.querySelector('.form-update'),
};
//
//
//
//

//==========api.js=======//
const BASE_URL = 'https://goit-phonebook-api.herokuapp.com';
let Token = '';
//
//
//

//==================sign up======================//

refs.signupBtn.addEventListener('click', onSingUp);

function onSingUp() {
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
  onGetDataUser(signupData);
}

function onGetDataUser(dataValue) {
  fetchSignup(dataValue)
    .then(data => {
      Token = data.token;
      refs.userName.textContent = data.user.name;
      refs.userEmail.textContent = data.user.email;
      refs.signupForm.reset();
      refs.textError.classList.add('is-hidden');
      refs.signupForm.classList.add('is-hidden');
      refs.contentForm.classList.remove('is-hidden');
      refs.logoutBtn.classList.remove('is-hidden');
      refs.textNoContacts.classList.remove('is-hidden');
    })
    .catch(error => console.log(error));
}

//=================LOGIN===============//

refs.loginBtn.addEventListener('click', onLogin);

function onLogin() {
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
  onLoginDataUser(loginData);
}

function onLoginDataUser(dataValue) {
  fetchLogin(dataValue)
    .then(data => {
      Token = data.token;
      refs.userName.textContent = data.user.name;
      refs.userEmail.textContent = data.user.email;
      refs.loginForm.reset();
      refs.textError.classList.add('is-hidden');
      refs.loginForm.classList.add('is-hidden');
      refs.contentForm.classList.remove('is-hidden');
      refs.logoutBtn.classList.remove('is-hidden');
      getContacts(Token);
    })
    .catch(error => console.log(error));
}

//=================LOGOUT===============//

refs.logoutBtn.addEventListener('click', onLogout);

function onLogout() {
  fetchLogout(Token)
    .then(() => {
      Token = '';
      refs.userName.textContent = '';
      refs.userEmail.textContent = '';
      refs.logoutBtn.classList.add('is-hidden');
      refs.textError.classList.add('is-hidden');
      refs.loginForm.classList.add('is-hidden');
      refs.contentForm.classList.add('is-hidden');
      refs.signupBtn.classList.remove('is-hidden');
      refs.loginBtn.classList.remove('is-hidden');
      refs.listContacs.innerHTML = '';
      refs.textNoContacts.classList.add('is-hidden');
    })
    .catch(error => console.log(error));
}

//=================getContacs===============//

function getContacts(tokenValue) {
  fetchСontacts(tokenValue)
    .then(data => {
      renderContacts(data);
    })
    .catch(error => console.log(error));
}

//=============render contacts=======//

function renderContacts(contacts) {
  refs.listContacs.innerHTML = '';
  if (contacts.length <= 0) {
    refs.textNoContacts.classList.remove('is-hidden');
    return;
  }
  render(contacts);
}

//===================template contact===========//

function render(params) {
  const items = params
    .map(
      ({ id, name, number }) =>
        `<li>
        <span class="js-name-${id}">${name}: </span> <span class="js-number-${id}">${number}</span>
        
          <button class="delete" data-id=${id} data-type="delete">delete</button>
          <button class="update" data-id=${id} data-type="update">update</button>
        </li>`,
    )
    .join('');
  refs.listContacs.insertAdjacentHTML('beforeend', items);
}

//=============ADD contact=======//

refs.formADD.addEventListener('submit', onAddContact);

function onAddContact(e) {
  e.preventDefault();
  const name = e.currentTarget.elements.name.value;
  const number = e.currentTarget.elements.number.value;
  const newContact = {
    name,
    number,
  };
  addNewContact(newContact)
    .then(data => {
      const item = [];
      item.push(data);
      render(item);
      refs.textError.classList.add('is-hidden');
    })
    .then(() => {
      newContact.name = '';
      newContact.value = '';
      refs.formADD.reset();
      refs.textNoContacts.classList.add('is-hidden');
    })
    .catch(error => console.log(error));
}

//=============Delete and update contact=======//

refs.listContacs.addEventListener('click', handleContactClick);

function handleContactClick(e) {
  const { id, type } = e.target.dataset;

  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  ///////=============Deletecontact=======//
  if (id && type === 'delete') {
    deleteContact(Token, id)
      .then(() => {
        refs.textError.classList.add('is-hidden');
        getContacts(Token);
      })
      .catch(error => console.log(error));
  }

  ///// //===========UPdate contact=======//

  if (id && type === 'update') {
    const nameContactRef = document.querySelector(`.js-name-${id}`);
    const numberContactRef = document.querySelector(`.js-number-${id}`);
    const updateContact = {
      updateContact: nameContactRef.textContent,
      number: numberContactRef.textContent,
    };
    refs.contentForm.classList.add('is-hidden');
    refs.formUpdate.classList.remove('is-hidden');
    refs.formUpdate.elements.name.value = updateContact.updateContact;
    refs.formUpdate.elements.number.value = updateContact.number;

    refs.formUpdate.addEventListener('submit', onUpdateContact);

    function onUpdateContact(e) {
      e.preventDefault();
      const name = e.target.elements.name.value;
      const number = e.target.elements.number.value;
      const updateData = {
        name,
        number,
      };
      updateContactFn(updateData, Token, id)
        .then(() => {
          refs.textError.classList.add('is-hidden');
          refs.formUpdate.classList.add('is-hidden');
          refs.formUpdate.reset();
          refs.contentForm.classList.remove('is-hidden');
          getContacts(Token);
        })
        .catch(error => console.log(error));
    }
  }
}
//
//
//
//
//
//====================api.js=============//

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

function fetchLogout(tokenValue) {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${tokenValue}`,
    },
  };

  return fetch(`${BASE_URL}/users/logout`, options).then(res => {
    if (res.status === 401) {
      refs.textError.classList.remove('is-hidden');
      return;
    } else {
      return res.json();
    }
  });
}

function fetchСontacts(tokenValue) {
  const headers = {
    Authorization: `Bearer ${tokenValue}`,
  };

  return fetch(`${BASE_URL}/contacts`, {
    headers,
  }).then(res => res.json());
}

function addNewContact(data) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Token}`,
    },
    body: JSON.stringify(data),
  };

  return fetch(`${BASE_URL}/contacts`, options).then(res => {
    if (res.status === 400) {
      refs.textError.classList.remove('is-hidden');
      return;
    } else {
      return res.json();
    }
  });
}

function updateContactFn(data, tokenValue, idValue) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenValue}`,
    },
    body: JSON.stringify(data),
  };

  return fetch(`${BASE_URL}/contacts/${idValue}`, options).then(res => {
    if (res.status === 401 || res.status === 400) {
      refs.textError.classList.remove('is-hidden');
      return;
    } else {
      return res.json();
    }
  });
}

function deleteContact(tokenValue, idValue) {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenValue}`,
    },
  };

  return fetch(`${BASE_URL}/contacts/${idValue}`, options).then(res => {
    if (res.status === 401 || res.status === 404) {
      refs.textError.classList.remove('is-hidden');
      return;
    } else {
      return res.json();
    }
  });
}