const invert = require('/Users/tahsharaboochee/codingPractice/techtonica/assignments/Jasmine/jasmine-pair-activity.js');

describe("invert", () => {
  it("Creates an object composed of the inverted keys and values of object", () =>{
    let obj = { 'a': 1, 'b': 2, 'c': 1 };
    let result = invert(obj);
    let expectedResult = { '1': 'c', '2': 'b' };
    expect(Object.keys(result).length).toEqual(2);
    expect(JSON.stringify(result)).toEqual(JSON.stringify(expectedResult));
  });
});