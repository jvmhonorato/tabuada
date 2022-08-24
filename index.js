const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
//importado dados de routes
const indexRouter = require('./routes/index')
const tabuadaRouter = require('./routes/tabuada')
//=

//Static files
app.use(express.static("public"));
app.use(express.static(__dirname +"public/css"));
app.use(express.static(__dirname +"public/js"));
app.use(express.static(__dirname +"public/img"));

// fazer o caminho do diretorio atual para /views
app.set('views', path.join(__dirname,'views'))
//definindo a engine que será usada: ejs
app.set('view engine','ejs')

//anexando dados de routes a '/' rota principal
app.use('/', indexRouter)
app.use('/tabuadas',tabuadaRouter)




app.listen(port,()=> console.log(`Tabuada server runnig on PORT: ${port}`))