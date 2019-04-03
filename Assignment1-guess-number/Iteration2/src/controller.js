let app = new Vue({
  el: '#app',
  data: {
    startMessage: 'Start',
    yourCurrentGuess: '',
    filedata: [
    ],
    guessHistory: [],
    secretNumber: -1,
    promptMessage: '',
    currentGame: null
  },
  methods: {
    startGame: function (event) {
      this.currentGame = new GuessExtended()
      this.secretNumber = this.currentGame.secretNumber
      this.startMessage = 'Restart'
      this.promptMessage = ''
      this.guessHistory = []
      this.tryCount = 0
      this.$nextTick(() => this.$refs.input.focus())
    },
    submitYourInput: function () {
      this.yourCurrentGuess = +this.yourCurrentGuess
      if (Number.isInteger(this.yourCurrentGuess)) {
        if (!this.currentGame.isValidNumber(this.yourCurrentGuess)) {
          alert('You must enter a number between 0 and 99!')
          this.yourCurrentGuess = ''
          return
        }
      } else {
        alert('You must enter a number!')
        this.yourCurrentGuess = ''
        return
      }

      this.promptMessage = this.currentGame.makeGuess(this.yourCurrentGuess)
      if (this.promptMessage.startsWith('You got it')) {
        this.startMessage = 'Start'
      }

      this.guessHistory.push({ tryCount: this.currentGame.tryCount, number: this.yourCurrentGuess })
      this.yourCurrentGuess = ''
    }
  }
})
