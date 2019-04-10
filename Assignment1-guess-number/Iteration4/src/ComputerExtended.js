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

class ComputerExtended extends Computer {

  getGuess() {
    let index = this._getRand(0, this.candidateList.length - 1)
    let guess = this.candidateList[index]
    this.candidateList = this.candidateList.diff([guess])
    return guess
  }
  
  refineCandidateList(guess, currentResult) {
    let judgeStandard = {
      COLD: {min: 40, max: 99},
      COOL: {min: 20, max: 39},
      WARM: {min: 10, max: 19},
      HOT: {min: 1, max:9},
    }
    let standard = judgeStandard[currentResult]
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
    console.log(this.candidateList)
  }

}
