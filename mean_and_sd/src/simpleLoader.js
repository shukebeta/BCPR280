var loadedHandler = function (event) {
  // console.log("file has loaded")
  // console.log(event.target.result);
  var user = event.target.result.split('\r\n');
  console.log(user);
  // console.log("here 3");
  
  localStorage.setItem('user', JSON.stringify({username: user[0], password: user[1]}));
  var result = JSON.parse(localStorage.getItem('user'));
  console.log(JSON.stringify(user));
  console.log(result);
};

// define the reaction when change event happens
var fileChangeHandler = function (event) {
  "use strict";  
  // console.log("file has changed!")
  var reader = new FileReader();  
  reader.onload = loadedHandler;
  
  // console.log("here 1");
  var theFile = event.target.files[0];
  reader.readAsText(theFile);
  // console.log("here 2");
};
