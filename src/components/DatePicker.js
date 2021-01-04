import React, { PureComponent } from 'react'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { SingleDatePicker } from 'react-dates'
import esLocale from 'moment/locale/es'
import moment from 'moment'
import { Field } from 'redux-form'
import ErrorRender from './ErrorRender.js'

class DatePicker extends PureComponent {
	constructor(props) {
		super(props)
		moment.locale('en', esLocale)
	}

	state = {
		focused: false,
	}

	onFocusChange = (value) => {
		this.setState({ focused: !this.state.focused })
		const { input } = this.props
		input.onFocus(value)
	}

	render() {
		const { input, placeholder, disabled } = this.props
		const { focused } = this.state

		return (
			<React.Fragment>
				<SingleDatePicker
					showClearDate={true}
					displayFormat='YYYY-MM-DD'
					numberOfMonths={1}
					disabled={disabled}
					date={input.value}
					onDateChange={input.onChange}
					focused={focused}
					onFocusChange={this.onFocusChange}
					id={input.name}
					block={true}
					isOutsideRange={() => false}
				/>
				<ErrorRender {...this.props} />
			</React.Fragment>
		)
	}
}

export const formatDates = (value) => (value ? moment(value) : null)

export const normalizeDates = (value) =>
	value ? value.format('YYYY-MM-DD') : null

export const FieldDatePicker = (props) => {
	return (
		<Field
			normalize={normalizeDates}
			format={formatDates}
			name={props.name}
			component={DatePicker}
			props={props}
		/>
	)
}

export default DatePicker
