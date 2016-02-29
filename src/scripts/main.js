'use strict';

var Swipe = require('swipejs');
var element = document.getElementById('slider');

window.mySwipe = new Swipe(element, {
  startSlide: 0,
  auto: 3000,
  draggable: true,
  autoRestart: false,
  continuous: false,
  disableScroll: true,
  stopPropagation: true,
  callback: function(index, element) {},
  transitionEnd: function(index, element) {}
});
