"use strict"
import {LinearRegression} from "../model/LinearRegression.mjs";
console.log(typeof LinearRegression)

describe("linear-regression-analysis", function () {
  'use strict'
  describe("calculate beta1, beta0", function () {
    let lra1
    let lra2

    let eol = [130, 650, 99, 150, 128, 302, 95, 945, 368, 961]
    let encl = [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130]
    let ancl = [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]

    beforeEach(function () {
      lra1 = new LinearRegression(eol, ancl)
      lra2 = new LinearRegression(encl, ancl)
    })

    it("avg eol should be 382.8", function () {
      expect(lra1.getAvg(eol) - 382.8 < 0.01).toBe(true)
    })

    it("lra1 beta0 should be -22.55", function () {
      expect(lra1.getBeta0() - -22.55 < 0.01).toBe(true)
    })

    it("lra1 beta1 should be 1.7279", function () {
      expect(lra1.getBeta1() - 1.7279 < 0.01).toBe(true)
    })

    it("lra2 beta0 should be -23.92", function () {
      expect(lra2.getBeta0() - -23.92 < 0.01).toBe(true)
    })

    it("lra2 beta1 should be 1.4310", function () {
      expect(lra2.getBeta1() - 1.4310 < 0.01).toBe(true)
    })
  })
})
