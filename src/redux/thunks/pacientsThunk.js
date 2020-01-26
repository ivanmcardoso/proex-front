import {pacientsApi} from '../../apis/pacientsApi'
import {listPacients} from '../actions/pacientActions'

export const pacientsThunk = {
    getAll: () => dispatch => {
        pacientsApi.getAll()
        .then(pacients => dispatch(listPacients(pacients)) )
    }
}