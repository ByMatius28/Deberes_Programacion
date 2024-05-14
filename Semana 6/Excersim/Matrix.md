
 * Representa una matriz con filas y columnas de números.
 
export class Matrix {
  
   * Las filas de la matriz.
   
  readonly rows: number[][]
  
  
   * Las columnas de la matriz.
   
  readonly columns: number[][]
  

   * Crea una nueva instancia de Matrix a partir de una representación de texto.
   * @param text - La representación de texto de la matriz con filas separadas por salto de línea y números separados por espacios.
   