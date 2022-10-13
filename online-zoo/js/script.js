console.log('по вопросам discord: denismezhenin')
import animals from '..//js/animals.js'
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
	if (target.contains('hamburger') || target.contains('hamburger-line')) {
		return;
	}
	if((!target.contains('navigation')) && !target.contains('nav-item')) {
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
		reviewCard.classList.add('testimonials-card_active');
		popUp.classList.add('pop-up_wrapper_active')
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

// Testimonials range slider start

const sliderRange = document.querySelector('.range')
const testersSlider = document.querySelector('.testers-reviews')
const testerGap = 29;

sliderRange.addEventListener('input', () => {
	let cardWidth = document.querySelector('.pop-up_wrapper').offsetWidth
if (sliderRange.value == 0) {
	testersSlider.style.left = 0 + "px"
	return
}
testersSlider.style.left = (( - (sliderRange.value * cardWidth + testerGap * (sliderRange.value) )) + "px")
})

// Testimonials range slider end

// pets slider start
const card = document.querySelectorAll('.card')
const prev = document.querySelectorAll('.prev')
const next = document.querySelectorAll('.next')
const animalImage = document.querySelectorAll('.card img')
const animalName = document.querySelectorAll('.animal-name')
const animalLocation = document.querySelectorAll('.animal-location')
const translate = 350

const moveright = () => {
	freezeButton();
	setTimeout((() => replaceCards()), 200)
	card.forEach(el => {
		el.style.transform = `translate(${translate}%)`;
		setTimeout((() => el.classList.add('card_active')), 150);
		setTimeout((() => el.style.transform = `translate(${-translate}%)`), 200);
		setTimeout((() => el.classList.remove('card_active')), 250)
		setTimeout((() => el.style.transform = "translate(00%)"), 300)

	})
}
const moveleft = () => {
	freezeButton();
	setTimeout((() => replaceCards()), 200)
	card.forEach(el => {
		el.style.transform = `translate(${-translate}%)`;
		setTimeout((() => el.classList.add('card_active')), 150);
		setTimeout((() => el.style.transform = `translate(${translate}%)`), 200);
		setTimeout((() => el.classList.remove('card_active')), 250)
		setTimeout((() => el.style.transform = "translate(00%)"), 300)
	})
}

prev.forEach(el => {
	el.addEventListener('click', moveleft)
})
next.forEach(el => {
	el.addEventListener('click', moveright)
})
function replaceCards() {
	
	animals.sort(() => (Math.random() - 0.5))
	
	animalImage.forEach((el, index) => {
		el.src = `${animals[index].img}`
	})
	animalName.forEach((el, index) => {
		el.innerHTML = `${animals[index].name}`
	})
	animalLocation.forEach((el, index) => {
		el.classList.remove('meat');
		el.classList.remove('banana');
		el.innerHTML = `${animals[index].location}`
		el.classList.add(`${animals[index].food}`)
	})
}

function freezeButton() {
	prev.forEach(el => {
		el.removeEventListener('click', moveleft)
	})
	next.forEach(el => {
		el.removeEventListener('click', moveright)
	})
	setTimeout(() => {
		prev.forEach(el => {
			el.addEventListener('click', moveleft)
		})
		next.forEach(el => {
			el.addEventListener('click', moveright)
		})
	},650)
}