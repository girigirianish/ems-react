const validate = (values) => {
	const errors = {}
	if (!values.educations || !values.educations.length) {
		errors.educations = { _error: 'At least one education must be entered' }
	} else {
		const educationsArrayErrors = []
		values.educations.forEach((education, educationIndex) => {
			const memberErrors = {}
			if (!education || !education.instituteName) {
				memberErrors.instituteName = 'Institute Name is required'
				educationsArrayErrors[educationIndex] = memberErrors
			}
			if (!education || !education.degreeName) {
				memberErrors.degreeName = 'Degree Name is required'
				educationsArrayErrors[educationIndex] = memberErrors
			}
			if (!education || !education.startDate) {
				memberErrors.startDate = 'Start Date is required'
				educationsArrayErrors[educationIndex] = memberErrors
			}
			if (!education || !education.endDate) {
				memberErrors.endDate = 'End Date is required'
				educationsArrayErrors[educationIndex] = memberErrors
			}
		})
		if (educationsArrayErrors.length) {
			errors.educations = educationsArrayErrors
		}
	}
	return errors
}

export default validate
