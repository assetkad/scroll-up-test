document.querySelector(window).scroll(function () {
    if (document.querySelector(this).scrollTop > 1200) {
        document.querySelector('.pageup').fadeIn();
    } else {
        document.querySelector('.pageup').fadeOut();
    }
});
<a href="#pageup" class="pageup">
    <img src="icons/pageup.svg" alt="pageup">
</a>