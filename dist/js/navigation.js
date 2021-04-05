const nav = document.querySelector('.navigation');
const menuButton = document.querySelector('.navigation__menu-button');
const menuBg = document.querySelector('.navigation__menu-bg');

if (menuButton) {
    menuButton.addEventListener('click', () => {
        nav.classList.toggle('open');
        menuButton.classList.toggle('clicked');
    });
}

if (menuBg) {
    menuBg.addEventListener('click', () => {
        nav.classList.toggle('open');
        menuButton.classList.toggle('clicked');
    });
}