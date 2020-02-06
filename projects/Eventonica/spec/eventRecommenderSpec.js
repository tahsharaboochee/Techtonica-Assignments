const {EventRecommender, User, Event} = require('/Users/tahsharaboochee/codingPractice/techtonica/assignments/projects/Eventonica/eventonica.js'); // Update with your class names and file name
let er;
describe("EventRecommender", () => {
  // console.log("EventRecommender:<---------", EventRecommender)
  beforeEach(() => {
    er = new EventRecommender();
    // console.log(er);
  });

  describe("addEvent", () => {
    it("adds a new Event to the system", () => {
      let newEvent = new Event('practice1', 'science', new Date('2019-05-23'))
      er.addEvent(newEvent);
      expect(er.events.length).toEqual(1);
      // expect(er.events[0].title).toEqual('practice', 'science', new Date('2020-05-23')); // what are some other things you can test?
    });
  });

  describe("addUser", () => {
    it("adds a new User to the system", () => {
      let newUser = new User('hank');
      er.addUser(newUser['name'], newUser['userId']);
      expect(er.users.length).toEqual(1);
    });
  });

  describe("deleteUser", () => {
    it("removes a User from the system", () => {
      let newUser = new User ('Susan');
      er.addUser(newUser);
      er.deleteUser(newUser['userId']);
      expect(er.users.length).toEqual(0);
    });
  });

  describe("deleteEvent", () => {
    it("removes the event from the system", () => {
      let newEvent = new Event('practice1', 'data', new Date('2018-05-23'))
      er.addEvent(newEvent);
      er.deleteEvent(newEvent.eventId);
      expect(er.events.length).toEqual(0);
    });
  });

  describe("findEventsByDate", () => {
    it("Returns all events on a given date", () => {
      let newEvent = new Event('practice1', 'data', new Date('2018-06-23'));
      er.addEvent(newEvent);
      expect(er.findEventsByDate(new Date('2018-05-23'))).toEqual([]);
      let result = er.findEventsByDate(new Date('2018-06-23'));
      expect(result.length).toEqual(1);
      expect(result[0].title).toEqual('practice1');
      expect(result[0].category).toEqual('data');
      expect(result[0].eventDate).toEqual(new Date('2018-06-23'));

    });
  });

  describe("findEventsByCategory", () => {
    it("Returns all events in a given category", () => {
      let e = new Event('practice1', 'data', new Date('2018-05-23'));
      let e1 = new Event('practice', 'science', new Date())
      er.addEvent(e);
      er.addEvent(e1);
      // expect(JSON.stringify(er.findEventsbyCategory('data'))).toEqual(JSON.stringify([e]));

      let result = er.findEventsbyCategory('data');
      expect(result.length).toEqual(1);
      expect(result[0].title).toEqual("practice1");
      expect(result[0].category).toEqual("data");
      expect(result[0].eventDate).toEqual(new Date('2018-05-23'));

    });
  });

  // describe("saveUserEvent", () => {
  //   it("adds an event to a user's personal event array", () => {
  //     er.addEvent('bootstrap', 'frontEnd', new Date('2020-02-24'));
  //     let u = er.addUser('tom');
  //     er.saveUserEvent(u.userId, 'bootstrap', 'frontEnd', new Date('2020-02-24')); // change these to match your method signature
  //     expect(er.user.personalEvents.length).toEqual(1);
  //   });
  // });

  // describe("findEventsByCategory", () => {
  //   it("Returns all events in a given date - DAN", () => {
  //     let e = new Event('practice1', 'data', new Date('2018-05-23'));
  //     er.addEvent('practice1', 'data', new Date('2018-05-23'));
  //     er.addEvent('practice2', 'data', new Date('2018-05-24'));
  //     er.addEvent('practice3', 'science', new Date('2018-05-23'));
  //     let tests = [
  //       ['2018-05-23', 2],
  //       ['2018-05-24', 1],
  //       ['2018-05-25', 0],
  //       [null, 0],
  //     ];
  //     for (let test of tests) {
  //       let dateParam = test[0];
  //       let expectedResultLength = test[1];
  //       let result = er.findEventsByDate(dateParam);
  //       expect(result.length).toEqual(expectedResultLength);
  //     }
  //   });
  // });

  // describe("saveUserEvent", () => {
  //   it("Allow users to save events to a personal Events array.", () => {
  //     er.addUser('tom')
  //     er.addEvent('bootstrap', 'frontEnd', new Date('2020-02-24'));
  //     er.saveUserEvent('tom', 'bootstrap', 'frontEnd', new Date('2020-02-24'));
  //     er.findUser('tom');
  
  //     let result = er.findUser('tom')['personlEvents']
  //     expect(result.length).toEqual(1);
  //     // expect(result2.length).toEqual(0);
  //   });
  // });


});