class Guess {

  constructor(secretNumber) {
    if (this.isValidNumber(secretNumber)) {
      this.secretNumber = secretNumber
    } else {
      this.secretNumber = Math.floor(Math.random() * 100)
    }
    this.tryCount = 0;
  }

  isValidNumber(secretNumber) {
    return (typeof secretNumber !== 'undefined' && 
      Number.isInteger(secretNumber) && 
      secretNumber >=0 && 
      secretNumber <= 99
    )
  }

  makeGuess(aGuess) {
    this.tryCount++
    let result = ''
    if (aGuess > this.secretNumber) {
      result = 'Try lower'
    } else if (aGuess < this.secretNumber) {
      result = 'Try higher'
    } else {
      result = `You got it in ${this.tryCount} trials!`
    }
    return result
  }
}
