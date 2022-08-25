const list = (req,res) => {
    //criar array vazio pra receber dados posteriomente
    const numeros = []
    //laço for
    for(let i=1; i<=100; i++){
        //inserir no array os [i] gerados no laço for
        numeros.push(i)
    }
    //passar o array numeros pela rota
    res.render('tabuada/list', {numeros})
}

const tabuada = (req,res) => {
    //criar array vazio pra receber dados posteriomente
    const tabuadas = []
    //requicisao dos params de num
    const num = req.params.num
    //laço FOR declarando num, i e o resultado que é num x i
    for(let i=0; i<=100; i++){
        tabuadas.push({
            num,
            i,
            resultado: num*i
        })

    }
    //renderizar tabuadas 
    res.render('tabuada/tabuada', {
        num: req.params.num,
        tabuadas
    })
}




module.exports = {
    list,
    tabuada
}