const cardCollages = document.querySelectorAll('.card-collage');

cardCollages.forEach(collage => {
  const img = collage.querySelector('img');
  img.addEventListener('mouseenter', () => {
    collage.style.zIndex = 1000;
  });
  img.addEventListener('mouseleave', () => {
    collage.style.zIndex = '';
  });
});