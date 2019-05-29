#!/usr/bin/env node --experimental-modules --no-warnings
/*
Building a Node.js static file server (files over HTTP) using ES6+
https://adrianmejia.com/blog/2016/08/24/building-a-node-js-static-file-server-files-over-http-using-es6/
*/
import http from 'http'
import fs from 'fs'
import url from 'url'
import path from 'path'
import mime from 'mime'
import qs from 'querystring'
import ApiRequest from './ApiRequest.js'

const WWW_FILE_DIR = 'htdocs/'
const SERVER_PORT = 8964

class HttpServer {

  constructor(server_port, www_file_dir) {
    this.server_port = server_port
    this.www_file_dir = www_file_dir
  }

  start() {
    // Create a server
    http.createServer((request, response) => {
      // Parse the request containing file name
      let pathName = url.parse(request.url).pathname

      // Print the name of the file for which request is made.
      console.log("Request for " + pathName + " received.")

      // Get the extension of the required file
      const ext = path.parse(pathName).ext

      // process api request
      const validApiList = {
        '/api/get-correlation': 'return correlation',
        '/api/get-linear-regression': 'return linear-regression',
        '/api/get-all': 'one request return correlation & linear-regression'
      }
      if (!ext && (pathName.substr(0, 5) === '/api/') && typeof validApiList[pathName] != 'undefined') {
        let api = pathName
        if (request.method === 'POST') {
          let body = ''
          request.on('data', function (data) {
            body += data

            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6) {
              request.connection.destroy()
              HttpServer.writeJsonResponseHeader(response)
              HttpServer.writeData(response, {
                success: 'false',
                message: 'too many data posted!',
              })
              response.end()
            }
          })

          request.on('end', function () {
            let userRequest = qs.parse(body)
            ApiRequest.process(api, userRequest, response)
          })
        } else if (request.method === 'GET') {
          let userRequest = qs.parse(request.url.substr(request.url.indexOf('?') + 1))
          ApiRequest.process(api, userRequest, response)
        } else {
          HttpServer.writeResponseHeader(response, 500)
          HttpServer.writeData(response, "unsupported request type:" + request.method)
        }
      } else { // process file request
        // Read the requested file content from file system
        let fileName = this.www_file_dir + pathName.substr(1)
        fs.readFile(fileName, (err, fileContent) => {
          if (err) {
            console.log(err)
            HttpServer.writeResponseHeader(response, 404)
            let htmlFileList = ''
            fs.readdir(this.www_file_dir, (err, files) => {
              files.forEach(file => {
                if (file.match(/\.htm|\.html$/i)) {
                  htmlFileList += `<a href='/${file}'>${file}</a>`
                }
              })
              let errMessage = `File ${pathName} not found!\n Available html file:\n` + htmlFileList
              HttpServer.writeData(response, errMessage.replace('\n', '<br>'))
              response.end()
            })
            return
          }

          // HTTP Status: 200 : OK
          HttpServer.writeResponseHeader(response, 200, fileName)
          // Write the content of the file to response body
          response.write(fileContent)

          // Send the response body
          response.end()
        })
      }
    }).listen(this.server_port)
    console.log(`Server running at localhost:${SERVER_PORT}/`)
  }

  static writeResponseHeader(response_object, response_code, response_header) {
    if (typeof response_header === 'string') {
      response_header = {
        'Content-type': mime.lookup(response_header)
      }
    }

    response_header = response_header || {
      'Content-type': 'text/html'
    }
    response_object.writeHead(response_code, response_header)
  }

  static writeJsonResponseHeader(response_object) {
    HttpServer.writeResponseHeader(response_object, 200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  static writeData(response_object, data) {
    if (typeof data === 'string') {
      response_object.write(data)
    } else {
      response_object.write(JSON.stringify(data))
    }
  }
}

new HttpServer(SERVER_PORT, WWW_FILE_DIR).start()


