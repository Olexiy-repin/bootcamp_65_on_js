const openModalBtnEl = document.querySelector('.js-modal-open');
const closeModalBtnEl = document.querySelector('.js-modal-close');
const backdropEl = document.querySelector('.js-backdrop');

const closeModal = () => {
  backdropEl.classList.remove('is-open');

  document.removeEventListener('keydown', onDocumentKeyPress);
  closeModalBtnEl.removeEventListener('click', onCloseModalBtnElClick);
  backdropEl.removeEventListener('click', onBackdropElClick);
};

const onOpenModalBtnElClick = event => {
  backdropEl.classList.add('is-open');

  document.addEventListener('keydown', onDocumentKeyPress);
  closeModalBtnEl.addEventListener('click', onCloseModalBtnElClick);
  backdropEl.addEventListener('click', onBackdropElClick);
};

const onCloseModalBtnElClick = event => {
  closeModal();
};

const onDocumentKeyPress = ({ code }) => {
  console.log(code);

  if (code === 'Escape') {
    closeModal();
  }
};

const onBackdropElClick = event => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};

openModalBtnEl.addEventListener('click', onOpenModalBtnElClick);
