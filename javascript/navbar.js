const navSlide = () => {
  const burgermenu = document.querySelector('.menu');
  const nav = document.querySelector('.nav-links2');

  burgermenu.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
}

navSlide();
