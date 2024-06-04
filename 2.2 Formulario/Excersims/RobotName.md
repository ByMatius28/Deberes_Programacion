
# Documentación Excersim `Robot Name`

## Código de la Clase `Robot`

```typescript
export class Robot {
    public nameRobot: string;
    public allNames: string[] = []
    
    constructor() {
        this.nameRobot = Robot.releaseNames()
        this.allNames.push(this.nameRobot)
    }
  
    public get name(): string {
        return this.nameRobot
    }
  
    public resetName(): void {
        this.nameRobot = Robot.releaseNames()
        while(this.allNames.indexOf(this.nameRobot) !== -1){
            this.nameRobot = Robot.releaseNames()
        }
        this.allNames.push(this.nameRobot)
    }
  
    public static releaseNames(): string {
        const alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        let name: string = ''
  
        for(let i = 0; i < 2; i++){
            name += alphabet[getRandomNum(0, 26)]
        }
        for(let i = 0; i < 3; i++){
            name += getRandomNum(0, 10).toString()
        }
      
        return name
  
        function getRandomNum(min: number, max: number) {
            return Math.floor(Math.random() * (max - min) + min);
        }
    }
}
```

## Preguntas y Respuestas

### 1. ¿Qué hace la clase `Robot`?

**Pregunta:** ¿Cuál es el propósito general de la clase `Robot`?

**Respuesta:** La clase `Robot` se utiliza para crear objetos que representan robots, cada uno con un nombre único que se genera aleatoriamente.

**Código:**
```typescript
// La clase `Robot` se usa para crear robots con nombres únicos
export class Robot {
    public nameRobot: string;
    public allNames: string[] = []
    
    constructor() {
        this.nameRobot = Robot.releaseNames();
        this.allNames.push(this.nameRobot);
    }
  
    public get name(): string {
        return this.nameRobot;
    }
  
    public resetName(): void {
        this.nameRobot = Robot.releaseNames();
        while (this.allNames.indexOf(this.nameRobot) !== -1) {
            this.nameRobot = Robot.releaseNames();
        }
        this.allNames.push(this.nameRobot);
    }
  
    public static releaseNames(): string {
        const alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        let name: string = '';
  
        for (let i = 0; i < 2; i++) {
            name += alphabet[getRandomNum(0, 26)];
        }
        for (let i = 0; i < 3; i++) {
            name += getRandomNum(0, 10).toString();
        }
      
        return name;
  
        function getRandomNum(min: number, max: number) {
            return Math.floor(Math.random() * (max - min) + min);
        }
    }
}
```

### 2. ¿Cómo se inicializa un objeto de la clase `Robot`?

**Pregunta:** ¿Qué ocurre cuando se crea una nueva instancia de `Robot`?

**Respuesta:** Al crear una nueva instancia de `Robot`, el constructor llama al método estático `releaseNames` para generar un nombre único y lo almacena en `nameRobot`. Este nombre también se agrega al array `allNames`.

**Código:**
```typescript
// Al crear una instancia, se genera y almacena un nombre único
const robot = new Robot();
console.log(robot.name); // Ejemplo de salida: "AB123"
```

### 3. ¿Cómo se accede al nombre del robot?

**Pregunta:** ¿Cómo se obtiene el nombre del robot?

**Respuesta:** Se puede acceder al nombre del robot utilizando el getter `name`, que devuelve el valor de `nameRobot`.

**Código:**
```typescript
// Se accede al nombre del robot usando el getter `name`
console.log(robot.name); // Ejemplo de salida: "AB123"
```

### 4. ¿Cómo se puede cambiar el nombre del robot?

**Pregunta:** ¿Qué hace el método `resetName` y cómo garantiza que el nuevo nombre sea único?

**Respuesta:** El método `resetName` genera un nuevo nombre utilizando `releaseNames` y verifica que este nombre no exista ya en `allNames`. Si el nombre generado ya existe, se sigue generando nuevos nombres hasta encontrar uno único. Luego, este nombre se agrega a `allNames`.

**Código:**
```typescript
// Cambia el nombre del robot a uno único
robot.resetName();
console.log(robot.name); // Ejemplo de nueva salida: "CD456"
```

### 5. ¿Qué hace el método estático `releaseNames`?

**Pregunta:** ¿Cuál es la función del método estático `releaseNames`?

**Respuesta:** El método `releaseNames` genera un nombre aleatorio para el robot, compuesto por dos letras seguidas de tres números. Utiliza un array del alfabeto y la función `getRandomNum` para generar los caracteres y dígitos.

**Código:**
```typescript
// Genera un nombre aleatorio para el robot
const randomName = Robot.releaseNames();
console.log(randomName); // Ejemplo de salida: "EF789"
```

### 6. ¿Cómo se generan las partes del nombre del robot?

**Pregunta:** ¿Cómo se generan las letras y los números del nombre del robot en `releaseNames`?

**Respuesta:** Las dos letras se generan seleccionando aleatoriamente caracteres del array `alphabet`. Los tres números se generan utilizando la función `getRandomNum`, que devuelve un número aleatorio dentro del rango especificado.

**Código:**
```typescript
// Genera partes del nombre: 2 letras y 3 números
let name: string = '';
for (let i = 0; i < 2; i++) {
    name += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(getRandomNum(0, 26));
}
for (let i = 0; i < 3; i++) {
    name += getRandomNum(0, 10).toString();
}
console.log(name); // Ejemplo de salida: "GH012"

function getRandomNum(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}
```

### 7. ¿Qué es `getRandomNum` y cómo funciona?

**Pregunta:** ¿Qué hace la función `getRandomNum` dentro del método `releaseNames`?

**Respuesta:** La función `getRandomNum` genera un número aleatorio entre un valor mínimo (`min`) y un valor máximo (`max`). Se utiliza para seleccionar letras del array `alphabet` y para generar dígitos numéricos.

**Código:**
```typescript
// Genera un número aleatorio entre min (inclusive) y max (exclusivo)
function getRandomNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomNum(0, 10)); // Ejemplo de salida: 7
```

### 8. ¿Por qué `releaseNames` es un método estático?

**Pregunta:** ¿Por qué `releaseNames` está definido como un método estático en lugar de una función de instancia?

**Respuesta:** `releaseNames` es un método estático porque su funcionalidad no depende de ninguna instancia específica de la clase `Robot`. Puede ser llamado sin crear una instancia de la clase.

**Código:**
```typescript
// Llama al método estático sin crear una instancia de Robot
const name = Robot.releaseNames();
console.log(name); // Ejemplo de salida: "IJ345"
```

### 9. ¿Qué asegura que no haya nombres duplicados en `Robot`?

**Pregunta:** ¿Cómo se garantiza que cada robot tenga un nombre único?

**Respuesta:** La clase mantiene un array `allNames` que guarda todos los nombres generados. Antes de agregar un nuevo nombre, `resetName` verifica que el nombre no exista ya en `allNames`. Si el nombre existe, se genera uno nuevo hasta encontrar uno único.

**Código:**
```typescript
// Verifica que el nuevo nombre no esté duplicado
robot.resetName();
while (robot.allNames.includes(robot.nameRobot)) {
    robot.resetName();
}
robot.allNames.push(robot.nameRobot);
console.log(robot.allNames); // Ejemplo de salida: ["AB123", "CD456"]
```

## Resumen

La clase `Robot` maneja la creación de robots con nombres únicos mediante generación aleatoria y verificación de unicidad. Utiliza métodos estáticos y funciones internas para modularizar y organizar la generación y gestión de nombres.

## Link Youtube:
https://youtu.be/byQo8mxN2-I