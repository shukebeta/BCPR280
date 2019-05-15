#!/usr/bin/env node --experimental-modules

import {ReadFileAndCalculate} from "../bin/read-data-file-and-calculate.mjs"
import fs from 'fs'

import readline from 'readline'
import chalk from 'chalk'

const dataFileFolder = '../../test-data/'
let fileList

console.clear()

let getColorText = (error, color) => {
  color = color || 'red'
  return chalk[color](error)
}

let colorLog = (error, color) => {
  console.log(getColorText(error, color))
}


let getPrompt = () => {
  let promptStrList = [chalk.greenBright("data file list:")]
  fileList = []
  fs.readdirSync(dataFileFolder).map((file, index) => {
    fileList.push(file)
    promptStrList.push(getColorText((index + 1).toString(), 'yellow') + ' ' + file)
  })
  promptStrList.push(chalk.greenBright('Please input two space separated number ahead the data file> '))
  return promptStrList.join("\n")
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: getPrompt()
});

rl.prompt();

rl.on('line', (line) => {
  console.clear()
  let fileIndexList = line.trim().split(/[, ]+/).map(num => num - 1)

  if (fileIndexList.length != 2) {
    colorLog('invalid input: you can and only can input two number')
    rl.prompt()
    return
  }

  for (let fileIndex of fileIndexList) {
    if (fileIndex + 1 > fileList.length) {
      colorLog('invalid input: your input is too big!')
      rl.prompt()
      return
    }
  }
  (new ReadFileAndCalculate(
    dataFileFolder + fileList[fileIndexList[0]],
    dataFileFolder + fileList[fileIndexList[1]])).calculateAndOutput(() => rl.prompt())
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});