const express = require('express')
const app = express()
const port = 3000

const path = require('path');
const exphbs = require('express-handlebars');

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(_dirname, 'views/layouts')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(_dirname, 'views'))
// app.get('/', (request, response) => {
//   response.send('Hello from Express!')
// })

// app.listen(port, (err) => {
//   if (err) {
//     return console.log('something bad happened', err)
//   }

//   console.log(`server is listening on ${port}`)
// })

// Express using Middlewares
// app.use((request, response, next) => {
//   console.log(request.headers)
//   next()
// })

// app.use((request, response, next) => {
//   request.chance = Math.random()
//   next()
// })

// app.get('/', (request, response) => {
//   response.json({
//     chance: request.chance
//   })
// })

// app.listen(3000)

// // Error handling

// app.get('/', (request, response) => {
//   throw new Error('oops')
// })

// app.use((err, request, response, next) => {
//   // log the error, for now just console.log
//   console.log(err)
//   response.status(500).send('Something broke!')
// })