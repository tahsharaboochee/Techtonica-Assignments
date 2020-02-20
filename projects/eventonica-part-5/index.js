//es5 way of importing: we are creating a new variable called eventRecommender that has a object with all of the exported items from eventonica.js 
// //thus to access the class must do new eventRecommender.EventRecommender
let eventRecommender = require('./eventonica.js')
er = new eventRecommender.EventRecommender();

//es6 way of importing
// import {EventRecommender} from './eventonica.js';// to get er class let er = new EventRecommender();

//Give data to the server
const users = [
  {name: 'Tom', id: 'cf61b'},
  {name: 'Sally', id: '996a0'},
  {name:'Polly', id: '569a1'}
]
const events = [
  {name: 'Beach Volley Ball', category: 'sport', date: new Date('2020-04-15')},
  {name: 'Factorials!', category: 'Math', date: new Date('2020-02-17')},
  {name: 'War and Peace', category: 'reading', date: new Date('2020-03-23')}
]
const userEvents = {
  'cf61b':[{name: 'Beach Volley Ball', category: 'sport', date: new Date('2020-04-15')}],
  '996a0':[{name: 'Factorials!', category: 'Math', date: new Date('2020-02-17')}],
  '569a1':[{name: 'War and Peace', category: 'reading', date: new Date('2020-03-23')}]
}

// let mysql   = require('mysql'); //mysql is a database es5 way of importing mysql
//express is a web application framework for Node

const Joi = require('joi');
// import express from 'express'//es6 way of importing express
let express = require('express'); //es5 way of importing express
let app = express();
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
app.get('/api/users', function(req, res){
  res.send(users);// send user infomation
})
app.post('/api/users', (req, res) =>{
  //validate 
  const schema = {
    name: Joi.string().min(3).required()
  }

  const {error} = validateUser(req.body);
  if (error){
    //400 bad request
    res.status(400).send('Name is required and should be minimum 3 characters');
    console.log(error.details[0].message);
    return;
  }
  const user = {
    name: req.body.name,
    id: Math.random().toString(16).substr(2, 5)
  };
  users.push(user);
  res.json(user);
})
app.put('/api/userEvents/:id', (req, res) =>{
  const user = users.find(u => u.id === req.params.id);//checks
  //if there is no valid user ID, then display an error with the following message
  if(!user) res.status(404).send('<h2 style="font-family: Malgun Gothic; color darkred;">Oooops... Cant find what you are looking for</h2>');
 // const result = validateUser(req.body); if(result.error)
  //object destructuring 
  const {error} = validateUser(req.body);
  if (error){
    //400 bad request
    res.status(400).send('Name is required and should be minimum 3 characters');// or send (error.details[0].message);
    return;
  }
  user.name = req.body.name;
  res.json(user);
<<<<<<< HEAD

=======
>>>>>>> 56ee5d6... added index.js
})
//Display the information of specific User when you mention the id.
app.get('/api/users:id', function(req, res){
  const user = users.find(u => u.id === req.params.id);//checks
  console.log(user)
  //if there is no valid user ID, then display an error with the following message
  if(!user) res.status(404).send('<h2 style="font-family: Malgun Gothic; color darkred;">Oooops... Cant find what you are looking for</h2>');
  
  res.send(user);// send user infomation
})

function validateUser(user){
  const schema = {
    name: Joi.string().min(3).required()
  }
  return Joi.validate(user, schema);
}
//PORT environment variable
const port = process.env.PORT || 3000; //process environment
app.listen(port, () => console.log(`Listening on port ${port}`));
// let server = app.listen(3000, function () {
//   let host = server.address().address;
//   let port = server.address().port;
//   console.log('your app is running at http://%s:%s', host, port);
// });