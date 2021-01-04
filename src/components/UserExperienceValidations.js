const validate = (values) => {
	const errors = {}
	if (!values.experiences || !values.experiences.length) {
		errors.experiences = { _error: 'At least one experience must be entered' }
	} else {
		const experienceArrayErrors = []
		values.experiences.forEach((experience, experienceIndex) => {
			const experienceErrors = {}
			if (!experience || !experience.companyName) {
				experienceErrors.companyName = 'Company Name is required'
				experienceArrayErrors[experienceIndex] = experienceErrors
			}
			if (!experience || !experience.city) {
				experienceErrors.city = 'City is required'
				experienceArrayErrors[experienceIndex] = experienceErrors
			}
			if (!experience || !experience.state) {
				experienceErrors.state = 'State is required'
				experienceArrayErrors[experienceIndex] = experienceErrors
			}
			if (!experience || !experience.country) {
				experienceErrors.country = 'Country is required'
				experienceArrayErrors[experienceIndex] = experienceErrors
			}
			if (!experience || !experience.startDate) {
				experienceErrors.startDate = 'Start Date is required'
				experienceArrayErrors[experienceIndex] = experienceErrors
			}
			if (!experience || !experience.endDate) {
				experienceErrors.endDate = 'End Date is required'
				experienceArrayErrors[experienceIndex] = experienceErrors
			}
		})
		if (experienceArrayErrors.length) {
			errors.experiences = experienceArrayErrors
		}
	}
	return errors
}

export default validate
