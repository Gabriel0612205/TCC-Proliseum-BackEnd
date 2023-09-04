var { PrismaClient } = require('@prisma/client');
const moment = require('moment');
//instanciando classe do PrismaClient
var prisma = new PrismaClient();
 


//JOGADOR-PERFIL
const selectAllPerfil = async () => {

    let sql = 'select * from tbl_perfil;'
    let rsPrf = await prisma.$queryRawUnsafe(sql)
    
    if (rsPrf.length > 0) {
        return rsPrf
    }
    else {
        return false
    }
}
const insertPerfil = async (dadosPrf) => {
    let sql = `insert into tbl_perfil
    (nome_usuario,nome_completo,email,senha,data_nascimento,foto_perfil,foto_capa,id_genero)
        values
        ('${dadosPrf.nome_usuario}',
        '${dadosPrf.nome_completo}',
        '${dadosPrf.email}',
        '${dadosPrf.senha}',
        '${dadosPrf.data_nascimento}',
        '${dadosPrf.foto_perfil}',
        '${dadosPrf.foto_capa}',
        ${dadosPrf.id_genero}
          ) ;`;


    let rsPrf = await prisma.$queryRawUnsafe(sql)
    if (rsPrf) {
        return true;
    }
    else {
        return false;
    }
}
const deletePerfil = async function (id) {
    let sql = `delete from tbl_perfil where id = ${id}`;

    let result = await prisma.$executeRawUnsafe(sql);

    if (result) {
        return true;
    }
    else {
        return false;

    }

}
const updatePerfil  = async function(dadosPrf) {

    let sql = `update  tbl_perfil set
        nome_usuario  = '${dadosPrf.nome_usuario}',
        nome_completo = '${dadosPrf.nome_completo}',
        email = '${dadosPrf.email}',
        senha = '${dadosPrf.senha}',
        data_nascimento = '${dadosPrf.data_nascimento}',
        foto_perfil = '${dadosPrf.foto_perfil}',
        foto_capa = '${dadosPrf.foto_capa}',
        id_genero = '${dadosPrf.id_genero}'
        where id = ${dadosPrf.id} ;`

        let rsPrf = await prisma.$executeRawUnsafe(sql)

    if (rsPrf) {
        return true;
    }
    else {
        return false;
    }
    
    }


 // ORGANIZADOR   

const selectAllOrganizer = async () => {

    let sql = 'select * from tbl_organizador;'
    let rsOrg = await prisma.$queryRawUnsafe(sql)

    if (rsOrg.length > 0) {
        return rsOrg
    }
    else {
        return false
    }
}

const insertOrganizer = async (dadosOrg) => {


    let sql = `insert into tbl_organizador 
    (nome_organizacao,foto_organizacao,biografia,id_perfil,id_tag_rede_social)
        values
        ('${dadosOrg.nome_organizacao}',
        '${dadosOrg.foto_organizacao}',
        '${dadosOrg.biografia}',
        '${dadosOrg.id_perfil}',
        '${dadosOrg.id_tag_rede_social}'
          ) `;

    let rsOrg = await prisma.$queryRawUnsafe(sql)

    if (rsOrg) {
        return true;
    }
    else {
        return false;
    }
}

const updateOrganizer  = async function(dadosOrg) {
    let sql = `update  tbl_organizador set
       
    nome_organizacao   = '${dadosOrg.nome_organizacao}',
    foto_organizacao   = '${dadosOrg.foto_organizacao}',
    biografia          = '${dadosOrg.biografia}',
    id_perfil          = '${dadosOrg.id_perfil}',
    id_tag_rede_social = '${dadosOrg.id_tag_rede_social}'
    where id           =  ${dadosOrg.id} ;`

    let rsOrg = await prisma.$executeRawUnsafe(sql)

    if (rsOrg) {
        return true;
    }
    else {
        return false;
    }
    
}

const deleteOrganizer = async function (id) {
    let sql = `delete from tbl_organizador where id = ${id}`;

    let result = await prisma.$executeRawUnsafe(sql);

    if (result) {
        return true;
    }
    else {
        return false;

    }

}
  





module.exports = {
    selectAllPerfil,
    insertPerfil,
    updatePerfil,
    deletePerfil,
    selectAllOrganizer,
    insertOrganizer,
    updateOrganizer,
    deleteOrganizer,

}