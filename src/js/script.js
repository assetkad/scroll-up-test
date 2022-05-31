topFunction() {
  window.scrollTo(pageXOffset, 0);
}

window.addEventListener('scroll', function() {
  arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});