/*
 * Створення об'єкта (конструктор, литерал).
 * Властивості, ключі (ім'я) та значення
 */

// Фільм (назва, опис, рейтинг, акторскій склад, вікове обмеження)

// const film = {
//   title: 'Harry Potter',
//   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
//   rating: 10,
//   actors: ['Thomas Yates', 'Timothy Bryan', 'Dominic Chavez'],
//   adult: false,
// };

// console.log(film);

/*
 * Доступ до властивостей(obj.key, obj[key]).
 * Додавання та зміна властивостей
 */

// const key = 'rating';

// console.log(film.title);

// film.description = 'new description';

// console.log(film);

// film.someProp = 20;

// console.log(film);

/*
 * Короткий запис властивостей
 */

/* <input type="text" name="username"> */
/* <input type="email" name="useremail"> */

// const username = 'Oleksii';
// const email = 'test@gmail.com';

// const signUpData = {
//   username,
//   email,
// };

// console.log(signUpData);

/*
 * Присвоєння за посиланням
 */
const user1 = {
  firstName: 'Oleksii',
  lastName: 'Repin',
};

const user2 = user1;

console.log('user1 --> ', user1);
console.log('user2 --> ', user2);

user2.firstName = 'Isabella';

console.log('user1 --> ', user1);
console.log('user2 --> ', user2);
