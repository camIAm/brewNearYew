require('dotenv').config()
const PouchDB = require('pouchdb')
const db = new PouchDB(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)
console.log("loading data to :", process.env.COUCHDB_URL + process.env.COUCHDB_NAME)
const beers = [
  {
    name: "COAST Brewing Company",
    website: "coastbrewing.com",
    phone: "843-343-4727",
    address: "1250 2nd St N",
    city: "North Charleston",
    state: "South Carolina",
    zip: "29405",
    hours: {
      Thurs: "4pm-7pm",
      Friday: "4pm-7pm",
      Saturday: "11am-2pm"
    }
  }
]

db
  .bulkDocs(beers)
  .then(res => console.log("Successfully loaded data!"))
  .catch("An error has occurred will loading data")