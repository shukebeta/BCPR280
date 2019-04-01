describe("make a guess", function () {
  'use strict';
  describe("generate a secret number", function () {
      var theGuessObject;
      beforeEach(function () {
          theGuessObject = new GuessExtended(42);
      });

      it("the secretNumber should be 42", function () {
          expect(theGuessObject.secretNumber == 42).toBe(true);
      });

      it("make a guess 41 should be return HOT", function () {
          expect(theGuessObject.makeGuess(41)).toBe('HOT')
      });

      it("make a guess 56 should be return WARM", function () {
        expect(theGuessObject.makeGuess(56)).toBe('WARM')
      });

      it("make a guess 76 should be return COOL", function () {
        expect(theGuessObject.makeGuess(76)).toBe('COOL')
      });

      it("make a guess 99 should be return COLD", function () {
        expect(theGuessObject.makeGuess(99)).toBe('COLD')
      });
      
      it("make a guess 42 should be return 'You got it in 3 trials!'", function () {
        theGuessObject.makeGuess(1);
        theGuessObject.makeGuess(2);
        expect(theGuessObject.makeGuess(42)).toBe('You got it in 3 trials!')
      });

    });
});
