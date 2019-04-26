Vue.component('guess-history', {
  props: ['history'],
  template: `
  <div v-if="history.length > 0">
    <h3> Computer Guess History: </h3>
    <ul class="list-group list-group-flush">
      <li v-for="guess in history" :key="guess.try_count" class="list-group-item"> 
        the {{ number2ordinal(guess.tryCount) }} try, 
        I guessed {{ guess.guess }}, 
        you told me: {{ guess.result }}.
        <span v-if="guess.result !== 'correct'">
          <span v-if="guess.times > 0">
            I'm sure I can guess the number within {{ guess.times }} times. 
          </span>
          <span v-else>
            You lied. 
          </span>
        </span>
      </li>
    </ul>
  </div>
  `,
  methods: {
    number2ordinal: function (number) {
      number = +number
      let reminder = number % 10
      switch (reminder) {
        case 1:
          if (number !== 11) {
            return number + 'st'
          }
          break
        case 2:
          if (number !== 12) {
            return number + 'nd'
          }
          break
        case 3:
          if (number !== 13) {
            return number + 'rd'
          }
          break
      }
      return number + 'th'
    }
  }
})
