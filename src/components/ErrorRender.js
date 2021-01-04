import React from 'react'

let renderError = (props) => {
	let className = ''

	if (typeof props.input !== 'undefined') {
		if (
			props.meta.touched &&
			props.meta.error &&
			typeof props.meta.error !== 'undefined'
		) {
			let error = (
				<p className={className} style={{ color: '#a94442' }}>
					{props.meta.error}
				</p>
			)

			return error
		}
	}
}

let RenderError = (props) => {
	let errorMsg = renderError(props)

	return <React.Fragment>{errorMsg}</React.Fragment>
}

export default RenderError
