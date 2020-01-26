import { API_PATH } from "../enviroment";
import Axios from "axios"

export const userApi = {
    getAll: () => {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('auth-token')}` }
        };
        
        return Axios.get(`${API_PATH}/users`, config).then(res => res.data).catch(error => {localStorage.clear()});
    } 
}