const fs = require('fs')
const colors = require('colors')
let listarTablar = (base, limite) => {
  console.log('================='.blue)
  console.log(`Tabla de ${base}`.yellow)
  console.log('================='.blue)

  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}`.yellow)
  }
}
let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`el valor introducido ${base} no es 1 numero`)
      return
    }
    let data = ''
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`
    }
    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
      if (err) reject(err)
      else resolve(`tabla-${base}-al-${limite}.txt`)
    })
  })
}
module.exports = {
  crearArchivo,
  listarTablar
}
