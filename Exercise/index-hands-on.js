
// Register a global custom directive called v-focus
Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus()
  }
})

let CounterLettersApp = new Vue({
  el: '#app',
  data: {
    yourCurrentInput: '',
    inputtedChars: '',
    validCharCount: 0,
    stopCounting: false
  },
  methods: {
    onSubmit: function() {
      this.inputtedChars += this.yourCurrentInput;
      if (!this.stopCounting) {
        if (this.yourCurrentInput == '.') {
          this.stopCounting = true
        } else {
          this.validCharCount++
        }
      }
      this.yourCurrentInput = '';
    }
  }
})
