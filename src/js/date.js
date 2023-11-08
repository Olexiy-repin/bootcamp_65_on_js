//* Створення нової дати
// const date = new Date('2023-11-07 14:25:00');

//* Методи дати
// console.dir(date);

// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getUTCHours());

// date.setMinutes(0);

// console.log(date.getTime());

//? TASK 01
// Створіть об'єкт Date для дати: 9 вересня 2022 року, 3 години 12 хвилин.
// const date = new Date(2022, 8, 9, 3, 12);
// const date = new Date('2022-09-09 03:12:00');

// console.log(date);

//? TASK 02
// Створіть функцію getWeekDay(date), яка показує день тижня у короткому форматі:
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «НД».

// const getWeekDay = date => {
//   const daysArr = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//   return daysArr[date.getDay()];
// };

// const date = new Date(2023, 8, 6);

// console.log(getWeekDay(date));

//? TASK 03
// Створіть функуію getLastDayOfMonth(year, month), яка повертає останнє число місяця. Інколи це 30, 31 або навіть 28/29 у лютому.
// Параметри:
// year – рік з чотирьох цифр, наприклад, 2012.
// month – місяць від 0 до 11.
// Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).

// const getLastDayOfMonth = (year, month) => {
//   const date = new Date(year, month + 1, 0);

//   return date.getDate();
// };

// console.log(getLastDayOfMonth(2012, 1));

//? TASK 04
// Створіть функцію getSecondsToTomorrow(), яка повертає кількість секунд до завтрашнього дня.

// const getSecondsToTomorrow = () => {
//   const dateNow = new Date();
//   const dateTomorrow = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() + 1);

//   const diff = dateTomorrow - dateNow;

//   console.log(dateNow);
//   console.log(dateTomorrow);

//   return diff / 1000;
// };

// console.log(getSecondsToTomorrow());
