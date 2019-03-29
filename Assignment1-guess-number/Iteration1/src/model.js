class Guess {

  constructor(secretNumber) {
    if (secretNumber) {
      this.secretNumber = secretNumber
    } else {
      this.secretNumber = Math.floor(Math.random() * 100)
    }
    this.tryCount = 0;
  }

  makeGuess(aGuess) {
    this.tryCount++
    let result = ''
    if (aGuess > this.secretNumber) {
      result = 'Try lower'
    } else if (aGuess < this.secretNumber) {
      result = 'Try Higher'
    } else {
      result = 'You got it!'
    }
    return result
  }
}
