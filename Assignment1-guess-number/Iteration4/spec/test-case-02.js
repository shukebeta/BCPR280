describe("make a guess", function () {
  'use strict'
  describe("generate a secret number", function () {
      var npc
      beforeEach(function () {
          npc = new Computer()
      })

      it("the secretNumber should be 42", function () {
          expect(npc.secretNumber == 42).toBe(true)
      })

      it("make a guess 41 should be return HOT", function () {
          expect(npc.makeGuess(41)).toBe('HOT')
      })

      it("make a guess 56 should be return WARM", function () {
        expect(npc.makeGuess(56)).toBe('WARM')
      })

      it("make a guess 76 should be return COOL", function () {
        expect(npc.makeGuess(76)).toBe('COOL')
      })

      it("make a guess 99 should be return COLD", function () {
        expect(npc.makeGuess(99)).toBe('COLD')
      })
      
      it("make a guess 42 should be return 'You got it in 3 trials!'", function () {
        npc.makeGuess(1)
        npc.makeGuess(2)
        expect(npc.makeGuess(42)).toBe('You got it in 3 trials!')
      })

    })
})
