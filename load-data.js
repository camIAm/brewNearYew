require('dotenv').config()
const PouchDB = require('pouchdb')
const db = new PouchDB(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)
console.log("loading data to :", process.env.COUCHDB_URL + process.env.COUCHDB_NAME)
const beers = [
  {
    "_id": "beer_kentucky_brunch_branch_stout",
    "name": "Kentucky Brunch Brand Stout",
    "type": "American Double",
    "brewer": "Toppling Goliath Brewing Company",
    "ABV": "12.00",
    "score": 4.83,
    "ratings": 640
  }, {
    "_id": "beer_good_Morning",
    "name": "Good Morning",
    "type": "American Double",
    "brewer": "Tree House Brewing Company",
    "ABV": "8.50",
    "score": 4.74,
    "ratings": 1024
  }, {
    "_id": "beer_heady_topper",
    "name": "Heady Topper",
    "type": "Imperial IPA",
    "brewer": "The Alchemist Brewery and Visitors Center",
    "ABV": "8.00",
    "score": 4.72,
    "ratings": 13590
  }, {
    "_id": "beer_barrel-aged_abraxas",
    "name": "Barrel-Aged Abraxas",
    "type": "Imperial Stout",
    "brewer": "Toppling Goliath Brewing Company",
    "ABV": "11.00",
    "score": 4.74,
    "ratings": 1351
  }, {
    "_id": "beer_pliny_the_younger",
    "name": "Pliny The Younger",
    "type": "American Double",
    "brewer": "Russian River Brewing Company",
    "ABV": "10.25",
    "score": 4.70,
    "ratings": 3400
  }, {
    "_id": "beer_fundamental_obervation",
    "name": "Fundamental Observation",
    "type": "American IPA",
    "brewer": "Bottle Logic Brewing",
    "ABV": "14.30",
    "score": 4.71,
    "ratings": 932
  }, {
    "_id": "beer_double_sunshine_ipa",
    "name": "Double Sunshine IPA",
    "type": "American Double",
    "brewer": "Lawson's Finest Liquids",
    "ABV": "8.00",
    "score": 4.67,
    "ratings": 2140
  }, {
    "_id": "beer_julius",
    "name": "Julius",
    "type": "American IPA",
    "brewer": "Tree House Brewing Company",
    "ABV": "11.00",
    "score": 4.66,
    "ratings": 3762
  }, {
    "_id": "beer_pliny_the_elder",
    "name": "Pliny the Elder",
    "type": "American Double",
    "brewer": "Russian River Brewing Company",
    "ABV": "8.00",
    "score": 4.65,
    "ratings": 14560
  }
]db
  .bulkDocs(beers)
  .then(res => console.log("Successfully loaded data!"))
  .catch("An error has occurred will loading data")