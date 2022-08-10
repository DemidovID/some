// burger function

;(function () {
	const burgerItem = document.querySelector('.burger')

	const menuItem = document.querySelector('.header__nav')

	const menuCloseItem = document.querySelector('.header__menu-close')

	burgerItem.addEventListener('click', () => {
		menuItem.classList.add('header__nav-active')
	})

	menuCloseItem.addEventListener('click', () => {
		menuItem.classList.remove('header__nav-active')
	})
})()
