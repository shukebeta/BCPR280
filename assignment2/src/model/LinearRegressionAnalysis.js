class LinearRegressionAnalysis extends MathLib {

    constructor(numListX, numListY) {
        super()
        this.x = numListX
        this.y = numListY
    }

    getBeta1() {
        let n = this.x.length
        let avgX = this.getAvg(this.x)
        let avgY = this.getAvg(this.y)
        return (
            (this.getProductSum(this.x, this.y) - n * avgX * avgY)
            /
            (this.getSquareSum(this.x) - n * avgX * avgX)
        )
    }

    getBeta0() {
        return this.getAvg(this.y) - this.getBeta1() * this.getAvg(this.x)
    }
}