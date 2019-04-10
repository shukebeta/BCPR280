let squareCalculation = new Vue({
  el: '#square-calculation',
  data: {
    start: 55,
    end: 75,
    allMyNumbers: []
  },
  methods: {
    init: function() {
      let tmpList = [];
      for(let i=this.start; i <= this.end; i++) {
        tmpList.push({val: i, square: ''})
      }
      this.allMyNumbers = tmpList
    },
    calculateSquare: function() {
      for(let aNumber of this.allMyNumbers) {
        aNumber.square = aNumber.val * aNumber.val
      }
    }
  }
})

squareCalculation.init();

