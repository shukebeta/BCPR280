

let componentA = {
  props:['numberList'],
  template: `<ol>
  <li v-for="aNumber in numberList">{{ aNumber*aNumber }}</li>
</ol>
  `
}

let componentB = {
  props:['numberList'],
  template: `<table>
  <tr><td>Number</td><td>Square of Left Number</td></tr>
  <tr v-for="aNumber in numberList"><td>{{ aNumber }}</td><td>{{ aNumber*aNumber }}</td></tr>
</table>
  `
}

Vue.component("square-calculation", {
  template: `
  <div>
    <input type="text" size="4" v-model="stop">
    <button type="button" v-on:click="calculateSquare">Calculate</button>
    <div>
      <component-a :numberList="allMyNumbers"></component-a>
      <component-b :numberList="allMyNumbers"></component-b>
    </div>
  </div>
  `,
  data: function() {
    return {
      allMyNumbers: [],
      start: 1,
      stop: 1
    }
  },
  components: {
    'component-a': componentA,
    'component-b': componentB
  },
  methods: {
    calculateSquare: function() {
      let numbers = []
      for(let i=this.start; i<=this.stop; i++) {
        numbers.push(i)
      }
      this.allMyNumbers = numbers
      console.log(this.allMyNumbers)
    }
  }
})



let squareCalculation = new Vue({
  el: '#square-calculation',

})


