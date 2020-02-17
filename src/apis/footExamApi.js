import Axios from "axios";
import { API_PATH } from "../enviroment";

export const footExamApi = {
    getAll: (id) => {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('auth-token')}` },
        };
        return Axios.get(`${API_PATH}/api/footExam/`+id, config)
        .then( res => res.data)
        .catch(error => {localStorage.clear()});
    },

    post: (id) => {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('auth-token')}`},
            params: {pacientId: id}
        };
        return Axios.post(`${API_PATH}/api/footExam`,null,config)
        .then( res => res.data)
        .catch(error => {localStorage.clear()});
    }
}