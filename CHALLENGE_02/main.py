def mini_compiler(program):
    numeric_value = 0
    output = ''

    for symbol in program:
        if symbol == '#':
            numeric_value += 1
        elif symbol == '@':
            numeric_value -= 1
        elif symbol == '*':
            numeric_value *= numeric_value
        elif symbol == '&':
            output += str(numeric_value)

    return output

# Leer el contenido del archivo 'message.txt'
with open('message.txt', 'r') as file:
    program_code = file.read()

result = mini_compiler(program_code)
print(result)
