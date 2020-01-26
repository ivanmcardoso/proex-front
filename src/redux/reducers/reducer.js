import { combineReducers } from "redux";
import { PacientsReducer } from "./pacientReducer";
import { UserReducer} from "./userReducer";

export const Reducer = combineReducers({
    PacientReducer: PacientsReducer,
    UserReducer: UserReducer
});