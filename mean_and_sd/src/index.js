let app = new Vue({
  el: '#app',
  data: {

  },
  methods: {
    fileChangeHandler: function (event) {
      "use strict"  
      // console.log("file has changed!")   
      // console.log("here 1")

      Object.keys(event.target.files).forEach(i => {
        const file = event.target.files[i];
        const reader = new FileReader();
        reader.onload = (event) => {
          //server call for uploading or reading the files one-by-one
          //by using 'reader.result' or 'file'
                  // console.log("file has loaded")
          // console.log(event.target.result);
          let user = event.target.result.split('\r\n');
          console.log(user);
          // console.log("here 3");
          
          localStorage.setItem('user', JSON.stringify({username: user[0], password: user[1]}));
          let result = JSON.parse(localStorage.getItem('user'));
          console.log(JSON.stringify(user));
          console.log(result);
        }
        reader.readAsText(file);
      })
      // console.log("here 2");
    }
  }
});
