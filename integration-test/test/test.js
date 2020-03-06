let supertest = require('supertest');
let should = require('should');

let server = supertest.agent('http://localhost:3000');

//Unit test begin

describe('SAMPLE unit test', function(){
  // #1 should return home page 

  it('should return home page', function(done){
    //calling home page api
    server
    .get('/')
    .expect('Content-type', /json/)//regex needs to match json
    .expect(200) // this is HTTP response
    .end(function(err, res){
      //HTTP status should be 200
      res.status.should.equal(200);
      //ERROR key should be false.
      res.body.error.should.equal(false);
      done();
    });
  });

  it('should add two number', function(done){
    //calling ADD api
    server 
    .post('/add')
    .send({num1 : 10, num2 : 20})
    .expect('Content-type', /json/)
    .expect(200)
    .end(function(err, res){
      res.status.should.equal(200);
      res.body.error.should.equal(false);
      res.body.data.should.equal(30);
      done();
    });
  });

  it("should add two number",function(done){
    //calling ADD api
    server
    .post('/add')
    .send({num1 : 10, num2 : 20})
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.body.error.should.equal(false);
      res.body.data.should.equal(40);
      done();
    });
  });

  it("should return 404",function(done){
    server
    .get("/random")
    .expect(404)
    .end(function(err,res){
      res.status.should.equal(404);
      done();
    });
  })

});