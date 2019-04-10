/*
  Write a program to play a number guessing game.
  The USER mentally selects a number between 0 and 99 and the computer tries to guess it.
  The computer outputs its guess, and the User response with "Try higher", "Try lower" or “correct”.
  The computer should keep count of the number of guesses.
  The computer should complain if the USER has lied.
*/

class Computer {
  constructor () {
    this.tryCount = 0
    this.guessHistory = []
    this.candidateList = this._getList(0, 99)
    this.result = 'undefined'
  }

  refineCandidateList (guess, result) {
    if (result === 'Try higher') {
      this.candidateList = this._getList(guess + 1, 99).intersect(this.candidateList)
    } else if (result === 'Try lower') {
      this.candidateList = this._getList(0, guess - 1).intersect(this.candidateList)
    }
  }

  _getList (min, max) {
    let result = []
    for (let i = min; i <= max; i++) {
      result.push(i)
    }
    return result
  }

  _getRand (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  saveGuess (guess, result) {
    this.result = result

    this.guessHistory.push({
      guess: guess,
      result: result,
      tryCount: this.tryCount,
      times: this.candidateList.length
    })
  }

  getGuess () {
    this.tryCount++

    let index = Math.floor((this.candidateList.length - 1) / 2)
    let guess = this.candidateList[index]
    this.candidateList = this.candidateList.diff([guess])
    return guess
  }

  isMankindLying () {
    return this.candidateList.length === 0
  }

  complain () {
    this.lastResult = 'mankind lie'
    window.alert('You lied. Press Start to begin another game.')
  }

  celebrate () {
    window.alert('I got it. Press Start to begin another game.')
  }
}
