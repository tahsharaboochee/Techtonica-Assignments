let supertest = require('supertest');
let should = require('should');

let server = supertest.agent('http://localhost:3000');

//test the user saved events 

describe('Eventonica endpoints', function(){
  it('should return home page', function(done){
    server
    .get('/')
    .expect('Content-type', /html/)
    .expect(200) 
    .end(function(err, res){
      res.status.should.equal(200);
      res.text.should.match(/id="all-events"/)
      done();
    });
  });

  it('should add a user', function(done){
    server
    .post('/api/users')
    .send({'name':'Tom','userId':'cf61b'})
    .expect('Content-type', /json/)
    .expect(200)
    .end(function(err, res){
      res.status.should.equal(200);
      res.body.name.should.equal('Tom')
      res.body.userId.should.equal('cf61b');
      done();
    })
  })

  it('should add an event', function(done){
    server
    .post('/api/events')
    .send({'name':'Techtonica', 'eventId': 123456, 'category':'family', 'date': '2020-02-17'})
    .expect('Content-type', /json/)
    .expect(200)
    .end(function(err, res){
      res.status.should.equal(200);
      res.body.name.should.equal('Techtonica')
      res.body.eventId.should.equal(123456);
      res.body.category.should.equal('family')
      res.body.date.should.equal('2020-02-17')
      done();
    })
  })

  

})