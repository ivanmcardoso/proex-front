import { listFootExam } from "../actions/footExamActions"
import { footExamApi } from "../../apis/footExamApi"

export const footExamThunk = {
    getAll: (id) => dispatch => {
        footExamApi.getAll(id)
        .then(footExams => dispatch(listFootExam(footExams)))
    }
}