import React from 'react'
import { reduxForm } from 'redux-form'
import RegistrationFinalStepInfo from './RegistrationFinalStepInfo'

const FinalRegistrationStep = (props) => {
	return (
		<div className='col-lg-8 offset-lg-2'>
			<h3 className='text-center'>Confirm Informations</h3>

			<form
				className='panel-body'
				onSubmit={props.handleSubmit(props.onSubmit)}
			>
				<div className='form-group'>
					<RegistrationFinalStepInfo></RegistrationFinalStepInfo>
				</div>

				<div className='form-group row prev-next-btns'>
					<div className='col-md-6'>
						<button
							type='button'
							className='btn btn-primary btn-block register-save-btn previous'
							onClick={props.previousPage}
						>
							Back
						</button>
					</div>
					<div className='col-md-6'>
						<button type='submit' className='btn btn-primary btn-block'>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default reduxForm({
	form: 'RegistrationForm',
	destroyOnUnmount: false,
})(FinalRegistrationStep)
