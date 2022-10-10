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
	// console.log(e.target)
	if (target.contains('hamburger') || target.contains('hamburger-line')) {
		// console.log(e.target)
		return;
	}
	if((!target.contains('navigation')) && !target.contains('nav-item')) {
		// console.log(e.target)
		navigation.classList.remove('navigation_active')
		navWrapper.classList.remove('background_active')
		closeBurger.classList.remove('close-burger_active')
		document.body.style.overflow = ''
	}
})
// burger menu end
// pop up start 

const reviewWrapper = document.querySelector('.testers-reviews')
const popUp = document.querySelector('.pop-up_wrapper')
const closeReview = document.querySelector('.close-rewiew')


reviewWrapper.addEventListener('click', (e) => {
	if (e.target.closest('.testimonials-card')) {
		let reviewCard = e.target.closest('.testimonials-card')
		let popUp = e.target.closest('.pop-up_wrapper')
		
		// console.log(e.target.closest('.testimonials-card'))
		reviewCard.classList.add('testimonials-card_active');
		popUp.classList.add('pop-up_wrapper_active')
		// closeReview.classList.add('close-rewiew_active')
	}
})
document.addEventListener('click', (e)=> {
	let target = e.target.classList
	if ( target.contains('close-rewiew') || target.contains('pop-up_wrapper_active')) {
		document.querySelector('.pop-up_wrapper_active').classList.remove('pop-up_wrapper_active');
		document.querySelector('.testimonials-card_active').classList.remove('testimonials-card_active')
		closeReview.classList.remove('close-rewiew_active')
	}
})
// pop up end