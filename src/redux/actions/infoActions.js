import axios from "axios"
import { ADD_ALL_POKEMONS, DETAIL_POKEMON, SEARCH_POKEMON, TYPES_POKEMONS, ORIGIN_FILTERS, ORDER_FILTERS, TYPE_FILTERS, CLEAR_FILTERS } from "./infoActionsTypes"


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

export const detailPokemon = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/pokemons/${id}`)
            const { data } = response;
            dispatch({
                type: DETAIL_POKEMON,
                payload: data
            })

        } catch (error) {
            console.error(error);
        }
    }
}

export const getTypesPokemons = () => {
    return async (dispatch) => {
        try {
            const response = await axios("http://localhost:3001/types/")
            const { data } = response
            dispatch({
                type: TYPES_POKEMONS,
                payload: data
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export const originFilter = (filter) => {
    return {
        type: ORIGIN_FILTERS,
        payload: filter
    }
}
export const orderFilter = (filter) => {
    return {
        type: ORDER_FILTERS,
        payload: filter
    }
}

export const typeFilter = (filter) => {
    return {
        type: TYPE_FILTERS,
        payload: filter
    }
}

export const clearFilter = (filter) => {
    return {
        type: CLEAR_FILTERS,
        payload: filter
    }
}

