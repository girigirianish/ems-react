import React from 'react'
import { Field, FieldArray, reduxForm, arrayPush } from 'redux-form'
import validate from './UserEducationValidations'
import InputBox from './InputBox.js'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import DatePicker, {
	FieldDatePicker,
	formatDates,
	normalizeDates,
} from './DatePicker'

const renderEducations = ({
	fields,
	meta: { touched, error, submitFailed },
}) => {
	return (
		<div>
			<div> {(touched || submitFailed) && error && <span>{error}</span>}</div>

			{fields.map((education, index) => (
				<div key={index}>
					<Card>
						<Card.Body>
							<span>{error}</span>
							<div className='float-right'>
								{fields.length > 1 ? (
									<FontAwesomeIcon
										icon={faTrash}
										onClick={() => fields.remove(index)}
									/>
								) : null}
							</div>
							<div className='form-group'>
								<label className='col-form-label'>Institute Name</label>
								<Field
									name={`${education}.instituteName`}
									type='text'
									component={InputBox}
								/>
							</div>
							<div className='form-group'>
								<label className='col-form-label'>Degree Name</label>
								<Field
									name={`${education}.degreeName`}
									type='text'
									component={InputBox}
								/>
							</div>
							<div className='form-group'>
								<label className='col-form-label'>Start Date</label>
								<FieldDatePicker name={`${education}.startDate`} />
							</div>
							<div className='form-group'>
								<label className='col-form-label'>End Date</label>
								<Field
									name={`${education}.endDate`}
									component={DatePicker}
									parse={normalizeDates}
									format={formatDates}
								/>
							</div>
						</Card.Body>
					</Card>
				</div>
			))}
		</div>
	)
}

const UserEducationForm = (props) => {
	const { handleSubmit, submitting } = props
	return (
		<div className='col-lg-8 offset-lg-2'>
			<h3 className='text-center'>Education Information</h3>
			<form onSubmit={handleSubmit}>
				<FieldArray name='educations' component={renderEducations} />
				<div className='form-group row prev-next-btns'>
					<div className='col-md-4'>
						<button
							type='button'
							className='btn btn-primary btn-block register-save-btn previous'
							onClick={props.previousPage}
						>
							Back
						</button>
					</div>
					<div className='col-md-4'>
						<button
							type='button'
							className='btn btn-primary btn-block'
							onClick={() =>
								props.dispatch(arrayPush('RegistrationForm', 'educations', {}))
							}
						>
							Add
						</button>
					</div>
					<div className='col-md-4'>
						<button
							type='submit'
							className='btn btn-primary btn-block'
							disabled={submitting}
						>
							Next
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

const UserEduForm = reduxForm({
	form: 'RegistrationForm',
	validate,
	keepDirtyOnReinitialize: true,
	destroyOnUnmount: false,
})(UserEducationForm)

export default connect(() => {
	return {
		initialValues: {
			educations: [{}],
		},
	}
})(withRouter(UserEduForm))
