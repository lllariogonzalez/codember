def is_real(nombre_archivo):
    partes = nombre_archivo.strip().split('-')
    if len(partes) != 2:
        return False
    
    cadena, checksum = partes

    # Verificar el checksum
    unique_chars = []
    for char in cadena:
        if cadena.count(char) == 1:
            unique_chars.append(char)
    
    generated_checksum = ''.join(unique_chars)
    
    return generated_checksum == checksum

# Lista para almacenar nombres de archivo reales
files_real = []

with open('files_quarantine.txt', 'r') as file:
    lineas = file.readlines()

for linea in lineas:
    # estado = "✅ Real" if resultado else "❌ Falso"
    # print(f"Nombre del archivo: {linea.strip()}, Resultado: {estado}")
    if is_real(linea):
        files_real.append(linea.strip())

# Verificar si el número 33 está en la lista de archivos reales
if len(files_real) >= 33:
    print(f"El archivo número 33 es: {files_real[32]}")
else:
    print("No hay suficientes archivos reales para encontrar el número 33.")
