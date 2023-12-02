import { readFile } from 'fs'

// Función para verificar si una contraseña cumple con la política de seguridad
function isValidPassword (passwordPolicy) {
  const [policy, password] = passwordPolicy.split(': ')
  const [range, character] = policy.split(' ')
  const [min, max] = range.split('-').map(Number)

  const count = (password.match(new RegExp(character, 'g')) || []).length
  return count >= min && count <= max
}

readFile('encryption_policies.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err)
    return
  }

  // Divide las contraseñas por líneas y procesa cada una
  const passwords = data.trim().split('\n')
  // Filtramos por claves inválidas
  const invalidPasswords = passwords.filter(password => !isValidPassword(password))
  // solución al challenge_03
  console.log('Clave inválida número 42 es:', invalidPasswords[41].split(': ')[1])
  // secreto para acceder como administrador - miduGOD a la carpeta /private
  console.log('Clave inválida número 13 es:', invalidPasswords[12].split(': ')[1])
})
