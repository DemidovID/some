(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
}());

// Burger handler 
(function () {
    const burgerItem = document.querySelector('.burger');
    const menuCloseItem = document.querySelector('.header__nav_close')
    const menuItem = document.querySelector('.header__nav');

    burgerItem.addEventListener('click', () => {
        menuItem.classList.add('header__nav-active');
    });

    menuCloseItem.addEventListener('click', () => {
        menuItem.classList.remove('header__nav-active');
    });
}());


// (function () {
//     const burgerItem = document.querySelector('.burger');
//     const menuCloseItem = document.querySelector('.header__nav_close')
//     const menu = document.querySelector('.header__nav');

//     burgerItem.addEventListener('click', () => {
//         menu.classList.add('header__nav-active');
//     });
//     menuCloseItem.addEventListener('click', () => {
//         menu.classList.remove('header__nav-active');
//     });
// }());