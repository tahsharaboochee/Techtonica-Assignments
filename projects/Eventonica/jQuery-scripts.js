$(document).ready(function () {
  let er = new EventRecommender();
  let newUser = new User('Tom','cf61b');
  let newUser2 = new User('Sally','996a0');
  let newUser3 = new User('Polly','569a1');
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
    let nU = new User(name, id)
    er.addUser(nU);
    displayUser();
    $('#add-user')[0].reset();
  });

  $('#delete-user').submit(function (e){
    e.preventDefault();
    let id = $("#delete-user").find('#delete-user-id').val();
    console.log(id);
    er.deleteUser(id);
    displayUser();
    $('#delete-user')[0].reset();    
  });
  // html += `<h3> Cheapest Ticket: $${eventObj3.cheapestTicket()} <h3>`
  // $('h3').css({
  //   'color': 'green',
  //   'font-size': '150%'
  // });
  // insert final html into #event...
  // $("#event").html(html);

});