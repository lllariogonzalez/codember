from collections import OrderedDict

# Leer el archivo y convertir todas las palabras a minúsculas
with open('message.txt', 'r') as file:
    words = file.read().lower().split()

# Crear un diccionario con la cuenta de palabras preservando el orden de aparición
word_count = OrderedDict((word, words.count(word) or 0) for word in words)

# Formatear la salida
encrypted_messages = ''.join(f"{word}{count}" for word, count in word_count.items())

# Mostrar el resultado
print(encrypted_messages)
