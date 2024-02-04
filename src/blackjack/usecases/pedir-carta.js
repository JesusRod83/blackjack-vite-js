
/**
 * Esta función me permite coger una carta
 * @param {Array<String>} deck Es un array de string. Ejemplo: ['AD', 'QD', '9H', '3S', '8D', '8S', '8C']
 * @returns {<String>} devuelve una carta
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
