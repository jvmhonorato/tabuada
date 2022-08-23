const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index')

//o indexController.home é o ponto de ligação entre controller e main index.js
router.get('/',indexController.home )



module.exports = router