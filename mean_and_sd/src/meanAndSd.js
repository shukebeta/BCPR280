
// create an input HTML element as ibxFile
var ibxFile = document.createElement("INPUT");
// set the type of the HTML element to "file"
ibxFile.setAttribute("type", "file");
// set the id fo the HTML element to "inputFile"
ibxFile.setAttribute("id", "inputFile");
ibxFile.setAttribute("multiple", "multiple");

// append the ibxFile element to the body of this HTML page
document.body.appendChild(ibxFile);

document.getElementById("inputFile").addEventListener('change', fileChangeHandler);
