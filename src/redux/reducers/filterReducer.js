const initialState = {
    
}
const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FILTER":
            // Realiza aquí la lógica de tu filtro
            // Puedes actualizar el estado según sea necesario
            break;

        default:
            return state; // Devuelve el estado sin cambios para casos desconocidos
    }
}

export default filterReducer;