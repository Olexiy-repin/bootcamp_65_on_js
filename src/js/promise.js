/*
 * Проміси
 */

//? конструктор new Promise(callback(resolve, reject));
// console.log('Start!');

// const promise = new Promise((resolve, reject) => {
//   console.log('From class Promise!');

//   setTimeout(() => {
//     const randomNum = Math.random();
//     console.log('random number -> ', randomNum);

//     if (randomNum < 0.5) {
//       reject('Error!');
//     } else {
//       resolve('All done!');
//     }
//   }, 2000);
// });

// console.log(promise);

// promise
//   .then(result => {
//     console.log('promise from then ->', promise);

//     console.log(result);
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log('promise from then ->', promise);

//     console.log(err);
//   })
//   .finally(() => {
//     // preloader.stop();
//     console.log('From finally!');
//   });

// console.log('End!');

//? then(onSuccess, onError)

//? ланцюжок промісів та catch(onError)

//? finally()

//? TASK 01
// Чи можна "перевиконати" проміс?
// const promise = new Promise((resolve, reject) => {
//   resolve(1);

//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// promise.then(result => {
//   console.log(result);
// });

//? TASK 02
// Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);

//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   });

//? TASK 03
// Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   reject('error');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);
//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });
