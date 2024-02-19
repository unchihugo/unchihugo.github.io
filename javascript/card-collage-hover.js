// change z-index of card-collage on hover to 1000
const cardCollages = document.querySelectorAll('.card-collage');
const cardContainer = document.querySelectorAll('.card-collage-container');

cardCollages.forEach(collage => {
  const img = collage.querySelector('img');
  img.addEventListener('mouseenter', () => {
    collage.style.zIndex = 1000;
  });
  img.addEventListener('mouseleave', () => {
    collage.style.zIndex = '';
  });
});