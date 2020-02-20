$(document).ready(function () {
  er = new EventRecommender();
  let newUser = new User('Tom', 'cf61b');
  let newUser2 = new User('Sally', '996a0');
  let newUser3 = new User('Polly', '569a1');
  er.addUser(newUser);
  er.addUser(newUser2);
  er.addUser(newUser3);
  let e = new Event('Beach Volley Ball', 'sport', new Date('2020-04-15'));
  let e2 = new Event('Factorials!', 'Math', new Date('2020-02-17'));
  let e3 = new Event('War and Peace', 'reading', new Date('2020-03-23'));
  er.addEvent(e);
  er.addEvent(e2);
  er.addEvent(e3);
  er.saveUserEvent(newUser3, e);
  er.saveUserEvent(newUser3, e2);
  er.saveUserEvent(newUser2, e3);
  //search using jquery
  // $('#keyword-search').submit(function(event){
  //   event.preventDefault();
  //   let userInfo = $('#keyword-search-value').val();
  //   $('#keyword-search')[0].reset();
  // });
  //beginning process of using jquery to call API
  // $.ajax({
  //   type:"GET",
  //   url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey={apikey}",
  //   async:true,
  //   dataType: "json",
  //   success: function(json) {
  //               console.log(json);
  //               // Parse the response.
  //               // Do other things.
  //            },
  //   error: function(xhr, status, err) {
  //               // This time, we do not end up here!
  //            }
  // });

  function displayUser() {
    let userInfo = '';
    for (let user of er.users) {
      userInfo += (`<li> Name: ${user.name} User Id: ${user.userId}</li>`);
    };
    $("#all-users").html(userInfo);
  }
  displayUser();

  function dateFormatter(date) {
    date = new Date(date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `Date:${month}/${day}/${year}`
  }

  // Use jQuery to make it so that when someone fills out the form and presses 
  // "Submit", a new user is created and added to the EventRecommender users array.
  $('#add-user').submit(function (event) {
    event.preventDefault();
    let id = $("#add-user").find('#add-user-id').val();
    let name = $("#add-user").find('#add-user-name').val();
    let nU = new User(name, id);
    $.ajax('/user')
    er.addUser(nU);
    displayUser();
    $('#add-user')[0].reset();
  });

  $('#delete-user').submit(function (e) {
    e.preventDefault();
    let id = $("#delete-user").find('#delete-user-id').val();
    //make an api call with type DELETE
    er.deleteUser(id);
    displayUser();
    $('#delete-user')[0].reset();
  });

  function displayEvent() {
    let eventInfo = '';
    for (let event of er.events) {
      eventInfo += (`<li> Event: '${event.title}'<br>${dateFormatter(event.eventDate)}<br> Event Category: ${event.category}<br> Event Id: ${event.eventId}</li>`);
    };
    $("#all-events").html(eventInfo);
  }
  displayEvent();

  $('#add-event').submit(function (e) {
    e.preventDefault();
    let name = $("#add-event").find('#add-event-name').val();
    let eCategory = $("#add-event").find('#add-event-category').val();
    let eDate = $("#add-event").find('#add-event-date').val();
    let id = $("#add-event").find('#add-event-id').val();

    // debugger;

    let nE = new Event(name, eCategory, eDate, id);
    er.addEvent(nE);
    displayEvent();
    $('#add-event')[0].reset();
  });

  $('#delete-event').submit(function (e) {
    e.preventDefault();
    let id = $("#delete-event").find('#delete-event-id').val();
    er.deleteEvent(id);
    displayEvent();
    $('#delete-event')[0].reset();
  });


  $('#date-search').submit(function (e) {
    e.preventDefault();
    let edate = new Date($("#date-search").find('#date-search-id').val());
    let results = er.findEventsByDate(edate);
    for (let event of results) {
      let eventInfo = '';
      //console.log('jquery date-search:', event.title, dateFormatter(date), event.category, event.eventId)
      eventInfo += (`<li> Event: '${event.title}'<br> ${dateFormatter(event.eventDate)}<br> Event Category: ${event.category}<br> Event Id: ${event.eventId}</li>`);
      $("#search-results").html(eventInfo);
    }
    $('#date-search')[0].reset();
  });

  $('#category-search').submit(function (e) {
    e.preventDefault();
    let cat = $("#category-search").find('#category-search-id').val();
    let results = er.findEventsbyCategory(cat);

    for (let event of results) {
      let eventInfo = '';
      eventInfo += (`<li> Event: '${event.title}'<br> ${dateFormatter(event.eventDate)}<br> Event Category: ${event.category}<br> Event Id: ${event.eventId}</li>`);
      $("#category-search-results").html(eventInfo);
    }
    $('#category-search')[0].reset();
  });

  $('#save-user-event').submit(function (e) {
    e.preventDefault();
    let eId = $("#save-user-event").find('#save-event-id').val();
    let uId = $("#save-user-event").find('#save-user-id').val();
    let id = er.findUser(uId);
    let event = er.findEvent(eId);
    er.saveUserEvent(id, event);
    $('#save-user-event')[0].reset();
  });

});

//below i put the hard coded data in an if statement so the local storage wouldn't duplicate the local storage. 
//   er = new EventRecommender();
//  let newUser = new User('Tom','cf61b');
//  let newUser2 = new User('Sally','996a0');
//  let newUser3 = new User('Polly','569a1');
//  er.addUser(newUser);
//  er.addUser(newUser2);
//  er.addUser(newUser3);
//  let e = new Event('Beach Volley Ball', 'sport', new Date('2020-04-15'));
//  let e2 = new Event('Factorials!', 'Math', new Date('2020-02-17'));
//  let e3 = new Event('War and Peace', 'reading', new Date('2020-03-23'));
//  er.addEvent(e);
//  er.addEvent(e2);
//  er.addEvent(e3);
//  er.saveUserEvent(newUser3, e);
//  er.saveUserEvent(newUser3, e2);
//  er.saveUserEvent(newUser2, e3);
// below is with local storage
// let loaded = localStorage.getItem('loaded') ? JSON.parse(localStorage.getItem('loaded')) : false;
// if (!loaded){
//   let newUser = new User('Tom','cf61b');
//   let newUser2 = new User('Sally','996a0');
//   let newUser3 = new User('Polly','569a1');
//   er.addUser(newUser);
//   er.addUser(newUser2);
//   er.addUser(newUser3);

//   let e = new Event('Beach Volley Ball', 'sport', new Date('2020-04-15'));
//   let e2 = new Event('Factorials!', 'Math', new Date('2020-02-17'));
//   let e3 = new Event('War and Peace', 'reading', new Date('2020-03-23'));
//   er.addEvent(e);
//   er.addEvent(e2);
//   er.addEvent(e3);
//   er.saveUserEvent(newUser3, e);
//   er.saveUserEvent(newUser3, e2);
//   er.saveUserEvent(newUser2, e3);
//   loaded = localStorage.setItem("loaded", JSON.stringify(true));;
// }