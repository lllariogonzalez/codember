import { readFile } from 'fs'

function isReal (nombreArchivo) {
  const partes = nombreArchivo.trim().split('-')
  if (partes.length !== 2) return false

  const [cadena, checksum] = partes
  const uniqueChars = [...new Set(cadena)].filter(char => cadena.indexOf(char) === cadena.lastIndexOf(char)).join('')

  return uniqueChars === checksum
}

const fileReal = []

readFile('files_quarantine.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err)
    return
  }

  const lines = data.split('\n')
  for (const line of lines) {
    console.log(line)
    if (isReal(line)) fileReal.push(line.trim())
  }

  console.log(`El archivo número 33 es: ${fileReal[32]}`)
})
