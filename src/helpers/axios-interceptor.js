import { history } from './'
const axios = require('axios')
export const axiosApiInstance = axios.create()

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
	async (config) => {
		let token = localStorage.getItem('currentUser')
		config.headers = {
			Authorization: `Bearer ${token}`,
			Accept: 'application/json',
		}
		return config
	},
	(error) => {
		Promise.reject(error)
	}
)

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
	(response) => {
		return response
	},
	async function (error) {
		if (error.response.status === 401) {
			localStorage.removeItem('currentUser')
			history.push('/login')
			return
		}
		return Promise.reject(error)
	}
)
