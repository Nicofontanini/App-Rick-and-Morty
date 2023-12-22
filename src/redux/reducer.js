import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './actions';

const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }

        case REMOVE_FAV:
            const idDelete = parseInt(action.payload, 10);

            const updatedList = state.myFavorites.filter(personaje => personaje.id !== idDelete)

            return {
                ...state,
                myFavorites: updatedList
            }

        case FILTER:


            const allCharsFiltered = state.allCharacters.filter(personaje => personaje.gender === action.payload)

            return {
                ...state,
                myFavorites: allCharsFiltered
            }

        case ORDER:
            return {
                ...state,
                myFavorites:
                    action.payload === 'Ascendente'
                        ? state.allCharacters.sort((a, b) => a.id - b.id)
                        : state.allCharacters.sort((a, b) => b.id - a.id)
            }

        default:
            return {
                ...state,
            }
    }
};

export default rootReducer;