import { userConstants } from '../constants'

export function usersExperiences(state = {}, action) {
	switch (action.type) {
		case userConstants.EXPERIENCE_REQUEST:
			return {
				loading: true,
			}
		case userConstants.EXPERIENCE_SUCCESS:
			return {
				items: action.experiences,
			}
		case userConstants.EXPERIENCE_FAILURE:
			return {
				error: action.error,
			}
		default:
			return state
	}
}
