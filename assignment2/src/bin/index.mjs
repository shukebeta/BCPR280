#!/usr/bin/env node

"use strict"

import chalk from 'chalk'
import {ReadFileAndCalculate} from "./read-data-file-and-calculate.mjs"

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

(new ReadFileAndCalculate(args[2], args[3])).calculateAndOutput()





