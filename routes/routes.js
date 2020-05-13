let express = require('express')
let catFacts = require('../services/catfacts')

let router = express.Router()

router.get('/', function(req, res, next) {
    res.json({'message': 'hello!'})
})


router.get('/catFact', function(req, res, next) {
    catFacts.getRandomFact().then( response => {
        return res.json(response.data)
    }).catch(err => next(err))
})

module.exports = router


