class Person {
  constructor(name) {
    this.firstName = name
  }
  
  walk() {
    let result = `${this.constructor.name} ${this.firstName} walks.`
    console.log(result)
    return result
  }

  sayHello() {
    let result = `${this.firstName} says "Hello!".`
    console.log(result)
    return result
  }
}

class Student extends Person {
  constructor(firstName, subject) {
    super(firstName)
    this.subject = subject
  }

  sayHello() {
    let result = `${this.constructor.name} ${this.firstName} says "Hello!".`
    console.log(result)
    return result
  }

  sayGoodBye () {
    let result = `${this.constructor.name} ${this.firstName} says "Good bye!".`
    console.log(result)
    return result
  }
}
