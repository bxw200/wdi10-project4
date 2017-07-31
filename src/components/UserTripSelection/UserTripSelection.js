import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import createClass from 'create-react-class';
import Select from 'react-select';
import axios from 'axios';

import {BUDGET, CATEGORY} from './categoryAndBudget';

import Location from '../Location/Location';
import data from '../../data/data';
import {updateCategories,updateCategory} from '../../actions/categoriesAction';

import './UserTripSelection.css';

class UserTripSelections extends React.Component {

	// displayName: 'UserTripSelections',
	// propTypes: {
	// 	label: PropTypes.string,
	// },
	//
	constructor(props){
		super(props);
		this.state = {
			disabled: false,
			crazy: false,
			options: CATEGORY,
			value: [],
		};

		axios.get('categories').then(res=>{
			console.log("Server response: ",res.data);

			res.data.forEach(cat => {
				this.props.addCategory({value:cat.id.toString(), label:cat.name});
			});

			// causes an additional 0
			// this.props.categoriesRcvdFromSvr(res.data.map(cat => {
			// 	return {id:cat.id, name:cat.name}
			// }));

		}).catch(err=>{
			console.log("Server error. ", err);
			if (err.response) {
				console.log("Server responded with error. ", err.response);
			}
		});
	}


	// getInitialState () {
	//
	// 	return {
	// 		disabled: false,
	// 		crazy: false,
	// 		options: CATEGORY,
	// 		value: [],
	// 	};
	// },

	handleSelectChange = (value) => {
		console.log('You\'ve selected:', value);
		this.setState({ value });
	}

	toggleDisabled =(e) =>{

		this.setState({ disabled: e.target.checked });

	}

// options={this.state.options}

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
                options={this.props.categories}
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
					<Location location={data[Math.floor(Math.random()*3)+1]}/>
					<Location location={data[Math.floor(Math.random()*3)+1]}/>
					<Location location={data[Math.floor(Math.random()*3)+1]}/>
				</div>

			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		categoriesRcvdFromSvr: (categories) => {
			dispatch(updateCategories(categories));
		},
		addCategory: (category) => {
			dispatch(updateCategory(category));
		}
	}
}

const mapStateToProps = (state) => {
	return {
		categories: state.place_categories.categories
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTripSelections);
