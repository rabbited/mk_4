const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');

  if (burger && menu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      menu.classList.toggle('show');
    });
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1200) {
    // On large screens, reset state
    burger.classList.remove('open');
    menu.classList.remove('show');
  }
});
