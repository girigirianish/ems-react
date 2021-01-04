import { axiosApiInstance } from '../helpers'

export const userService = {
	login,
	logout,
	register,
	getAll,
	getUserPermissions,
	getUserEducations,
	getUserExperiences,
}

async function login(email, password) {
	const loginResponse = await axiosApiInstance.post(
		`${process.env.REACT_APP_API_URL}/login`,
		{
			email,
			password,
		}
	)
	localStorage.setItem('currentUser', loginResponse.data.token)
	return loginResponse.token
}

async function logout() {
	localStorage.removeItem('currentUser')
}

async function register(user) {
	await axiosApiInstance.post(`${process.env.REACT_APP_API_URL}/register`, {
		email: user.email,
		password: user.initialpassword,
	})
	await registerUserDetails(user)
}

function registerUserDetails(user) {
	return axiosApiInstance.post(
		`${process.env.REACT_APP_API_URL}/user`,
		getUserDetailsPayload(user)
	)
}

function getUserDetailsPayload(userDetail) {
	return {
		personal_details: {
			userID: userDetail.id,
			email: userDetail.email,
			name: userDetail.name,
			date_of_brith: userDetail.dob,
		},
		education_details: userDetail.educations.map((education) => {
			return {
				userID: userDetail.id,
				certificate_degree_name: education.degreeName,
				major: '',
				institute_university_name: education.instituteName,
				starting_date: education.startDate,
				end_date: education.endDate,
				percentage: null,
				cgpa: null,
			}
		}),
		experience_details: userDetail.experiences.map((experience) => {
			return {
				userID: userDetail.id,
				is_current_job: null,
				starting_date: experience.startDate,
				end_date: experience.endDate,
				comapany_name: experience.companyName,
				job_location_city: experience.city,
				job_location_state: experience.state,
				job_location_country: experience.country,
			}
		}),
	}
}

function getAll() {
	return axiosApiInstance.get(`${process.env.REACT_APP_API_URL}/users`)
}

function getUserPermissions(roleId) {
	return axiosApiInstance.get(
		`${process.env.REACT_APP_API_URL}/user/permissions`,
		{
			params: {
				roleId,
			},
		}
	)
}

async function getUserEducations(id) {
	const educations = await axiosApiInstance.get(
		`${process.env.REACT_APP_API_URL}/user/education`,
		{
			params: {
				id,
			},
		}
	)
	return educations.data.map((education) => {
		return {
			degreeName: education.certificate_degree_name,
			instituteName: education.institute_university_name,
			startDate: education.starting_date,
			endDate: education.end_date,
		}
	})
}

async function getUserExperiences(id) {
	const experiences = await axiosApiInstance.get(
		`${process.env.REACT_APP_API_URL}/user/experience`,
		{
			params: {
				id,
			},
		}
	)
	return experiences.map((experience) => {
		return {
			startDate: experience.starting_date,
			endDate: experience.end_date,
			comapanyName: experience.comapany_name,
			city: experience.job_location_city,
			state: experience.job_location_state,
			country: experience.job_location_country,
		}
	})
}
