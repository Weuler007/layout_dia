'use strict';

const form = document.querySelector('.message__form');
const sliderButtons = document.querySelectorAll('.slider__button');

// Keep the demo form on the page: validate, clear, then return to the top.
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

// The slider is visual only, so buttons simply lose focus after click.
sliderButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.blur();
  });
});
