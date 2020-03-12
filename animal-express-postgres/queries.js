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

const getSightedSpecies = (req, res) => {
  pool.query('SELECT * FROM sightings JOIN tracked_species ON sightings.tracked_specie_id = tracked_species.tracked_specie_id ORDER BY tracked_specie_id ASC', (error, results) => {
    // console.log('inside queries response', results)
    if (error) { 
      throw error
    }
    res.status(200).json(results.rows)
  });
}

module.exports = {
  getSpecies,
  getSightedSpecies
}