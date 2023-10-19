/*
 * Операція spread замість concat і slice
 */

//* Копія масива
//* Через метод slice()
// const numbers = [1, 2, 3, 4, 5];
// const copyNumbers = numbers.slice();

// console.log('numbers --> ', numbers);
// console.log('copyNumbers --> ', copyNumbers);

// copyNumbers.push(10);

// console.log('numbers --> ', numbers);
// console.log('copyNumbers --> ', copyNumbers);

//* Через метод concat()
// const numbers = [1, 2, 3, 4, 5];
// const copyNumbers = numbers.concat();

// console.log('numbers --> ', numbers);
// console.log('copyNumbers --> ', copyNumbers);

// copyNumbers.push(10);

// console.log('numbers --> ', numbers);
// console.log('copyNumbers --> ', copyNumbers);

//* Через ...spread
// const numbers = [1, 2, 3, 4, 5];
// const copyNumbers = [...numbers];

// console.log('numbers --> ', numbers);
// console.log('copyNumbers --> ', copyNumbers);

// copyNumbers.push(10);

// console.log('numbers --> ', numbers);
// console.log('copyNumbers --> ', copyNumbers);

//* Об'єднання масивів
// const numbers = [1, 2, 3, 4];
// const anotherNumbers = [10, 9, 8, 7];
// const allNumbers = [200, ...numbers, 100, ...anotherNumbers, 300];

// console.log('numbers --> ', numbers);
// console.log('anotherNumbers --> ', anotherNumbers);
// console.log('allNumbers --> ', allNumbers);

//* Розпилення масиву у функцію
// const numbers = [1, 2, 33, 4, 5];

// console.log(Math.max(...numbers));

/*
 * Операція spread замість Object.assign({}, obj)
 */
// Копія обʼєкта через Object.assign()
// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };
// const copyUser = Object.assign({ email: 'test@gmail.com' }, user);

// console.log('user --> ', user);
// console.log('copyUser --> ', copyUser);

// copyUser.gender = 'male';

// console.log('user --> ', user);
// console.log('copyUser --> ', copyUser);

// Копія обʼєкта через операцію spread
// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };
// const copyUser = {
//   email: 'test@gmail.com',
//   phone: '0961111111',
//   ...user,
//   firstName: 'Oleksii',
// };

// console.log('user --> ', user);
// console.log('copyUser --> ', copyUser);

// copyUser.gender = 'male';

// console.log('user --> ', user);
// console.log('copyUser --> ', copyUser);

//* Розпилення складних типів
// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
//   someArr: [1, 2, 3, 4],
// };
// const copyUser = _.cloneDeep(user);

// console.log('user --> ', user);
// console.log('copyUser --> ', copyUser);

// copyUser.age = 40;
// copyUser.someArr.push(10);

// console.log('user --> ', user);
// console.log('copyUser --> ', copyUser);

/*
 * Операція rest
 */

//? Напишіть функцію sum, яка складає довільну кількість аргументів
// const sum = function (...args) {
//   let total = 0;
//   for (const number of args) {
//     total += number;
//   }
//   return total;
// };

// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(10, 40, 60));
// console.log(sum(10, 40, 60, 100, 200, 300, 4000, 5));
