import {Correlation} from "../model/Correlation.mjs"
import {LinearRegression} from "../model/LinearRegression.mjs"
import fs from 'fs'
import chalk from 'chalk'

class ReadFileAndCalculate {
  constructor(file1, file2) {
    this.file1 = file1
    this.file2 = file2
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

    fs.readFile(result.file1, {encoding: 'utf-8'}, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        result.dataList1 = data.trim().split(/[\r\n \t]+/).map(num => +num)
        fs.readFile(result.file2, {encoding: 'utf-8'}, (err, data) => {
          if (err) {
            console.log(err)
          } else {
            result.dataList2 = data.trim().split(/[\r\n \t]+/).map(num => +num)
            result.correlation = (new Correlation(result.dataList1, result.dataList2)).getSquareR()
            let lr = new LinearRegression(result.dataList1, result.dataList2)
            result.beta0 = lr.getBeta0()
            result.beta1 = lr.getBeta1()

            console.log(chalk.yellow('Data List'))
            console.log(chalk.green('file1: (x)'), result.file1, result.dataList1.join(', '))
            console.log(chalk.green('file2: (y)'), result.file2, result.dataList2.join(', '))
            console.log()
            console.log(chalk.yellow('Result'))
            console.log(chalk.green('Correlation:'), chalk.white(result.correlation))
            console.log(chalk.green('Linear Regression beta 0:'), chalk.white(result.beta0))
            console.log(chalk.green('Linear Regression beta 1:'), chalk.white(result.beta1, "\n"))
            if (typeof callback !== 'undefined') {
              callback()
            }
          }
        })
      }
    })
  }
}

export {ReadFileAndCalculate}


