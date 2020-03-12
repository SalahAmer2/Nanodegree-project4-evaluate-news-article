//jshint esversion: 9
function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    // let formText = document.getElementById('name').value;
    // checkForName(formText);

    // console.log("::: Form Submitted :::");
    let url = document.getElementById('url').value;
    if(Client.validateURL(url)){
      const dataAylien = async (url, data={}) =>{
        const response = await fetch(url, {
          method: 'POST',
          credentials: 'same origin',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        try {
          const newData = await response.json();
          return newData;
        } catch (e) {
          console.log("Error: " + e);
        }
      };
      dataAylien('/sentiment', {url: url})
        .then(
          function (res){
            console.log(res);
            const data = res.data;
            document.getElementById('polarity').innerHTML = res.polarity;
            document.getElementById('subjectivity').innerHTML = res.subjectivity;
            document.getElementById('text').innerHTML = res.text;
          }
        );
    } else {
      console.log("Invalid URL");
    }
}
export { handleSubmit };

// const res = await fetch('http://localhost:8080/sentiment')

// .then(res => res.json())
// .then(function(res) {
//   document.getElementById('results').innerHTML = res.message;
// });
