import Axios from "axios";
import { API_PATH } from "../enviroment";

export const footExamApi = {
    getAll: (id) => {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('auth-token')}` }
        };
        return Axios.get(`${API_PATH}/api/footExam/`+id, config)
        .then( res => res.data)
        .catch(error => {localStorage.clear()});
    } 
}