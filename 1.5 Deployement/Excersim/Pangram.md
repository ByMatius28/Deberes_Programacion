/**
 * Función que verifica si una frase es un pangrama, es decir, si contiene todas las letras del alfabeto al menos una vez.
 * @param sentence La frase a verificar
 * @returns true si la frase es un pangrama, false en caso contrario
 */
export function isPangram(sentence: string): boolean {
    sentence = sentence.toLowerCase()
    return [..."abcdefghijklmnopqrstuvwxyz"].every(c => sentence.includes(c))
}
*/
