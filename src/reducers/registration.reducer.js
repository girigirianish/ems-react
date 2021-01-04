import { userConstants, SAVE_FORM_POSITION } from '../constants'

export function registration(state = {}, action) {
	switch (action.type) {
		case userConstants.REGISTER_REQUEST:
			return { registering: true }
		case userConstants.REGISTER_SUCCESS:
			return {}
		case userConstants.REGISTER_FAILURE:
			return {}
		default:
			return state
	}
}

let initialState = {
	login: '',
}

export function myForm(state = initialState, action) {
	switch (action.type) {
		case SAVE_FORM_POSITION:
			let formPosition = `${action.payload.form}WizardFormTracker`
			return {
				...state,
				[formPosition]: action.payload,
			}
		default:
			return state
	}
}
