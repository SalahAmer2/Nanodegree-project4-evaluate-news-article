// jshint esversion: 9
// import {validateURL} from './validateURL';

document.getElementById('submit').addEventListener('click', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()

  // check what text was put into the form field
  // let formText = document.getElementById('name').value;
  // checkForName(formText);

  console.log('::: Form Submitted :::')
  const baseURL = 'http://localhost:8080/sentiment'
  let inputtedUrl = document.getElementById('url').value

  // const isValidURL = (userInput) => {
  //   var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  //   if(res == null)//If there's no match or nothing inputted res will be null
  //       return false;
  //   else
  //       return true;
  // };

  if (Client.isValidURL(inputtedUrl)) { // thinking of using toBeTruthy in its jest
    fetch(baseURL, {// fetches from app.post("/sentiment"
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: inputtedUrl })
    })
      .then(res => res.json())// res is what's received from server/index.js from res.send(projectData);
      .then(res => {
        document.getElementById(
          'polarity'
        ).innerHTML = `<strong>Polarity:</strong><br> ${res.polarity}`
        document.getElementById(
          'subjectivity'
        ).innerHTML = `<strong>Subjectivity:</strong><br> ${res.subjectivity}`
        document.getElementById('text').innerHTML = `<p>${res.text}</p>`
      })
  } else {
    alert('Invalid URL')
  }
}

export { handleSubmit }
// const res = await fetch('http://localhost:8080/sentiment')

// .then(res => res.json())
// .then(function(res) {
//   document.getElementById('results').innerHTML = res.message;
// });
