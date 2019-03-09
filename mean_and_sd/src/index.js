let app = new Vue({
  el: '#app',
  data: {
    message: 'hello, vue',
    filedata: [
    ],
    result:[]
  },
  methods: {
    fileChangeHandler: function (event) {
      let self = this
      "use strict" 
      Object.keys(event.target.files).forEach(i => {
        const file = event.target.files[i];
        const reader = new FileReader();
        reader.onload = (event) => {
          let data = event.target.result.trim().split(/[\r\n \t]+/);
          self.filedata.push({fileName: file.name, dataList: data})
          console.log(self.filedata)
        }
        reader.readAsText(file);
      })
    },
    calculateMean: dataList => {
      let total = 0;
      for (let num of dataList) {
        total += +num
      }
      return dataList.length ? (total / dataList.length).toFixed(2) : 0
    },
    calculateStandardDeviation: function (dataList, mean) {
      let sum = 0;
      for (let num of dataList) {
        sum += (num - mean) * (num - mean)
      }
      return dataList.length > 1 ? Math.sqrt (sum / (dataList.length - 1)).toFixed(8) : null
    },
    calculate: function() {
      for (let tableData of this.filedata) {
        tableData.mean = this.calculateMean (tableData.dataList)
        tableData.standardDeviation = this.calculateStandardDeviation(tableData.dataList, tableData.mean)
      }
      this.result = []
      return this.result = this.filedata
    }
  }
});
