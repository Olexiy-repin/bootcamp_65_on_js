/*
 * Наслідування з extends та super
 */
class User {
  #login;
  #email;

  constructor(userInfo) {
    // let this = {}
    const { firstName, lastName, age, login, email } = userInfo;

    this.firstName = firstName;
    this.lastName = lastName;
    this.userAge = age;
    this.#login = login;
    this.#email = email;
    // return this
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }

  getFullName() {
    return `${User.trimStr(this.firstName)} ${User.trimStr(this.lastName)}`;
  }

  static trimStr(str) {
    return str.trim();
  }
}

class Developer extends User {
  constructor(developerInfo) {
    // let this = undefined;
    const { countOfProjects, ...otherProps } = developerInfo;

    // this = super();
    super(otherProps);

    this.countOfProjects = countOfProjects;
    // retrun this;
  }

  developerMethod() {
    console.log('Developer method!');
  }
}

class Manager extends User {
  constructor(managerInfo) {
    const { managerProp, ...otherProps } = managerInfo;

    // this = super();
    super(otherProps);

    this.managerProp = managerProp;
  }

  managerMethod() {
    console.log('Manager method!');
  }
}

const developer = new Developer({
  countOfProjects: 10,
  firstName: 'Nicholas',
  lastName: 'West',
  age: 30,
  login: 'vcvd',
  email: 'iseegi@sak.sx',
});

console.log(developer);

console.log(developer.getFullName());

const someManager = new Manager({
  managerProp: 343,
  firstName: 'Caleb',
  lastName: 'Murray',
  age: 20,
  login: 'bgff',
  email: 'uwigicnaf@ra.be',
});

console.log(someManager);
