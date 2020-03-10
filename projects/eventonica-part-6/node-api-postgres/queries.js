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
    if (error) {
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
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  });
}

//post a new user
const createUser = (request, response) => {
  const {
    name
  } = request.body;

  pool.query('INSERT INTO users (name) VALUES ($1)', [name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
}

//delete a user 
const deleteUser = (request, response) => {
  const id = parseInt(request.body.user_id);
  pool.query('DELETE FROM users WHERE user_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    // console.log('deleteUser respons: ', response, 'deleteUser request:', request)
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

/* EVENTS */

//get all events
const getEvents = (request, response) => {
  pool.query('SELECT * FROM events ORDER BY event_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//get event by id
const getEventById = (request, response) => {
  const id = parseInt(request.body.event_id)
  // we’re looking for id=$1. In this instance, $1 is a numbered placeholder
  pool.query('SELECT * FROM events WHERE event_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
//get event by date
const getEventByDate = (request, response) => {
  const date = request.params.eventDate;
  // we’re looking for id=$1. In this instance, $1 is a numbered placeholder
  pool.query(`SELECT * FROM events WHERE date = '${date}'`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results)
  })
}
//get event by category
const getEventByCategory = (request, response) => {
  const category = request.params.category;
  // we’re looking for id=$1. In this instance, $1 is a numbered placeholder
  pool.query(`SELECT * FROM events WHERE category = $1`, [category], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results)
  })
}

//post a new Event
const createEvent = (request, response) => {
  const {
    name,
    category,
    date
  } = request.body;

  pool.query('INSERT INTO events (name, category, date) VALUES ($1, $2, $3) returning event_id', [name, category, date], (error, results) => {
    if (error) {
      throw error
    }
    let id = results.rows[0].event_id
    pool.query(`SELECT * FROM events WHERE event_id = ${id}`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(results.rows[0])
    })
  })
}

//delete an Event 
const deleteEvent = (request, response) => {
  const id = parseInt(request.body.event_id)

  pool.query('DELETE FROM events WHERE event_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
        response.status(201).send(`successfully Deleted`)
  })
}

// update users saved events
const saveEventForUser = (request, response) => {
  const user_id = parseInt(request.body.user.user_id)
  const event_id = parseInt(request.body.event.event_id)

  pool.query(`INSERT INTO userevents (user_id, event_id) 
              SELECT $1, $2 
              WHERE 
              NOT EXISTS 
              (SELECT user_id FROM userevents 
              WHERE user_id = $1);`,
    [user_id, event_id], (error, results) => {
      if (error) {
        throw error
      }
      pool.query(`SELECT name FROM events WHERE event_id = $1;`, [event_id], (error, results) => {
        if (error){
          throw error
        } else {
          response.status(201).send(`Event added with ID: ${JSON.stringify(results.rows[0].name)}`)
        }
      })
    })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  getEvents,
  getEventById,
  getEventByDate,
  getEventByCategory,
  createEvent,
  deleteEvent,
  saveEventForUser
}