window.addEventListener('scroll', function () {
    var nav = document.getElementById('navbar');
    if (window.scrollY > 0) {
        nav.classList.add('nav-border');
    } else {
        nav.classList.remove('nav-border');
    }
});
