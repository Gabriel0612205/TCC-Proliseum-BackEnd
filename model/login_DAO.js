var { PrismaClient } = require('@prisma/client');
const moment = require('moment');
//instanciando classe do PrismaClient
var prisma = new PrismaClient();


const selectUser = async () => {

    let sql = 'select * from tbl_usuario;'
    let rsTeacher = await prisma.$queryRawUnsafe(sql)

    if (rsTeacher.length > 0) {
        return rsTeacher
    }
    else {

        return false
    }
}
