#!/usr/bin/env node --experimental-modules --no-warnings

/**
 * Don't look this file. I wrote this command line interface for task 5: provide a user interface with Nodejs before
 * teacher clarify its truly requirements. The real requirements is asking us to write a http server. I keep this code
 * here just for fun. You really can use nodejs write a command line interface for some specific tasks!
 */


import {ReadFileAndCalculate} from "../bin/read-data-file-and-calculate.mjs"
import fs from 'fs'

import readline from 'readline'
import chalk from 'chalk'

const dataFileFolder = '../../test-data/'

class ContrllerNode {
  constructor(dataFileDir) {
    this.dataFileDir = dataFileDir
    this.fileList = []
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: this.getPrompt()
    })
    this.run()
  }

  getColorText = (error, color) => {
    color = color || 'red'
    return chalk[color](error)
  }

  colorLog = (error, color) => {
    console.log(this.getColorText(error, color))
  }

  getPrompt = () => {
    let promptStrList = [this.getColorText("Data file", 'yellow')]
    this.fileList = []
    fs.readdirSync(dataFileFolder).map((file, index) => {
      this.fileList.push(file)
      promptStrList.push(this.getColorText((index + 1).toString(), 'yellow') + ' ' + file)
    })
    promptStrList.push(
      this.getColorText('Key in two of the yellow numbers such as ', 'green') +
      this.getColorText('1 2', 'yellow') +
      this.getColorText(' or Press Ctrl + C to exit > ', 'green')
    )
    return promptStrList.join("\n")
  }

  run = () => {
    console.clear()
    this.rl.prompt();
    this.rl.on('line', (line) => {

      console.clear()
      let fileIndexList = line.trim().split(/[, ]+/).map(num => num - 1)
      if (fileIndexList.length != 2) {
        this.colorLog('invalid input: you can and only can input two number')
        this.rl.prompt()
        return
      }

      for (let fileIndex of fileIndexList) {
        let _fileIndex = +fileIndex
        if (_fileIndex > this.fileList.length - 1) {
          this.colorLog('invalid input: ' + line + '. At least one of your input is too big!')
          this.rl.prompt()
          return
        } else if (_fileIndex < 0) {
          this.colorLog('invalid input: ' + line + '. At least one of your input is too small!')
          this.rl.prompt()
          return
        } else if (isNaN(_fileIndex)) {
          this.colorLog('invalid input: ' + line + '. At least one of your input is not a number!')
          this.rl.prompt()
          return
        }
      }

      (new ReadFileAndCalculate(
        dataFileFolder + this.fileList[fileIndexList[0]],
        dataFileFolder + this.fileList[fileIndexList[1]])).calculateAndOutput(() => this.rl.prompt())
    }).on('close', () => {
      console.log('Have a great day!')
      process.exit(0)
    })
  }
}

new ContrllerNode(dataFileFolder)