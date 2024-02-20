// loading messages
const loadingMessages = [
    'preparing the page for you <3',
    'putting everything in its place',
    'moving things around',
    'getting things ready',
    'just a moment!',
    'collecting content for you <3',
];


// show loader when any link is clicked, excluding mailto, # and index#contact-me
document.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('mailto')) return;
        if (this.getAttribute('href').startsWith('#')) return;
        if (this.getAttribute('target') === '_blank') return;
        e.preventDefault();

        const destination = this.getAttribute('href');

        const loader = document.querySelector('#page-loader');
        loader.style.top = window.innerHeight + 'px';
        loader.style.display = 'block';
        setTimeout(function () {
            loader.style.top = 0; // slide the loader up into view
        }, 10);

        setTimeout(function () {
            window.location.href = destination; // go to destination after 250ms
        }, 250);
    });
});

// show loader when new page is loaded or refreshed
    const loader = document.querySelector('#page-loader');
    const content = document.querySelector('#page-loader-content');
    const text = document.querySelector('#page-loader-content p');

    loader.style.top = 0;

    var random = Math.floor(Math.random() * 10);
    if (random < 5) random = -(random + 8);
    else random += 3;

    // select random loading message
    const randomIndex = Math.floor(Math.random() * loadingMessages.length);
    const randomMessage = loadingMessages[randomIndex];

    text.innerHTML = randomMessage;

    content.style.transform = `scale(0) rotate(${-random}deg)`;
    content.style.display = 'block';
    setTimeout(function () { // show content
        content.style.opacity = '1';
        content.style.transform = 'scale(1) rotate(0deg)';
        setTimeout(function () { // hide content
            content.style.opacity = '0';
            content.style.transform = `scale(0) rotate(${random}deg)`;
            setTimeout(function () { // slide loader out of view
                loader.style.top = window.innerHeight + 'px';

                setTimeout(function () {
                    loader.style.display = 'none';
                }, 250);
            }, 150);
        }, 1000);
    }, 10);

