const express = require('express')
const path = require('path')
const app = express()
const port = 3000
//importado dados de routes
const indexRouter = require('./routes/index')
//=

// fazer o caminho do diretorio atual para /views
app.set('views', path.join(__dirname,'views'))
//definindo a engine que será usada: ejs
app.set('view engine','ejs')

//anexando dados de routes a '/' rota principal
app.use('/', indexRouter)




app.listen(port,()=> console.log(`Tabuada server runnig on PORT: ${port}`))