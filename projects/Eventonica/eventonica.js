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

  addEvent(name, category, eventDate) {
      let newEvent = new Event(name, category, eventDate);
      // Adds a new Event to the System
      let validEvent = this.events.filter((eventObj) => {
          return newEvent.eventId in eventObj;
      }); 
      // Check if event already exists?
      if (validEvent.length > 0) {
          return "Event already saved! please, save a different event.";
      }
      this.events.push(newEvent); // events adding obj's to arr
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
  }

  deleteUser(id) {
    console.log(this.users);
      // Deletes a User from the system
      // Does the user even exist?!
      // console.log(this.users, id)
      if (this.users.length === 0) {
          return "there are currently no users to delete add a user";
      }
      this.users.forEach((obj, i) => {
        console.log(obj, obj['userId'])
          if (obj['userId'] === id) {
              this.users.splice(i, 1);
          }
      });
  }

  saveUserEvent(userId, eventId) {
      // Allow users to save events to a personal Events array.
      // Does the user even exist?!
      // console.log(this.users)

      let validUser = this.users.filter((userObj) => {
          return newUser.userId in userObj;
      });
      if (!validUser) {
          return "User does not exist! please, add user.";
      }
      let validEvent = this.events.filter((eventObj) => {
          return newEvent.eventId in eventObj;
      }); // console.log(eventObj);
      if (!validEvent) {
          return "Event doesn't exist! please, add event.";
      }

      // if (this.users.includes(findUser(userId)) && this.events.includes(findEvent(eventId))){
      //   let user = findUser(userId).userId;
      //   let event = findEvent(eventId);
      //     this.personalEvents[user].push
      // }

      // console.log(user);
      for (let idx in this.personalEvents) {
          if (this.personalEvents[idx].userId === user) {
              this.personalEventSaver[idx].userId.push(event);
          }
      }
      // console.log((user))
  }

  deleteEvent(idEvent) {
      // Deletes the Event from the system
      // console.log(this.events);
      for (let i = 0; i < this.events.length; i++) {
          let curevent = this.events[i];
          if (curevent.eventId === idEvent) {
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
              date1.getMonth() === date2.getMonth();
      };
      return this.events.filter(function(obj) {
          return checkDates(obj.eventDate, date);
      });
  }
  // helper methods
  findEventsbyCategory(category) {
      // Returns all events in a given category
      return this.events.filter(function(obj) {
          // console.log(obj.category)
          return obj.category === category;
      });
  }


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
