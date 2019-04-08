/*
Write a program to play a number guessing game. 
The USER mentally selects a number between 0 and 99 
and the computer ties to guess it. 
The computer outputs its guess, and the User response with 
  "COLD" if the guess is more than 40 from the target number, 
  "COOL" if the guess is within 20-39 of the target number, 
  “WARM” if the guess is within 10-19 of the target number, 
  “HOT” if the guess is within 1-9 of the target number or “correct”. 
The computer should keep count of the number of guesses. 
The computer should complain if the USER has lied.
*/



class Computer {

  constructor() {
    this.tryCount = 0
    this.guessHistory = []
    
    this.candidateList = this._getList(0, 99)
    this.triedList = []
    this.judgeStandard = {
      COLD: {min: 40, max: 99},
      COOL: {min: 20, max: 39},
      WARM: {min: 10, max: 19},
      HOT: {min: 1, max:9},
    }
  }

  getGuess(isHot) {
    if (isHot) {
      let index = Math.ceil(this.candidateList.length/2) - 1
      let guess = this.candidateList[index]
      this.candidateList = this.candidateList.diff([guess])
      return guess
    } 
    let index = this._getRand(0, this.candidateList.length - 1)
    let guess = this.candidateList[index]
    this.candidateList = this.candidateList.diff([guess])
    return guess
  }

  refineCandidateList(guess, currentResult) {
    let standard = this.judgeStandard[currentResult]
    let cList = [];
    if (guess + standard.min > this.guessMax) {
      cList = cList.concat(this._getList(0, guess - standard.min))
    } else if (guess - standard.min < 0) {
      let min = guess + standard.min
      let max = (guess + standard.max >= 99 ? 99 : guess + standard.max)
      cList = cList.concat(this._getList(min, max))
    } else {
      let min = (guess - standard.max < 0 ? 0 : guess - standard.max)
      let max = guess - standard.min
      cList = cList.concat(this._getList(min, max))
      min = guess + standard.min
      max = (guess + standard.max >= 99 ? 99 : guess + standard.max)
      cList = cList.concat(this._getList(min, max))
    }
    this.candidateList = this.candidateList.intersect(cList)
  }
  
  _getList(min, max) {
    let result = []
    for(let i=min; i<=max; i++) {
      result.push(i)
    }
    return result
  }

  _getRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  saveGuess(guess, result) {
    this.tryCount++
    this.guessHistory.push({
      guess: guess,
      result: result,
      tryCount: this.tryCount,
      times: this.candidateList.length
    })
  }
}

/*
initial
[[0,99]]
initial guess random integer from 0 to 99, then I can get a result and a guess range.
then I guess (range.min + range.max) / 2, 
  if the result is the same
    then I guess (range.min + current_guess) / 2
  if the result is 'HOT'
    I have to from this position guess one by one 
  if the result changed to more close then I get a new guess range, 
  the result is changed to more far away, then I turn to another range,




*/
