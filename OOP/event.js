class Event {
  constructor(name, description, eventDate = new Date()) {
    this.name = name;
    this.description = description;
    this.eventDate = eventDate;
    this.availableTickets = [];
  }
  addAvailableTickets(ticket, price){
    // let Alltickets = {
    //   'num': 1,
    //   'type': ticket,
    //   'price': price
    // }
    this.availableTickets.push(new TicketType(ticket, price));
  }
  allTickets (){
    let result = "All tickets: ";
    for (let i = 0; i < this.availableTickets.length; i++){
      result += `${i + 1}. ${this.availableTickets[i].ticket} ($${this.availableTickets[i].price}) `;
    }
    return result;
  }
  searchTickets(lowerPrice, upperPrice){
    let ticketsWithinPriceRange = this.availableTickets.filter(function(obj){
      return obj.price >= lowerPrice && obj.price <= upperPrice;
    });
    let result = "Eligible tickets: ";
    if (ticketsWithinPriceRange.length === 0){
      return `No tickets available`;
    } else { 
      for (let i = 0; i < ticketsWithinPriceRange.length; i++){
        result += `${i + 1}. ${ticketsWithinPriceRange[i].ticket} ($${ticketsWithinPriceRange[i].price}) `;
      }
    }
    return result;  
  }
  cheapestTicket(){
   let cheapest = this.availableTickets[0].price;
   this.availableTickets.forEach(function (obj){
     if(obj.price < cheapest){
       cheapest = obj.price;
     }
   });
   return cheapest;
  }
}
class TicketType {
  constructor(ticket, price) {
    this.ticket = ticket;
    this.price = price;
  }
}

const eventObj1 = new Event("KLOS Golden Gala", "An evening with hollywood vampires");
const eventObj2 = new Event("Skillet & Sevendust", "Victorious war tour");
const eventObj3 = new Event("Jenny Lewis", "On the line tour 2019");
const eventArray = new Array();
eventArray.push(eventObj1, eventObj2, eventObj3);
// console.log(eventArray);
eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);
eventObj2.addAvailableTickets("General Admission", 25);
eventObj2.addAvailableTickets("Floor Seating", 80);
eventObj3.addAvailableTickets("Orchestra", 300);
eventObj3.addAvailableTickets("Mezzanine", 200);
eventObj3.addAvailableTickets("Balcony", 100);
// console.log(eventObj1);
// console.log(eventObj2);
console.log(eventObj3.allTickets());
console.log(eventObj3.cheapestTicket());
console.log(eventObj3.searchTickets(0, 250));
console.log(eventObj3.searchTickets(0, 25));

$(document).ready(function() {
  let html = "";
  $.each(this.users, function(index, item) {
    html+= `<li>${item.name} - ${item.description} - ${item.searchTickets(0, 100)}</li>`;
  });
  html += `<h3> Cheapest Ticket: $${eventObj3.cheapestTicket()} <h3>`
  $('h3').css({ 'color': 'green', 'font-size': '150%' });
  // insert final html into #event...
  $("#event").html(html);
  
});