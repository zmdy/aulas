/*
  * Script utilizado para configurar a apresentação Bonisa
*/

// Definições globais
var
  fs = require('fs'),
  file = __dirname + '/assets/content/administracao/modulo-02/avisos-iniciais.md'
;

// Define a função assíncrona de leitura por streams
function streamsRead (file) {
  var
    stream = fs.createReadStream(file, 'utf8'),
    fileData = '';

  stream.on('data', function(chunk) {
    fileData += chunk;
  }).on('end', function() {
    return fileData;
  });

  
}

console.log(streamsRead(file));