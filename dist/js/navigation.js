const nav = document.querySelector('.navigation');
const menuButton = document.querySelector('.navigation__menu-button');
const menuCloseButton = document.querySelector('.navigation__menu-close-button');
const menuBg = document.querySelector('.navigation__menu-bg');

if (menuButton) {
    menuButton.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}

if (menuCloseButton) {
    menuCloseButton.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}

if (menuBg) {
    menuBg.addEventListener('click', () => {
        nav.classList.toggle('open');
        //menuButton.classList.toggle('clicked');
    });
}