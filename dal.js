require('dotenv').config()

const PouchDB = require('pouchdb')
PouchDB.plugin(require('pouchdb-find'))
//const pkGen = require('./lib/primary-key-generator')
const dbUrl = process.env.COUCHDB_URL
const dbName = process.env.COUCHDB_NAME
const {prop, split} = require('ramda')
//console.log('db is' + dbUrl + dbName)

const db = new PouchDB(dbUrl + dbName)

const addBeer = (beer) => {
  beer._id = pkGen('beer', '_', prop('name', beer))
  return add(beer)
}
const getBeer = id => get(id)
const updateBeer = doc => update(doc)
const deleteBeer = id => {
  console.log("in deleteBeer")
  return deleteDoc(id)
}
/*
<<<<<<< HEAD
db.find(
  {
    selector: {name: 'Mario'},
    fields: ['_id', 'name'],
    sort: ['name']
  }
)
*/
// add sort then make this function so that i can display by type
const listBeers = (filter, limit, lastItem) => {
  limit = Number(limit)
  let selector = {}
  if (filter) {
    let filterArr = split(':', filter)
    const filterKey = filterArr[0]
    const filterValue = filterArr[1]
    selector[filterKey] = filterValue
  }
  (lastItem)
    ? selector['_id'] = {
      $gt: lastItem
    }
    : selector['_id'] = {
      $gt: null
    }

  console.log({selector})
  return findDocs({selector: selector, limit})
}
////////////////////////////// /        HELPERS ////////////////////////////
const add = doc => db.put(doc)
const get = id => db.get(id)
const update = doc => db.put(doc)
const deleteDoc = id => db
  .get(id)
  .then(doc => db.remove(doc))

const findDocs = query => db
  .find(query)
  .then(obj => obj.docs)

module.exports = {
  addBeer,
  getBeer,
  updateBeer,
  deleteBeer,
  listBeers
}