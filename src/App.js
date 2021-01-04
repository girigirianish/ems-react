import './App.css'
import React, { useEffect } from 'react'
import { Router, Switch, Redirect } from 'react-router-dom'

import { history } from './helpers'
import { LoginPage } from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'

import { PrivateRoute } from './components/PrivateRoute'
import { PublicRoute } from './components/PublicRoute'
import { HomePage } from './pages/HomePage'
import { EmployeeDetailPage } from './pages/EmployeeDetailPage'
import { useDispatch, useSelector } from 'react-redux'
import { alertActions } from './actions'

function App() {
	const alert = useSelector((state) => state.alert)
	const dispatch = useDispatch()

	useEffect(() => {
		history.listen((_, __) => {
			// clear alert on location change
			dispatch(alertActions.clear())
		})
	})

	return (
		<div className='jumbotron'>
			<div className='container'>
				<div className='col-md-8 offset-md-2'>
					{alert.message && (
						<div className={`text-center alert ${alert.type}`}>
							{alert.message}
						</div>
					)}
					<Router history={history}>
						<Switch>
							<PrivateRoute exact path='/' component={HomePage} />
							<PrivateRoute
								exact
								path='/employee-detail'
								component={EmployeeDetailPage}
							/>
							<PublicRoute path='/login' component={LoginPage} />
							<PublicRoute path='/register' component={RegisterPage} />
							<Redirect from='*' to='/' />
						</Switch>
					</Router>
				</div>
			</div>
		</div>
	)
}

export default App
