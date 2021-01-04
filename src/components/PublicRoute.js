import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PublicRoute({ component: Component, roles, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (localStorage.getItem('currentUser')) {
					// not logged in so redirect to login page with the return url
					return (
						<Redirect
							to={{ pathname: '/home', state: { from: props.location } }}
						/>
					)
				}

				// logged in so return component
				return <Component {...props} />
			}}
		/>
	)
}

export { PublicRoute }
