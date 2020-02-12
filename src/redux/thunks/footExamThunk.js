import { listFootExam, registerFootExam } from "../actions/footExamActions"
import { footExamApi } from "../../apis/footExamApi"

export const footExamThunk = {
    getAll: (id) => dispatch => {
        footExamApi.getAll(id)
        .then(footExams => dispatch(listFootExam(footExams)))
    },
    post: (id) => dispatch => {
        footExamApi.post(id)
        .then(footExam => dispatch(registerFootExam(footExam)))
    }
}