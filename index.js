const express = require('express')
const path = require('path')
const app = express()
const port = 3000

//=

// fazer o caminho do diretorio atual para /views
app.set('views', path.join(__dirname,'views'))
//definindo a engine que será usada: ejs
app.set('view engine','ejs')




app.listen(port,()=> console.log(`Tabuada server runnig on PORT: ${port}`))