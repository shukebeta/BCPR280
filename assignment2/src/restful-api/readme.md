# Restful api for calculate Correlation & Linear Regression

## Service Running Port

Once you started this serivce, it is running on port： **8964**.

## Start service

    npm start
    
## Stop service

    Press Ctrl + C 
    
## Available API

### /api/v1/get-correlation

- request method: **GET**
- must have **parameters**:
  - listx: comma or space separated number list, such as "83, 116, 186, 81, 114"
  - listy: comma or space separated number list, such as "11.2, 9.3, 21.6, 6.9, 10.2"
- **good** parameter show be:
  - the count of numbers from listx and list y must be equal
  - the count of numbers should greater than 0
- **return** value: a JSON string will be returned.
  - satisfied return: `{
       "success": "true",
       "correlation": 0.8312640410860297
   }`
  - unsatisfied return: `{
      "success": "false",
      "message": "invalid listx or listy"
  }`
 
### /api/v1/get-linear-regression


- request method: **GET**
- must have **parameters**:
  - listx: comma or space separated number list, such as "83, 116, 186, 81, 114"
  - listy: comma or space separated number list, such as "11.2, 9.3, 21.6, 6.9, 10.2"
- **good** parameter show be:
  - the count of numbers from listx and list y must be equal
  - the count of numbers should greater than 0
- **return** value: a JSON string will be returned.
  - satisfied return: `{"success":"true","beta0":-2.3104571903574396,"beta1":0.12198669991687448}`
  - unsatisfied return: `{
      "success": "false",
      "message": "invalid listx or listy"
  }`
 