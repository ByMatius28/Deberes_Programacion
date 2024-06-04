
# Documentación Excersim `GradeSchool`

## Código de la Clase `GradeSchool`

```typescript
export class GradeSchool {
    private db: Record<string, number>
  
    constructor() {
      this.db = {}
    }
    
    roster() {
      const result: Record<number, string[]> = {}
      for (let [student, grade] of Object.entries(this.db)) {
        result[grade] = result[grade] ? [...result[grade], student].sort() : [student]
      }
      return result
    }
  
    add(student: string, grade: number) {
      this.db[student] = grade
    }
  
    grade(key: number) {
      const result: string[] = []
      for (let [student, grade] of Object.entries(this.db)) {
        if (grade === key) {
          result.push(student)
        }
      }
      return result.sort()
    }
}
```

## Preguntas y Respuestas

### 1. ¿Cuál es el propósito de la clase `GradeSchool`?

**Pregunta:** ¿Qué objetivo cumple la clase `GradeSchool`?

**Respuesta:** La clase `GradeSchool` se utiliza para gestionar una base de datos de estudiantes y sus respectivos grados.

**Código:**
```typescript
export class GradeSchool {
    private db: Record<string, number>
  
    constructor() {
        this.db = {}
    }

    // Métodos...
}
```

### 2. ¿Qué hace el constructor de la clase `GradeSchool`?

**Pregunta:** ¿Qué ocurre cuando se crea una nueva instancia de `GradeSchool`?

**Respuesta:** El constructor inicializa una base de datos vacía (`db`) que es un objeto que mapea nombres de estudiantes a sus grados.

**Código:**
```typescript
constructor() {
    this.db = {}
}
```

### 3. ¿Cómo se agrega un estudiante a la base de datos?

**Pregunta:** ¿Cómo se utiliza el método `add` y qué hace?

**Respuesta:** El método `add` toma un nombre de estudiante y un grado como argumentos, y agrega esta información a la base de datos `db`.

**Código:**
```typescript
add(student: string, grade: number) {
    this.db[student] = grade;
}
```

### 4. ¿Cómo se obtiene el roster de estudiantes?

**Pregunta:** ¿Qué hace el método `roster` y cómo organiza la información?

**Respuesta:** El método `roster` devuelve un objeto que organiza los estudiantes por grado. Para cada grado, los estudiantes se listan en orden alfabético.

**Código:**
```typescript
roster() {
    const result: Record<number, string[]> = {};
    for (let [student, grade] of Object.entries(this.db)) {
        result[grade] = result[grade] ? [...result[grade], student].sort() : [student];
    }
    return result;
}
```

### 5. ¿Cómo se obtienen los estudiantes de un grado específico?

**Pregunta:** ¿Qué hace el método `grade` y cómo se utiliza?

**Respuesta:** El método `grade` toma un grado específico como argumento y devuelve una lista ordenada alfabéticamente de los estudiantes en ese grado.

**Código:**
```typescript
grade(key: number) {
    const result: string[] = [];
    for (let [student, grade] of Object.entries(this.db)) {
        if (grade === key) {
            result.push(student);
        }
    }
    return result.sort();
}
```

### 6. ¿Cómo se estructura la base de datos interna?

**Pregunta:** ¿Qué tipo de datos se almacena en la propiedad `db` y cómo se estructura?

**Respuesta:** La propiedad `db` es un objeto (`Record<string, number>`) que mapea los nombres de los estudiantes (string) a sus grados (number).

**Código:**
```typescript
private db: Record<string, number>;
```

### 7. ¿Cómo se gestiona la organización de los estudiantes por grado?

**Pregunta:** ¿Cómo garantiza el método `roster` que los estudiantes se ordenen correctamente dentro de cada grado?

**Respuesta:** El método `roster` verifica si un grado ya tiene estudiantes y, de ser así, añade el nuevo estudiante a la lista correspondiente y luego ordena la lista alfabéticamente.

**Código:**
```typescript
roster() {
    const result: Record<number, string[]> = {};
    for (let [student, grade] of Object.entries(this.db)) {
        result[grade] = result[grade] ? [...result[grade], student].sort() : [student];
    }
    return result;
}
```

### 8. ¿Cómo se asegura la correcta identificación de estudiantes por grado en el método `grade`?

**Pregunta:** ¿Cómo asegura el método `grade` que solo se incluyan estudiantes del grado especificado?

**Respuesta:** El método `grade` recorre todas las entradas de `db` y solo añade los estudiantes cuyo grado coincide con el valor especificado.

**Código:**
```typescript
grade(key: number) {
    const result: string[] = [];
    for (let [student, grade] of Object.entries(this.db)) {
        if (grade === key) {
            result.push(student);
        }
    }
    return result.sort();
}
```

## Resumen

La clase `GradeSchool` permite gestionar estudiantes y sus grados mediante una base de datos interna. Proporciona métodos para añadir estudiantes, obtener un listado de todos los estudiantes organizados por grado y obtener estudiantes de un grado específico, asegurando que los nombres se ordenen alfabéticamente.

## Link Youtube:
https://youtu.be/WgAz--kew6c