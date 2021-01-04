import { userConstants } from '../constants'
import { userService } from '../services'
import { history } from '../helpers'
import { alertActions } from './'

export const userActions = {
	login,
	logout,
	register,
	getAll,
	getUserPermissions,
	getUserEducations,
	getUserExperiences,
}

function login(username, password, from) {
	return async (dispatch) => {
		try {
			dispatch(request({ username }))
			const user = await userService.login(username, password)
			dispatch(success(user))
			history.push(from)
		} catch (error) {
			dispatch(failure(error.toString()))
			dispatch(
				alertActions.error(
					'The combination of email address and password you entered is invalid.'
				)
			)
		}
	}

	function request(user) {
		return { type: userConstants.LOGIN_REQUEST, user }
	}
	function success(user) {
		return { type: userConstants.LOGIN_SUCCESS, user }
	}
	function failure(error) {
		return { type: userConstants.LOGIN_FAILURE, error }
	}
}

function logout() {
	userService.logout()
	return { type: userConstants.LOGOUT }
}

function register(user) {
	return async (dispatch) => {
		try {
			dispatch(request(user))
			await userService.register(user)
			dispatch(success())
			history.push('/login')
			dispatch(alertActions.success('You are successfully registered.'))
		} catch (error) {
			dispatch(failure(error.toString()))
			dispatch(
				alertActions.error('Oops! Somthing went wrong please try again.')
			)
		}
	}

	function request(user) {
		return { type: userConstants.REGISTER_REQUEST, user }
	}
	function success(user) {
		return { type: userConstants.REGISTER_SUCCESS, user }
	}
	function failure(error) {
		return { type: userConstants.REGISTER_FAILURE, error }
	}
}

function getAll() {
	return async (dispatch) => {
		dispatch(request())
		try {
			const users = await userService.getAll()
			dispatch(success(users))
		} catch (error) {
			dispatch(failure(error.toString()))
		}
	}

	function request() {
		return { type: userConstants.GETALL_REQUEST }
	}
	function success(users) {
		return { type: userConstants.GETALL_SUCCESS, users }
	}
	function failure(error) {
		return { type: userConstants.GETALL_FAILURE, error }
	}
}

function getUserPermissions(roleId) {
	return async (dispatch) => {
		dispatch(request())
		try {
			const permissions = await userService.getUserPermissions(roleId)
			dispatch(success(permissions))
		} catch (error) {
			dispatch(failure(error.toString()))
		}
	}

	function request() {
		return { type: userConstants.PERMISSION_REQUEST }
	}
	function success(permissions) {
		return { type: userConstants.PERMISSION_SUCCESS, permissions }
	}
	function failure(error) {
		return { type: userConstants.PERMISSION_FAILURE, error }
	}
}

function getUserEducations(id) {
	return async (dispatch) => {
		dispatch(request())
		try {
			const educations = await userService.getUserEducations(id)
			dispatch(success(educations))
		} catch (error) {
			dispatch(failure(error.toString()))
		}
	}

	function request() {
		return { type: userConstants.EDUCATION_REQUEST }
	}
	function success(educations) {
		return { type: userConstants.EDUCATION_SUCCESS, educations }
	}
	function failure(error) {
		return { type: userConstants.EDUCATION_FAILURE, error }
	}
}

function getUserExperiences(id) {
	return async (dispatch) => {
		dispatch(request())
		try {
			const experiences = await userService.getUserExperiences(id)
			dispatch(success(experiences))
		} catch (error) {
			dispatch(failure(error.toString()))
		}
	}

	function request() {
		return { type: userConstants.EXPERIENCE_REQUEST }
	}
	function success(experiences) {
		return { type: userConstants.EXPERIENCE_SUCCESS, experiences }
	}
	function failure(error) {
		return { type: userConstants.EXPERIENCE_FAILURE, error }
	}
}
