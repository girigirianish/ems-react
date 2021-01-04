import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { history, parseJwt } from '../../helpers'

import { userActions } from '../../actions'
import BootstrapTable from 'react-bootstrap-table-next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

function HomePage() {
	const users = useSelector((state) => state.users)
	const permissions = useSelector((state) => state.usersPermissions)
	const dispatch = useDispatch()

	let columns = [
		{
			dataField: 'name',
			text: 'Name',
			sort: true,
		},
		{
			dataField: 'email',
			text: 'Email',
		},
		{
			dataField: 'date_of_brith',
			text: 'Date Of Birth',
		},
	]

	if (
		permissions &&
		permissions.items &&
		permissions.items.data &&
		permissions.items.data.indexOf('ViewEmployeeDetails') > -1
	) {
		columns = [
			...columns,
			{
				dataField: 'actions',
				text: 'Actions',
				formatter: (value, row) => {
					return (
						<FontAwesomeIcon
							icon={faEye}
							onClick={() => {
								history.push('/employee-detail', {
									user: row,
								})
							}}
						/>
					)
				},
				sort: true,
			},
		]
	}

	useEffect(() => {
		dispatch(userActions.getAll())
		const token = parseJwt(localStorage.getItem('currentUser'))
		dispatch(userActions.getUserPermissions(token.user.role_id))
	}, [])

	return (
		<div>
			<BootstrapTable
				keyField='id'
				data={(users.items && users.items.data) || []}
				columns={columns}
			/>
			<p>
				<Link
					onClick={() => {
						dispatch(userActions.logout())
						history.push('/login')
					}}
				>
					Logout
				</Link>
			</p>
		</div>
	)
}

export { HomePage }
