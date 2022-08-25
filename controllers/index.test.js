//import controllers
const indexController = require('./index')
const sinon = require('sinon')


describe('index controller', () => {
    it('renders home'), () => {
        //passar função pra mockar
        let res = {
            render:function(){}
        }
        //passar o res pelo sinin.mock
        let mock = sinon.mock(res)

        //espera o render mockado, uma vez que os argumentos seja home
        mock.expects('render').once().withArgs('home')
         //chamar função home mockada
        indexController.home({}, res)
    }
})