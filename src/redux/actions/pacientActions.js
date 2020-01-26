import { LIST_PACIENTS, DELETE_PACIENT } from "./actionType";

export const listPacients = value => ({
    type: LIST_PACIENTS,
    newValue: value
});

export const deletePacient = value => ({
    type: DELETE_PACIENT,
    newValue: value
});