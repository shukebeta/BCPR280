import {Correlation} from "../model/Correlation.mjs"
import {LinearRegression} from "../model/LinearRegression.mjs"

class ApiRequest {

  static process(api, userRequest, res) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })

    let listx = ApiRequest.getValidList(userRequest.listx)
    let listy = ApiRequest.getValidList(userRequest.listy)

    if (!listx.length || !listy.length || (listx.length != listy.length)) {
      res.write(JSON.stringify({
        success: 'false',
        message: 'invalid listx or listy',
      }))
      res.end()
      return
    }

    let lr = new LinearRegression(listx, listy)
    switch (api) {
      case '/api/get-correlation':
        res.write(JSON.stringify({
          success: 'true',
          correlation: (new Correlation(listx, listy)).getSquareR(),
        }))
        break;
      case '/api/get-linear-regression':
        res.write(JSON.stringify({
          success: 'true',
          beta0: lr.getBeta0(),
          beta1: lr.getBeta1()
        }))
        break;
      case '/api/get-all':
        res.write(JSON.stringify({
          success: 'true',
          correlation: (new Correlation(listx, listy)).getSquareR(),
          beta0: lr.getBeta0(),
          beta1: lr.getBeta1()
        }))
        break;
    }
    res.end()
    return
  }

  static getValidList(listStr) {
    listStr = listStr || ''
    return listStr.trim(', ').split(/[, ]+/).map((num) => +num)
  }
}

export default ApiRequest
