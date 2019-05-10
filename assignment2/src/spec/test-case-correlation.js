import {Correlation} from "../model/Correlation.mjs";

describe("correlation", function () {
  'use strict'
  describe("calculate RSquare", function () {
    let mathlib
    let x
    let y

    beforeEach(function () {
      x = [83, 116, 186, 81, 114]
      y = [11.2, 9.3, 21.6, 6.9, 10.2]
      mathlib = new Correlation(x, y)
    })

    it("should have a numListX property", function () {
      expect(mathlib.hasOwnProperty('numListX')).toBeTruthy()
    })

    it("should have a numListY property", function () {
      expect(mathlib.hasOwnProperty('numListY')).toBeTruthy()
    })

    it("should have a getRxy function", function () {
      expect(typeof mathlib.getRxy).toBe('function')
    })

    it("should have a getSquareR function", function () {
      expect(typeof mathlib.getSquareR).toBe('function')
    })

    it("should have a constructor function", function () {
      expect(typeof mathlib.constructor).toBe('function')
    })

    it("sumX should be 580", function () {
      expect(mathlib.getSum(x)).toBe(580)
    })

    it("sumY should be 59.2", function () {
      expect(mathlib.getSum(y) - 59.2 < 0.01).toBe(true)
    })

    it("sumXY should be 7747.7", function () {
      expect(mathlib.getProductSum(x, y) - 7747.7 < 0.01).toBe(true)
    })

    it("sumSquareX should be 74498", function () {
      expect(mathlib.getSquareSum(x) - 74498).toBe(0)
    })

    it("sumSquareY should be 830.14", function () {
      expect(mathlib.getSquareSum(y) - 830.14 < 0.01).toBe(true)
    })

    it("Rxy should be 0.911737", function () {
      expect(mathlib.getRxy() - 0.911737 < 0.01).toBe(true)
    })

    it("SquareR should be 0.831264", function () {
      expect(mathlib.getSquareR() - 0.831264 < 0.01).toBe(true)
    })
  })
})
