import axios from "axios"
import { ADD_ALL_POKEMONS, SEARCH_POKEMON } from "./actionsTypes"

export const getPokemons = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:3001/pokemons/")
            const { data } = response
            dispatch({
                type: ADD_ALL_POKEMONS,
                payload: data
            });
        } catch (error) {
            console.error("Error al conectar la Base de Datos: ", { error: error.message })
        }

    }
}

export const searchPokemon = (name) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
            const { data } = response;
            dispatch({
                type: SEARCH_POKEMON,
                payload: data
            });

        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 500) {
                alert("No se encontraron resultados.");
            } else {
                alert("Ocurrió un error al buscar el Pokémon o el nombre no es válido.");
            }
        }
    }
}