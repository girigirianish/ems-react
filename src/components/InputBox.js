import React from 'react'
import ErrorRender from './ErrorRender.js'

let renderInput = (formProps) => {
	let errorClass = `${
		formProps.meta.error && formProps.meta.touched ? 'has-error' : ''
	}`
	let input = null

	if (formProps.type === 'textarea')
		input = (
			<input
				className='form-control'
				type='textarea'
				rows='2'
				placeholder={formProps.placeholder}
				{...formProps.input}
				autoComplete='off'
			/>
		)
	else if (formProps.type === 'password') {
		input = (
			<input
				className='form-control'
				type='password'
				rows='2'
				placeholder={formProps.placeholder}
				{...formProps.input}
				autoComplete='off'
			/>
		)
	} else {
		if (formProps.active !== 'disabled')
			input = (
				<input
					className='form-control some-input-box'
					type='text'
					placeholder={formProps.placeholder}
					{...formProps.input}
					autoComplete='off'
				/>
			)
		else
			input = (
				<input
					className='form-control some-input-box'
					type='text'
					placeholder={formProps.placeholder}
					{...formProps.input}
					autoComplete='off'
					disabled
				/>
			)
	}

	return (
		<div className={errorClass}>
			{input}
			<ErrorRender {...formProps} />
		</div>
	)
}

let InputBox = (props) => {
	return renderInput(props)
}

export default InputBox
