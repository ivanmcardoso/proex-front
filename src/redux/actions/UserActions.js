import { LIST_USERS } from "./actionType";

export const listUsers = value => ({
    type: LIST_USERS,
    newValue: value
});