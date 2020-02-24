import { localeData } from "moment";

$(document).ready(function () {
  function userInfo(user){
    $("#all-users").append(`<li> Name: ${user.name} User Id: ${user.userId}</li>`);
  }
  let requestSent = false;
  function displayUser() {
    if(!requestSent){
      requestSent = true;
      $.ajax({
        type: 'GET',// GET is the default 
        url: '/api/users',
        //get user and display on page
        success: function(users){
          $.each(users, function(i, user){
            userInfo(user)
          });
        },
        error: function(){
          alert('error displaying users');
          requestSent = false;
        }
      })
    }
  }
  displayUser();

  // Use jQuery to make it so that when someone fills out the form and presses 
  // "Submit", a new user is created and added to the EventRecommender users array.
  $('#add-user').submit(function (event) {
    event.preventDefault();
    event.stopPropagation();
    const user = { 
      name: $("#add-user").find('#add-user-name').val(),
      userId: $("#add-user").find('#add-user-id').val()
    }
    $.ajax({
      url: '/api/users',
      type: 'POST',
      data: user,
      success: function(newUser){
        userInfo(newUser);
      },
      error: function(){
        alert('error adding a new user');
      }
    })
    displayUser();
    $('#add-user')[0].reset();
  });

  $('#delete-user').submit(function (e) {
    e.preventDefault();
    const user = { 
      // name: $("#add-user").find('#add-user-name').val(),
      userId: $("#delete-user").find('#delete-user-id').val()
    }
    let id = $("#delete-user").find('#delete-user-id').val();
    // console.log('id:', id, typeof id)
    //make an api call with type DELETE
    $.ajax({
      url: `/api/users/${id}`,
      method: 'DELETE',
      data: id,
      success: function(data){
        console.log('ajax delete succesS:', data);
        location.reload();
      },
      error: function (data){
        alert('error:', data);
      }

    })
    displayUser();
    $('#delete-user')[0].reset();
  });

  function eventInfo(event){
    $("#all-events").append(`<li> Event: '${event.name}'<br>${dateFormatter(event.date)}<br> Event Category: ${event.category}<br> Event Id: ${event.eventId}</li>`);
  }
  let requestEvents = false;
  function displayEvent() {
    if(!requestEvents){
      requestEvents = true;
      $.ajax({
        type: 'GET',// GET is the default 
        url: '/api/events',
        //get event and display on page
        success: function(events){
          console.log('success:', events)
          $.each(events, function(i, event){
            // console.log('api/events ajax:', event)
            eventInfo(event);
          });
        },
        error: function(){
          alert('error displaying events');
          requestEvents = false;
        }
      })
    }
  }
displayEvent();

  $('#add-event').submit(function (e) {
    e.preventDefault();
    e.stopPropagation();
    const event = { 
      name: $("#add-event").find('#add-event-name').val(),
      eventId: $("#add-event").find('#add-event-id').val(),
      category: $("#add-event").find('#add-event-category').val(),
      date: $("#add-event").find('#add-event-date').val()
    }
    $.ajax({
      url: '/api/events',
      type: 'POST',
      data: event,
      success: function(newEvent){
        eventInfo(newEvent);
      },
      error: function(){
        alert('error adding a new event');
      }
    })
    displayEvent();
    $('#add-event')[0].reset();
  });

  $('#delete-event').submit(function (e) {
    e.preventDefault();
    const event = { 
      eventId: $("#delete-user").find('#delete-user-id').val()
    }
    let id = $("#delete-event").find('#delete-event-id').val();
    $.ajax({
      url: `/api/users/${id}`,
      method: 'DELETE',
      data: id,
      success: function(data){
        console.log('ajax delete success:', data);
        location.reload();
      },
      error: function (data){
        alert('error:', data);
      }
    })
    displayEvent();
    $('#delete-event')[0].reset();
  });

  // date formatter
  function dateFormatter(date) {
    // console.log('inside date Formatter', date)
    date = new Date(date);
    let day = date.getUTCDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `Date:${month}/${day}/${year}`
  }

  $('#date-search').submit(function (e) {
    e.preventDefault();
    let edate = new Date($("#date-search").find('#date-search-id').val());
        $.ajax({
          type: 'GET',
          url: '/api/events/${date}',
          data: edate, 
          success: function(events){
            $.each(events, function(i, event){
              // console.log('api/events ajax:', event)
              $("#search-results").append(`<li> Event: '${event.title}'<br> ${dateFormatter(event.eventDate)}<br> Event Category: ${event.category}<br> Event Id: ${event.eventId}</li>`);
            });
          },
          error: function(){
            alert('No Events for this date');
          }
        })
    $('#date-search')[0].reset();
  });

  $('#category-search').submit(function (e) {
    e.preventDefault();
    let cat = $("#category-search").find('#category-search-id').val();
    $.ajax({
      type: 'GET',
      url: '/api/events/${category}',
      data: cat, 
      success: function(events){
        $.each(events, function(i, event){
          $("#category-search-results").append(`<li> Event: '${event.title}'<br> ${dateFormatter(event.eventDate)}<br> Event Category: ${event.category}<br> Event Id: ${event.eventId}</li>`);
        });
      },
      error: function(){
        alert('No Events in this category');
      }
    })

    $('#category-search')[0].reset();
  });

  $('#save-user-event').submit(function (e) {
    e.preventDefault();
    let eId = $("#save-user-event").find('#save-event-id').val();
    let uId = $("#save-user-event").find('#save-user-id').val();
    $.ajax({
      type: 'PUT',
      url: '/api/userEvents',
      data: {user: {userId: uId}, event: {eventId: eId}},
      success: function(){
        // console.log('saveEvents ajax:', userEvents)
      }
    })
    er.saveUserEvent(id, event);
    $('#save-user-event')[0].reset();
  });

});
