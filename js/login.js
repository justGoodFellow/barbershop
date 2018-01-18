'use strict';

var user = document.querySelector('.main-nav__link--user');
var login = document.querySelector('.page-header__login');
var loginText = login.querySelector('[name=login]');
var loginPassword = login.querySelector('[name=password]');
var loginClose = login.querySelector('.login__close');
var form = login.querySelector('.login__form');
var storageLogin = localStorage.getItem('login');
var overlay = document.querySelector('.modal-overlay');

user.addEventListener('click', function (event) {
  event.preventDefault();
  login.classList.add('page-header__login--show');
  overlay.classList.add('modal-overlay--show');
  if (storageLogin) {
    loginText.value = storageLogin;
    loginPassword.focus();
  } else {
    loginText.focus();
  }
});

form.addEventListener('submit', function (event) {
  if (!loginText.value || !loginPassword.value) {
    event.preventDefault();
    login.classList.add('page-header__login--error');
  } else {
    localStorage.setItem('login', loginText.value);
  }
});

loginClose.addEventListener('click', function () {
  login.classList.remove('page-header__login--show');
  login.classList.remove('page-header__login--error');
  overlay.classList.remove('modal-overlay--show');
});

window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    if (login.classList.contains('page-header__login--show')) {
      login.classList.remove('page-header__login--show');
      login.classList.remove('page-header__login--error');
    }
    if (overlay.classList.contains('modal-overlay--show')) {
      overlay.classList.remove('modal-overlay--show');
    }
  }
});
