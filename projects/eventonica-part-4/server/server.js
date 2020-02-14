// creates a request variable and assign a new XMLHttpReqest object to it
let request = new XMLHttpRequest();
//creates a global Javascript variable
let keyword;
//onsubmit with using form field submit
document.getElementById('keyword-button').onclick = searchClick;

function searchClick(e){
  e.preventDefault();
  keyword = document.getElementById('keyword-search-value').value
  //setting your input text to the global Javascript Variable for every key press
  console.log('inside searchClick:', keyword)
 
  //listens for the ENTER key
  if (e.keyCode == 13) {
    keyword
  }
}
let category = document.getElementById("category-search")
// console.log(keyword)

//Open a new connection, using the GET request on the URL endpoint
request.open("GET", `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&source=universe&countryCode=US&apikey=i3iTEyBGu6DSxPykBtaEllniCz2OLxOj`, true)
                      // https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*

request.onload = function(){
  //accessing events through JSON data
  let data = JSON.parse(this.response)._embedded.events;
  data.forEach(event => {
    //log each event title
    console.log(event)
  })
}

//Send request
request.send()

const app = document.getElementById('root');
