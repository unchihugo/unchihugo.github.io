var grid = document.querySelector('.row-masonry');
grid.style.display = 'none'; //hide grid

// creates toast with loading message
const toast = bootstrap.Toast.getOrCreateInstance(document.getElementById('loadingToast'));
    toast.show();

imagesLoaded(grid, function () {

    grid.style.display = 'block'; // show grid once images are loaded
    document.getElementById('gallerySpinner').setAttribute('style', 'display: none !important;'); // hide spinner
    document.getElementById('galleryText').innerHTML = 'All images loaded succesfully! Enjoy :)'; // change text
    var msnry = new Masonry(grid, {
        percentPosition: true
    });
    toast.hide(); // hide loading toast
});