import {pacientsApi} from '../../apis/pacientsApi'
import {listPacients,deletePacient} from '../actions/pacientActions'

export const pacientsThunk = {
    getAll: () => dispatch => {
        pacientsApi.getAll()
        .then(pacients => dispatch(listPacients(pacients)) )
    },
    deleteById: (id) => dispatch => {
        pacientsApi.deleteById(id)
        .then(pacients => dispatch(deletePacient(pacients)) )
    }
}