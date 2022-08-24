const express = require('express')
const router = express.Router()
const tabuadaController = require('../controllers/tabuada')

//o indexController.home é o ponto de ligação entre controller e main index.js
router.get('/',tabuadaController.list )



module.exports = router