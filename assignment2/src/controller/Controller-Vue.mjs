import {Correlation} from "../model/Correlation.mjs"
import {LinearRegression} from "../model/LinearRegression.mjs"

new Vue({
  el: '#app',
  data: {
    filedata: [],
    result: null
  },
  methods: {
    fileChangeHandler (event) {
      if (event.target.files.length > 2 - this.filedata.length) {
        alert("You can select at most " + (2 - this.filedata.length) + " file(s).")
        return
      }
      let self = this
      "use strict"
      Object.keys(event.target.files).forEach(i => {
        const file = event.target.files[i];
        for (let uploaded of self.filedata) {
          if (file.name == uploaded.fileName) {
            return
          }
        }

        const reader = new FileReader();
        reader.onload = (event) => {
          let data = event.target.result.trim().split(/[\r\n \t]+/);
          let dataList = []
          for(let num of data) {
            if (isNaN(num)) {
              return
            }
            dataList.push(+num)
          }

          self.filedata.push({fileName: file.name, dataList: dataList, fileId: Math.random().toString()})
        }
        reader.readAsText(file);
      })
    },

    removeFile(fileId) {
      let newFileData = []
      for (let file of this.filedata) {
        if(file.fileId != fileId) {
          newFileData.push(file)
        }
      }
      this.filedata = newFileData
      this.result = null
    },
    calculate() {
      let correlation = new Correlation(this.filedata[0].dataList, this.filedata[1].dataList)
      let lra = new LinearRegression(this.filedata[0].dataList, this.filedata[1].dataList)
      let lr2 = new LinearRegression(this.filedata[1].dataList, this.filedata[0].dataList)

      this.result = null
      this.result = [
        {
          file1: this.filedata[0].fileName,
          file2: this.filedata[1].fileName,
          squareR: correlation.getSquareR(),
          beta0: lra.getBeta0(),
          beta1: lra.getBeta1()
        },{
          file1: this.filedata[1].fileName,
          file2: this.filedata[0].fileName,
          squareR: correlation.getSquareR(),
          beta0: lr2.getBeta0(),
          beta1: lr2.getBeta1()
        }
      ]
    },
    bootstrapOn(e) {
      document.getElementById('bootstrap-css').rel = (e.target.checked) ? 'stylesheet' : 'bullshit'
    }
  }
})
