const express = require('express')
const router = express.Router()
const tabuadaController = require('../controllers/tabuada')

//o tabuadaController.home é o ponto de ligação entre controller e main index.js
router.get('/',tabuadaController.list )
//traçar a rota da operação individual
router.get('/do/:num', tabuadaController.tabuada)



module.exports = router