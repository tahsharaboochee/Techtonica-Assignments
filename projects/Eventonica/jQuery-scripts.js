$(document).ready(function () {
  let er = new EventRecommender();
  let newUser = new User('Tom');
  let newUser2 = new User('Sally');
  let newUser3 = new User('Polly');
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