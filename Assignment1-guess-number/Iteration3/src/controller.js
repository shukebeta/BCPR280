let app = new Vue({
  el: '#app',
  data: {
    startMessage: 'Start',
    currentGuess: '',
    currentGame: null
  },
  methods: {
    startGame: function (event) {      
      this.currentGame = new Computer()
      this.currentGuess = this.currentGame.getGuess()
      this.startMessage = 'Restart'
    },
    judgeComputer: function(judgeMessage) {
      if (this.currentGame.result == "correct") {
        alert("Computer has won, please click Start to begin another game.")
        return
      }

      if (this.currentGame.result == "mankind lie") {
        alert("You lied, please click Start to begin another game.")
        return
      }

      let complainMessage = this.currentGame.getComplainMessage(this.currentGuess, judgeMessage)
      if(complainMessage) {
        this.startMessage = 'Start'
        this.currentGame.result = "mankind lie"
        this.currentGame.complain(complainMessage)
      } else {
        this.currentGame.saveGuess(this.currentGuess, judgeMessage)
        this.currentGuess = this.currentGame.getGuess()
        if (judgeMessage == "correct") {
          this.currentGame.result = judgeMessage
          this.startMessage = 'Start'
        }
      }
    }
  }
});
