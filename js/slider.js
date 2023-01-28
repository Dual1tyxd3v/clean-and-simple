function slider(wrapper, dotsContainer, slides, container, arrowLeft = null, arrowRight = null, inactiveClass = null, margin = null) {
  let offset = 0;
  let slideIndex = 0;
  let nextSlideIndex = 0;
  let WRAP_WIDTH;
  margin
    ? WRAP_WIDTH = Math.round(parseFloat(window.getComputedStyle(slides[0]).width)) + margin
    : WRAP_WIDTH = Math.round(parseFloat(window.getComputedStyle(container).width));
  const dots = [];

  wrapper.style.width = `${100 * slides.length}%`; 

  slides.forEach((slide, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dots__item');
    i === slideIndex ? dot.classList.add('dots__item--active') : null;
    dot.dataset.dot = i;
    dotsContainer.append(dot);
    dots.push(dot);
  });
  
  const sliderTImer = setInterval(() => {
    nextSlideIndex++;
    changeSlide();
  }, 3000);

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      nextSlideIndex = dot.dataset.dot;
      clearInterval(sliderTImer);
      changeSlide();
    });
  });

  if (arrowLeft && arrowRight) {
    arrowLeft.addEventListener('click', () => {
      clearInterval(sliderTImer);
      nextSlideIndex--;
      changeSlide();
    });

    arrowRight.addEventListener('click', () => {
      clearInterval(sliderTImer);
      nextSlideIndex++;
      changeSlide();
    });
  }

  function changeSlide() {
    if (nextSlideIndex >= dots.length) {
      nextSlideIndex = 0;
    }
    if (nextSlideIndex < 0 ) {
      nextSlideIndex = dots.length - 1;
    }

    offset = WRAP_WIDTH * nextSlideIndex;
    wrapper.style.transform = `translateX(${-offset}px)`;
    dots[slideIndex].classList.toggle('dots__item--active');
    dots[nextSlideIndex].classList.toggle('dots__item--active');

    if (inactiveClass) {
      slides[nextSlideIndex].classList.toggle(inactiveClass);
      slides[slideIndex].classList.toggle(inactiveClass);
    }

    slideIndex = nextSlideIndex;
  }
}

