import { LIST_FOOTEXAM } from "../actions/actionType";

const initialState = {
    footExams: []
}

export const FootExamReducer = (state = initialState, action) => {

    switch (action.type) {
        case LIST_FOOTEXAM:
            return {
                ...state,
                footExams: action.newValue
            };
    
        default:
            return state
    }

} 
