const openModalBtnEl = document.querySelector('.js-modal-open');
const closeModalBtnEl = document.querySelector('.js-modal-close');
const backdropEl = document.querySelector('.js-backdrop');

const closeModal = () => {
  backdropEl.classList.remove('is-open');

  document.removeEventListener('keydown', onDocumentKeyPress);
  closeModalBtnEl.removeEventListener('click', onCloseModalBtnElClick);
};

const onOpenModalBtnElClick = event => {
  backdropEl.classList.add('is-open');

  document.addEventListener('keydown', onDocumentKeyPress);
  closeModalBtnEl.addEventListener('click', onCloseModalBtnElClick);
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

openModalBtnEl.addEventListener('click', onOpenModalBtnElClick);
