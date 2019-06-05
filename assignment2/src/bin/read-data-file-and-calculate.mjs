import {Correlation} from "../model/Correlation.mjs"
import {LinearRegression} from "../model/LinearRegression.mjs"
import fs from 'fs'
import chalk from 'chalk'

class ReadFileAndCalculate {
  constructor(file1, file2) {
    this.file1 = file1
    this.file2 = file2
  }

  loadDataFile(file) {
    return new Promise(function(resolve, reject) {
      fs.readFile(file, {encoding: 'utf-8'}, (err, data) => {
        if (err) {
          reject(err)
        } else {
          let dataList = data.trim().split(/[\r\n \t]+/).map(num => +num)
          resolve(dataList)
        }
      })
    })
  }

  calculateAndOutput(callback) {
    let result = {
      file1: this.file1,
      file2: this.file2,
      dataList1: [],
      dataList2: [],
      correlation: null,
      beta0: null,
      beta1: null,
    }

    let promiseFile1 = this.loadDataFile(result.file1)
    let promiseFile2 = this.loadDataFile(result.file2)

    Promise.all([promiseFile1, promiseFile2])
      .then((values) => {
        result.dataList1 = values[0]
        result.dataList2 = values[1]
        result.correlation = (new Correlation(result.dataList1, result.dataList2)).getSquareR()
        let lr = new LinearRegression(result.dataList1, result.dataList2)
        result.beta0 = lr.getBeta0()
        result.beta1 = lr.getBeta1()
        this.output(result, callback)
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  output(result, callback) {
    console.log(chalk.yellow('Data List'))
    console.log(chalk.green('file1: (x)'), result.file1, result.dataList1.join(', '))
    console.log(chalk.green('file2: (y)'), result.file2, result.dataList2.join(', '))
    console.log()
    console.log(chalk.yellow('Result'))
    console.log(chalk.green('Correlation:'), chalk.white(result.correlation))
    console.log(chalk.green('Linear Regression beta 0:'), chalk.white(result.beta0))
    console.log(chalk.green('Linear Regression beta 1:'), chalk.white(result.beta1, "\n"))
    fs.writeFile("result.txt", JSON.stringify(result), (err) => {
      if (err) console.log(err);
      console.log("The results have been successfully written to file:", chalk.yellow("./result.txt"))
    })
    if (typeof callback !== 'undefined') {
      callback()
    }
  }
}

export {ReadFileAndCalculate}


