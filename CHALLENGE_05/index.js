import { createReadStream } from 'node:fs'
import { createInterface } from 'node:readline'

function validateUser (user) {
  if (user.length !== 5) return false

  const [id, username, email, age] = user
  const isComplete = () => user.length === 5
  const isAlfanumeric = (data) => /^[a-zA-Z0-9]+$/.test(data)
  const isValidEmail = (email) => /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)
  const isNumeric = (num) => num && !isNaN(parseInt(num))

  return isComplete &&
         isAlfanumeric(id) &&
         isAlfanumeric(username) &&
         isValidEmail(email) &&
         isNumeric(age)
}

// creamos una interfaz de lectura que nos permita leer por líneas el archivo database_attacked
const rl = createInterface({
  input: createReadStream('database_attacked.txt'),
  output: process.stdout,
  terminal: false
})

let hiddenMessage = ''

// validamos el usuario mientras hacemos la lectura por línea
rl.on('line', (linea) => {
  const dataUser = linea.trim().split(',')
  const isValid = validateUser(dataUser)
  if (!isValid) {
    const firstCharUsername = dataUser[1][0]
    hiddenMessage += firstCharUsername
  }
})
// al finalizar la lectura mostramos por terminal el mensaje oculto entre los usernames inválidos
rl.on('close', () => {
  console.log('Mensaje oculto:', hiddenMessage)
})
