describe("EventRecommender", () => {
  const { EventRecommender, User, Event } = require('/Users/tahsharaboochee/codingPractice/techtonica/assignments/projects/Eventonica/eventonica.js'); // Update with your class names and file name
  let er; 
  // console.log("EventRecommender:<---------", EventRecommender);

  beforeEach(() => {
    er = new EventRecommender();
    // console.log(er);
  });

  describe("addEvent", () => {
    it("adds a new Event to the system", () => {
      er.addEvent('practice', 'example', new Date());
      expect(er.events.length).toEqual(1);
      expect(er.events[0].title).toEqual('practice', 'example', new Date()); // what are some other things you can test?
    });
  });

  describe("addUser", () => {
    it("adds a new User to the system", () => {
      er.addUser('hank');
      expect(er.users.length).toEqual(1);
    });
  });

   

  describe("deleteUser", () => {
    it("removes a User from the system", () => {
      er.addUser('susan');
      er.deleteUser('susan');
      expect(er.users.length).toEqual(0);
    });
  });

  describe("deleteEvent", () => {
    it("removes the event from the system", () => {
      er.addEvent('practice1', 'example1', new Date());
      er.deleteEvent('practice1');
      expect(er.events.length).toEqual(0);
    });
  });
});