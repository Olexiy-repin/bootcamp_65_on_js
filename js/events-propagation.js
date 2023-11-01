/*
 * Поширення подій (занурення, таргетинг, спливання)
 */
const textEl = document.querySelector('.js-text');
const divEl = document.querySelector('.js-div');
const sectionEl = document.querySelector('.js-section');

sectionEl.addEventListener('click', event => {
  console.group('Click on <section>');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
  console.groupEnd();
});

divEl.addEventListener('click', event => {
  console.group('Click on <div>');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
  console.groupEnd();
});

textEl.addEventListener('click', event => {
  console.group('Click on <p>');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
  console.groupEnd();
});
