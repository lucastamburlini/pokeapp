/* eslint-disable no-case-declarations */
import { ADD_ALL_POKEMONS, SEARCH_POKEMON, ORIGIN_FILTERS, TYPES_POKEMONS, ORDER_FILTERS, TYPE_FILTERS, CLEAR_FILTERS } from "../actions/infoActionsTypes";

const initialState = {
    pokemons: [],
    copiaPokemons: [],
    filteredPokemons: [],
    origin_filter: [],
    types_filter: [],
    order_filter: [],
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
            if (action.payload === "") {
                return {
                    ...state,
                    pokemons: state.copiaPokemons,
                }
            } else {
                return {
                    ...state,
                    filteredPokemons: action.payload
                }
            }

        case TYPES_POKEMONS:
            return {
                ...state,
                typesPokemons: action.payload
            }


        case ORIGIN_FILTERS:
            const newOrigin = action.payload;

            let arrayOrigin = [...state.origin_filter];
            let origin = [...state.copiaPokemons];
            console.log("arrayOrigin:", arrayOrigin.length);

            const originIndex = arrayOrigin.indexOf(newOrigin);

            if (newOrigin === "Database") {
                origin = origin.filter((pokemon) => {
                    return isNaN(pokemon.id);
                });
            } else if (newOrigin === "API") {
                origin = origin.filter((pokemon) => {
                    return !isNaN(pokemon.id);
                });
            }

            if (originIndex === -1) {
                arrayOrigin = [newOrigin];
            } else {
                arrayOrigin = [];
                origin = [...state.pokemons]
            }

            return {
                ...state,
                copiaPokemons: [...origin],
                filteredPokemons: [...origin],
                origin_filter: arrayOrigin,
            };


        case ORDER_FILTERS:
            let cp = [...state.copiaPokemons]
            let fp = [...state.filteredPokemons]

            if (state.lastOrder === action.payload) {
                return {
                    ...state,
                    copiaPokemons: [...state.pokemons],
                    lastOrder: null,
                };
            }


            if (action.payload === "Ascending (Name)") {
                cp.sort((a, b) => (a.name > b.name ? 1 : -1));
                fp.sort((a, b) => (a.name > b.name ? 1 : -1));
            } else if (action.payload === "Descending (Name)") {
                cp.sort((a, b) => (b.name > a.name ? 1 : -1));
                fp.sort((a, b) => (b.name > a.name ? 1 : -1));
            } else if (action.payload === "By Attack (Low to High)") {
                cp.sort((a, b) => (a.attack > b.attack ? 1 : -1));
                fp.sort((a, b) => (a.attack > b.attack ? 1 : -1));
            } else if (action.payload === "By Attack (High to Low)") {
                cp.sort((a, b) => (b.attack > a.attack ? 1 : -1));
                fp.sort((a, b) => (b.attack > a.attack ? 1 : -1));
            }

            return {
                ...state,
                copiaPokemons: [...cp],
                filteredPokemons: [...fp],
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
                    filteredPokemons: [...state.copiaPokemons],
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

        case CLEAR_FILTERS:
            if (action.payload === "clear") {
                return {
                    ...state,
                    copiaPokemons: [...state.pokemons],
                    filteredPokemons: [...state.pokemons],
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