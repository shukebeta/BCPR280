let app = new Vue({
  el: '#app',
  data: {
    startMessage: 'Start',
    yourCurrentGuess: '',
    filedata: [
    ],
    tryCount: 0,
    guessHistory: [],
    secretNumber: -1,
    promptMessage: ''
  },
  methods: {
    startGame: function (event) {      
      this.secretNumber = -1
      let self = this
      setTimeout(() => {
        this.secretNumber = Math.floor(Math.random() * 100)
        this.promptMessage = ''
        this.guessHistory = []
        this.tryCount = 0
        this.$nextTick(() => this.$refs.input.focus())
      }, 500)
      
    },
    submitYourInput: function() {
      this.tryCount++;
      this.guessHistory.push({tryCount: this.tryCount, number: this.yourCurrentGuess})
      if (this.yourCurrentGuess > this.secretNumber) {
        this.promptMessage = 'Try lower'
      } else if (this.yourCurrentGuess < this.secretNumber) {
        this.promptMessage = 'Try Higher'
      } else {
        this.promptMessage = 'You got it!'
      }
      this.yourCurrentGuess = ''
      this.startMessage = 'Restart'
    }
  }
});
