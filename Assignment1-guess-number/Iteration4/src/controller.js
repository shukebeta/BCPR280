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
      this.currentGuess = this.currentGame.getGuess(_isHot=false)
      this.startMessage = 'Restart'
    },
    judgeComputer: function(judgeMessage) {
      
      if (judgeMessage != "correct") {
        this.currentGame.refineCandidateList(this.currentGuess, judgeMessage)
        this.currentGame.saveGuess(this.currentGuess, judgeMessage)
        if (!this.currentGame.candidateList.length) {
          this.startMessage = 'Start'
          alert('You lied. Please click Start to begin another game. ')
          return
        } else {
          this.currentGuess = this.currentGame.getGuess(judgeMessage == 'HOT')
        }
      } else {
        this.currentGame.saveGuess(this.currentGuess, judgeMessage)
        this.startMessage = 'Start'
        alert("I have got the number, please click Start to begin another game.")
        return
      }
    }
  }
});
