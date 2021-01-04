import React from 'react'
import { Modal } from 'react-bootstrap'
import { UserDetails } from './RegistrationFinalStepInfo'

const EmployeeDetailsModal = ({ item, ...rest }) => (
	<Modal {...rest} bsSize='large'>
		<Modal.Header closeButton>
			<Modal.Title id='contained-modal-title-lg'>Employee Details</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<UserDetails {...item} />
		</Modal.Body>
		<Modal.Footer />
	</Modal>
)

export default EmployeeDetailsModal
