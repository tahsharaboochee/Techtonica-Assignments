const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me', 
  database: 'eventonica',
  host: 'localhost',
  password: 'password',
  port: 5432,
})

// Get all users
const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
    if (error){
      throw error
    }
    response.status(200).json(results.rows)
  });
}

//get user by id
const getUserById = (request, response) => {
  const id = parseInt(request.params.user_id)
  // we’re looking for id=$1. In this instance, $1 is a numbered placeholder
  pool.query('SELECT * FROM users WHERE user_id = $1', (error, results) => {
    if (error){
      throw error 
    }
    response.status(200).json(results.rows)
  });
}

//post a new user
const createUser = (request, response) => {
  const {name} = request.body; 

  pool.query('INSERT INTO users (name) VALUES ($1)', [name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
}

//delete a user 
const deleteUser = (request, response) => {
  const id = parseInt(request.params.user_id)

  pool.query('DELETE FROM users WHERE user_id = $1', [id], (error, results) =>{
    if(error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

/* EVENTS */

//get all events
const getEvents = (request, response) => {
  pool.query('SELECT * FROM events ORDER BY event_id ASC', (erro, results) => {
    if (error){
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//get event by id
const getEventById = (request, response) => {
  const id = parseInt(request.params.event_id)
  // we’re looking for id=$1. In this instance, $1 is a numbered placeholder
  pool.query('SELECT * FROM events WHERE event_id = $1', (error, results) => {
    if (error){
      throw error 
    }
    response.status(200).json(results.rows)
  })
}

//post a new Event
const createEvent = (request, response) => {
  const {name, category, date} = request.body; 

  pool.query('INSERT INTO events (name, category, date) VALUES ($1)', [name, category, date], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Event added with ID: ${result.insertId}`)
  })
}

//delete an Event 
const deleteEvent = (request, response) => {
  const id = parseInt(request.params.event_id)

  pool.query('DELETE FROM events WHERE event_id = $1', [id], (error, results) =>{
    if(error) {
      throw error
    }
    response.status(200).send(`Event has been deleted with ID: ${id}`)
  })
}

// update users saved events
const saveEventForUser = (request, response) => {
  // const user_id = parseInt(request.body.users[user_id)
  // const event_id = parseInt(request.params.event_id)
  // // const {} = request.body
  // const user = er.findUser(req.body.user['userId']);//checks
  // const event = er.findEvent(req.body.event['eventId']);//checks
  // console.log('inside app.put for userEvents: user: ', user, 'event: ', event)
  // //if there is no valid user ID, then display an error with the following message
  // if(user && event) {
  //   er.saveUserEvent(user, event);
  //   res.status(200).send(`Successfully added the event, ${event.name}`)
  // } else {
  //   res.status(404).send('<h2 style="font-family: Malgun Gothic; color darkred;">Oooops... Cant find what you are looking for</h2>');
  // }

}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  getEvents,
  getEventById,
  createEvent,
  deleteEvent,
  saveEventForUser 
}