import { LIST_FOOTEXAM, REGISTER_FOOTEXAM } from "./actionType";

export const listFootExam = value => ({
    type: LIST_FOOTEXAM,
    newValue: value
});

export const registerFootExam = value => ({
    type: REGISTER_FOOTEXAM,
    newValue: value
});