En Angular, los componentes pueden comunicarse entre sí a través de una relación de padre e hijo.

1. Crear el componente hijo: Primero, crea el componente hijo utilizando el comando `ng generate component nombre-componente-hijo`.

2. Importar el componente hijo en el módulo padre: En el módulo donde deseas utilizar el componente hijo, importa el módulo del componente hijo y añádelo a la lista de declaraciones en el decorador `@NgModule`.

3. Definir una propiedad en el componente padre: En el componente padre, define una propiedad que se utilizará para pasar datos al componente hijo. Por ejemplo, `dato: string = 'Hola Mundo';`.

4. Pasar datos al componente hijo: Utiliza la propiedad de enlace de datos `@Input()` en el componente hijo para recibir datos del componente padre. Por ejemplo, en el componente hijo, declara una propiedad `@Input() datoHijo: string;`.

5. Enlazar datos entre el componente padre y el componente hijo: En el template del componente padre, utiliza la sintaxis de enlace de datos para pasar el valor de la propiedad al componente hijo. Por ejemplo, `<app-componente-hijo [datoHijo]="dato"></app-componente-hijo>`.

6. Mostrar datos en el componente hijo: En el template del componente hijo, puedes utilizar la propiedad `datoHijo` para mostrar los datos pasados desde el componente padre. Por ejemplo, `{{ datoHijo }}`.

Link Video:
https://www.youtube.com/watch?v=s5s7PgFfcSE

