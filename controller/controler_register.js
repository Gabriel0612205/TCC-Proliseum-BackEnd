const { response } = require('express')
const regis_DAO = require('../model/register_DAO')
const message = require('./modulo/config')
const register_DAO = require('../model/register_DAO')

//JOGADOR-PERFIL
const selecionarTodososPerfil= async () => {
   
    let dadosPrf = await register_DAO.selectAllPerfil()

    let dadosJson = {}

    if (dadosPrf) {
        dadosJson.status = 200
        dadosJson.prf = dadosPrf
        return dadosJson
    }
    else {
        return message.ERROR_NOT_FOUND
    }
}

const inserirPerfil = async (dadosPrf) => {

// console.log(dadosPrf);


    if (dadosPrf.nome_usuario    == ' ' || dadosPrf.nome_usuario    == undefined || dadosPrf.nome_usuario.length > 100  ||
        dadosPrf.nome_completo   == ' ' || dadosPrf.nome_completo   == undefined || dadosPrf.nome_completo.length > 100 ||
        dadosPrf.email           == ' ' ||   dadosPrf.email         == undefined || dadosPrf.email.length > 255         ||
        dadosPrf.senha           == ' ' || dadosPrf.senha           == undefined || dadosPrf.senha.length > 64          ||
        dadosPrf.data_nascimento == ' ' || dadosPrf.data_nascimento == undefined || 
        dadosPrf.foto_perfil     == ' ' || dadosPrf.foto_perfil     == undefined ||
        dadosPrf.foto_capa       == ' ' || dadosPrf.foto_capa       == undefined 

    ) {
        return message.ERROR_REQUIRED_DATA

    } else {
        let status = await regis_DAO.insertPerfil(dadosPrf)
        return message.CREATED_ITEM
    }
}

const deletarPerfil = async (idPrf) => {

    if(idPrf == ' '|| idPrf == undefined || isNaN(idPrf)){
        return message.ERROR_REQUIRED_ID
    }
    else{
        let status = await register_DAO.deletePerfil(idPrf)
        if(status){
            return message.DELETE_ITEM
        }
        else{
            return message.ERROR_INTERNAL_SERVER
        }
    }
}

const atualizarPerfil = async (dadosPrf, idPrf) =>{
    
    if (dadosPrf.nome_usuario    == ' ' || dadosPrf.nome_usuario== undefined || dadosPrf.nome_usuario.length > 100  ||
    dadosPrf.nome_completo   == ' ' || dadosPrf.nome_completo   == undefined || dadosPrf.nome_completo.length > 100 ||
    dadosPrf.email           == ' ' ||   dadosPrf.email         == undefined || dadosPrf.email  .length > 255       ||
    dadosPrf.senha           == ' ' || dadosPrf.senha           == undefined || dadosPrf.senha.length > 64          ||
    dadosPrf.data_nascimento == ' ' || dadosPrf.data_nascimento == undefined || 
    dadosPrf.foto_perfil     == ' ' || dadosPrf.foto_perfil     == undefined ||
    dadosPrf.foto_capa       == ' ' || dadosPrf.foto_capa       == undefined

){
    return message.ERROR_REQUIRED_DATA

} else if(idPrf == '' || idPrf == undefined || isNaN(idPrf)){

    return message.ERROR_REQUIRED_ID
}else {
    dadosPrf.id = idPrf

    let status = await regis_DAO.updatePerfil(dadosPrf)
    
    
    if(status){
        let dadosJSon = {} 

        dadosJSon.status = message.UPDATED_ITEM.status
        dadosJSon.prf = dadosPrf

        return dadosJSon
    }
    else
        return message.ERROR_INTERNAL_SERVER
        
}
}

//ORGANIZADOR
const selecionarTodosOrganizador = async () => {
   
    let dadosOrg = await register_DAO.selectAllOrganizer()

    let dadosJson = {}

    if (dadosOrg) {
        dadosJson.status = 200
        dadosJson.org = dadosOrg
        return dadosJson
    }
    else {
        return message.ERROR_NOT_FOUND
    }
}


const inserirOrganizador = async (dadosOrg) => {
    
    
        if (dadosOrg.nome_organizacao   == ' ' || dadosOrg.nome_organizacao   == undefined || dadosOrg.nome_organizacao.length > 100  ||
            dadosOrg.foto_organizacao   == ' ' || dadosOrg.foto_organizacao   == undefined ||
            dadosOrg.biografia          == ' ' || dadosOrg.biografia          == undefined || dadosOrg.biografia.length > 2000        ||
            dadosOrg.id_perfil          == ' ' || dadosOrg.id_perfil          == undefined || 
            dadosOrg.id_tag_rede_social == ' ' || dadosOrg.id_tag_rede_social == undefined           
         
        ) {
        
            return message.ERROR_REQUIRED_DATA

        } else {
            let status = await regis_DAO.insertOrganizer(dadosOrg)
            return message.CREATED_ITEM
        }
    }




module.exports = {
    selecionarTodososPerfil,
    inserirPerfil,
    deletarPerfil,
    atualizarPerfil,
    selecionarTodosOrganizador,
    inserirOrganizador

    
}