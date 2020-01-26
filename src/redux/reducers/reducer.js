import { combineReducers } from "redux";
import { PacientsReducer } from "./pacientReducer";

export const Reducer = combineReducers({
    PacientReducer: PacientsReducer
});