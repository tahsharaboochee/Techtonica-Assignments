//es5 way of importing: we are creating a new variable called eventRecommender that has a object with all of the exported items from eventonica.js 
// //thus to access the class must do new eventRecommender.EventRecommender
let eventRecommender = require('/Users/tahsharaboochee/codingPractice/techtonica/assignments/projects/eventonica-part-5/public/eventonica.js')
er = new eventRecommender.EventRecommender();
// //Give data to the server
er.addUser({'name':'Tom','userId':'cf61b'});
er.addUser({'name':'Sally','userId':'996a0'});
er.addUser({'name':'Polly','userId':'569a1'});
er.addEvent({"name":'Factorials!', "eventId": 1, "category":'family', "date": '2020-02-17'});
er.addEvent({"name":'War and Peace', "eventId": 2, "category":'Arts & Theater', "date":'2020-03-23'});
er.addEvent({"name":'Beach Volley Ball', "eventId": 3, "category":'sports', "date":'2020-04-15'});
er.addEvent( {"name":'Techtonia', "eventId": 4, "category":'Concerts', "date":'2020-04-15'});
er.saveUserEvent({'name':'Tom','userId':'cf61b'}, {"name":'Factorials!', "eventId": 1, "category":'family', "date": '2020-02-17'});
er.saveUserEvent({'name':'Sally','userId':'996a0'}, {"name":'War and Peace', "eventId": 2, "category":'Arts & Theater', "date":'2020-03-23'});
er.saveUserEvent({'name':'Polly','userId':'569a1'}, {"name":'Beach Volley Ball', "eventId": 3, "category":'sports', "date":'2020-04-15'});
er.saveUserEvent({'name':'Polly','userId':'569a1'}, {"name":'Techtonia', "eventId": 4, "category":'Concerts', "date":'2020-04-15'});
//es6 way of importing
// import {EventRecommender} from './eventonica.js';// to get er class let er = new EventRecommender();

// let mysql   = require('mysql'); //mysql is a database es5 way of importing mysql
//express is a web application framework for Node

const Joi = require('joi');
// import express from 'express'//es6 way of importing express
let express = require('express'); //es5 way of importing express
let app = express();
const db = require('/Users/tahsharaboochee/codingPractice/techtonica/assignments/projects/eventonica-part-6/node-api-postgres/queries.js')

app.use(express.json()); // to use the json file
// import bodyParser from 'body-parser'; //body parser parses the json that is sent via request/post and allows it to be manipulated via javascript
let bodyParser = require('body-parser');//Es5 way of importing body Parser 
app.use(bodyParser.json()); //telling express to use body parser
app.use(bodyParser.urlencoded({extended: true})); //use when not using ajax i.e. purely html

/*application settings i.e. setting the views folder and static folders*/
//any request that comes from the document or ajax request we will look inside the directory
app.use(express.static('public'));

//get the file and send it to the server
app.get('/', function (req, res) {
  res.sendFile('/index.html', {root: __dirname});
})
//Display the list of Users when URL consist of eventRecommender users
//working
app.get('/api/users', db.getUsers)
//working
app.post('/api/users', db.createUser)

//Display the information of specific User when you mention the id.
// working
app.get('/api/users/:id', db.getUserById)

//delete user
app.delete('/api/users/:id',db.deleteUser)

//display events 
app.get('/api/events', function(req, res){
  res.send(er.events);// send user infomation
})

//display events by category
app.get('/api/events/by-category/:category', function(req, res){
  let category = req.params.category; 
  console.log('events-by-category app.get:', 'category', category)
  foundEventsByCategory = er.findEventsbyCategory(category)
  if(category.length > 0){
    res.status(200).json(foundEventsByCategory)
  } else{
    res.status(400).send('no events for this category')
  }
})

//display events by date
app.get('/api/events/by-date/:eventDate', function(req, res){
  let date = req.params.eventDate; 
  console.log('events-by-date app.get:', 'date', date)
  let foundEvents = er.findEventsByDate(date)
  if(foundEvents.length > 0){
    res.status(200).json(foundEvents)
  } else{
    res.status(400).send('no events for this date')
  }
})
//create event
app.post('/api/events', (req, res) =>{
  const event = {
    name: req.body.name,
    eventId: req.body.eventId || Math.floor(Math.pow(10, 5) + Math.random() * (Math.pow(10, 6) - Math.pow(10, 5) - 1)),//random 6 digit number
    category: req.body.category, 
    date: req.body.date
  };

  if(!er.findEvent(event.eventId)){
    er.addEvent(event);
  } else {
    res.status(400).send('event already exist!')
  }
  res.json(event);
})

//Display the information of specific event when you mention the id.
app.get('/api/events/:id', function(req, res){
  const id = parseInt(req.params.id); 
  const event = er.findEvent(id);//checks
 
  res.json(event);// send user infomation
})

//delete event by id
app.delete('/api/events/:id', function(req, res){
  const eventId = parseInt(req.params.id); 
  // console.log('id:', id)
  console.log('server side app.delete:', eventId)
  const event = er.findEvent(eventId)
  if(event){
    er.deleteEvent(eventId);
    res.status(200).send(`${event.name} has been deleted from events`)
  }else{
    res.status(400).send('error event has not been deleted')
  }
})
//display userEvents
app.get('/api/userEvents', (req, res) =>{
  res.send(er.personalEvents);// send user infomation
})

// edit saved events for user
app.put('/api/userEvents', (req, res) =>{
  const user = er.findUser(req.body.user['userId']);//checks
  const event = er.findEvent(req.body.event['eventId']);//checks
  console.log('inside app.put for userEvents: user: ', user, 'event: ', event)
  //if there is no valid user ID, then display an error with the following message
  if(user && event) {
    er.saveUserEvent(user, event);
    res.status(200).send(`Successfully added the event, ${event.name}`)
  } else {
    res.status(404).send('<h2 style="font-family: Malgun Gothic; color darkred;">Oooops... Cant find what you are looking for</h2>');
  }
})

//PORT environment variable
const port = process.env.PORT || 8080; //process environment
app.listen(port, () => console.log(`Listening on port ${port}`));
// let server = app.listen(3000, function () {
//   let host = server.address().address;
//   let port = server.address().port;
//   console.log('your app is running at http://%s:%s', host, port);
// });

