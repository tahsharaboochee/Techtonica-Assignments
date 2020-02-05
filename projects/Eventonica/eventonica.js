class User {
  constructor(name){
    this.name = name;
    this.personalEvents = [];
  }
  static addToMyEvents (eventObj){
    this.personalEvents.push(eventObj);
  }
}

class Event {
  constructor(title, category, eventDate) {
    this.title = title;
    this.category = category;
    this.eventDate = eventDate;
  }
}

class EventRecommender {
  constructor() {
    this.events = [];
    this.users = [];
  }

  addEvent(name, category, eventDate) {
  // Adds a new Event to the System
  this.events.push(new Event(name, category, eventDate));// events adding obj's to arr
  }

  addUser(user) {
  // Adds a new User to the System
  this.users.push(new User(user));//users adding obj's to arr
  }

  saveUserEvent(user, name, category, eventDate){
  // Allow users to save events to a personal Events array.
  user.addToMyEvents((new Event(name, category, eventDate)));
  }

  deleteUser(name) {
  // Deletes a User from the system
  // if (!this.users){
  //   return "there are currently no users to delete add a user";
  // }
  this.users.forEach ((obj, i)=>{
      if(obj['name'] === name){
        this.users.splice(i, 1);
      }
    });
  }

  deleteEvent(event) {
  // Deletes the Event from the system
  console.log(this.events);
   for (let i = 0; i < this.events.length; i++){
      let curevent = this.events[i]
      if(curevent.title === event){
        this.events.splice(i, 1);
      }
    }
    console.log(this.events)
  }

  findEventsByDate(date){
  // Returns all events on a given date
  return this.events.filter(function(obj){
     return obj.eventDate === date;
  });
  }

  findEventsbyCategory(category){
  // Returns all events in a given category
  return this.events.filter(function(obj){
     return obj.category === category;
  });
  }
}

const isEqual = function(obj1, obj2){
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length){
    return false; 
  }
  for (let objKey of obj1Keys){
    if (obj1[objKey] !== obj2[objKey]){
      return false;
    }
  }
  return true;
}


// $(document).ready( () => {
//   const eventRecommender = new EventRecommender();
//   // Your code here
// });
if (typeof module != 'undefined'){
  module.exports = {EventRecommender, User, Event} 
}