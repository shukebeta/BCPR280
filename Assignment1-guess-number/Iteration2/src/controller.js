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
      setTimeout(() => {
        this.currentGame = new Guess();
        this.secretNumber = this.currentGame.secretNumber;
        this.promptMessage = ''
        this.guessHistory = []
        this.tryCount = 0
        this.$nextTick(() => this.$refs.input.focus())
      }, 500)
    },
    submitYourInput: function() {
      if (this.startMessage == "Start") {
        this.startMessage = 'Restart'
      }
      
      this.promptMessage = this.currentGame.makeGuess(this.yourCurrentGuess);
      
      if (this.promptMessage.startsWith("You got it")) {
        this.startMessage = 'Start'
      }

      this.guessHistory.push({tryCount: this.currentGame.tryCount, number: this.yourCurrentGuess})
      this.yourCurrentGuess = ''
    }
  }
});
