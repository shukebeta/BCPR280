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

      Object.keys(event.target.files).forEach(i => {
        const file = event.target.files[i]
        for (let uploaded of this.filedata) {
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

          this.filedata.push({fileName: file.name, dataList: dataList, fileId: Math.random().toString()})
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
      let self = this
      axios.get('/api/get-all', {params:{
        listx: self.filedata[0].dataList.join(','),
        listy: self.filedata[1].dataList.join(',')
      }}).then(function(response) {
        self.result = [{
          file1: self.filedata[0].fileName,
          file2: self.filedata[1].fileName,
          squareR: response.data.correlation,
          beta0: response.data.beta0,
          beta1: response.data.beta1
        }]
      })
    },
    bootstrapOn(e) {
      document.getElementById('bootstrap-css').rel = (e.target.checked) ? 'stylesheet' : 'bullshit'
    }
  }
})
