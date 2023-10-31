const accordionBtnEls = document.querySelectorAll('.js-accordion-btn');

const onAccordionBtnElClick = ({ target }) => {
  const accordionBtnEl = target;

  const accordionPanelEl = accordionBtnEl.nextElementSibling;

  accordionPanelEl.classList.toggle('active');

  console.log(accordionBtnEl);
  console.log(accordionPanelEl);
};

accordionBtnEls.forEach(accordionBtnEl => {
  accordionBtnEl.addEventListener('click', onAccordionBtnElClick);
});
