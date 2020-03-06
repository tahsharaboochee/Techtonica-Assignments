import express from 'express';
const app = express();

import bodyParser from 'body-parser';


app.use(bodyParser.json());//telling express to use body parser
app.use(bodyParser.urlencoded({extended: true}));//use when not using ajax i.e. purely html

const lists = new Map();//gives an empty javascript object usually start with empty and fill in with post request
//set method on a map instance takes in two parameters the key and value
lists.set("staff",
  {name: "Techtonica Staff",
   members: ["talea@techtonica.org", 
             "michelle@techtonica.org"
            ]
});
lists.set("cohort-h1-2020",
  {name: "Cohort from the first half of 2020",
   members: ["gloria@example.com", 
             "tahshara@example.com",
            ]
});

app.get('/lists', function(req, res){
  const listsArray = Array.from(lists.values());
  // res.json(listsArray)
  res.send(listsArray);
});


app.get('/lists/:name', function(req, res){
  //grabbing the paramater name given in the route with :name
  let name = req.params.name;
    // res.json({name: "staff",
    //           members: ["talea@techtonica.org", "michelle@techtonica.org"]})
    res.json(lists.get(name))
  })

  app.post('/lists/:name', function(req, res){
    //grabbing parameter name and storing it as a variable
    let name = req.params.name;
    if (lists.has(name)){
      return res.status(409).send({
        message: 'This list name already exists'
      })
    }
    //a variable storing the values at key name
    let listName = req.body.name
    //a variable storing the values at key members
    let members = req.body.members;
    //short term way of posting to memory which currently is a map object
    lists.set(name,{
      name: listName,
      members: members
    })

    //deconstructed way 
    // const {name, members} = req.body; 
    // lists.set(name, {
    //   name: name,
    //   members: members
    // })
    res.send(lists.get(name));

  })
  app.delete('/lists/:name', function(req, res){
    //grabbing parameter name and storing it as a variable
    let name = req.params.name;
    if (!lists.has(name)){
      return res.status(409).send({
        message: 'This list does not exist'
      })
    }
    //a variable storing the values at key name
    let listName = req.body.name
    //a variable storing the values at key members
    let members = req.body.members;
    //short term way of posting to memory which currently is a map object
    lists.delete(name)

    //deconstructed way 
    // const {name, members} = req.body; 
    // lists.set(name, {
    //   name: name,
    //   members: members
    // })
    return res.status(200).send({
      message: 'This list has been deleted'
    })

  })

  app.put('/lists/:name', function(req, res){
    if (lists.has(name)){
      return res.status(200).send({
        message: 'This has been updated'
      })
    } 
    if (!lists.has(name)){
      return res.status(200).send({
        message: 'This has been created'
      })
    }
    //grabbing parameter name and storing it as a variable
    let name = req.params.name;
    //a variable storing the values at key name
    let listName = req.body.name
    //a variable storing the values at key members
    let members = req.body.members;
    //short term way of posting to memory which currently is a map object
    lists.set(name,{
      name: listName,
      members: members
    })


    res.json(lists.get(name));

  })

// app.post('/lists/:name', function(req, res){
//   //grabbing the paramater name given in the route with :name
//   let name = req.params.name
//   console.log('body of lists:', req.body);
//     res.json({name: "staff",
//               members: ["talea@techtonica.org", "michelle@techtonica.org"]})
//   })

let server = app.listen(3000, function(){
  let host = server.address().address;
  let port = server.address().port;
  console.log('your app is running at http://%s:%s', host, port )
})
/** 
 * connect to the server through terminal
telnet localhost 3000 //typed in the terminal
// telnet response in terminal
Trying ::1...
Connected to localhost.
Escape character is '^]'.
//next three lines including blank line is typed in terminal
GET /lists HTTP/1.1
Host: localhost 

//response from server
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-l9Fw4VUO7kr8CvBlt4zaMCqXZ0w"
Date: Wed, 19 Feb 2020 19:57:15 GMT
Connection: keep-alive

[]Connection closed by foreign host.
*/
/** 
 * 
 * telnet localh 
Trying ::1...
Connected to localhost.
Escape character is '^]'.
POST /lists HTTP/1.1
Host: localhost
Content-Length: 0 

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 77
ETag: W/"4d-OGj/lGgFu9SLf5HLmG1UzfCD8SA"
Date: Wed, 19 Feb 2020 20:05:25 GMT
Connection: keep-alive

{"name":"staff","members":["talea@techtonica.org","michelle@techtonica.org"]}Connection closed by foreign host.
*/