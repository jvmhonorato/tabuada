const express = require('express')
const router = express.Router()

//atraves do express pega os dabdos de res.send e manda pra main index.js
router.get('/',(req,res) => res.send('Tabuada') )



module.exports = router