Array.prototype.diff = function (arr) {
  var mergedArr = this.concat(arr);
  return mergedArr.filter(function (e) {
      return mergedArr.indexOf(e) === mergedArr.lastIndexOf(e);
  });
};

Array.prototype.intersect = function (arr) {
  return this.filter(value => arr.includes(value));
};

class Candidate {
  constructor() {
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
  
}

