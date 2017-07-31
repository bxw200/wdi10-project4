import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import createClass from 'create-react-class';
import Select from 'react-select';

import {BUDGET, CATEGORY} from './categoryAndBudget';

import Location from '../Location/Location';
import data from '../../data/data';

import './UserTripSelection.css';

const UserTripSelections = createClass({

	displayName: 'UserTripSelections',
	propTypes: {
		label: PropTypes.string,
	},

	getInitialState () {

		return {
			disabled: false,
			crazy: false,
			options: CATEGORY,
			value: [],
		};
	},

	handleSelectChange (value) {

		console.log('You\'ve selected:', value);
		this.setState({ value });
	},

	toggleDisabled (e) {

		this.setState({ disabled: e.target.checked });

	},



	render () {

		return (

			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select className="select"
                multi
                simpleValue
                disabled={this.state.disabled}
                value={this.state.value}
                placeholder="Select your favourite(s)"
                options={this.state.options}
                onChange={this.handleSelectChange} />

				<div className="checkbox-list">
					<label className="checkbox">
						<input type="checkbox"
									 className="checkbox-control"
									 checked={this.state.disabled}
									 onChange={this.toggleDisabled} />
						<span className="checkbox-label">Disable the control</span>
					</label>
				</div>

				<div className="randomCategory">
					<Location location={data[Math.floor(Math.random()*6)+1]}/>
					<Location location={data[Math.floor(Math.random()*6)+1]}/>
					<Location location={data[Math.floor(Math.random()*6)+1]}/>
				</div>

			</div>
		);
	}
});

export default UserTripSelections;
