class MathLib {

  getSum(numList) {
    let sum = 0
    for(let i=0; i < numList.length; i++) {
      sum += numList[i]
    }
    return sum
  }

  getSquareSum(numList) {
    let sum = 0
    for(let i=0; i < numList.length; i++) {
      sum += numList[i] * numList[i]
    }
    return sum
  }
  
  getProductSum(x, y) {
    let sum = 0
    for(let i=0; i < x.length; i++) {
      sum += x[i] * y[i]
    }
    return sum
  }

  getAvg(numList) {
    if (numList.length) {
      return this.getSum(numList) / numList.length
    }
    return 0
  }

}
