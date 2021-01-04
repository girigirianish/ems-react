import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { authentication } from './authentication.reducer'
import { registration, myForm } from './registration.reducer'
import { alert } from './alert.reducer'
import { users } from './users.reducer'
import { usersPermissions } from './user-permission.reducer'
import { usersEducations } from './users-educations.reducer'
import { usersExperiences } from './users-experience.reducer'

const rootReducer = combineReducers({
	authentication,
	registration,
	alert,
	myForm,
	form: formReducer,
	users,
	usersPermissions,
	usersEducations,
	usersExperiences,
})

export default rootReducer
