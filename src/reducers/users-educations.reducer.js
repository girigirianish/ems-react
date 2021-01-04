import { userConstants } from '../constants'

export function usersEducations(state = {}, action) {
	switch (action.type) {
		case userConstants.EDUCATION_REQUEST:
			return {
				loading: true,
			}
		case userConstants.EDUCATION_SUCCESS:
			return {
				items: action.educations,
			}
		case userConstants.EDUCATION_FAILURE:
			return {
				error: action.error,
			}
		default:
			return state
	}
}
