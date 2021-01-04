let validate = (formValues) => {
	let errors = {}

	if (!formValues.name) {
		errors.name = 'Please enter your name'
	}

	if (!formValues.dob) {
		errors.dob = 'Please enter your dob'
	}

	if (!formValues.password) {
		errors.password = 'Please enter your password.'
	}

	if (!formValues.initialpassword) {
		errors.initialpassword = 'Please enter your password.'
	}

	if (!formValues.confirmpassword) {
		errors.confirmpassword = 'Please confirm your password.'
	}

	if (formValues.initialpassword !== formValues.confirmpassword) {
		errors.initialpassword = 'Password does not match.'
		errors.confirmpassword = 'Password does not match.'
	}

	if (!formValues.email) {
		errors.email = 'Please enter your email.'
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
	) {
		errors.email = 'Invalid email address.'
	}

	return errors
}

export default validate
