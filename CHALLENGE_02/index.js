import { readFile } from 'fs'

function miniCompiler (input) {
  let numericValue = 0
  let output = ''

  for (const symbol of input) {
    if (symbol === '#') numericValue++
    if (symbol === '@') numericValue--
    if (symbol === '*') numericValue *= numericValue
    if (symbol === '&') output += numericValue
  }

  return output
}

readFile('message.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err)
    return
  }

  const result = miniCompiler(data)
  console.log(result)
})
