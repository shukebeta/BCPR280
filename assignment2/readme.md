# Zhong Wei's Assignment 2 for BCPR280

I have made a simple 8 slides powerpoint presentation for this assignment. Its is located at the root directory of my assignment, which is named **Presentation.pptx**

## Task 1 & Task 2

> 1. Write a program that calculates the correlation of two arrays of numbers,
> 2. Adapt / extend the first program to calculate the regression of two arrays of numbers.

The code file for Task 1 & Task 2 is located at `./src/model`  directory. There are three files in that directory. You can run the Jasmine test case file `./test-case.html` to check the testing result.
    
    ─ model
      ├── Correlation.mjs
      ├── LinearRegression.mjs
      └── MathLib.mjs
    
  The test specifications are located at `./spec` directory.
  
## Task 3: Provide a user interface with Vuejs

The code files for task 3 are `./src/index-vue.html` and `./src/controller/Controller-Vue.mjs`                     

## Task 4: Provide a user interface with React.js           
                                                             
The code files for task 4 are `./src/index-react.html` and `./src/controller/Controller-React.jsx`

## Task 5: Provide a user interface with Node.js          
                                                           
The main code files for task 5 are located at `./src/restful-api` folder. there is also a `readme.md` file in `./src/restful-api` folder. You can get more detail information by reading that file.                  

## Task 6: Enhance the user interface with Bootstrap css                    
                                                                    
The Bootstrap code for task 6 is within all the html file and one JSX file.
You can always check the Bootstrap effects by tick the "Bootstrap on" checkbox, which has been arranged on the top of all html pages.

## Task 7 Create a command line application for Nodejs that reads and writes to file.

The code file for task 7 is `./src/bin/index.mjs`, there is also a `readme.md` file in `./src/bin` folder. You can get more detail information by reading that file.

## Task 8 Create a RESTful web service for Nodejs that return JSON data

The main code files for task 5 are located at `./src/restful-api` folder. there is also a `readme.md` file in `./src/restful-api` folder. You can get more detail information by reading that file. 

## Task 9 Provide Jasmine.js unit tests

The Jasmine test case file is `./test-case.html`.
The test specifications are located at `./spec` directory.
                 
## The whole directory and File List

    ├── Assessment 2 - requirements
    │   ├── MeanAndStandardDeviation.xlsx
    │   ├── Regression.docx
    │   ├── Sem1-2019_BCPR280Assignment2v1.pdf
    │   ├── correlation.doc
    │   ├── correlation.xlsx
    │   └── linearRegressionExample.xlsx
    ├── Presentation.pptx
    ├── readme.md
    ├── spec
    │   ├── test-case-correlation.js
    │   └── test-case-lra.js
    ├── src
    │   ├── bin
    │   │   ├── index.mjs
    │   │   ├── package-lock.json
    │   │   ├── package.json
    │   │   ├── read-data-file-and-calculate.mjs
    │   │   ├── readme.md
    │   │   ├── result.txt
    │   │   └── run.bat
    │   ├── controller
    │   │   ├── Controller-React.jsx
    │   │   ├── Controller-Vue.mjs
    │   │   ├── Controller-nodejs.mjs
    │   │   ├── package-lock.json
    │   │   └── package.json
    │   ├── css
    │   │   └── style.css
    │   ├── index-react.html
    │   ├── index-vue.html
    │   ├── model
    │   │   ├── Correlation.mjs
    │   │   ├── LinearRegression.mjs
    │   │   └── MathLib.mjs
    │   └── restful-api
    │       ├── ApiRequest.mjs
    │       ├── htdocs
    │       │   ├── css
    │       │   │   └── style.css
    │       │   ├── index.html
    │       │   └── js
    │       │       └── Controller-Vue.mjs
    │       ├── httpserver.mjs
    │       ├── package-lock.json
    │       ├── package.json
    │       └── readme.md
    ├── test-case.html
    └── test-data
        ├── TestData1.txt
        ├── TestData2.txt
        └── TestData3.txt