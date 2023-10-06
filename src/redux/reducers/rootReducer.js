/* eslint-disable no-case-declarations */
import { ADD_ALL_POKEMONS, SEARCH_POKEMON, ORIGIN_FILTERS, TYPES_POKEMONS, ORDER_FILTERS, TYPE_FILTERS, CLEAR_FILTERS, RESTORE_POKEMON } from "../actions/actionsTypes";

const initialState = {
    pokemons: [],
    copiaPokemons: [],
    filteredPokemons: [],
    types_filter: [],
    typesPokemons: [],
};

const infoReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                copiaPokemons: action.payload,
            };

        case SEARCH_POKEMON:
            return {
                ...state,
                filteredPokemons: action.payload
            }

        case RESTORE_POKEMON:
            return {
                ...state,
            }

        case TYPES_POKEMONS:
            return {
                ...state,
                typesPokemons: action.payload
            }


        case ORIGIN_FILTERS:
            let origin = [...state.pokemons]
            if (action.payload === "All") {
                return {
                    ...state,
                    filteredPokemons: [],
                }
            } else if (action.payload === "Database") {
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

        case TYPE_FILTERS:
            const arrayTypes = [...state.types_filter];
            const newType = action.payload;

            if (arrayTypes.includes(newType)) {
                const indexToRemove = arrayTypes.indexOf(newType);
                if (indexToRemove !== -1) {
                    arrayTypes.splice(indexToRemove, 1);
                }
            } else {
                if (arrayTypes.length < 2) {
                    arrayTypes.push(newType);
                } else {
                    arrayTypes.shift();
                    arrayTypes.push(newType);
                }
            }

            let filter = [...state.copiaPokemons];

            if (arrayTypes.length === 0) {
                return {
                    ...state,
                    filteredPokemons: [],
                    types_filter: [...arrayTypes],
                };
            } else if (arrayTypes.length <= 2) {
                filter = filter.filter(pokemon => {
                    return arrayTypes.every(type => pokemon.types.some(item => item.name === type));
                });
            }

            return {
                ...state,
                filteredPokemons: [...filter],
                types_filter: [...arrayTypes],
            };

        case ORDER_FILTERS:
            let op = [...state.pokemons]
            let cp = [...state.copiaPokemons]
            let fp = [...state.filteredPokemons]

            if (action.payload === "ID") {
                op.sort((a, b) => (a.id > b.id ? 1 : -1));
                cp.sort((a, b) => (a.id > b.id ? 1 : -1));
                fp.sort((a, b) => (a.id > b.id ? 1 : -1));
            } else if (action.payload === "Ascending (Name)") {
                op.sort((a, b) => (a.name > b.name ? 1 : -1));
                cp.sort((a, b) => (a.name > b.name ? 1 : -1));
                fp.sort((a, b) => (a.name > b.name ? 1 : -1));
            } else if (action.payload === "Descending (Name)") {
                op.sort((a, b) => (b.name > a.name ? 1 : -1));
                cp.sort((a, b) => (b.name > a.name ? 1 : -1));
                fp.sort((a, b) => (b.name > a.name ? 1 : -1));
            } else if (action.payload === "By Attack (Low to High)") {
                op.sort((a, b) => (a.attack > b.attack ? 1 : -1));
                cp.sort((a, b) => (a.attack > b.attack ? 1 : -1));
                fp.sort((a, b) => (a.attack > b.attack ? 1 : -1));
            } else if (action.payload === "By Attack (High to Low)") {
                op.sort((a, b) => (b.attack > a.attack ? 1 : -1));
                cp.sort((a, b) => (b.attack > a.attack ? 1 : -1));
                fp.sort((a, b) => (b.attack > a.attack ? 1 : -1));
            }

            return {
                ...state,
                pokemons: [...op],
                copiaPokemons: [...cp],
                filteredPokemons: [...fp],
            };


        case CLEAR_FILTERS:
            if (action.payload === "clear") {
                return {
                    ...state,
                    filteredPokemons: [],
                    types_filter: [],
                };
            }
            return {
                ...state
            }


        default:
            return {
                ...state,
            }
    }
}
export default infoReducer