class Guess2 extends Guess {

  constructor(aNumber) {
    super(aNumber)
  }

  makeGuess(aGuess) {
    this.tryCount++
    let result = ''
    let deviation = Math.abs(aGuess - this.secretNumber)
    if (deviation >= 40) {
      result = 'COLD'
    } else if (deviation >= 20 && deviation <= 39) {
      result = 'COOL'
    } else if (deviation >= 10 && deviation <= 19) {
      result = 'WARM'
    }  else if (deviation >= 1 && deviation <= 9) {
      result = 'HOT'
    } else {
      result = `You got it in ${this.tryCount} trials!`
    }
    return result
  }
}
