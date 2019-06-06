# A command line script for calculate Correlation & Linear Regression

## Usage

  If you just want to see if the programming is running correctly, type:
  
    npm test

  OR you would like to check it carefully:
  
  if you are using Unix/Linux/macOS operating system, just type:
  
    ./index.mjs ../../test-data/TestData1.txt ../../test-data/TestData2.txt
  
  if you are using windows, you can type:
  
    node --experimental-modules --no-warnings index.mjs  ../../test-data/TestData1.txt ../../test-data/TestData2.txt
    
  OR simply type
    
    run.bat
  

## Test

    npm test
    
## Sample
    % node --experimental-modules --no-warnings index.mjs  ../../test-data/TestData1.txt ../../test-data/TestData2.txt
    
    Data List
    file1: (x) ../../test-data/TestData1.txt 160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503
    file2: (y) ../../test-data/TestData2.txt 186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601
    
    Result
    Correlation: 0.9956728243033025
    Linear Regression beta 0: 38.00519061150601
    Linear Regression beta 1: 1.091345458388111
    
    The results have been successfully written to file: ./result.txt