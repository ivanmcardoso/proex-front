import { LIST_USERS } from "../actions/actionType";

const initialState = {
    users: []
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_USERS:
            return {
            ...state,
            users: action.newValue
        };
        default:
            return state;
    }
};