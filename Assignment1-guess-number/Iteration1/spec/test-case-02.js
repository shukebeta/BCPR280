describe("make a guess", function () {
  'use strict';
  describe("generate a secret number", function () {
      var theGuessObject;
      beforeEach(function () {
          theGuessObject = new Guess(42);
      });

      it("the secretNumber should be 42", function () {
          expect(theGuessObject.secretNumber == 42).toBe(true);
      });

      it("make a guess 41 should be return Try higher", function () {
          expect(theGuessObject.makeGuess(41)).toBe('Try higher')
      });

      it("make a guess 43 should be return Try lower", function () {
        expect(theGuessObject.makeGuess(43)).toBe('Try lower')
      });
      
      it("make a guess 42 should be return 'You got it in 3 trials!'", function () {
        theGuessObject.makeGuess(1);
        theGuessObject.makeGuess(2);
        expect(theGuessObject.makeGuess(42)).toBe('You got it in 3 trials!')
      });

    });
});
