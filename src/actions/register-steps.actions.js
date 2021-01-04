import { SAVE_FORM_POSITION } from '../constants'

export let storeFormPageNumber = (formName, position) => {
	return (dispatch) => {
		dispatch({
			type: SAVE_FORM_POSITION,
			payload: {
				form: formName,
				pos: position,
			},
		})
	}
}
