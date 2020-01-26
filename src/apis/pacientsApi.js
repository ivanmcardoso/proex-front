import { API_PATH } from "../enviroment";
import Axios from "axios"

export const pacientsApi = {
    getAll: () => {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('auth-token')}` }
        };
        
        return Axios.get(`${API_PATH}/api/pacients`, config).then(res => res.data).catch(error => {localStorage.clear()});
    } 
}