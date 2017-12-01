const {difference} = require('ramda')

module.exports = (reqiredFields, objArray) => difference(reqiredFields, objArray)