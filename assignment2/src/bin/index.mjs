#!/usr/bin/env node --experimental-modules --no-warnings

import {ReadFileAndCalculate} from "./read-data-file-and-calculate.mjs"

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

// we make sure the length of the arguments is exactly four
if (args.length != 4) {
  usage()
} else {
  (new ReadFileAndCalculate(args[2], args[3])).calculateAndOutput()
}





