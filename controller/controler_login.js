const { response } = require('express')
const log_DAO = require('../model/login_DAO')
const message = require('./modulo/config')
const login_DAO = require('../model/login_DAO')


const selecionarTodososUsuarios = async () => {
   
    let dadosUsr = await login_DAO.selectUser()

    let dadosJson = {}

    if (dadosUsr) {
        dadosJson.status = 200
        dadosJson.Urs = dadosUsr
        return dadosJson
    }
    else {
        return message.ERROR_NOT_FOUND
    }
}


module.exports = {

    selecionarTodososUsuarios
}