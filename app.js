const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const { request, response } = require('express');
const message = require('./controller/modulo/config')
const app = express();

const port = process.env.PORT || 8080

app.use((request, response, next) => {
 
    response.header('Access-Control-Allow-Origin', '*');
  
    response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
 
    app.use(cors());
 
    next();
 
 });
 
 const bodyJson = bodyParser.json();
 
 var controllerRegister= require('./controller/controler_register');
 
 //jogador
 app.get('/v1/proliseum/player/register', cors(), async function (request,response){
 
    let dados = await controllerRegister.selecionarTodososPerfil()
    response.status(200)
    response.json(dados)
    
});

 app.post('/v1/proliseum/player/post', cors(), bodyJson, async function (request,response){
    let contentType = request.headers['content-type'];

    if(String(contentType).toLowerCase() == 'application/json'){
 
       let dadosBody = request.body;

       let resultInsertPerfil = await controllerRegister.inserirPerfil(dadosBody)
       response.status(resultInsertPerfil.status)
       response.json(resultInsertPerfil)
       
    }
    else{
       response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
       response.json(message.ERROR_INVALID_CONTENT_TYPE)
    }
    
});

 app.delete('/v1/proliseum/player/delete/:id', cors(), async function (request, response) {
  

    let idPrf = request.params.id 
    let resultDeletePerfil = await controllerRegister.deletarPerfil(idPrf)
 
    response.status(resultDeletePerfil.status)
    response.json(resultDeletePerfil)
 
});

 app.put('/v1/proliseum/player/update/:id', cors(), bodyJson, async function(request, response) {  

    let dados = request.body
    let idPrf = request.params.id
    let resultUpdatePerfil = await controllerRegister.atualizarPerfil(dados, idPrf)

    response.status(resultUpdatePerfil.status)
    response.json(resultUpdatePerfil)
  
});
 
//ORANIZADOR
app.get('/v1/proliseum/organizer/register', cors(), async function (request,response){
 
    let dados = await controllerRegister.selecionarTodosOrganizador()
    response.status(200)
    response.json(dados)
    
});

app.post('/v1/proliseum/organizer/post', cors(), bodyJson, async function (request,response){

    
    let contentType = request.headers['content-type'];

    if(String(contentType).toLowerCase() == 'application/json'){
 
       let dadosBody = request.body;

       let resultInsertOrganizador = await controllerRegister.inserirOrganizador(dadosBody)
       response.status(resultInsertOrganizador.status)
       response.json(resultInsertOrganizador)
       
    }
    else{
       response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
       response.json(message.ERROR_INVALID_CONTENT_TYPE)
    }
    
});

app.put('/v1/proliseum/organizer/update/:id', cors(), bodyJson, async function(request, response) {  

   let dados = request.body
   let idPrf = request.params.id
   let resultUpdateOrganizador = await controllerRegister.atualizarOrganizador(dados, idPrf)

   response.status(resultUpdateOrganizador.status)
   response.json(resultUpdateOrganizador)
 
});

app.delete('/v1/proliseum/organizer/delete/:id', cors(), async function (request, response) {
  

   let idOrg = request.params.id 
   let resultDeleteOrganizador = await controllerRegister.deletarOrganizador(idOrg)

   response.status(resultDeleteOrganizador.status)
   response.json(resultDeleteOrganizador)

});

//LOGIN
app.get('/v1/proliseum/player/register', cors(), async function (request,response){
 
   let dados = await controllerRegister.selecionarTodososPerfil()
   response.status(200)
   response.json(dados)
   
});





 app.listen(8080, function() {
    console.log('servidor aguardando requisiçoes na porta 8080!')
})

