describe("make a guess", function () {
  'use strict'
  describe("test Computer", function () {
    let npc
    beforeEach(function () {
        npc = new Computer()
    })

    it("mankind lied", function () {
      let guess = 40
      npc.refineCandidateList(guess, 'Try higher')
      guess = 41
      npc.refineCandidateList(guess, 'Try lower')
      expect(npc.isMankindLying()).toBe(true)
    })

    it("tryCount should be increased after getGuess", function () {
      expect(npc.tryCount == 0).toBe(true)
      npc.getGuess()
      expect(npc.tryCount == 1).toBe(true)
    })

    it("guessHistory should be increased after each guess", function () {
      expect(npc.guessHistory.length == 0).toBe(true)
      let guess = npc.getGuess()
      let result = 'Try higher'
      if (guess > 90) {
        result = 'Try lower'
      }
      npc.refineCandidateList(guess, result)
      npc.saveGuess(guess, result)
      expect(npc.guessHistory.length == 1).toBe(true)
      
      guess = npc.getGuess()
      result = 'Try higher'
      if (guess > 90) {
        result = 'Try lower'
      }
      npc.refineCandidateList(guess, result)
      npc.saveGuess(guess, result)
      expect(npc.guessHistory.length == 2).toBe(true)
    })

  })
})
