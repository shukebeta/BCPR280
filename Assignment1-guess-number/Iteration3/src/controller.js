let app = new Vue({
  el: '#app',
  data: {
    startMessage: 'Start',
    currentGuess: '',
    npc: new Computer()
  },
  methods: {
    startGame: function () {
      this.npc = new Computer()
      this.currentGuess = this.npc.getGuess()
      this.startMessage = 'Restart'
    },
    judgeComputer: function (event) {
      let judgeMessage = event.target.innerText

      if (this.npc.result === 'correct') {
        return this.npc.celebrate()
      }

      if (this.npc.result === 'mankind lie') {
        return this.npc.complain()
      }

      if (judgeMessage !== 'correct') {
        this.npc.refineCandidateList(this.currentGuess, judgeMessage)
      }

      if (this.npc.isMankindLying()) {
        this._initStartMessage()
        this.npc.complain()
      }

      this.npc.saveGuess(this.currentGuess, judgeMessage)

      if (judgeMessage === 'correct') {
        this._initStartMessage()
        this.currentGuess = ''
        return this.npc.celebrate()
      }

      this.currentGuess = this.npc.getGuess()
    },
    _initStartMessage () {
      this.startMessage = 'Start'
    }
  }
})
