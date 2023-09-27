import axios from "axios"
import { ADD_ALL_POKEMONS } from "./actionsTypes"

export const getPokemons = () => {
    return async (dispatch) => {
        const response = await axios.get("http://localhost:3001/pokemons/")
        const { data } = response
        console.log(data);
        dispatch({
            type: ADD_ALL_POKEMONS,
            payload: data
        })
    }
}