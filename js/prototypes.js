/*
 * Ланцюжки прототипів.
 * Object.create().
 * obj.hasOwnProperty()
 */

// const usersMethods = {
//   getAge() {
//     return this.age;
//   },

//   setFirstName(firstName) {
//     this.firstName = firstName;
//   },
// };

// const user = Object.create(usersMethods);

// user.firstName = 'Kevin';
// user.lastName = 'Wagner';
// user.age = 30;

// console.log('user -> ', user);

// console.log(user.getAge());

// const user2 = Object.create(usersMethods);

// user2.firstName = 'Ollie';
// user2.lastName = 'Glover';
// user2.age = 40;

// console.log('user2 -> ', user2);

// console.log(user2.getAge());

//* Власні та не власні властивості об'єкта

//* Перевірка власних властивостей obj.hasOwnProperty()
// console.log(user2.hasOwnProperty('getAge'));
//* Цикл for...in, перебирає і власні, і не власні властивості.
// const user = {
//   firstName: 'Rhoda',
//   lastName: 'Johnson',
// };

// const user2 = Object.create(user);

// user2.gender = 'male';
// user2.age = 30;

// console.log('user --> ', user);
// console.log('user2 -- > ', user2);

// for (const key in user2) {
//   if (user2.hasOwnProperty(key)) {
//     console.log(`${key}: ${user2[key]}`);
//   }
// }
