$(document).ready(function () {
  let keyword;
  let category;
  const card = document.createElement('div')

document.getElementById('keyword-button').onclick = searchClick;
document.getElementById('keyword').onclick = searchClick;
//when user enters keyword a request will be sent to ticketmaster's API
function searchClick(e){
  e.preventDefault();
  document.getElementById('ticketmaster-events').innerHTML= '';
  keyword = document.getElementById('keyword-search-value').value
  // category = document.getElementById('category-search-id').value
  
  //listens for the ENTER key
  if (e.keyCode == 13) {
    keyword = document.getElementById('keyword-search-value').value
  }
  request = new XMLHttpRequest();
  //Open a new connection, using the GET request on the URL endpoint
  request.open("GET", `http://app.ticketmaster.com/discovery/v1/events.json?keyword=${keyword}&source=universe&countryCode=US&apikey=i3iTEyBGu6DSxPykBtaEllniCz2OLxOj`, true)
  request.onload = function(){
    //accessing events through JSON data
    let data = JSON.parse(this.response);
    data = data._embedded.events
    if (request.status >= 200 && request.status < 400) {
      data.forEach(event => {
        card.setAttribute('class', 'card')
        const ul = document.getElementById('ticketmaster-events');
        const ul1 = document.getElementById('all-events');
        const h4 = document.createElement('h4')
        h4.textContent = event.name
  
        const p = document.createElement('p')
        const p1 = document.createElement('p')
        // event.description = event.description.substring(0, 300)
        let eventCategory = event._embedded.categories[0].name;
        let date = dateFormatter(event.dates.start.dateTime)
        p.textContent = `Category: ${eventCategory}`;
        p1.textContent = `${date}`;
  
        // container.appendChild(card)
        ul.appendChild(h4)
        ul.appendChild(p)
        ul.appendChild(p1)
      })
    } else {
      const errorMessage = document.createElement('marquee')
      errorMessage.textContent = `Gah, it's not working!`
      card.appendChild(errorMessage)
      }
  }
  request.send(); 
}
  function userInfo(user) {
    $("#all-users").append(`<li> Name: ${user.name} User Id: ${user.user_id}</li>`);
  }

  function refreshUserList() {
    fetchAndDisplayUsers();
  }
  let requestSent = false;

  function fetchAndDisplayUsers() {
    $.ajax({
      type: 'GET', // GET is the default 
      url: '/api/users',
      //get user and display on page
      success: function (users) {
        //removes all child elements
        $('#all-users').empty()
        $.each(users, function (i, user) {
          userInfo(user)
        });
      },
      error: function () {
        alert('error displaying users');
        requestSent = false;
      }
    })
  }
  fetchAndDisplayUsers();

  // Use jQuery to make it so that when someone fills out the form and presses 
  // "Submit", a new user is created and added to the EventRecommender users array.
  $('#add-user').submit(function (event) {
    event.preventDefault();
    event.stopPropagation();
    const user = {
      name: $("#add-user").find('#add-user-name').val(),
      user_id: $("#add-user").find('#add-user-id').val()
    }
    $.ajax({
      url: '/api/users',
      type: 'POST',
      data: user,
      success: function (newUser) {
        userInfo(newUser);
      },
      error: function () {
        alert('error adding a new user');
      }
    })
    fetchAndDisplayUsers();
    $('#add-user')[0].reset();
  });

  $('#delete-user').submit(function (e) {
    e.preventDefault();
    const user = {
      // name: $("#add-user").find('#add-user-name').val(),
      user_id: $('#delete-user-id').val()
    }
    let id = $("#delete-user").find('#delete-user-id').val();
    //make an api call with type DELETE
    $.ajax({
      url: `/api/users/${id}`,
      method: 'DELETE',
      data: user,
      success: function (data) {
        refreshUserList()
        // location.reload();
      },
      error: function (data) {
        alert('error:', data);
      }

    })
    fetchAndDisplayUsers();
    $('#delete-user')[0].reset();
  });

  function eventInfo(event) {
    $("#all-events").append(`<li> Event: '${event.name}'<br>${dateFormatter(event.date)}<br> Event Category: ${event.category}<br> Event Id: ${event.event_id}</li>`);
  }

  function refreshEventList() {
    fetchAndDisplayEvents();
  }

  function fetchAndDisplayEvents() {
    $.ajax({
      type: 'GET', // GET is the default 
      url: '/api/events',
      //get event and display on page
      success: function (events) {
        $("#all-events").empty()
        $.each(events, function (i, event) {
          eventInfo(event);
        });
      },
      error: function () {
        alert('error displaying events');
        requestEvents = false;
      }
    })
  }
  fetchAndDisplayEvents();

  $('#add-event').submit(function (e) {
    e.preventDefault();
    e.stopPropagation();
    const event = {
      name: $('#add-event-name').val(),
      event_id: $('#add-event-id').val(),
      category: $('#add-event-category').val(),
      date: $('#add-event-date').val()
    }

    $.ajax({
      url: '/api/events',
      type: 'POST',
      data: event,
      success: function (newEvent) {
        eventInfo(newEvent);
      },
      error: function () {
        alert('error adding a new event');
      }
    })
    fetchAndDisplayEvents();
    $('#add-event')[0].reset();
  });

  $('#delete-event').submit(function (e) {
    e.preventDefault();
    const event = {
      event_id: $('#delete-event-id').val().trim()
    }
    let id = $('#delete-event-id').val().trim();
    $.ajax({
      url: `/api/events/${id}`,
      method: 'DELETE',
      data: event,
      success: function (data) {
        fetchAndDisplayEvents();
        // location.reload();
      },
      error: function (data) {
        alert('error:', data);
      }
    })
    fetchAndDisplayEvents();
    $('#delete-event')[0].reset();
  });

  // date formatter
  function dateFormatter(date) {
    date = new Date(date);
    let day = date.getUTCDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `Date:${month}/${day}/${year}`
  }

  $('#date-search').submit(function (e) {
    e.preventDefault();
    let edate = $('#date-search-id').val();
    $.ajax({
      type: 'GET',
      url: `/api/events/by-date/${edate}`,
      success: function (events) {
        $.each(events.rows, function (i, event) {
          $("#search-results").append(`<li> Event: '${event.name}'<br> ${dateFormatter(event.date)}<br> Event Category: ${event.category}<br> Event Id: ${event.event_id}</li>`);
        });
      },
      error: function () {
        alert('No Events for this date');
      }
    })
    $('#date-search')[0].reset();
  });

  $('#category-search').submit(function (e) {
    e.preventDefault();
    let category = $('#category-search-id').val();
    $.ajax({
      type: 'GET',
      url: `/api/events/by-category/${category}`,
      // data: category,
      success: function (events) {
        $.each(events.rows, function (i, event) {
          $("#category-search-results").append(`<li> Event: '${event.name}'<br> ${dateFormatter(event.date)}<br> Event Category: ${event.category}<br> Event Id: ${event.event_id}</li>`);
        });
      },
      error: function () {
        alert('No Events in this category');
      }
    })

    $('#category-search')[0].reset();
  });

  $('#save-user-event').submit(function (e) {
    e.preventDefault();
    let eId = $('#save-event-id').val();
    let uId = $('#save-user-id').val();
    $.ajax({
      type: 'PUT',
      url: '/api/userEvents',
      data: {
        user: {
          user_id: uId
        },
        event: {
          event_id: eId
        }
      },
      success: function (response) {
        console.log('save-user-jquery response', JSON.stringify(response))
        console.log('successfully added', response)
      }
    })
    $('#save-user-event')[0].reset();
  });

});