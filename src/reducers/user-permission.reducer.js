import { userConstants } from '../constants'

export function usersPermissions(state = {}, action) {
	switch (action.type) {
		case userConstants.PERMISSION_REQUEST:
			return {
				loading: true,
			}
		case userConstants.PERMISSION_SUCCESS:
			return {
				items: action.permissions,
			}
		case userConstants.PERMISSION_FAILURE:
			return {
				error: action.error,
			}
		default:
			return state
	}
}
