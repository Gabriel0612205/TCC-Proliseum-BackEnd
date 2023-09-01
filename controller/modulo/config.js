const { response } = require('express');

//Menssagens de erro
const ERROR_REQUIRED_DATA = {status:400, message:'Existem dados obrigatórios que não foram preenchidos' };
const ERROR_INVALID_CONTENT_TYPE = {status:415, message:'O tipo de midia contentType da solicitaçã não é compativel com o servidor, {aplication/json}'}
const ERROR_INTERNAL_SERVER = {status:500, message:'ERRO interno no servidor de Banco de dados' };
const ERROR_NOT_FOUND = {status:404, message:'nenhum registro encontrado na requisição.'}
const ERROR_REQUIRED_ID = {status:400, message:'o atributo id é obrigatórios que não na requisição' };// 
//Menssagens de confirmação
const CREATED_ITEM = {status:201, message:'Registro criado com sucesso'}
const DELETE_ITEM = {status:200, message:'Registro deletado'}
const UPDATED_ITEM = { status: 200, message: 'Registro atualizado com sucesso!' }
module.exports = {
    ERROR_REQUIRED_DATA,
    CREATED_ITEM,
    ERROR_INVALID_CONTENT_TYPE,
    ERROR_NOT_FOUND,
    ERROR_REQUIRED_ID,
    DELETE_ITEM,
    ERROR_INTERNAL_SERVER,
    UPDATED_ITEM
}