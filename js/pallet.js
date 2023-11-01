const palletEl = document.querySelector('[data-pallet-list]');
const palletItemEl = document.querySelectorAll('.js-pallet-item');

const randomColor = () => {
  return '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
};

const paintElements = () => {
  palletItemEl.forEach(element => {
    const color = randomColor();

    element.style.backgroundColor = color;
    element.dataset.bgColor = color;
  });
};

paintElements();

const onPalletItemElClick = ({ target: palletItemEl }) => {
  if (palletItemEl.nodeName !== 'LI') {
    return;
  }

  const palletItemBgColor = palletItemEl.dataset.bgColor;
  const outputBgColorEl = palletItemEl.querySelector('.js-pallet__item-color');

  outputBgColorEl.textContent = palletItemBgColor;
};

palletEl.addEventListener('click', onPalletItemElClick);
