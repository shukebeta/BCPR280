class Person {
  constructor () {
    this.canTalk = true
  }
  greet () {
    if (this.canTalk) {
      return `Hi, I am ${this.name}`
    }
    return 'none'
  }
}

class Empolyee extends Person {
  constructor (name, title) {
    super()
    this.name = name
    this.title = title
  }

  greet () {
    if (this.canTalk) {
      let who = this.name
      let what = this.title
      return `${who}, the ${what}`
    }
  }
}

class Customer extends Person {
  constructor (name) {
    super()
    this.name = name
  }
}

class Mime extends Person {
  constructor (name) {
    super()
    this.name = name
    this.canTalk = false
  }
}

//  ------------------ Controller -------------------------------------------------
var greetingsApp = new Vue({
  el: '#greetings',
  data: {
    people: [
      new Empolyee('Bob', 'Builder'),
      new Customer('Joe'),
      new Empolyee('Red Green', 'Handyman'),
      new Mime('Mime1'),
      new Customer('Mike')
    ]
  },
  methods: {
    getGreeting: function(index) {
      return this.people[index].greet()
    }
  }
})
