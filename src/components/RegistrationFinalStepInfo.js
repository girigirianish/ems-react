import React from 'react'
import { connect } from 'react-redux'
import { getFormValues } from 'redux-form'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

export const RenderEducations = (props) => {
	return (
		<div>
			{props.educations.map((education, index) => (
				<div key={index}>
					<Card>
						<Card.Body>
							<form>
								<div>
									<label>Institute Name: </label>
									<span>{` ${education.instituteName}`}</span>
								</div>

								<div>
									<label>Degree Name: </label>
									<span>{` ${education.degreeName}`}</span>
								</div>

								<div>
									<label>Start Date: </label>
									<span>{` ${education.startDate}`}</span>
								</div>

								<div>
									<label>End Date: </label>
									<span>{` ${education.endDate}`}</span>
								</div>
							</form>
						</Card.Body>
					</Card>
				</div>
			))}
		</div>
	)
}

export const RenderExperiences = (props) => {
	return (
		<div>
			{props.experiences.map((experience, index) => (
				<div key={index}>
					<Card>
						<Card.Body>
							<form>
								<div>
									<label>Company Name: </label>
									<span>{` ${experience.companyName}`}</span>
								</div>

								<div>
									<label>City: </label>
									<span>{` ${experience.city}`}</span>
								</div>

								<div>
									<label>State: </label>
									<span>{` ${experience.state}`}</span>
								</div>

								<div>
									<label>Country: </label>
									<span>{` ${experience.country}`}</span>
								</div>

								<div>
									<label>Start Date: </label>
									<span>{` ${experience.startDate}`}</span>
								</div>

								<div>
									<label>End Date: </label>
									<span>{` ${experience.endDate}`}</span>
								</div>
							</form>
						</Card.Body>
					</Card>
				</div>
			))}
		</div>
	)
}

export const UserDetails = (props) => {
	return (
		<Accordion defaultActiveKey='0'>
			<Card>
				<Card.Header>
					<h5>General</h5>
				</Card.Header>
				<Accordion.Collapse eventKey='0'>
					<Card.Body>
						<Card>
							<Card.Body>
								<form>
									<div>
										<label>Name: </label>
										<span>{` ${props.name}`}</span>
									</div>

									<div>
										<label>Email: </label>
										<span>{` ${props.email}`}</span>
									</div>

									<div>
										<label>Dob: </label>
										<span>{` ${props.dob}`}</span>
									</div>
								</form>
							</Card.Body>
						</Card>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
			<Card>
				<Card.Header>
					<h5>Education</h5>
				</Card.Header>
				<Accordion.Collapse eventKey='0'>
					<Card.Body>
						<RenderEducations educations={props.educations} />
					</Card.Body>
				</Accordion.Collapse>
			</Card>

			<Card>
				<Card.Header>
					<h5>Experience</h5>
				</Card.Header>
				<Accordion.Collapse eventKey='0'>
					<Card.Body>
						<RenderExperiences experiences={props.experiences} />
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	)
}

const RegistrationFinalStepInfo = ({ values }) => {
	return (
		<div>
			<UserDetails {...values} />
		</div>
	)
}

export default connect((state) => ({
	values: getFormValues('RegistrationForm')(state),
}))(RegistrationFinalStepInfo)
