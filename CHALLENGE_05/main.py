import re

def is_valid_user(user):
    id, username, email, age, location = user
    return all([
        id.isalnum(),
        username.isalnum(),
        re.match(r"\w+@\w+\.\w+$", email),
        age == '' or age.isdigit(),
        location == '' or re.match(r"^[\w\s]+$", user[4])
    ])

# Leer el archivo txt
file = "database_attacked.txt"
first_char_invalid_usarnames = []

with open(file, 'r') as file:
    lineas = file.readlines()

# Identificar las primeras letras de los usernames inválidos
for linea in lineas:
    data_users = linea.strip().split(',')
    is_valid = is_valid_user(data_users)
    if not is_valid:
        first_char_usarname = data_users[1][0]
        first_char_invalid_usarnames.append(first_char_usarname)

# Unir las letras en orden de aparición para formar el mensaje oculto
hidden_message  = ''.join(first_char_invalid_usarnames)

print("Mensaje oculto:", hidden_message )

