/*
  * Script utilizado para criar um servidor NODEJS
  * utilizando Express e incluindo arquivos estáticos
*/

// Definições globais
var
  express = require('express'),
  app = express()
;

const
  port = 8086;

// Adiciona os arquivos estáticos ao servidor como caminho virtuais
app.use('/www', express.static('www'));
app.use('/assets', express.static('assets'));
app.use('/src', express.static('src'));

// Cria a rota padrão
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})

// Inicia o servidor
app.listen(port, function(){
  console.log('Servidor rodando em 127.0.0.1:' + port);
});