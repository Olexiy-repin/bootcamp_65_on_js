/*
 * Деструктуризація об'єктів
 */

// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
//   isAdmin: true,
// };

/*
? Напишіть деструктуруюче присвоєння, яке:
? властивість firstName присвоє до змінної firstName.
? властивість lastName присвоє до змінної lastName.
? властивість age присвоє до змінної userAge.
? властивість isAdmin присвоє до змінної isAdmin (false, якщо немає такої властивості)
*/

// const { firstName, lastName, age: userAge, isAdmin = false } = user;
// const { firstName, lastName, ...props } = user;

// console.log(user);

// console.log('firstName --> ', firstName);
// console.log('lastName --> ', lastName);
// console.log('props --> ', props);

/*
 * Глибока деструктуризація об'єктів
 */
// const team = {
//   number: 4,
//   flag: './images/flag.jpg',
//   employees: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
//   langs: {
//     original: 'uk',
//     secondary: 'en',
//   },
// };

// const {
//   number,
//   langs: { original, secondary },
// } = team;

// console.log(number);
// console.log(original);
// console.log(secondary);

/*
 * Деструктуризація масивів
 */
// const names = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];

// const [, , name3] = names;

// console.log(name3);

// const rgb = [200, 100, 50];

// const [red, green, blue] = rgb;

// console.log(red);
// console.log(green);
// console.log(blue);
