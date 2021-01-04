import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import Validate from './UserGeneralInfoValidations'
import InputBox from './InputBox.js'

import { FieldDatePicker } from './DatePicker'

class UserGeneralInfoForm extends Component {
	state = { mounted: false }

	componentDidMount() {
		this.setState(() => ({
			mounted: true,
		}))
	}

	render() {
		return (
			<div className='col-lg-8 offset-lg-2'>
				<h3 className='text-center'>Account Information</h3>
				<form
					className='panel-body'
					onSubmit={this.props.handleSubmit(this.props.onSubmit)}
				>
					<div className='form-group'>
						<label className='col-form-label'>Name</label>
						<Field name='name' type='text' component={InputBox} />
					</div>

					<div className='form-group'>
						<label className='col-form-label'>Date Of Birth</label>
						<FieldDatePicker name='dob' />
					</div>

					<div className='form-group'>
						<label className='col-form-label'>Email</label>
						<Field name='email' type='email' component={InputBox} />
					</div>

					<div className='form-group '>
						<label className='col-form-label'>Password</label>
						<Field
							name='initialpassword'
							type='password'
							component={InputBox}
						/>
					</div>

					<div className='form-group '>
						<label className='col-form-label'>Confirm Password</label>
						<Field
							name='confirmpassword'
							type='password'
							component={InputBox}
						/>
					</div>

					<div className='form-group row prev-next-btns'>
						<div className='col-md-6 offset-md-3'>
							<button
								type='submit'
								className='btn btn-primary btn-block register-save-btn next'
								disabled={this.props.submiting}
							>
								Next
							</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

UserGeneralInfoForm = reduxForm({
	form: 'RegistrationForm',
	destroyOnUnmount: false,
	keepDirtyOnReinitialize: true,
	validate: Validate,
})(UserGeneralInfoForm)

export default connect(null, { push })(UserGeneralInfoForm)
