/*
 * Класи: оголошення, конструктор, методи
 * Приватні властивості та методи
 * Геттери та сеттери
 * Статичні властивості та методи
 */
class User {
  #login;
  #password;

  static test = 5;

  constructor(userInfo) {
    // let this = {}
    const { firstName, lastName, age, phoneNumber, login, password } = userInfo;

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.#login = login;
    this.#password = password;
    // return this;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  // getLogin() {
  //   return this.#login;
  // }

  // setLogin(newLogin) {
  //   this.#login = newLogin;
  // }
}

const user = new User({
  firstName: 'Edward',
  lastName: 'Smith',
  age: 30,
  phoneNumber: '(096) 58-05-459',
  login: 'id@si.pg',
  password: '123456',
});

console.dir(User);

console.log(user);
console.log(user.getFullName());

console.log(user.login);
user.login = 'test@gmail.com';
console.log(user.login);
