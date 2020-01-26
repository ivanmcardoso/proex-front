import { LIST_PACIENTS } from "../actions/actionType";

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
        default:
            return state;
    }
};