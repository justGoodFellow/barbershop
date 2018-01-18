'use strict';

var mapOpen = document.querySelector('.content__contacts-btn');
var map = document.querySelector('.map');
var mapClose = map.querySelector('.map__close');
var overlay = document.querySelector('.modal-overlay');

mapOpen.addEventListener('click', function (event) {
  event.preventDefault();
  map.classList.add('map--show');
  overlay.classList.add('modal-overlay--show');
});

mapClose.addEventListener('click', function () {
  map.classList.remove('map--show');
  overlay.classList.remove('modal-overlay--show');
});

window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    if (map.classList.contains('map--show')) {
      map.classList.remove('map--show');
    }
    if (overlay.classList.contains('modal-overlay--show')) {
      overlay.classList.remove('modal-overlay--show');
    }
  }
});
