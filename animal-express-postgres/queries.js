const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  database: 'animalsightings',
  host: 'localhost',
  password: 'password',
  port: 5432,
})

const getSpecies  = (req, res) => {
  pool.query('SELECT * FROM species ORDER BY specie_id ASC', (error, results) => {
    // console.log('inside queries response', results)
    if (error) { 
      throw error
    }
    res.status(200).json(results.rows)
  });
}

const getTrackedSpecies = (req, res) => {
  pool.query('SELECT * FROM tracked_species ORDER BY tracked_specie_id ASC', (error, results) => {
    // console.log('inside queries response', results)
    if (error) { 
      throw error
    }
    res.status(200).json(results.rows)
  });
}
const getSightedSpecies = (req, res) => {
  pool.query('SELECT * FROM sightings JOIN tracked_species ON sightings.tracked_specie_id = tracked_species.tracked_specie_id ORDER BY tracked_species.tracked_specie_id ASC', (error, results) => {
    // console.log('inside queries response', results)
    if (error) { 
      throw error
    }
    res.status(200).json(results.rows)
  });
}

const createSighting = (request, response) => {
  const {
    tracked_specie_id,
    specie_health,
    location_sighted,
    dated_sighted
  } = request.body;

  pool.query('INSERT INTO sightings (tracked_specie_id, specie_health, location_sighted, date_sighted) VALUES ($1, $2, $3, $4) returning tracked_specie_id', [tracked_specie_id, specie_health, location_sighted, dated_sighted], (error, results) => {
    if (error) {
      throw error
    }
    let tracked_specie_id = results.rows[0].tracked_specie_id 
    pool.query('SELECT * FROM sightings JOIN tracked_species ON sightings.tracked_specie_id = tracked_species.tracked_specie_id ORDER BY tracked_species.tracked_specie_id ASC', (error, results) => {
      // console.log('inside queries response', results)
      if (error) { 
        throw error
      }
      response.status(201).send(results.rows[0])
    })
  })
}

module.exports = {
  getSpecies,
  getTrackedSpecies,
  getSightedSpecies,
  createSighting
}