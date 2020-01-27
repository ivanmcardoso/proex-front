import { LIST_USERS, DELETE_USER } from "./actionType";

export const listUsers = value => ({
    type: LIST_USERS,
    newValue: value
});

export const deleteUser = value => ({
    type: DELETE_USER,
    newValue: value
});