let app = new Vue({
  el: '#app',
  data: {
    startMessage: 'Start',
    currentGuess: '',
    isHot: false,
    currentGame: null
  },
  methods: {
    startGame: function (event) {      
      this.currentGame = new Computer()
      this.currentGuess = this.currentGame.getGuess()
      this.startMessage = 'Restart'
      this.isHot = false
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

      this.currentGame.tryCount++
      if(!this.currentGame.guessRange.length) {
        this.currentGame.getNextGuessRange(this.currentGuess, judgeMessage)
      }

      let complainMessage = this.currentGame.getComplainMessage(this.currentGuess, judgeMessage)
      if(complainMessage) {
        this.startMessage = 'Start'
        this.currentGame.result = "mankind lie"
        this.currentGame.complain(complainMessage)
      } else {
        
        if (judgeMessage == "correct") {
          this.currentGame.result = judgeMessage
          this.startMessage = 'Start'
        } else {
          if (judgeMessage != 'HOT') {
            newGuess = this.currentGame.getGuess(this.isHot, judgeMessage)
            if (!this.isHot && !newGuess) {
              console.log('helloworld1')
              console.log(this.currentGame.guessRange)
              this.currentGame.getNextGuessRange(this.currentGuess, judgeMessage)
              newGuess = this.currentGame.getGuess(this.isHot, judgeMessage)
            }
            console.log('helloworld2')
            console.log(this.currentGame.guessRange)
          } else if(!this.isHot) {
            this.currentGame.getNextGuessRange(this.currentGuess, judgeMessage)
            console.log('helloworld3')
            console.log(this.currentGame.guessRange)
            this.isHot = true
            newGuess = this.currentGame.getGuess(this.isHot, judgeMessage)
          } else {
            newGuess = this.currentGame.getGuess(this.isHot, judgeMessage)
          }
          
          this.currentGame.saveGuess(this.currentGuess, judgeMessage)
        console.log(this.currentGame.guessRange)

          this.currentGuess = newGuess
        }
      }
    }
  }
});
