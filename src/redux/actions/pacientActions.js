import { LIST_PACIENTS, DELETE_PACIENT, REGISTER_PACIENT } from "./actionType";

export const listPacients = value => ({
    type: LIST_PACIENTS,
    newValue: value
});

export const deletePacient = value => ({
    type: DELETE_PACIENT,
    newValue: value
});

export const registerPacient = value => ({
    type: REGISTER_PACIENT,
    newValue: value
});