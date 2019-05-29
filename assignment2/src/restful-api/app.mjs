import express from 'express'
import {Correlation} from "../model/Correlation.mjs"
import {LinearRegression} from "../model/LinearRegression.mjs"

// Set up the express app
const app = express()

let getValidList = function(listStr) {
  listStr = listStr || ''
  return listStr.trim(', ').split(/[, ]+/).map((num) => +num)
}

app.get('/api/get-correlation', (req, res) => {

  let listx = getValidList(req.query.listx)
  let listy = getValidList(req.query.listy)

  if (listx.length && listy.length && listx.length === listy.length) {
    res.status(200).send({
      success: 'true',
      correlation: (new Correlation(listx, listy)).getSquareR(),
    })
  } else {
    res.status(200).send({
      success: 'false',
      message: 'invalid listx or listy',
    })
  }
})

app.get('/api/get-linear-regression', (req, res) => {

  let listx = getValidList(req.query.listx)
  let listy = getValidList(req.query.listy)
  let lr = new LinearRegression(listx, listy)

  if (listx.length && listy.length && listx.length === listy.length) {
    res.status(200).send({
      success: 'true',
      beta0: lr.getBeta0(),
      beta1: lr.getBeta1()
    })
  } else {
    res.status(200).send({
      success: 'false',
      message: 'invalid listx or listy',
    })
  }
})

app.get('/api/get-all', (req, res) => {

  let listx = getValidList(req.query.listx)
  let listy = getValidList(req.query.listy)
  let lr = new LinearRegression(listx, listy)

  if (listx.length && listy.length && listx.length === listy.length) {
    res.status(200).send({
      success: 'true',
      correlation: (new Correlation(listx, listy)).getSquareR(),
      beta0: lr.getBeta0(),
      beta1: lr.getBeta1()
    })
  } else {
    res.status(200).send({
      success: 'false',
      message: 'invalid listx or listy',
    })
  }
})

const PORT = 8964;

app.use(express.static('./htdocs'));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})