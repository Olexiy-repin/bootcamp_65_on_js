/*
 * async/await
 * асинхрона(async) функція ЗАВЖДИ повертає проміс.
 * await змушує функцію чекати виконання проміса.
 * await не працює поза асинхроними функціями.
 */

// console.log('Start');

// const foo = async () => {
//   console.log('foo');

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Done!');
//     }, 2000);
//   });

//   const result = await promise;

//   console.log(result);
// };

// foo();

// console.log('End!');

// const fetchUsers = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');

//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

// fetchUsers()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? TASK 01
// Перепиши на async/await
// const loadPosts = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/pos');

//   if (!response.ok) {
//     throw new Error(response.status);
//   }

//   return response.json();

//   // return fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
//   //   if (!response.ok) {
//   //     throw new Error(response.status);
//   //   }

//   //   return response.json();
//   // });
// };

// loadPosts()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? TASK 02
// Є «звичайна» функція. Як можна всередині неї отримати результат виконання async-функції?
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait()
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
  // ...що тут написати?
  // щоб викликати wait() і дочекатися результату "10" від async-функції
  // не забувайте, тут не можна використовувати "await"
}

f();
