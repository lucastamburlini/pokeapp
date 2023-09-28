import { ADD_ALL_POKEMONS, DETAIL_POKEMON, SEARCH_POKEMON, TYPES_POKEMONS } from "../actions/actionsTypes";

const initialState = {
    pokemons: [],
    copiaPokemons: [],
    detailPokemon: [],
    typesPokemons: []
};

const infoReducer = (state = initialState, action) => {
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

        case DETAIL_POKEMON:
            return {
                ...state,
                detailPokemon: action.payload
            }

        case TYPES_POKEMONS:
            return {
                ...state,
                typesPokemons: action.payload
            }

        default:
            return {
                ...state,
            }
    }
}
export default infoReducer