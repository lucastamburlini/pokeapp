/* eslint-disable no-case-declarations */
import { ADD_ALL_POKEMONS, SEARCH_POKEMON, ORIGIN_FILTERS, TYPES_POKEMONS, ORDER_FILTERS, TYPE_FILTERS, CLEAR_FILTERS, RESTORE_POKEMON } from "../actions/actionsTypes";

const initialState = {
    pokemons: [],
    copiaPokemons: [],
    filteredPokemons: [],
    types_filter: ["All"],
    typesPokemons: [],
    filters: {
        selectedOrigin: "All",
        selectedTypes: ["all"],
        selectedOrder: "ID",
    },
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
            const originFilter = action.payload;
            let originFilteredPokemons = [];

            if (originFilter === "All") {
                originFilteredPokemons = [];
            } else if (originFilter === "Database") {
                originFilteredPokemons = state.copiaPokemons.filter(pokemon => isNaN(pokemon.id));
            } else if (originFilter === "API") {
                originFilteredPokemons = state.copiaPokemons.filter(pokemon => !isNaN(pokemon.id));
            }

            return {
                ...state,
                filteredPokemons: originFilteredPokemons,
                filters: {
                    ...state.filters,
                    selectedOrigin: originFilter,
                },
            };

        case TYPE_FILTERS:
            const newType = action.payload;
            let typeFilteredPokemons = [];

            if (newType.includes("All")) {
                typeFilteredPokemons = [];
            } else if (newType.length <= 2) {
                typeFilteredPokemons = state.copiaPokemons.filter(pokemon => {
                    return newType.every(type => pokemon.types.some(item => item.name === type));
                });
            }

            return {
                ...state,
                filteredPokemons: typeFilteredPokemons,
                filters: {
                    ...state.filters,
                    selectedTypes: newType,
                },
            };


        case ORDER_FILTERS:
            const newOrder = action.payload;
            let cp = [...state.copiaPokemons]
            let fp = [...state.filteredPokemons]

            if (newOrder === "ID") {
                cp.sort((a, b) => (a.id > b.id ? 1 : -1));
                fp.sort((a, b) => (a.id > b.id ? 1 : -1));
            } else if (newOrder === "Ascending (Name)") {
                cp.sort((a, b) => (a.name > b.name ? 1 : -1));
                fp.sort((a, b) => (a.name > b.name ? 1 : -1));
            } else if (newOrder === "Descending (Name)") {
                cp.sort((a, b) => (b.name > a.name ? 1 : -1));
                fp.sort((a, b) => (b.name > a.name ? 1 : -1));
            } else if (newOrder === "By Attack (Low to High)") {
                cp.sort((a, b) => (a.attack > b.attack ? 1 : -1));
                fp.sort((a, b) => (a.attack > b.attack ? 1 : -1));
            } else if (newOrder === "By Attack (High to Low)") {
                cp.sort((a, b) => (b.attack > a.attack ? 1 : -1));
                fp.sort((a, b) => (b.attack > a.attack ? 1 : -1));
            }

            return {
                ...state,
                copiaPokemons: [...cp],
                filteredPokemons: [...fp],
                filters: {
                    ...state.filters,
                    selectedOrder: newOrder
                }
            };


        case CLEAR_FILTERS:
            return {
                ...state,
                copiaPokemons: [...state.pokemons],
                filteredPokemons: [],
                filters: {
                    selectedOrigin: "All",
                    selectedTypes: ["all"],
                    selectedOrder: "ID",
                },
            };


        default:
            return {
                ...state,
            }
    }
}
export default infoReducer