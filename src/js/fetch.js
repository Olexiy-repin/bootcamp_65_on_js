// https://jsonplaceholder.typicode.com/

//? Піраміда
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     console.log(response);

//     const data = response.json();

//     data
//       .then(result => {
//         console.log(result);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? Без піраміди
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     console.log(response);

//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? Повертаємо відхилений проміс
// fetch('https://jsonplaceholder.typicode.com/po')
//   .then(response => {
//     console.log(response);

//     if (!response.ok) {
//       return new Promise((resolve, reject) => {
//         reject(response.status);
//       });
//     }

//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     if (err === 404) {
//       alert('Такого ресурсу на сервері не знайдено!');
//     }
//   });

//? Прокидаємо помилку через throw
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     console.log(response);

//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.dir(err);

//     if (err.message === '404') {
//       alert('Такого ресурсу на сервері не знайдено!');
//     }
//   });
