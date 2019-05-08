class Correlation extends MathLib {
  constructor(numListX, numListY) {
    super()
    this.numListX = numListX
    this.numListY = numListY
    if (typeof numListX === 'undefined' || typeof numListY === 'undefined') {
      throw "Invalid parameter: you didn't supply parameter numListX OR numListY"
    }
    if (numListX.length != numListY.length) {
      throw "Invalid parameter: numListX.length != numListY.length"
    }
  }

  getRxy() {
    let n = this.numListX.length
    let sumX = this.getSum(this.numListX)
    let sumY = this.getSum(this.numListY)
    return (
      (n * this.getProductSum(this.numListX, this.numListY) - sumX * sumY) 
      /
      Math.sqrt
      (
        (n * this.getSquareSum(this.numListX) - sumX * sumX) * 
        (n * this.getSquareSum(this.numListY) - sumY * sumY)
      )
    )
  }

  getSquareR() {
    let r = this.getRxy()
    return r * r
  }
}
