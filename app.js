const { crearArchivo, listarTablar } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv
const colors = require('colors')
let comando = argv._[0]
const { base, limite } = argv
switch (comando) {
  case 'listar':
    listarTablar(base, limite)
    break
  case 'crear':
    crearArchivo(base, limite)
      .then((archivo) => console.log(`Archivo creado: ${archivo}`.blue.bold))
      .catch((e) => console.log(e))
    break

  default:
    console.log('comando no reconocido!')
}
