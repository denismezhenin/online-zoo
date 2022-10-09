// console.log('по вопросам discord: denismezhenin, не успел еще доделать donate сраницу')

// burger menu start
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const navWrapper = document.querySelector('.background');
const closeBurger = document.querySelector('.close-burger');


hamburger.addEventListener('click', () => {
navigation.classList.toggle('navigation_active')
navWrapper.classList.add('background_active')
closeBurger.classList.add('close-burger_active')
document.body.style.overflow = 'hidden'

});

document.addEventListener('click', (e) => {
	let target = e.target.classList
	console.log(e.target)
	if (target.contains('hamburger') || target.contains('hamburger-line')) {
		console.log(e.target)
		return;
	}
	if((!target.contains('navigation')) && !target.contains('nav-item')) {
		console.log(e.target)
		navigation.classList.remove('navigation_active')
		navWrapper.classList.remove('background_active')
		closeBurger.classList.remove('close-burger_active')
		document.body.style.overflow = ''
	}
})
// burger menu end