const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  database: 'animalsightings',
  host: 'localhost',
  password: 'password',
  port: 5432,
})

const getSpecies = (req, res) => {
  pool.query('SELECT * FROM sightings JOIN tracked_species ON sightings.tracked_specie_id = tracked_species.tracked_specie_id ORDER BY specie_id ASC', (error, results) => {
    console.log('inside queries response', res)
    if (error) { 
      throw error
    }
    res.status(200).json(res.rows)
  });
}

module.exports = {
  getSpecies
}