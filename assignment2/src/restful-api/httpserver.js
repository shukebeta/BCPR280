#!/usr/bin/env node --experimental-modules --no-warnings
/*
Building a Node.js static file server (files over HTTP) using ES6+
https://adrianmejia.com/blog/2016/08/24/building-a-node-js-static-file-server-files-over-http-using-es6/

MIME Types List
https://www.freeformatter.com/mime-types-list.html
*/

// can handle image file request as well

import http from 'http'
import fs from 'fs'
import url from 'url'
import path from 'path'
import mime from 'mime'
import qs from 'querystring'
import ApiRequest from './ApiRequest.js'

const wwwfilePrefix = 'htdocs/'
const SERVER_PORT = 8964

const validApiList = {
  '/api/get-correlation': 'return correlation',
  '/api/get-linear-regression': 'return linear-regression',
  '/api/get-all': 'one request return correlation & linear-regression'
}

// Create a server
http.createServer(function (request, response) {
  // Parse the request containing file name
  let pathName = url.parse(request.url).pathname

  if (pathName == '/') {
    pathName = '/index.html'
  }
  // Print the name of the file for which request is made.
  console.log("Request for " + pathName + " received.")

  // Get the extension of the required file
  const ext = path.parse(pathName).ext

  // process api request
  if (!ext && (pathName.substr(0, 5) == '/api/') && typeof validApiList[pathName] != 'undefined') {
    let api = pathName
    if (request.method == 'POST') {
      let body = ''
      request.on('data', function (data) {
        body += data

        // Too much POST data, kill the connection!
        // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
        if (body.length > 1e6) {
          request.connection.destroy()
          res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          })
          res.write(JSON.stringify({
            success: 'false',
            message: 'two many data posted!',
          }))
          response.end()
          return
        }
      })

      request.on('end', function () {
        let userRequest = qs.parse(body)
        ApiRequest.process(api, userRequest, response)
      })
    } else {

      let userRequest = qs.parse(request.url.substr(request.url.indexOf('?') + 1))
      console.log(request.url)
      console.log(userRequest)
      ApiRequest.process(api, userRequest, response)
    }
  } else { // process file request

    // Read the requested file content from file system
    let fileName = wwwfilePrefix + pathName.substr(1)
    fs.readFile(fileName, function (err, fileContent) {
      if (err) {
        console.log(err)
        // HTTP Status: 404 : NOT FOUND
        // Content Type: text/plain
        response.writeHead(404, {
          'Content-Type': 'text/html'
        })
        response.end(`File ${pathName} not found!`)
        return
      }

      // Corresponding file found
      // HTTP Status: 200 : OK
      response.writeHead(200, {
        'Content-Type': mime.lookup(pathName)
      })

      // Write the content of the file to response body
      response.write(fileContent)

      // Send the response body
      response.end()
      return
    })
  }
}).listen(SERVER_PORT)

// Console will print the message
console.log(`Server running at localhost:${SERVER_PORT}/`)
