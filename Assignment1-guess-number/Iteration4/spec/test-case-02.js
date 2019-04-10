describe("make a guess", function () {
  'use strict'
  describe("test ComputerExtended", function () {
    let npc
    beforeEach(function () {
        npc = new ComputerExtended()
    })

    it("mankind lied", function () {
      let guess = 40
      npc.refineCandidateList(guess, 'HOT')
      guess = 42
      npc.refineCandidateList(guess, 'COLD')
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
      npc.refineCandidateList(guess, 'HOT')
      npc.saveGuess(guess, 'HOT')
      expect(npc.guessHistory.length == 1).toBe(true)
      let anotherGuess = npc.getGuess()
      npc.refineCandidateList(anotherGuess, 'HOT')
      npc.saveGuess(anotherGuess, 'HOT')
      expect(npc.guessHistory.length == 2).toBe(true)
    })

  })
})
