//jshint esversion: 9
function validateURL(url){
  var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    if (!re.test(url)) {
      alert("url error");
      return false;
    }
}

export { validateURL };

// function checkForName(inputText) {

//     console.log("::: Running checkForName :::", inputText);
//     let names = [
//         "Picard",
//         "Janeway",
//         "Kirk",
//         "Archer",
//         "Georgiou"
//     ]
//
//     if(names.includes(inputText)) {
//         alert("Welcome, Captain!")
//     }
// }

// export { checkForName };
