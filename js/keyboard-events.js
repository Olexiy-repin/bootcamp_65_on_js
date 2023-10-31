/*
 * Події клавіатури. keypress, keydown, keyup
 */

document.addEventListener('keydown', event => {
  // console.log(`event.code: ${event.code}; event.key: ${event.key}`);
  event.preventDefault();

  console.log(event);

  if ((event.ctrlKey || event.metaKey) && event.code === 'KeyF') {
    console.log('«Ctrl + f» or «Command + f» combo');
  }
});
