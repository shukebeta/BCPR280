/*
  Write a program to play a number guessing game. 
  The USER mentally selects a number between 0 and 99 and the computer ties to guess it. 
  The computer outputs its guess, and the User response with "Try higher", "Try lower" or “correct”. 
  The computer should keep count of the number of guesses. 
  The computer should complain if the USER has lied.
*/

class Computer {

  constructor() {
    this.tryCount = 0
    this.guessHistory = []
    this.guessMax = 99
    this.guessMin = 0
    this.result = 'undefined'
  }

  saveGuess(guess, result) {
    this.tryCount++
    this.result = result

    this.guessHistory.push({
      guess: guess,
      result: result,
      tryCount: this.tryCount
    })

    if (result == 'Try higher') {
      this.guessMin = guess + 1
    } else if (result == 'Try lower') {
      this.guessMax = guess - 1;
    } else {
      this.guessMin = guess
      this.guessMax = guess
    }
  }

  getGuess() {
    return Math.floor((this.guessMin + this.guessMax) / 2)
  }

  getComplainMessage(guess, result) {
    if(this.guessMin == this.guessMax && guess == this.guessMin && result != "correct") {
      return `You lied. The number is ${guess} but you say it is not.`
    }

    if (guess == 0 && result == 'Try lower') {
      return `You lied. I guess ${guess}, but you told me Try lower. I cannot try lower!`
    }

    if (guess == 99 && result == 'Try higher') {
      return `You lied. I guess ${guess}, but you told me Try Higher. I cannot try higher!`
    }

    return ''
  }

  complain(message) {
    alert(message)
  }
}

