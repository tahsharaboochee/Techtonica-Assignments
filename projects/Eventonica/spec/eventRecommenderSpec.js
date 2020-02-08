const {EventRecommender, User, Event} = require('/Users/tahsharaboochee/codingPractice/techtonica/assignments/projects/Eventonica/eventonica.js'); // Update with your class names and file name
let er;
describe("EventRecommender", () => {
  beforeEach(() => {
    er = new EventRecommender();
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
      er.addUser(newUser);
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
      expect(JSON.stringify(er.findEventsbyCategory('data'))).toEqual(JSON.stringify([e]));

      let result = er.findEventsbyCategory('data');
      expect(result.length).toEqual(1);
      expect(result[0].title).toEqual("practice1");
      expect(result[0].category).toEqual("data");
      expect(result[0].eventDate).toEqual(new Date('2018-05-23'));

    });
  });

  describe("saveUserEvent", () => {
    it("adds an event to a user's personal event array", () => {
      let nE = new Event('bootstrap', 'frontEnd', new Date('2020-02-24'))
      er.addEvent(nE);
      let newUser = new User('tom')
      er.addUser(newUser);
      er.saveUserEvent(newUser, nE); // change these to match your method signature

      expect(er.personalEvents[newUser.userId].length).toEqual(1);
    });
  });
});