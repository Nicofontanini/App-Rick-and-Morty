export const addFav = (personaje) => {
    return {
        type: 'ADD_FAV',
        payload: personaje
    }
};

export const removeFav = (id) => {
    return {
        type: 'REMOVE_FAV',
        payload: id
    }
}

export const filterCards = (gender) => {
    return {
        type: 'FILTER',
        payload: gender
    }
}

export const orderCards = (orden) => {
    let payloadValue;

    // Puedes utilizar un bloque if para definir el valor del payload
    if (orden === 'A') {
      payloadValue = 'Ascendente';
    } else if (orden === 'D') {
      payloadValue = 'Descendente';
    } else {
      // Manejar otro caso si es necesario
      payloadValue = 'ValorPorDefecto';
    }
    return {
        type: 'ORDER',
        payload: payloadValue
    }
}


export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';