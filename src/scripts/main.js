'use strict';

const form = document.querySelector('.message__form');
const sliderButtons = document.querySelectorAll('.slider__button');

if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();

      return;
    }

    form.reset();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

sliderButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.blur();
  });
});
