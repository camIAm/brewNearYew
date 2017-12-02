require('dotenv').config()
const PouchDB = require('pouchdb')
const db = new PouchDB(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)
console.log("loading data to :", process.env.COUCHDB_URL + process.env.COUCHDB_NAME)
const beers = []

db
  .bulkDocs(beers)
  .then(res => console.log("Successfully loaded data!"))
  .catch("An error has occurred will loading data")