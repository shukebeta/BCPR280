/*globals describe beforeEach it expect Guess*/
describe("Basic Check For Original Source Code", function () {
  'use strict';
  describe("Guess", function () {
      var theGuessObject;
      beforeEach(function () {
        theGuessObject = new Guess();
      });

      describe("the secretNumber property", function () {
        it("should have an .secretNumber property", function () {
          expect(theGuessObject.hasOwnProperty('secretNumber')).toBeTruthy();
        });
        
        it("should reference a integer", function () {
          expect(Number.isInteger(theGuessObject.secretNumber)).toBeTruthy();
        });
        
        it("should be between 0 and 99", function () {
          expect(theGuessObject.secretNumber >= 0 && theGuessObject.secretNumber <= 99).toBeTruthy();
        });

        it("101 should not be a valid secret number", function () {
          expect(theGuessObject.isValidNumber(101)).toBe(false);
        });
      });

      it("should have a makeGuess function", function () {
        expect(typeof theGuessObject.makeGuess).toBe('function');
      });

      it("should have a constructor function", function () {
        expect(typeof theGuessObject.constructor).toBe('function');
      });
  });
});
