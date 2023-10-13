/*
 * Розгалуження if
 */

// if (умова) {
// тіло if
// }

// const score = 10;

// if (score >= 10) {
//   console.log('Ви молодець!');
// } else {
//   console.log('Потрібно ще попрацювати!');
// }

/*
? Дано рядок, що складається із символів, наприклад, 'abcde'.
? Перевірте, що першим символом цього рядка є буква 'a'.
? Якщо це так - виведіть 'так', інакше виведіть 'ні'.
*/

// const str = 'abcde';

// if (str.startsWith('ab')) {
//   console.log('так');
// } else {
//   console.log('ні');
// }

/*
? Запросіть у користувача число, якщо число дорівнює 10,
? то виведіть 'Вірно', інакше виведіть 'Невірно'.
*/

// const userNumber = Number(prompt('Введіть число!'));

// if (userNumber === 10) {
//   console.log('Вірно');
// } else {
//   console.log('Невірно');
// }

/*
? Напишіть код, який запитуватиме:
? 'Яка «офіційна» назва JavaScript?'
? Якщо користувач вводить ECMAScript,
? то показати: «Вірно!», інакше – відобразити: «Не знаєте? ECMAScript!»
*/

// const userInput = prompt('Яка «офіційна» назва JavaScript?').toLowerCase();
// const answer = 'ECMAScript'.toLowerCase();

// if (userInput === answer) {
//   console.log('Вірно!');
// } else {
//   console.log('Не знаєте? ECMAScript!');
// }

/*
? У змінній minutes лежить число від 0 до 59.
? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
? [0 до 15) - перша чверть години
? [15 до 30) - друга чверть години
? [30 до 45) - третя чверть години
? [45 до 60) - четверта чверть години
*/
// const minutes = 10;

// if (minutes >= 0 && minutes < 15) {
//   console.log('Перша чверть години!');
// } else if (minutes >= 15 && minutes < 30) {
//   console.log('Друча чверть години');
// } else if (minutes >= 30 && minutes < 45) {
//   console.log('Третя чверть години!');
// } else if (minutes >= 45 && minutes < 60) {
//   console.log('Четверта чверть години!');
// } else {
//   console.log('Некоректна кількість хвилин!');
// }

/*
 * Switch case
 */

// switch (значення) {
//   case значення:
//     інструкції;
//     break;

//   case значення:
//     інструкції;
//     break;

//   default:
//     інструкції;
// }

// const score = 10;

// switch (score) {
//   case 10: {
//     console.log('Ваша оцінка 10');

//     break;
//   }

//   case 9: {
//     console.log('Ваша оцінка 9');

//     break;
//   }

//   case 8: {
//     console.log('Ваша оцінка 8');

//     break;
//   }

//   default: {
//     console.log('Невідома оцінка!');
//   }
// }

/*
?  Перепишіть код за допомогою однієї конструкції switch:
*/

// const number = Number(prompt('Введіть число між 0 та 3'));

// if (number === 0) {
//   alert('Ви ввели число 0');
// } else if (number === 1) {
//   alert('Ви ввели число 1');
// } else if (number === 2 || number === 3) {
//   alert('Ви ввели число 2, а може і 3');
// } else {
//   alert('Ви ввели якесь інше число');
// }

// switch (number) {
//   case 0: {
//     alert('Ви ввели число 0');

//     break;
//   }

//   case 1: {
//     alert('Ви ввели число 1');

//     break;
//   }

//   case 2:
//   case 3: {
//     alert('Ви ввели число 2, а може і 3');

//     break;
//   }

//   default: {
//     alert('Ви ввели якесь інше число');
//   }
// }

/*
 * Тернарний оператор
 */

// <умова> ? <вираз_якщо_умова_правдива> : <вираз_якщо_умова_хибна>

/*
? Перепишіть конструкцію if з використанням умовного оператора '?':
*/
// const a = 3;
// const b = 1;
// const result = a + b < 4 ? 'Мало' : 'Багато';

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Багато';
// }

// console.log(result);

/*
?  Перепишіть if..else за допомогою декількох операторів '?'.
*/
// const login = 'Співробітник';
// let message =
//   login === 'Співробітник'
//     ? 'Привіт'
//     : login === 'Директор'
//     ? 'Вітаю'
//     : login === ''
//     ? 'Немає логіну'
//     : '';

// if (login === 'Співробітник') {
//   message = 'Привіт';
// } else if (login === 'Директор') {
//   message = 'Вітаю';
// } else if (login === '') {
//   message = 'Немає логіну';
// } else {
//   message = '';
// }

// console.log(message);
