describe("make a guess", function () {
  'use strict'
  describe("test ComputerExtended", function () {
    let npc
    beforeEach(function () {
        npc = new ComputerExtended()
    })

    it("mankind lied", function () {
      let npc = new ComputerExtended()
      let guess = 0
      npc.refineCandidateList(guess, 'COLD')
      guess = 99
      npc.refineCandidateList(guess, 'COLD')
      guess = 50
      npc.refineCandidateList(guess, 'COLD')
      expect(npc.isMankindLying()).toBe(true)
    })

    it("mankind lied", function () {
      let npc = new ComputerExtended()
      let guess = 0
      npc.refineCandidateList(guess, 'WARM')
      guess = 99
      npc.refineCandidateList(guess, 'WARM')
      expect(npc.isMankindLying()).toBe(true)
    })

    it("mankind lied", function () {
      let npc = new ComputerExtended()
      let guess = 0
      npc.refineCandidateList(guess, 'COOL')
      guess = 99
      npc.refineCandidateList(guess, 'COOL')
      expect(npc.isMankindLying()).toBe(true)
    })

    it("mankind lied", function () {
      let npc = new ComputerExtended()
      let guess = 0
      npc.refineCandidateList(guess, 'HOT')
      guess = 99
      npc.refineCandidateList(guess, 'HOT')
      expect(npc.isMankindLying()).toBe(true)
    })

    it("tryCount should be increased after getGuess", function () {
      let npc = new ComputerExtended()
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
