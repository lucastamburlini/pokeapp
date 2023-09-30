/* eslint-disable no-case-declarations */
import { ADD_ALL_POKEMONS, DETAIL_POKEMON, SEARCH_POKEMON, ORIGIN_FILTERS, TYPES_POKEMONS, ORDER_FILTERS, TYPE_FILTERS } from "../actions/infoActionsTypes";

const initialState = {
    pokemons: [],
    copiaPokemons: [],
    detailPokemon: [],
    typesPokemons: [],
    filteredPokemons: [],
};

const infoReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                copiaPokemons: action.payload,
                filteredPokemons: action.payload
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

        case TYPE_FILTERS:
            let acPayload = action.payload
            console.log("Action en el reducer",acPayload);

            return {
                ...state
            }


        case ORIGIN_FILTERS:
            if (action.payload === "Todos") {
                return {
                    ...state,
                    filteredPokemons: [...state.copiaPokemons],
                };
            } else {
                let origin = [...state.copiaPokemons];

                if (action.payload === "Base de Datos") {
                    origin = origin.filter((pokemon) => {
                        return isNaN(pokemon.id);
                    });
                } else if (action.payload === "API") {
                    origin = origin.filter((pokemon) => {
                        return !isNaN(pokemon.id);
                    });
                }

                return {
                    ...state,
                    filteredPokemons: [...origin],
                };
            }

        case ORDER_FILTERS:
            let cp = [...state.copiaPokemons]
            let fp = [...state.filteredPokemons]

            if (action.payload === "Ascendente (Nombre)") {
                cp.sort((a, b) => (a.name > b.name ? 1 : -1));
                fp.sort((a, b) => (a.name > b.name ? 1 : -1));
            } else if (action.payload === "Descendente (Nombre)") {
                cp.sort((a, b) => (b.name > a.name ? 1 : -1));
                fp.sort((a, b) => (b.name > a.name ? 1 : -1));
            } else if (action.payload === "Por Ataque (Bajo a Alto)") {
                cp.sort((a, b) => (a.attack > b.attack ? 1 : -1));
                fp.sort((a, b) => (a.attack > b.attack ? 1 : -1));
            } else if (action.payload === "Por Ataque (Alto a Bajo)") {
                cp.sort((a, b) => (b.attack > a.attack ? 1 : -1));
                fp.sort((a, b) => (b.attack > a.attack ? 1 : -1));
            }
            return {
                ...state,
                copiaPokemons: [...cp],
                filteredPokemons: [...fp]
            }


        default:
            return {
                ...state,
            }
    }
}
export default infoReducer