#!/usr/bin/env node

"use strict"
import {Correlation} from "../model/Correlation.mjs"
import {LinearRegression} from "../model/LinearRegression.mjs"

import chalk from 'chalk'
import fs from 'fs'
//import path from 'path'
//const __dirname = decodeURIComponent(path.dirname(new URL(import.meta.url).pathname))

const args = process.argv

// usage represents the help guide
const usage = function() {
  const usageText = `
  index.js help you calculate correlation and linear regression beta0 and beta1.

  usage:
    index.js <datafile1> <datafile2>
  `

  console.log(usageText)
}

// used to log errors to the console in red color
function errorLog(error) {
  const eLog = chalk.red(error)
  console.log(eLog)
}

// we make sure the length of the arguments is exactly four
if (args.length != 4) {
  errorLog(`only two argument can be accepted`)
  usage()
}

//let file1 = path.join(__dirname, args[2])
//let file2 = path.join(__dirname, args[3])


let result = {
  file1: args[2],
  file2: args[3],
  dataList1: [],
  dataList2: [],
  correlation: null,
  beta0: null,
  beta1: null,
}

fs.readFile(args[2], {encoding: 'utf-8'}, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    result.dataList1 = data.trim().split(/[\r\n \t]+/).map(num => +num)
    fs.readFile(args[3], {encoding: 'utf-8'}, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        result.dataList2 = data.trim().split(/[\r\n \t]+/).map(num => +num)
        result.correlation = (new Correlation(result.dataList1, result.dataList2)).getSquareR()
        let lr = new LinearRegression(result.dataList1, result.dataList2)
        result.beta0 = lr.getBeta0()
        result.beta1 = lr.getBeta1()

        console.log('file1:', result.file1, result.dataList1)
        console.log('file2:', result.file2, result.dataList2)
        console.log('Correlation:', result.correlation)
        console.log('Linear Regression beta 0:', result.beta0)
        console.log('Linear Regression beta 1:', result.beta1)
      }
    })
  }
});




