class User {
  constructor(name, userId = Math.random().toString(16).substr(2, 5)) {
    this.name = name;
    //Returns exactly 5 random characters if no id is given;
    this.userId = userId;
  }
}

class Event {
  constructor(title, category, eventDate) {
    this.title = title;
    this.category = category;
    this.eventDate = eventDate;
    this.eventId = Math.random().toString(16).substr(2, 5);
  }
}

class EventRecommender {
  constructor() {
    this.events = [];
    this.users = [];
    this.personalEvents = {};
  }

  addUser(userObj) {
    // Adds a new User to the System
    let id = userObj.userId
    let validUser = true;
    this.users.forEach((curUserObj) =>{
      if (id === curUserObj.userId){
        validUser = false;
      }
    });
    if(!validUser){return "User already exist!"};
    // Check if user already exists?
    this.users.push(userObj); //users adding obj's to arr
    this.personalEvents[id] = [];
  }

  deleteUser(id) {
    // Deletes a User from the system
    if (this.users.length === 0) return "there are currently no users to delete add a user";
    this.users.forEach((obj, i) => {
      if (obj['userId'] === id) {
        this.users.splice(i, 1);
      }
    });
    delete this.personalEvents[id];//delete user from personal events
  }

  addEvent(eventObj) {
    // Adds a new Event to the System
    let cureventId = eventObj.eventId;
    let validEvent = false;
    this.events.forEach((curEventObj) =>{
      if (cureventId === curEventObj.eventId){
        validEvent = true;
      }; 
    });
    if(validEvent){return "Event already saved! please, save a different event.";}
    this.events.push(eventObj); // events adding obj's to arr
  }
  
  deleteEvent(id) {
    // Deletes the Event from the system
    if (this.events.length === 0) return "there are currently no events to delete";
    this.events.forEach((obj, i) => {
      if (obj['eventId'] === id) {
        //delete event from user events
        for(let user in this.personalEvents){
          for (let i = 0; i <  this.personalEvents[user].length; i++){
            if(this.personalEvents[user][i].eventId === id){
              let userArr = this.personalEvents[user];
              userArr.splice(i, 1);
            }
          }
        }
        this.events.splice(i, 1);
      }
    });
  }

  findEventsByDate(date) {
    // Returns all events on a given date
    if (date instanceof Date === false) {
      date = new Date(date);
    }

    let checkDates = (date1, date2) => {
      return date1.getDate() === date2.getDate() &&
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth()
      return true;
    }
    return this.events.filter(function (obj) {
      return checkDates(new Date(obj['date']), date);
    });
  }

  findEventsbyCategory(category) {
    // Returns all events in a given category
   let categoryResults = this.events.filter(function(obj) {
        return obj['category'].trim().toLowerCase() === category.trim().toLowerCase();
    });
    return categoryResults;
  }
  saveUserEvent(userObj, eventObj) {
    // Allow users to save events to a personal Events array.
    let curUserId = userObj.userId;
    // console.log('in saveUserEvent eventonica.js eventObj:', eventObj, 'userObj: ', userObj)
    let cureventId = eventObj.eventId;
    let validUser = false;
    this.users.forEach((curUserObj) =>{
      if (curUserId === curUserObj.userId){
        validUser = true;
      }
    });
    if(!validUser){
      console.log("User does not exist! please, add user.")
      return
    };
    let validEvent = false;
    this.events.forEach((curEventObj) =>{
      if (cureventId === curEventObj.eventId){
        validEvent = true;
      }; 
    });
    if(!validEvent){
      console.log("Event already saved! please, save a different event.");
      return;
    }
    for (let key in this.personalEvents){
      if (key === curUserId){
        this.personalEvents[curUserId].push(eventObj);
      }
    }  
  }

// helper methods
  findEvent(eventId){
    for(let key in this.events){
      let curEvent = this.events[key].eventId
      //returns an obj
      if (curEvent == eventId){
        return this.events[key];
      } 
    }

    console.log('findEvent id invalid event', eventId);
    return false;
  }
  
    findUser(userId){
      for(let key in this.users){
        let curUser = this.users[key].userId;
        //returns an object
        if (curUser == userId) {
          return this.users[key];
        }
      }
      console.log('invalid user', userId);
      return false;
    }

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
//the es5 way of exporting modules
if (typeof module != 'undefined') {
  module.exports = {
    EventRecommender,
    User,
    Event
  };
}

//es6 way of exporting modules
// export {
//   EventRecommender,
//   User,
//   Event
// };