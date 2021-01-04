import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { history } from '../../helpers'
import { userActions } from '../../actions'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import {
	RenderEducations,
	RenderExperiences,
} from '../../components/RegistrationFinalStepInfo'

function EmployeeDetailPage(props) {
	const educations = useSelector((state) => state.usersEducations)
	const experiences = useSelector((state) => state.usersExperiences)
	const dispatch = useDispatch()
	const user = props.location.state.user

	useEffect(() => {
		dispatch(userActions.getAll())
		dispatch(userActions.getUserEducations(user.id))
		dispatch(userActions.getUserExperiences(user.id))
	}, [])

	return (
		<div>
			<Accordion defaultActiveKey='0'>
				<Card>
					<Card.Header>
						<h5>Employee Details</h5>
					</Card.Header>
					<Accordion.Collapse eventKey='0'>
						<Card.Body>
							<Card>
								<Card.Body>
									<form>
										<div>
											<label>Name: </label>
											<span>{` ${user.name}`}</span>
										</div>

										<div>
											<label>Email: </label>
											<span>{` ${user.email}`}</span>
										</div>

										<div>
											<label>Dob: </label>
											<span>{` ${user.date_of_brith}`}</span>
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
							{educations && educations.item && educations.item.data ? (
								<RenderEducations educations={educations.item.data} />
							) : (
								<span>Not Available</span>
							)}
						</Card.Body>
					</Accordion.Collapse>
				</Card>

				<Card>
					<Card.Header>
						<h5>Experience</h5>
					</Card.Header>
					<Accordion.Collapse eventKey='0'>
						<Card.Body>
							{experiences && experiences.item && experiences.item.data ? (
								<RenderExperiences experiences={experiences.item.data} />
							) : (
								<span>Not Available</span>
							)}
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
			<p>
				<Link
					onClick={() => {
						history.push('/')
					}}
				>
					Back
				</Link>
			</p>
		</div>
	)
}

export { EmployeeDetailPage }
