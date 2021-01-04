import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Stepper from 'react-stepper-horizontal'
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import { Link } from 'react-router-dom'

import { storeFormPageNumber, userActions } from '../../actions'

import UserGeneralInfoForm from '../../components/UserGeneralInfoForm'
import UserEducationForm from '../../components/UserEducationForm'
import UserExperienceForm from '../../components/UserExperienceForm'
import FinalRegistrationStep from '../../components/FinalRegistrationStep'

class RegisterPage extends Component {
	constructor(props) {
		super(props)
		this.nextPage = this.nextPage.bind(this)
		this.previousPage = this.previousPage.bind(this)

		this.state = {
			page: 1,
			steps: [{ title: '' }, { title: '' }, { title: '' }, { title: '' }],
		}
	}

	componentWillMount = () => {
		if (
			typeof this.props.lastPage !== 'undefined' &&
			this.props.lastPage.pos >= 1
		) {
			this.setState(() => {
				return { page: this.props.lastPage.pos }
			})
		}
	}

	componentWillUnmount = () => {
		this.props.storeFormPageNumber('RegistrationForm', 1)
		this.props.reset('RegistrationForm') //Reset form fields all to empty
	}

	nextPage() {
		this.setState(
			{
				page: this.state.page + 1,
			},
			() => {
				this.props.storeFormPageNumber('RegistrationForm', this.state.page)
			}
		)
	}

	previousPage() {
		this.setState(
			{
				page: this.state.page - 1,
			},
			() => {
				this.props.storeFormPageNumber('RegistrationForm', this.state.page)
				//Make this.props.invalid = false, force re-check on all fields
			}
		)
	}

	onSubmit = async (formValues) => {
		//Send form values to server
		this.props.register(formValues)
	}

	render() {
		let { page, steps } = this.state

		return (
			<div className='wizard-create-agency'>
				<Stepper
					steps={steps}
					activeStep={page - 1}
					activeColor='#eb8d34'
					completeColor='#8cb544'
					defaultBarColor='#eb8d34'
					completeBarColor='#8cb544'
					barStyle='solid'
					circleFontSize={16}
				/>
				<div className='wizard-wrapper'>
					{page === 1 && (
						<UserGeneralInfoForm onSubmit={this.nextPage} {...this.props} />
					)}
					{page === 2 && (
						<UserEducationForm
							previousPage={this.previousPage}
							onSubmit={this.nextPage}
							{...this.props}
						/>
					)}
					{page === 3 && (
						<UserExperienceForm
							previousPage={this.previousPage}
							onSubmit={this.nextPage}
							{...this.props}
						/>
					)}
					{page === 4 && (
						<FinalRegistrationStep
							previousPage={this.previousPage}
							onSubmit={this.onSubmit}
							{...this.props}
						/>
					)}
				</div>

				<div className='panel-footer register-footer'>
					<div className='text-center'>
						<span className='no-account-query'>Already have an account?</span>
						<span className='sign-in-link'>
							<Link className='create-account' to='/'>
								Sign In
							</Link>
						</span>
					</div>
				</div>
			</div>
		)
	}
}

RegisterPage.propTypes = {
	reset: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
}

let mapStateToProps = (state) => {
	return {
		lastPage: state.myForm[`CreateRegisterFormTracker`],
	}
}

export default connect(mapStateToProps, {
	storeFormPageNumber,
	reset,
	register: userActions.register,
})(RegisterPage)
