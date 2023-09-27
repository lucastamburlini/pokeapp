import { ADD_ALL_POKEMONS, SEARCH_POKEMON } from "../actions/actionsTypes";

const initialState = {
    pokemons: [],
    copiaPokemons: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                copiaPokemons: action.payload
            };

        case SEARCH_POKEMON:
            if (action.payload === "") {
                return {
                    ...state,
                    pokemons: state.copiaPokemons,
                }
            } else {
                return {
                    ...state,
                    pokemons: action.payload
                }
            }

        default:
            return {
                ...state
            }
    }
}
export default reducer