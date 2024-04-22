### Introducción
La función `isLeap` es una función que determina si un año dado es un año bisiesto. Un año bisiesto es aquel que tiene un día extra en el año, es decir, febrero tiene 29 días en lugar de 28. Para determinar si un año es bisiesto, la función sigue la siguiente lógica:
- Un año es bisiesto si es divisible por 4, excepto en los casos en que sea divisible por 100 pero no por 400.
### Función

La función toma un parámetro `n` que representa el año a verificar y devuelve un valor booleano que indica si el año es bisiesto (`true`) o no lo es (`false`).
### Función
La expresión utilizada en la función `(n % 4 === 0 && n % 100 !== 0) || n % 400 === 0` implementa la lógica mencionada anteriormente para determinar si un año es bisiesto. Si la expresión se evalúa como `true`, entonces el año es bisiesto; de lo contrario, no lo es.

### Link video:
https://youtu.be/jdwkiehxP7k
