import { LIST_USERS, DELETE_USER } from "../actions/actionType";

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
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter((user)=> user.id !== action.newValue)
            };
        default:
            return state;
    }
};