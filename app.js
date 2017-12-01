require('dotenv').config()
const express = require('express')
const app = express()
const beer = require('./route/beer-route')
const fetch = require("isomorphic-fetch")
const port = process.env.PORT || 4000

console.log(`port set to ${port}`)

app.get('/', (req, res, next) => res.send('Welcome to the Beer API. Manage and share all your favorite beers with fellow be' +
    'er lovers.'))

app.use('/beers', beer)

app.use((err, req, res, next) => {
  console.log("Error status: ", err.status, " Error message: ", err.message)
  res.status(err.status)
  res.send(err)
})
app.listen(port, () => console.log(`App listening on port: ${port}`))

// app.get('/brewery', (req, res, next) => {   const response =
// fetch(`${apiUrl}?key=${apiKey}/brewery&key=${apiKey}&format=json`)
// .then(results => results.json())     .catch(err => console.log(err)) //
// extract into a method     response     .then(r => console.log(r))
// //res.status(response.status).send("brewery: ",response.body) })