import { LIST_PACIENTS, DELETE_PACIENT, REGISTER_PACIENT } from "../actions/actionType";

const initialState = {
    pacients: []
}

export const PacientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_PACIENTS:
            return {
            ...state,
            pacients: action.newValue
            };
        case DELETE_PACIENT:
            return {
                ...state,
                pacients: state.pacients.filter((pacient)=> pacient.id !== action.newValue)
            };
        case REGISTER_PACIENT:
            return {
                ...state,
                pacients: state.pacients.concat(action.newValue)
            };
        default:
            return state;
    }
};