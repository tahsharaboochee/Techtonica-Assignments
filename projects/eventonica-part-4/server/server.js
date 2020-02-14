// creates a request variable and assign a new XMLHttpReqest object to it
let request = new XMLHttpRequest();
//creates a global Javascript variable
let keyword;
let category;
// console.log(keyword)


document.getElementById('keyword-button').onclick = searchClick;
// document.getElementById('keyword-button').onclick = searchClick;
document.getElementById('category-search').onclick = searchClick;
//when user enters keyword a request will be sent to ticketmaster's API
function searchClick(e){
  e.preventDefault();
  document.getElementById('ticketmaster-events').innerHTML= '';
  keyword = document.getElementById('keyword-search-value').value
  // category = document.getElementById('category-search-id').value
  
  //setting your input text to the global Javascript Variable for every key press
  // console.log('inside searchClick:', keyword)
  
  //listens for the ENTER key
  if (e.keyCode == 13) {
    keyword = document.getElementById('keyword-search-value').value
  }
  request = new XMLHttpRequest();
  //Open a new connection, using the GET request on the URL endpoint
  request.open("GET", `http://app.ticketmaster.com/discovery/v1/events.json?keyword=${keyword}&source=universe&countryCode=US&apikey=i3iTEyBGu6DSxPykBtaEllniCz2OLxOj`, true)
  request.onload = function(){
    //accessing events through JSON data
    console.log('inside of the search click response:', this.response)
    let data = JSON.parse(this.response);
    data = data._embedded.events
    console.log('inside of the search click data:', data)
    let category = document.getElementById("category-search")
    if (request.status >= 200 && request.status < 400) {
      console.log('inside of the search click:', data)
      data.forEach(event => {
        console.log('inside of the json data obj:', event)
        const card = document.createElement('div')
        card.setAttribute('class', 'card')
        const ul = document.getElementById('ticketmaster-events');
        const ul1 = document.getElementById('all-events');
        const h1 = document.createElement('h1')
        h1.textContent = event.name
  
        const p = document.createElement('p')
        // event.description = event.description.substring(0, 300)
        p.textContent = `${event.description}...`
  
        // container.appendChild(card)
        ul.appendChild(h1)
        ul.appendChild(p)
      })
    } else {
      const errorMessage = document.createElement('marquee')
      errorMessage.textContent = `Gah, it's not working!`
      app.appendChild(errorMessage)
      }
  }
  request.send(); 
}


// //Send request
// request.send()


