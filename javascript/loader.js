document.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('mailto')) return;
        if (this.getAttribute('href').startsWith('#')) return;
        if (this.getAttribute('href').match('index#contact-me')) return;
        e.preventDefault();

        const destination = this.getAttribute('href');

        const loader = document.querySelector('#page-loader');
        loader.style.top = (window.scrollY + window.innerHeight) + 'px';
        loader.style.display = 'block';
        document.body.style.overflowY = 'hidden';
        loader.style.top = window.scrollY + 'px';

        setTimeout(function() {
            window.location.href = destination;
        }, 250);
    });
});

window.addEventListener('load', function() {
    const loader = document.querySelector('#page-loader');
    const content = document.querySelector('#page-loader-content');
    if (this.window.location.href.match('index#contact-me')) {
        document.body.style.overflowY = 'visible';
        loader.style.display = 'none';
    }
    loader.style.top = window.scrollY + 'px';

    var random = Math.floor(Math.random() * 10);
    if (random < 5) random = -(random + 3);
    else random += 3;

    content.style.transform = `scale(0) rotate(${-random}deg)`;
    content.style.display = 'block';
    setTimeout(function() {
        content.style.opacity = '1';
        content.style.transform = 'scale(1) rotate(0deg)';
        setTimeout(function() {
            content.style.opacity = '0';
            content.style.transform = `scale(0) rotate(${random}deg)`;
            setTimeout(function() {
                loader.style.top = (window.scrollY + window.innerHeight) + 'px';
                
                setTimeout(function() {
                    document.body.style.overflowY = 'visible';
                    loader.style.display = 'none';
                }, 250);
            }, 150);
        }, 1000);
    }, 10);
});

