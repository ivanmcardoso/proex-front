import {pacientsApi} from '../../apis/pacientsApi'
import {listPacients,deletePacient, registerPacient} from '../actions/pacientActions'

export const pacientsThunk = {
    getAll: () => dispatch => {
        pacientsApi.getAll()
        .then(pacients => dispatch(listPacients(pacients)) )
    },
    deleteById: (id) => dispatch => {
        pacientsApi.deleteById(id)
        .then(() => dispatch(deletePacient(id)) )
    },
    post: (data) => dispatch => {
        pacientsApi.post(data)
        .then(data => dispatch(registerPacient(data)))
    }
}