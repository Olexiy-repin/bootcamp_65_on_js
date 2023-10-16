/*
 *  Масиви: літерал масива, елементи, індексація, довжина
 */

/*
? Створіть масив genres з елементами Jazz і Blues.
? Додайте "Rock&Roll" в кінець.
? Виведіть у консоль перший елемент масиву.
? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
? Видаліть перший елемент та виведіть його в консоль.
? Вставте «Country» та «Reggy» на початок масиву.
 */

// const genres = ['Jazz', 'Blues'];

// genres.push('Rock&Roll');

// console.log(genres);

// console.log(genres[0]);

// console.log(genres[genres.length - 1]);

// const firstElement = genres.shift();

// console.log(genres);
// console.log(firstElement);

// genres.unshift('Country', 'Reggy');

// console.log(genres);

/*
 * Присвоєння за посиланням і за значенням
 */

/*
? Створіть змінну a = 10.
? Створіть та привласніть змінній b -> змінну a
? Виведіть до консолі обидві ці змінні
? Змініть значення змінної a і ще раз виведіть у консоль
*/

// let a = 10;
// const b = a;

// console.log('a --> ', a);
// console.log('b --> ', b);

// a = 20;

// console.log('a --> ', a);
// console.log('b --> ', b);

/*
? Створіть масив arr1 = [1, 2, 3].
? Створіть та привласніть масиву arr2 -> масив arr1
? Виведіть до консолі обидва цих масива
? Додайте елемент в масив arr1 і ще раз виведете обидва масиви в консоль
*/

// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// console.log('arr1 --> ', arr1);
// console.log('arr2 --> ', arr2);

// arr1.push(10);

// console.log('arr1 --> ', arr1);
// console.log('arr2 --> ', arr2);

/*
 * Перебор масива циклами for та for...of
 */

/*
? Напиши скрипт для перебору масиву fruits циклом for.
? Для кожного елемента масиву виведіть у консоль рядок у форматі номер_елемента: значення_елемента.
? Нумерація елементів має починатися з першого.
*/

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

/*
? Напиши скрипт пошуку найменшого числа у масиві.
? Код має працювати для будь-якого масиву чисел.
? Використовуйте цикл для вирішення задачі.
*/
// const numbers = [2, 17, 94, 1, -20, -1, -100, 23, -40, 37, -50];
// let min = numbers[0];

// for (let i = 1; i < numbers.length; i += 1) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

// console.log(min);

/*
? У нас є масив із зарплатами працівників, потрібно порахувати загальну суму зарплат
*/

// Через цикл for
// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// for (let i = 0; i < salaries.length; i += 1) {
//   total += salaries[i];
// }

// console.log(total);

// Через цикл for..of
// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// for (const salary of salaries) {
//   total += salary;
// }

// console.log(total);

/*
? У нас є кілька масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат
*/
// 1 Варіант
// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// const allSalaries = managerSalaries.concat(developersSalaries);
// let total = 0;

// for (const salary of allSalaries) {
//   total += salary;
// }

// console.log(allSalaries);
// console.log(total);

// 2 Варіант
// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// let total = 0;

// for (const salary of managerSalaries) {
//   total += salary;
// }

// for (const salary of developersSalaries) {
//   total += salary;
// }

// console.log(total);

/*
 * Базові методи: split та join, indexOf та includes, push, slice та splice, concat
 */

/*
? Напиши скрипт для обчислення площі прямокутника зі сторонами,
? значення яких зберігаються в змінній values у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/
// const values = '8 11';
// const rectSidesArr = values.split(' ');

// const rectArea = Number(rectSidesArr[0]) * Number(rectSidesArr[1]);

// console.log(values);
// console.log(rectSidesArr);
// console.log(rectArea);

/*
? Напиши скрипт, який виводить в консоль ім'я та телефонний номер користувача.
? У змінних names і phones зберігаються рядки імен та телефонних номерів, розділені комами.
? Порядковий номер імен та телефонів у рядках вказують на відповідність.
? Кількість імен та телефонів гарантовано однакова.
*/
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// console.log(names);
// console.log(namesArr);
// console.log(phones);
// console.log(phonesArr);

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

/*
? Напиши скрипт, який «розгортає» рядок (зворотний порядок букв)
? та виводить її в консоль.
*/
// 1 Варіант
// const string = 'Welcome to the future';
// const charsArr = string.split('');
// const reverseCharsArr = [];

// console.log(string);
// console.log(charsArr);

/*
1 Ітерація

i = 20;
reverseCharsArr.push(charsArr[i]);

reverseCharsArr = ['e'];

2 Ітерація

i = 19;
reverseCharsArr.push('r');

reverseCharsArr = ['e', 'r'];

3 Ітерація

i = 18;
reverseCharsArr.push('u');

reverseCharsArr = ['e', 'r', 'u'];
*/

// for (let i = charsArr.length - 1; i >= 0; i -= 1) {
//   reverseCharsArr.push(charsArr[i]);
// }

// console.log(reverseCharsArr);

// const reverseString = reverseCharsArr.join('');

// console.log(reverseString);

// 2 Варіант
// const string = 'Welcome to the future';
// const reverseString = string.split('').reverse().join('');

// console.log(string);
// console.log(reverseString);

// 3 Варіант
// const string = 'Welcome to the future';
// let reverseString = '';

/*
1 Ітерація

i = 20;

reverseString = 'e';

2 Ітерація

i = 19

reverseString = 'er';
*/

// for (let i = string.length - 1; i >= 0; i -= 1) {
//   reverseString += string[i];
// }

// console.log(string);
// console.log(reverseString);

/*
? У нас є масив співробітників, Співробітник Shaw звільнився, видаліть його з масиву
*/
// const employees = ['Dennis', 'Watkins', 'Shaw', 'Ray'];
// const idxOfShaw = employees.indexOf('Shaw');

// employees.splice(idxOfShaw, 1);

// console.log(employees);

//? Додати нового співробітника Thornton, перед Watkins;
// const idxOfWatkins = employees.indexOf('Watkins');

// employees.splice(idxOfWatkins, 0, 'Thornton');

// console.log(employees);
