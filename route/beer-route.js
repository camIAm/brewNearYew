const express = require('express')
//const app = express()
var router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.json())
//const checkRequiredFields = require('../lib/check-required-fields')
const {addBeer, getBeer,updateBeer, deleteBeer, listBeers} = require('../dal')
const { not, isEmpty, pathOr, join, omit,path, merge,keys, prop, __, compose } = require('ramda')
const HTTPError = require('node-http-error')

router.post('/',(req,res,next)=>{
  console.log("you've hit the post route")
  if(isEmpty(prop('body',req))){
    return next(new HTTPError(res.status(400),"No body was provided"))
  }
  console.log('req.body',req.body)
  const body = compose(
    omit(['_id', '_rev']),
    //merge(__, { type: 'beer' }), i'm using specific 'type' of beer i.e. IPA add props to support this merge
    prop('body')
  )(req)

  console.log('body',body)
  const requiredFields =["name","type","brewer","ABV","score","ratings"]
  const missingFields = checkRequiredFields(requiredFields,keys(body))
console.log('missingFields',missingFields)
  if (not(isEmpty(missingFields))){
    return next(new HTTPError(res.status(400), `Missing Required Fields:`)) // ${join(',',missingFields)}
  }

  addBeer(body)
  .then(response => res.status(201).send(response))
  .catch(err => next(new HTTPError(err.status, err.message)))
})

router.get('/:id', (req, res, next)=>
  getBeer(path(['params','id'],req))
  .then(doc=>res.status(200).send(doc))
  .catch(err=>next(new HTTPError(prop('status',err),prop('message',err))))
)

router.put('/:id',(req,res,next)=>{
  // check to make sure the request body exists
  if (isEmpty(prop('body', req))) {
    return next(
      new HTTPError(
        400,
        'Missing request body.  Content-Type header should be application/json.'
      )
    )
  }
  console.log("prop('body',req)",prop('body',req))
  const missingFields = checkRequiredFields(
      ['_id','_rev',"name","type","brewer","ABV","score","ratings"],
      keys(prop('body',req))
    )
    console.log("missingFields",missingFields)
    if (not(isEmpty(missingFields))) {
      return next(
        new HTTPError(
          400,
          `Missing Required Fields: ${join(', ', missingFields)}`
        )
      )
    }

    updateBeer(prop('body',req))
    .then(updateResult =>res.status(200).send(updateResult))
    .catch(err =>next(new HTTPError(prop('status',err),prop('message',err))))
  })

router.delete('/:id',(req,res,next)=>{
  console.log('delete is called')
  deleteBeer(path(['params','id'],req))
  .then(doc=>res.status(200).send(doc))
  .catch(err=>next(new HTTPError(prop('status',err),prop('message',err))))
})

// add sort
router.get('/',(req, res, next)=>{
  //console.log("inside listBeers")
  const filter = pathOr(null,['query','filter'],req)
  const limit = pathOr(3,['query','limit'],req)
  const lastItem = pathOr(3,['query','lastItem'],req)
  //console.log("filter: ", filter,"    limit: ",limit," lastItem: ",lastItem)
  listBeers(filter,limit,lastItem)
  .then(list => res.status(200).send(list))
  .catch(err => next(new HTTPError(err.status,err.message)))
})

module.exports = router