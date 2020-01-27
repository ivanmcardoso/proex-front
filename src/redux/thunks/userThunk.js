import {listUsers, deleteUser} from '../actions/UserActions'
import { userApi } from '../../apis/UserApi'

export const userThunk = {
    getAll: () => dispatch => {
        userApi.getAll()
        .then(users => dispatch(listUsers(users)) )
    },

    deleteById: (id) => dispatch => {
        userApi.deleteById(id)
        .then(() => dispatch(deleteUser(id)) )
    }
}