import {listUsers} from '../actions/UserActions'
import { userApi } from '../../apis/UserApi'

export const userThunk = {
    getAll: () => dispatch => {
        userApi.getAll()
        .then(users => dispatch(listUsers(users)) )
    }
}