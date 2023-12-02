import re

def is_valid_password(password_policy):
    policy, password = password_policy.split(': ')
    range_str, character = policy.split(' ')
    min_count, max_count = map(int, range_str.split('-'))

    count = len(re.findall(character, password))
    return min_count <= count <= max_count

try:
    with open('encryption_policies.txt', 'r') as file:
        data = file.read()

        # Divide las contraseñas por líneas y procesa cada una
        passwords = data.strip().split('\n')

        # Filtramos por claves inválidas
        invalid_passwords = [password.split(': ')[1] for password in passwords if not is_valid_password(password)]

        # solución al challenge_03
        print('Clave inválida número 42 es:', invalid_passwords[41])
        # secreto para acceder como administrador - miduGOD a la carpeta /private
        print('Clave inválida número 13 es:', invalid_passwords[12])

except FileNotFoundError:
    print('El archivo no fue encontrado.')
except Exception as e:
    print('Ocurrió un error:', e)
