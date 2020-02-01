import { combineReducers } from "redux";
import { PacientsReducer } from "./pacientReducer";
import { UserReducer} from "./userReducer";
import { FootExamReducer } from "./footExamReducer";

export const Reducer = combineReducers({
    PacientReducer: PacientsReducer,
    UserReducer: UserReducer,
    FootExamReducer: FootExamReducer
});