/* ======= Elements and variables ======= */
const nav = document.querySelector('.navigation');
const menuButton = document.querySelector('.navigation__menu-button');
const menuCloseButton = document.querySelector('.navigation__menu-close-button');
const menuBg = document.querySelector('.navigation__menu-bg');

let down = new Object();
let up = new Object();

/* ======= Elements events ======= */
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
    });
}

/* ======= Swipe event ======= */
document.addEventListener('touchstart', (e) => {
    down.x = e.changedTouches[0].clientX;
    down.y = window.innerHeight - e.changedTouches[0].clientY;
});

document.addEventListener('touchend', (e) => {
    up.x = e.changedTouches[0].clientX;
    up.y = window.innerHeight - e.changedTouches[0].clientY; 

    const diff = { x: up.x - down.x, y: up.y - down.y }
    const angle = Math.atan2(diff.y, diff.x) / Math.PI;
    
    if (down.x <= window.innerWidth / 10 && angle <= 0.1 && angle >= -0.1)
        nav.classList.add('open');
});