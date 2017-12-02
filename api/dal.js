require('dotenv').config()

const PouchDB = require('pouchdb')
const pkGen = require('./lib/primary-key-generator')
const dbName = process.env.COUCHDB_DATABASE
const dbURL = process.env.COUCHDB_URL

console.log('db is' + dbURL + dbName)

const db = new PouchDB(dbURL + dbName)

const addBrewery = (brewery) => {

  brewery._id = pkGen('book', '_', brewery.title)

  add(brewery, callback)
  //add(merge(book, {_id: pkGen("book", "_", prop('title', book)}), callback)
}
const getBrewery = id => get(id)
const updateBrewery = book => update(book)
const deleteBrewery = id => deleteDoc(id)
const listBreweries = () => db.allDocs({include_docs: true})
////////////////////////////// /        HELPERS ////////////////////////////
const add = doc => db.put(doc)
const get = id => db.get(id)

const update = doc => db.put(doc)

const deleteDoc = id => db.remove(id)

const dal = {
  addBrewery,
  getBrewery,
  updateBrewery,
  deleteBrewery,
  listBreweries
}

module.exports = dal