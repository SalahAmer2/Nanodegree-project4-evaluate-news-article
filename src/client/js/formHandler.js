//jshint esversion: 9
// import {validateURL} from './validateURL';
function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    // let formText = document.getElementById('name').value;
    // checkForName(formText);

    // console.log("::: Form Submitted :::");
    const baseURL = "http://localhost:8080/sentiment";
    let inputtedUrl = document.getElementById('url').value;

  if (isURL(inputtedUrl)) {
    fetch(baseURL, {//Salah: fetches from app.post("/sentiment"
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url: inputtedUrl })
    })
      .then(res => res.json())//Salah: res is what's received from server/index.js from res.send(projectData);
      .then(res => {
        document.getElementById(
          "polarity"
        ).innerHTML = `<strong>Polarity:</strong><br> ${res.polarity}`;
        document.getElementById(
          "subjectivity"
        ).innerHTML = `<strong>Subjectivity:</strong><br> ${res.subjectivity}`;
        document.getElementById("texxt").innerHTML = `<p>${res.text}</p>`;
      });
  } else {
    alert("URL is not valid!");
  }

  // Validate the URL
  function isURL(str) {
    var regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(str)) {
      return true;
    } else {
      return false;
    }
  }
}

export { handleSubmit };


// const res = await fetch('http://localhost:8080/sentiment')

// .then(res => res.json())
// .then(function(res) {
//   document.getElementById('results').innerHTML = res.message;
// });
