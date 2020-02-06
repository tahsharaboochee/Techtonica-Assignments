class User {
  constructor(name, userId = Math.random().toString(16).substr(2, 5)) {
    this.name = name;
    //Returns exactly 5 random characters if no id is given;
    this.userId = userId;
    // this.personalEvents = [];
  }
  // addToMyEvents(eventObj) {
  //   this.personalEvents.push(eventObj);
  // }
}

class Event {
  constructor(title, category, eventDate) {
    this.title = title;
    this.category = category;
    this.eventDate = eventDate;
    this.eventId = Math.random().toString(16).substr(2, 5));
  }
}

class EventRecommender {
  constructor() {
    this.events = [];
    this.users = [];
    this.personalEvents = [];
  }

  personalEventSaver(userId, eventId) {
    if (this.users.includes(findUser(userId)) && this.events.includes(findEvent(eventId))){
      let user = findUser(userId).userId;
      let event = findEvent(eventId);
      for (let curUser of this.personalEvents){
        if (curUser === user){
          
        }
      };
    }
     
  }
 

  addEvent(name, category, eventDate) {
    // Adds a new Event to the System
    let validEvent = this.events.filter((eventObj) =>{return title in eventObj; }); // console.log(eventObj);
    if(validEvent){return "Event already saved! please, save a different event.";}
    
    // Check if event already exists?
    this.events.push(new Event(name, category, eventDate)); // events adding obj's to arr
  }
  

  addUser(user, userId = Math.random().toString(16).substr(2, 5) ) {
    // Adds a new User to the System
    let validUser = this.users.filter((userObj) =>{return name in userObj;});
    if(!validUser){return "User does not exist! please, add user.";}
    // Check if user already exists?
    this.users.push(new User(user, userId)); //users adding obj's to arr
  }

  saveUserEvent(user, name, category, eventDate) {
    // Allow users to save events to a personal Events array.
    // Does the user even exist?!
    // console.log(this.users)
    if (user instanceof User === false) {
      user = new User(user);
    }

    let validUser = this.users.filter((userObj) =>{return name in userObj;});
    if(!validUser){return "User does not exist! please, add user.";}
    let validEvent = this.events.filter((eventObj) =>{return title in eventObj; }); // console.log(eventObj);
    if(validEvent){return "Event already saved! please, save a different event.";}
    
    // console.log(user);
    for (let userId of this.user){
      if (userId.userId === user){
        userId.userId.personalEventSaver(new Event(name, category, eventDate));
      }
    }  
    // console.log((user))
  }


  deleteUser(id) {
    // Deletes a User from the system
    // Does the user even exist?!
    if (!this.users){
      return "there are currently no users to delete add a user";
    }
    this.users.forEach((obj, i) => {
      if (obj['userId'] === id) {
        this.users.splice(i, 1);
      }
    });
  }

  deleteEvent(event) {
    // Deletes the Event from the system
    // console.log(this.events);
    for (let i = 0; i < this.events.length; i++) {
      let curevent = this.events[i]
      if (curevent.title === event) {
        this.events.splice(i, 1);
      }
    }
    // console.log(this.events)
  }

  findEventsByDate(date) {
    // Returns all events on a given date
    if (date instanceof Date === false) {
      date = new Date(date);
    }

    let checkDates = (date1, date2) => {
      // console.log(date1)
      return date1.getUTCDate() === date2.getUTCDate() &&
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth()
    }
    return this.events.filter(function (obj) {
      return checkDates(obj.eventDate, date);
    });
  }
// helper methods
  findEventsbyCategory(category) {
    // Returns all events in a given category
    return this.events.filter(function (obj) {
      // console.log(obj.category)
      return obj.category === category;
    });
  }
}

findEvent(eventId){
  for(let key in this.events){
    let curEvent = this.events[key].eventId
    //returns an obj
    if (curEvent === eventId) return this.events[key];
  }
  return "Invalid event";
}

findUser(userId){
  for(let key in this.users){
    let curUser = this.users[key].userId;
    //returns an object
    if (curUser === userId) return this.users[key];
  }
  return "invalid user";
}

const isEqual = function (obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let objKey of obj1Keys) {
    if (obj1[objKey] !== obj2[objKey]) {
      return false;
    }
  }
  return true;
}


$(document).ready( () => {
  const eventRecommender = new EventRecommender();
  // Your code here
});
if (typeof module != 'undefined') {
  module.exports = {
    EventRecommender,
    User,
    Event
  };
}