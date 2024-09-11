window.addEventListener('load', () => {
    const imgMain = document.querySelector('.imgMain');
    imgMain.classList.add('visible');
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuNav = document.querySelector('.menuNav');
    const closeMenu = document.querySelector('.close-menu');

    menuToggle.addEventListener('click', function() {
        menuNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    closeMenu.addEventListener('click', function() {
        menuNav.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});
