# CHALLENGE_05

**El problema final**

Finalmente los hackers han conseguido acceder a la base de datos y la han dejado corrupta. Pero parece que han dejado un mensaje oculto en la base de datos. ¿Podrás encontrarlo?

Nuestra base de datos está en formato .csv. Las columnas son id, username, email, age, location.

Un usuario sólo es válido si:

- id: existe y es alfanumérica
- username: existe y es alfanumérico
- email: existe y es válido (sigue el patrón `user@dominio.com`)
- age: es opcional pero si aparece es un número
- location: es opcional pero si aparece es una cadena de texto

Ejemplos:

Entrada: `1a421fa,alex,alex9@gmail.com,18,Barcelona`
Resultado: ✅ Válido

Entrada: `9412p_m,maria,mb@hotmail.com,22,CDMX`
Resultado: ❌ Inválido (id no es alfanumérica, sobra el _)

Entrada: `494ee0,madeval,mdv@twitch.tv,,`
Resultado: ✅ Válido (age y location son opcionales)

Entrada: `494ee0,madeval,twitch.tv,22,Montevideo`
Resultado: ❌ Inválido (email no es válido)

## ** Cómo resolverlo **

1. Analiza la lista de entradas de la baes de datos y detecta los inválidos: [database_attacked.txt](./database_attacked.txt)

2. Encuentra la primera letra del username de todos los usuarios inválidos. Júntalos por orden de aparición y descubre el mensaje oculto. Luego envíalo con submit. Por ejemplo:

```bash
submit att4ck
```

## Solución

1. [JavaScript](./index.js)
2. [Python](./main.py)
2. [Python](./main_csv.py)

> submit youh4v3beenpwnd

El mensaje oculto "youh4v3beenpwnd" parece ser una variante de *"you have been pwned"* o **"has sido comprometido"**. La palabra "pwned" es una forma jergal de "owned" (poseído o dominado) y se utiliza en la cultura de internet para indicar que alguien ha sido derrotado o comprometido, especialmente en el contexto de seguridad informática.

El término **"you've been pwned"** suele asociarse con situaciones en las que la seguridad de un sistema o cuenta ha sido vulnerada, como en una filtración de datos o en una violación de seguridad. Esta frase puede ser utilizada humorísticamente o para alertar a alguien sobre un posible riesgo de seguridad en su información personal o cuenta en línea.
