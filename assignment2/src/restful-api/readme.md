# Restful api for calculate Correlation & Linear Regression

## Service Running Port

Once you started this serivce, it is running on port： **8964**.

## Start service

Using
    
    npm start 
    OR
    npm test
    OR 
    node --experimental-modules httpserver.mjs
    
to start the "http" package version. The function of two approach is identical, so the User Interface is the same one, which is located in the htdocs folder.
    
## Stop service

    Press Ctrl + C 
    
## API List

### /api/get-correlation

- **URL:** /api/get-correlation
- **Method:** POST
- **Conter-type**: 'application/x-www-form-urlencoded'
- **Params:**
  - **required:**
    - listx: comma or space separated number list, such as "83,116,186,81,114"
    - listy: comma or space separated number list, such as "11.2,9.3,21.6,6.9,10.2"
- **good** parameter show be:
  - the number count in listx and listy must be equal
  - the number count should greater than 0
- **Success Response:** `{
    "success": "true",
    "correlation": 0.8312640410860297
}`
- **Error Response:** `{
    "success": "false",
    "message": "invalid listx or listy"
}`
 
### /api/get-linear-regression

- **URL:** /api/get-linear-regression
- **Method:** POST
- **Conter-type**: 'application/x-www-form-urlencoded'
- **Params:**
  - **required:**
    - listx: comma or space separated number list, such as "83,116,186,81,114"
    - listy: comma or space separated number list, such as "11.2,9.3,21.6,6.9,10.2"
- **good** parameter show be:
  - the number count in listx and listy must be equal
  - the number count should greater than 0
- **Success Response:** `{
    "success":"true",
    "beta0":-2.3104571903574396,
    "beta1":0.12198669991687448
}`
- **Error Response:** `{
    "success": "false",
    "message": "invalid listx or listy"
}`

### /api/get-all

- **URL:** /api/get-all
- **Method:** POST
- **Conter-type**: 'application/x-www-form-urlencoded'
- **Params:**
  - **required**:
    - listx: comma or space separated number list, such as "83,116,186,81,114"
    - listy: comma or space separated number list, such as "11.2,9.3,21.6,6.9,10.2"
- **good** parameter show be:
  - the number count in listx and listy must be equal
  - the number count should greater than 0
- **Success Response:** `{
    "success":"true",
    "correlation": 0.8312640410860297,
    "beta0":-2.3104571903574396,
    "beta1":0.12198669991687448
}`
- **Error Response:** `{
    "success": "false",
    "message": "invalid listx or listy"
}`

### Notes

These APIs also support GET request type and it is just for testing purpose. Don't use GET in product environments, if you have a big amount of data to submit, using GET method may cause unexpected data truncating and you may fail to get a correct answer.