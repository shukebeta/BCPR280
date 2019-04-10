
// Register a global custom directive called v-focus
Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus()
  }
})
Vue.component("count-letter-component", {
  template: `
  <div>
    <div>
    <label>Please input a character: 
    <input type="text" size="5"
      v-model="yourCurrentInput" 
      :maxlength="1" 
      v-focus 
      v-on:keyup.enter="onSubmit"></label>  
    <button type="button" v-on:click="onSubmit">Submit</button>
    </div>
    <div>
      <p>You have entered: {{ inputtedChars }}</p> 
      <p>Valid char count: {{ validCharCount }}</p> 
    </div>
  </div>
  `,
  data: function() {
    return {
      yourCurrentInput:'',    
      validCharCount: 0,
      inputtedChars: '',
      stopCounting: false
    }
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

let app = new Vue({
  el: "#app"
})
