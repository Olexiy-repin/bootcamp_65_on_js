/*
? Напиши скрипт, який для об'єкта user послідовно:
? додає властивість mood зі значенням 'happy'
? замінює значення hobby на 'skydiving'
? замінює значення premium на false
? виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of
*/

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = !user.premium;

// console.log(user);

// const userKeys = Object.keys(user);

// console.log(userKeys);

// for (const key of userKeys) {
//   console.log(`${key}: ${user[key]}`);
// }

/*
? Напишіть ф-цію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю.
? Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям.
*/

const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Аконіт', price: 200, quantity: 2 },
];

console.log(stones);

const calcTotalPrice = function (stones, stoneName) {
  for (const stone of stones) {
    if (stoneName.toLowerCase() === stone.name.toLowerCase()) {
      return stone.price * stone.quantity;
    }
  }

  return `${stoneName} не знайдено!`;
};

console.log(calcTotalPrice(stones, 'Смарагд')); // 5200
console.log(calcTotalPrice(stones, 'Діамант')); // 8100
console.log(calcTotalPrice(stones, 'Щебінь')); // Каменя за такою назвою не знайдено
