/*
 * Стрілочні функції, явне - неявне повернення, arguments, повернення об`єкта
 */

//? Два і більше параметрів
// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(10, 20));

//? Один параметр
// const greet = username => {
//   alert(`Hello ${username}`);
// };

// greet('Oleksii');

//? Без параметрів
// const greet = () => {
//   alert('Welcome!');
// };

// greet();

//? arguments
// const sum = (...args) => {
//   console.log(args);

//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3, 4, 5));

//? Неявне повернення
// const sum = (a, b) => a + b;

// console.log(sum(10, 20));

// const greet = () => console.log('Welcome!');

// greet();

// const createProduct = product => ({ id: Date.now(), ...product });

// console.log(createProduct({ name: '🍎', price: 30, quantity: 3 }));

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/
// const createProduct = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };

//   callback(product);
// };

// const logProduct = product => console.log(product);

// const logTotalPrice = product => console.log(product.price * product.quantity);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
/*

? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/
// const each = (array, callback) => {
//   const newArr = [];

//   for (const el of array) {
//     newArr.push(callback(el));
//   }

//   return newArr;
// };

// Повна версія
// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return value * 2;
//   })
// );
// Скорочена версія
// console.log(each([64, 49, 36, 25, 16], value => value * 2));

// Повна версія
// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return value - 10;
//   })
// );
// Скорочена версія
// console.log(each([64, 49, 36, 25, 16], value => value - 10));

// Повна версія
// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return Math.sqrt(value);
//   })
// );
// Скорочена версія
// console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));

// Повна версія
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], value => {
//     return Math.ceil(value);
//   })
// );
// Скорочена версія
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));

// Повна версія
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], value => {
//     return Math.floor(value);
//   })
// );
// Скорочена версія
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));
