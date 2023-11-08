/*
 * Синхронний vs Асинхронний JS
 */

//* setTimeout(callback, delay);

// console.log('First');

// const timeoutId = setTimeout(() => {
//   console.log('From setTimeout 5000!');
// }, 5000);

// clearTimeout(timeoutId);

// console.log('Second');

// console.log('Third');

//* setInterval(callback, delay);
// console.log('First');

// const intervalId = setInterval(() => {
//   console.log('From setInterval!');
// }, 1000);

// console.log('Second');

// console.log('Third');

// setTimeout(() => {
//   console.log(num);

//   clearInterval(intervalId);
// }, 5000);

// Стек виклику функцій (http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!)

// Функції відкладеного виклику window.setTimeout(callback, delay, arg1, arg2, ...);

// Очищення інтервалів та таймутів clearInterval(intervalID), clearTimeout(timeoutID)
