const {
  compose,
  toLower,
  split,
  join,
  concat,
  contains,
  head,
  drop
} = require('ramda')

const removeArticles = arrData => contains(head(arrData), ['the', 'a'])
  ? drop(1, arrData)
  : arrData

module.exports = (prefix, joiner, value) => compose(concat(prefix + joiner), join(joiner), removeArticles, split(' '), toLower())(value)