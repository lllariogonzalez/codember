import { readFile } from 'fs'

readFile('message.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err)
    return
  }

  const words = data.toLowerCase().split(/\s+/)

  // Crear un Map para contar las ocurrencias y preservar el orden de inserción
  const orderedWordCount = new Map()

  for (const word of words) {
    if (!orderedWordCount.has(word)) {
      orderedWordCount.set(word, 0)
    }
    const count = orderedWordCount.get(word) + 1
    orderedWordCount.set(word, count)
  }

  // Formatear la salida
  let encryptedMessages = ''
  for (const [word, count] of orderedWordCount) {
    encryptedMessages += `${word}${count}`
  }

  console.log(encryptedMessages)
})
