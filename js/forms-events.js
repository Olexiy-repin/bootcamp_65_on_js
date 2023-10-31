/*
 * Події елементів форм. focus, blur, change, input, submit
 */

const usernameInputEl = document.querySelector('.js-username-input');
const usernameOutputEl = document.querySelector('.js-username-output');
const checkboxEl = document.querySelector('.js-policy-checkbox');
const submitBtnEl = document.querySelector('.js-contact-form-submit');
const contactFormEl = document.querySelector('.js-contact-form');

// usernameInputEl.addEventListener('focus', () => {
//   console.log('Focus event!');

//   usernameInputEl.style.outlineColor = 'transparent';
//   usernameInputEl.style.outlineOffset = '2px';
//   usernameInputEl.style.borderColor = 'teal';
// });

// usernameInputEl.addEventListener('blur', () => {
//   console.log('Blur event!');

//   usernameInputEl.style.borderColor = '#cccccc';
// });

// usernameInputEl.addEventListener('change', () => {
//   console.log('Change event!');
// });

usernameInputEl.addEventListener('input', () => {
  console.log('Input event!');

  const value = usernameInputEl.value;

  usernameOutputEl.textContent = value ? `, ${value}` : value;
});

checkboxEl.addEventListener('change', () => {
  console.log('Change event!');

  const isChecked = checkboxEl.checked;

  if (isChecked) {
    submitBtnEl.disabled = false;
  } else {
    submitBtnEl.disabled = true;
  }
});

contactFormEl.addEventListener('submit', event => {
  event.preventDefault();

  contactFormEl.reset();
  usernameOutputEl.textContent = '';
  submitBtnEl.disabled = true;
});
