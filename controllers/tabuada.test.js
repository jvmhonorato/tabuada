const tabuadaController = require('/tabuada')
const sinon = require('sinon')

describe('tabuada controller', () => {
    //test tabuada page
    it('list', () => {
        const numeros = []
        for(let i=1; i<=100; i++){
            numeros.push(i)
        }
        //passsar função para mockar
        let res = {
            render: function(){}
        }
        //estanciar função mockada
        let mock = sinon.mock(res)
        //função mockada espera renderização uma vez que os argumentos 
        mock.expects('render').once().withArgs('tabuada/list',{numeros})
        //passando a função pra rodar com o res mockado
        tabuadaController.list({}, res)
    })
    
    //test do calculo page
    it('calculates the tabuada', () =>{
            //criar array vazio pra receber dados posteriomente
    const tabuadas = []
    //estanciando numero pra ser testato
    const num = 10
    //laço FOR declarando num, i e o resultado que é num x i
    for(let i=0; i<=100; i++){
        tabuadas.push({
            num,
            i,
            resultado: num*i
        })

    }
       let res = {
       render: function(){}
      }
      let mock= sinon.mock(res)
      mock.expects('render').once().withArgs('tabuada/tabuada', {
        num,
        tabuadas
      })
      tabuadaController.tabuada({params:{num}}, res)
    })
})