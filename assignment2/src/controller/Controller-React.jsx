class FileUploader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uploadedFileCount: 0,
      result: null,
      filedata: [],
      errorFileList: [],
    }
  }

  fileChange = (event) => {
    "use strict"
    let availableFileCount = 2 - this.state.uploadedFileCount
    if (event.target.files.length > availableFileCount) {
      alert("You can select at most " + availableFileCount + " file(s).")
      return
    }

    let that = this
    let self = this.state

    Object.keys(event.target.files).forEach(i => {
      const file = event.target.files[i];
      for (let uploaded of self.filedata) {
        if (file.name === uploaded.fileName) {
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

        self.filedata.push({fileName: file.name, dataList: dataList})
        that.setState({
          filedata: self.filedata,
          uploadedFileCount: that.state.uploadedFileCount + 1
        })
      }
      reader.readAsText(file);
    })
  }

  removeFile = (fileName) => {
    let newFileData = []
    for (let file of this.state.filedata) {
      if(file.fileName != fileName) {
        newFileData.push(file)
      }
    }

    this.setState({
      uploadedFileCount: this.state.uploadedFileCount - 1,
      filedata: newFileData,
      result: null
    })
  }

  calculate = () => {
    let correlation = new Correlation(this.state.filedata[0].dataList, this.state.filedata[1].dataList)
    let lra = new LinearRegression(this.state.filedata[0].dataList, this.state.filedata[1].dataList)
    let lr2 = new LinearRegression(this.state.filedata[1].dataList, this.state.filedata[0].dataList)

    this.setState({
      result: [
        {
          file1: this.state.filedata[0].fileName,
          file2: this.state.filedata[1].fileName,
          squareR: correlation.getSquareR(),
          beta0: lra.getBeta0(),
          beta1: lra.getBeta1()
        },{
          file1: this.state.filedata[1].fileName,
          file2: this.state.filedata[0].fileName,
          squareR: correlation.getSquareR(),
          beta0: lr2.getBeta0(),
          beta1: lr2.getBeta1()
        }
      ]
    });
  }

  render() {
    let availableFileCount = 2 - this.state.uploadedFileCount
    return (
      <React.Fragment>
        {
          !!availableFileCount &&
          <label className="abutton">
            Select {availableFileCount} Data File
            <input id="inputFile" type="file" multiple="multiple" onChange={this.fileChange}></input>
          </label>
        }
        {!!this.state.filedata.length &&
        <React.Fragment>
          <h2>Data List</h2>
          <table>
            <tbody>
            {this.state.filedata.map((file) =>
              <tr key={file.fileName}>
                <td>{file.fileName}</td>
                <td>{file.dataList.join(', ')}</td>
                <td><a onClick={() => this.removeFile(file.fileName)}>Remove</a></td>
              </tr>
            )}
            </tbody>
          </table>
        </React.Fragment>
        }
        {
          !availableFileCount && !this.state.result &&
          <p>
            <label className="abutton">
              Calculate
              <input type="button" onClick={this.calculate}></input>
            </label>
          </p>
        }
        {!!this.state.result &&
        <React.Fragment>
        <h2>Result</h2>
        <table>
          <tbody>
          <tr>
            <th>File1 (x)</th>
            <th>File2 (y)</th>
            <th>Correlation</th>
            <th>LR beta 0</th>
            <th>LR beta 1</th>
          </tr>
          <tr>
            <td>{this.state.result[0].file1}</td>
            <td>{this.state.result[0].file2}</td>
            <td>{this.state.result[0].squareR}</td>
            <td>{this.state.result[0].beta0}</td>
            <td>{this.state.result[0].beta1}</td>
          </tr>
          <tr>
            <td>{this.state.result[1].file1}</td>
            <td>{this.state.result[1].file2}</td>
            <td>{this.state.result[1].squareR}</td>
            <td>{this.state.result[1].beta0}</td>
            <td>{this.state.result[1].beta1}</td>
          </tr>
          </tbody>
          </table>
          </React.Fragment>
        }
      </React.Fragment>
    )
  }

}

ReactDOM.render(
  <FileUploader />,
  document.getElementById('root')
);
