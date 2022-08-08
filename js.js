// to work

(function () {
    const burgerIten = document.querySelector('.burger__item');
    const menuItem = document.querySelector('');
    const closeMenuItem = document.querySelector('.Burger__close');

    burgerIten.addEventListener('click', () => {
        menuItem.classList.add('active')
    });
    closeMenuItem.addEventListener('click', () => {
        menuItem.classList.remove('close')
    });
}());