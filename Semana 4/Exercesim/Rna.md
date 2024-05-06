La función `toRna` recibe una secuencia de nucleótidos en formato de cadena de texto y devuelve la secuencia correspondiente de nucleótidos de ARN.

Para cada nucleótido en la secuencia de ADN, la función realiza un mapeo según las reglas de conversión de ADN a ARN:

- 'G' se convierte en 'C'
- 'C' se convierte en 'G'
- 'T' se convierte en 'A'
- 'A' se convierte en 'U'

Si la secuencia de entrada contiene un nucleótido que no es uno de los cuatro válidos (G, C, T, A), la función lanzará un error con el mensaje "Invalid input DNA".

Finalmente, la función une los nucleótidos de ARN resultantes en una sola cadena y la devuelve.

### Link video:
https://youtu.be/Heqdjh75OWs