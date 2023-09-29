import { ADD_ALL_POKEMONS, DETAIL_POKEMON, SEARCH_POKEMON, SET_FILTERS, TYPES_POKEMONS } from "../actions/infoActionsTypes";

const initialState = {
    pokemons: [],
    copiaPokemons: [],
    detailPokemon: [],
    typesPokemons: [],
    filteredPokemons: [],
};

const infoReducer = (state = initialState, action) => {

    let sorted = [];

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

        case SET_FILTERS:
            let filteredPokemons = [...state.pokemons];

            if (action.payload === "Todos") {
                sorted = filteredPokemons
            } else if (action.payload === "Base de Datos") {
                sorted = filteredPokemons.filter((pokemon) => {
                    return isNaN(pokemon.id);
                });
            } else if (action.payload === "API") {
                sorted = filteredPokemons.filter((pokemon) => {
                    return !isNaN(pokemon.id); 
                });
            }







            if (action.payload === "Ascendente (Nombre)") {
                sorted = state.filteredPokemons.sort((a, b) => (a.name > b.name ? 1 : -1));
            } else if (action.payload === "Descendente (Nombre)") {
                sorted = state.filteredPokemons.sort((a, b) => (b.name > a.name ? 1 : -1));
            } else if (action.payload === "Por Ataque (Bajo a Alto)") {
                sorted = state.filteredPokemons.sort((a, b) => (a.attack > b.attack ? 1 : -1));
            } else if (action.payload === "Por Ataque (Alto a Bajo)") {
                sorted = state.filteredPokemons.sort((a, b) => (b.attack > a.attack ? 1 : -1));
            }


            console.log("esto es sorted :", sorted);
            return {
                ...state,
                filteredPokemons: [...sorted]
            };

        default:
            return {
                ...state,
            }
    }
}
export default infoReducer