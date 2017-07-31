<<<<<<< HEAD
import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
=======
import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
// import TodoListView from '../TodoListView/TodoListView';

import createClass from 'create-react-class';
>>>>>>> d5ca35b4ea5a331fac5b7dd0476e3aa239b65e1e
import Select from 'react-select';

import {connect} from 'react-redux';

import {BUDGET, CATEGORY} from './categoryAndBudget';

import './UserTripSelection.css';

<<<<<<< HEAD
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
						<input type="checkbox" className="checkbox-control" checked={this.state.disabled} onChange={this.toggleDisabled} />
						<span className="checkbox-label">Disable the control</span>
					</label>

				</div>
			</div>
		);
	}
});
export default UserTripSelections;
=======

  const CATEGORY = [
     {label: "Nightlife", value: "nightlife"},
     {label: "Tourism", value: "tourism"},
     {label: "Gaming", value: "gaming"},
     {label: "Outdoors", value: "outdoors"},
     {label: "Sightseeing", value: "sightseeing"},
     {label: "Arts/Entertainment", value: "arts_entertainment"},
     {label: "Sports", value: "sports"},
     {label: "Shopping", value: "shopping"},
     {label: "Animals", value: "animals"},
     {label: "Tech/Science", value: "tech_science"},
     {label: "Exploration", value: "exploration"},
     {label: "Religious Places", value: "religious_places"},
     {label: "Historical", value: "historical"},
     {label: "Museum", value: "museum"},
     {label: "Culture", value: "culture"},
     {label: "Romantic", value: "romantic"},
     {label: "Group Activities", value: "group_activities"},
     {label: "Family-Friendly", value: "family_friendly"},
     {label: "Water/Beach Activities", value: "water_beach_activities"}
    ];

  const BUDGET = [
  	{ label: 'Low ($0 - $30)', value: 'low' },
  	{ label: 'Medium ($30.01 - $100)', value: 'medium' },
  	{ label: 'High ($100.01 and above)', value: 'high' }
  ];


  render() {
    const { tripselection } = this.props;

    const renderTripSelection = () => {
      if(onClick(className="select-category")) {
        return (
          <div>What are you interested in doing?</div>
        )
      }
      elseif(onClick(className="select-budget")) {
        return (
          <div>How much is your budget per person?</div>
        )
      }
      else {


      }

//map takes the todos in the state (array) & maps it
      // return tripselection.map( (tripselection) => {
      //   console.log(tripselection)
      //   return (
      //     <TodoListView todo={todo} />
      //
      // });
    }

    return (
      <div>
        <div className="messageDiv">
          <img src="images/1.png" alt="Choose an option for where you want to go."/>
          <p>Hi! Choose an option for where you want to go.</p>
        </div>
        <div className="selectionDiv">
          <button className="btn btn-success select-category">By Category</button>
          <button className="btn btn-info select-budget">By Budget  </button>
        </div>
      </div>
    );
  }
}


// var UserTripSelection = createClass({
// 	displayName: 'What are you interested in doing?',
// 	propTypes: {
// 		label: PropTypes.string,
// 	},
// 	getInitialState () {
// 		return {
// 			disabled: false,
// 			options: CATEGORY,
// 			value: [],
// 		};
// 	},
// 	handleSelectChange (value) {
// 		console.log("You've selected:", value);
// 		this.setState({ value });
// 	},
// 	toggleDisabled (e) {
// 		this.setState({ disabled: e.target.checked });
// 	},
// 	render () {
// 		return (
// 			<div className="section">
// 				<h3 className="section-heading">{this.props.label}</h3>
// 				<Select multi simpleValue disabled={this.state.disabled} value={this.state.value} placeholder="Select your interests" options={this.state.options} onChange={this.handleSelectChange} />
//
// 				<div className="checkbox-list">
// 					<label className="checkbox">
// 						<input type="checkbox" className="checkbox-control" checked={this.state.disabled} onChange={this.toggleDisabled} />
// 						<span className="checkbox-label">Disable the control</span>
// 					</label>
// 				</div>
// 			</div>
// 		);
// 	}
// });
// module.exports = UserTripSelection;

export default connect(mapStateToProps, mapDispatchToProps) (UserTripSelection);

// export default connect(
//     (state) => {
//       return state;
//     }
// ) (UserTripSelection);
>>>>>>> d5ca35b4ea5a331fac5b7dd0476e3aa239b65e1e
