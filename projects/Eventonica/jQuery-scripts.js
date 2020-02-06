$(document).ready(function () {
  let er = new EventRecommender();
  er.addUser('Tom');
  er.addUser('Sally');
  er.addUser('Polly');
  er.addEvent('Beach Volley Ball', 'sport', new Date('2020-04-15'));
  er.addEvent('Factorials!', 'Math', new Date('2020-02-17'));
  er.addEvent('War and Peace', 'reading', new Date('2020-03-23'));
  er.saveUserEvent('Polly', 'Beach Volley Ball', 'reading', new Date('2020-03-23'));
  er.saveUserEvent('Polly', 'Factorials!', 'Math', new Date('2020-02-17'));
  er.saveUserEvent('Sally', 'reading', new Date('2020-03-23'));

function displayUser(){
  let userInfo = '';
  for (let user in er.users) {
    // console.log(er.users[user])
    userInfo += (`<li> ${er.users[user].name}</li>`);
  };
  $("#all-users").html(userInfo);
}
displayUser();

  // Use jQuery to make it so that when someone fills out the form and presses 
  // "Submit", a new user is created and added to the EventRecommender users array.
  $('#add-user').submit(function(event){
    event.preventDefault();
    let id = $("#add-user").find('#add-user-id').val();
    let name = $("#add-user").find('#add-user-name').val();
    let uE = new Event($("#add-user").find('#add-user-event').val());
    console.log(id, name, uE)
    // title, category, eventDate
    er.addEvent(uE.title, uE.category, uE.eventDate);
    er.addUser(name, id);
    displayUser();
  });
  // html += `<h3> Cheapest Ticket: $${eventObj3.cheapestTicket()} <h3>`
  // $('h3').css({
  //   'color': 'green',
  //   'font-size': '150%'
  // });
  // insert final html into #event...
  // $("#event").html(html);

});