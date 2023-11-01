const messageWrapperEl = document.querySelector('.js-messages-wrapper');

const onMessageElClick = ({ target: messageCloseBtnEl }) => {
  if (messageCloseBtnEl.nodeName !== 'BUTTON') {
    return;
  }

  const messageEl = messageCloseBtnEl.closest('.js-message');

  messageEl.remove();
};

messageWrapperEl.addEventListener('click', onMessageElClick);
