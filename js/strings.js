/*
 * Конкатенація рядків, шаблонні рядки
 */
/*
  ? Запросіть у користувача ім'я з віком та виведіть у консоль повідомлення:
  ? Привіт ім'я_користувача, ваш вік вік_користувача.
*/
// const userFirstName = prompt('Введіть ваше імʼя');
// const userAge = prompt('Скільки вам років?');

// const result = 'Привіт ' + userFirstName + ', ваш вік ' + userAge;

// console.log(result);

//? Виконайте завдання вище, використовуючи шаблонні рядки
// const userFirstName = prompt('Введіть ваше імʼя');
// const userAge = prompt('Скільки вам років?');

// const result = `Привіт ${userFirstName}, ваш вік ${userAge}`;

// console.log(result);

/*
 * Властивості і методи рядків
 */

//? Запитайте у користувача номер телефону та дізнайтеся, зі скількох символів, він складається.
// const uesrPhoneNumber = prompt('Введіть ваш номер телефону');
// const lengthOfUserPhoneNumber = uesrPhoneNumber.length;

// console.log(uesrPhoneNumber);
// console.log(lengthOfUserPhoneNumber);

//? Попросіть користувача ввести email і переведіть у нижній регістр.
// const userEmail = prompt('Введіть ваш email!').toLowerCase();

// console.log(userEmail);

//? Попросіть користувача ввести email і переведіть у верхній регістр
// const userEmail = prompt('Введіть ваш email!').toUpperCase();

// console.log(userEmail);

//? У нас є рядок '24px', дізнайтеся на що закінчується цей рядок, на: %, rem, em або px;
// const str = '24px';

// console.log(str.endsWith('24'));

//? У нас є рядок '23,4', замініть кому на крапку
// const str = prompt('Введіть якесь число').replace(',', '.');

// console.log(str);

/*
  ? У нас є рядок:
  ? 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
  ? Замініть усі входження dog на monkey.
*/
// const str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// const resultStr = str.replaceAll('dog', 'monkey');

// console.log(resultStr);

//? У нас є дата у форматі '12/05/21', замініть (/) на (.)
// const someDate = '12/05/21';
// const currentDate = someDate.replaceAll('/', '.');

// console.log(currentDate);
