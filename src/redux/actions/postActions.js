import { CREATE_POKEMON } from "./postActionTypes"

export const createPokemon = (data) => {
    return {
        type: CREATE_POKEMON,
        payload: data,
    }
}

