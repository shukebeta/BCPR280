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

    this.guessMax = 99
    this.guessMin = 0
    this.judgeStandard = {
      COLD: {min: 40, max: 99},
      COOL: {min: 20, max: 39},
      WARM: {min: 10, max: 19},
      HOT: {min: 1, max:9},
    }
    this.lastResult = 'undefined'
    this.result = 'undefined'
    
    this.lastGuess = -1
    this.guess = -1

    this.startIndex = -1
    this.currentIndex = -1
    this.increase = true // default direction when you got HOT
    
    this.guessHistory = []
    this.guessRange = {}
    this.candidateList = []
  }

  saveGuess(guess, result) {
    this.lastResult = this.result
    this.result = result
    
    this.lastGuess = this.guess
    this.guess = guess

    this.guessHistory.push({
      guess: guess,
      result: result,
      tryCount: this.tryCount,
      range: this.guessRange
    })
  }

  getNextGuessRange(guess, currentResult) {
    let standard = this.judgeStandard[currentResult]
    if (guess + standard.min > this.guessMax) {
      this.guessRange = {
          min:0, 
          max:guess - standard.min,
          guess: guess
        }
    } else if (guess - standard.min < 0) {
      this.guessRange = {
        min: guess + standard.min, 
        max: guess + standard.max,
        guess: guess
      }
    } else {
      this.guessRange = {
        min: (guess - standard.max < 0) ? 0 : guess - standard.max, 
        max: (guess + standard.max >= 99 ? 99 : guess + standard.max), 
        guess:guess
      }
    }
    console.log(this.guessRange)
  }

  getGuess(isHot, currentResult) {
    if (this.tryCount === 0) {
      return Math.floor(Math.random() * 100)
    } else {
      return this._getGuess(isHot, currentResult)
    }
  }

  _getGuess(isHot, currentResult) {
    if (isHot) {
      if (!this.candidateList.length) {
        this.generateCandidateList()
        console.log(this.candidateList)
        this.currentIndex = this.startIndex = this.getIndex(this.guess)
      }
      if (currentResult != 'HOT') {
        this.increase = false
        this.currentIndex = this.startIndex
      }
      return this.getHotGuess()
    } else {
      return Math.floor((this.guessRange.min + this.guessRange.max) / 2)
      /*
      if (typeof this.guessRange.min_tried == 'undefined') {
        this.guessRange.min_tried = true
        return this.guessRange.min
      } else if (typeof this.guessRange.max_tried == 'undefined') {
        this.guessRange.max_tried = true
        return this.guessRange.max
      }
      return false
      */
    }
  }

  getIndex(guess) {
    for(let i = 0; i < this.candidateList.length; i++) {
      if(this.candidateList[i] == guess) {
        return i
      }
    }
  }

  getHotGuess() {
    if (this.increase) {
      this.currentIndex++
      if (this.currentIndex > this.candidateList.length - 1) {
        this.increase = false
        this.currentIndex = this.startIndex - 1
      }
    } else {
      this.currentIndex--
    }
    console.log("startIndex:" + this.startIndex)
    return this.candidateList[this.currentIndex] 
  }

  generateCandidateList() {
    for(let i = this.guessRange.min; i <= this.guessRange.max; i++) {
      this.candidateList.push(i)
    }
  }

  getComplainMessage(guess, result) {
    for(let aGuess of this.guessHistory) {
      if (aGuess.guess == guess) {
        return `You lied. It is ${guess}. Last time I guess ${guess} and you told me ${aGuess.result}.`
      }
    }

    if (this.lastResult == 'HOT' && (result == 'COOL' || result == 'COLD')) {
      return `You lied. Last time I guess ${this.lastGuess} and you told me ${this.LastResult}. Now I guess ${guess}, you told me ${result}`
    }
    return ''
  }

  complain(message) {
    alert(message)
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
