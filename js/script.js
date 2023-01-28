const wrapper = document.querySelector('.main__slider__wrapper');
const slides = document.querySelectorAll('.main__slide');
const dotsContainer = document.querySelector('.main__dots');
const container = document.querySelector('.main__slide__container');

slider(wrapper, dotsContainer, slides, container);

const resWrapper = document.querySelector('.resources__slide-wrapper');
const resSlides = document.querySelectorAll('.resources__slide');
const resDotsContainer = document.querySelector('.resources__dots');
const resContainer = document.querySelector('.resources__slide-container');
const arrowLeft = document.querySelector('.arrow--left');
const arrowRight = document.querySelector('.arrow--right');

slider(resWrapper, resDotsContainer, resSlides, resContainer, arrowLeft, arrowRight);

const testWrapper = document.querySelector('.test__slide__wrapper');
const testSlides = document.querySelectorAll('.test__slide__item');
const testDotsContainer = document.querySelector('.test__dots');
const testContainer = document.querySelector('.test__slide__container');

slider(testWrapper, testDotsContainer, testSlides, testContainer,null,null, 'slide--inactive', 64);

const faqDescribes = document.querySelectorAll('.faq__item__content');
const faqSelectors = document.querySelectorAll('.faq__item__selector');

faqSelectors.forEach((selector, i) => {
  selector.addEventListener('click', () => {
    faqSelectors[i].classList.toggle('faq__item__selector--active');
    faqDescribes[i].classList.toggle('hide');
  });
});
