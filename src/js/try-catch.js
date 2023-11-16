/*
 * Помилки фази інтерпретації(compile time) обробити неможливо. Тільки помилки фази виконання(runtime).
 * try/catch працюю тільки з синхроним кодом.
 */

console.log('Start!');

setTimeout(() => {
  try {
    const user = {
      firstName: 'Oleksii',
    };

    user = 'Oleksii';
  } catch (err) {
    console.log(err);
  }
}, 1000);

console.log('End!');
