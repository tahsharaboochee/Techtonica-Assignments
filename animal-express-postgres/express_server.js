const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000
const db = require('./queries')
const cors = require("cors");
app.use(cors());

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/species', db.getSpecies)
app.get('/sightedSpecies', db.getSpecies)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})


