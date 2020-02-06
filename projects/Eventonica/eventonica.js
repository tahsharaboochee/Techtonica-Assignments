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
  constructor(title, category, eventDate, eventId = Math.random().toString(16).substr(2, 5)) {
      this.title = title;
      this.category = category;
      this.eventDate = eventDate;
      this.eventId = eventId;
  }
}

class EventRecommender {
  constructor() {
      this.events = [];
      this.users = [];
      //user is key personal events is value
      this.personalEvents = {};
  }

  addEvent(eventObj) {
      // Adds a new Event to the System
      let validEvent = this.events.filter((curEventObj) => {
          return eventObj.eventId in curEventObj;
      }); 
      // Check if event already exists?
      if (validEvent.length > 0) {
          return "Event already saved! please, save a different event.";
      }
      this.events.push(eventObj); // events adding obj's to arr
  }

  addUser(userObj) {
      // Adds a new User to the System
      let validUser = this.users.filter((curUserObj) => {
          return userObj.userId in curUserObj;
      });
      if (validUser.length > 0) {
          return "User already exist!";
      }
      // Check if user already exists?
      this.users.push(userObj);
      //users adding obj's to arr
      this.personalEvents[userObj.userId] = [];
      // console.log(this.personalEvents)
  }

  deleteUser(id) {
      // Deletes a User from the system
      // Does the user even exist?
      if (this.users.length === 0) {
          return "there are currently no users to delete add a user";
      }
      this.users.forEach((obj, i) => {
          if (obj['userId'] === id) {
              this.users.splice(i, 1);
          }
      });
      for (let i in this.personalEvents){
        if (this.personalEvents[i][id] === id){
          delete this.personalEvents[i][id];
        }
      }
  }

  deleteEvent(idEvent) {
    // Deletes the Event from the system
    for (let i = 0; i < this.events.length; i++) {
        let curevent = this.events[i];
        if (curevent.eventId === idEvent) {
            this.events.splice(i, 1);
        }
    }
}

findEventsByDate(date) {
  // Returns all events on a given date
  if (date instanceof Date === false) {
      date = new Date(date);
  }

  let checkDates = (date1, date2) => {
      return date1.getUTCDate() === date2.getUTCDate() &&
          date1.getFullYear() === date2.getFullYear() &&
          date1.getMonth() === date2.getMonth();
  };
  return this.events.filter(function(obj) {
      return checkDates(obj.eventDate, date);
  });
}

findEventsbyCategory(category) {
  // Returns all events in a given category
  return this.events.filter(function(obj) {
      return obj.category === category;
  });
}

  saveUserEvent(userObj, eventObj) {
      // Allow users to save events to a personal Events array.
      this.personalEvents[userObj.userId].push(eventObj);
  }

  // helper methods
  findEvent(eventId) {
      //returns eventId
      for (let key in this.events) {
          let curEvent = this.events[key].eventId;
          //returns an obj
          if (curEvent === eventId) return this.events[key];
      }
      return "Invalid event";
  }

  findUser(userId) {
      for (let key in this.users) {
          let curUser = this.users[key].userId;
          //returns an object
          if (curUser === userId) {
              return this.users[key];
          }
      }
      return "invalid user";
  }
}
// const isEqual = function (obj1, obj2) {
//   const obj1Keys = Object.keys(obj1);
//   const obj2Keys = Object.keys(obj2);
//   if (obj1Keys.length !== obj2Keys.length) {
//     return false;
//   }
//   for (let objKey of obj1Keys) {
//     if (obj1[objKey] !== obj2[objKey]) {
//       return false;
//     }
//   }
//   return true;
// }


// $(document).ready( () => {
//   const eventRecommender = new EventRecommender();
//   // Your code here
// });
if (typeof module != 'undefined') {
  module.exports = {
    EventRecommender,
    User,
    Event
  };
}
