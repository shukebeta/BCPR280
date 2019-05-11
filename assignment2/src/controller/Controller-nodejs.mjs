
import {ReadFileAndCalculate} from "../bin/read-data-file-and-calculate.mjs"
import fs from 'fs'

import readline from 'readline'
import chalk from 'chalk'

const dataFileFolder = '../test-data/'
let fileList

let getPrompt = () => {
  let promptStrList = [chalk.green("data file list:")]
  fileList = []
  fs.readdirSync(dataFileFolder).map((file, index) => {
    fileList.push(file)
    promptStrList.push((index + 1) + ' ' + file)
  })
  promptStrList.push(chalk.greenBright('Please input two space separated number ahead the data file> '))
  return promptStrList.join("\n")
}

let errorLog = (error) => {
  const eLog = chalk.red(error)
  console.log(eLog)
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: getPrompt()
});

rl.prompt();

rl.on('line', (line) => {
  let fileIndexList = line.trim().split(/[, ]+/).map(num => num - 1)

  if (fileIndexList.length != 2) {
    errorLog('invalid input: you can and only can input two number')
    rl.prompt()
    return
  }

  for (let fileIndex of fileIndexList) {
    if (fileIndex + 1 > fileList.length) {
      errorLog('invalid input: your input is too big!')
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