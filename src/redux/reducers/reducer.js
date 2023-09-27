import { ADD_ALL_POKEMONS } from "../actions/actionsTypes";

const initialState = {
    pokemons: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            }


        default:
            return {
                ...state
            }
    }
}
export default reducer