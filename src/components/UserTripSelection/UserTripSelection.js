import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import createClass from 'create-react-class';
import Select from 'react-select';
import axios from 'axios';

import {BUDGET, CATEGORY} from './categoryAndBudget';
import { Link } from 'react-router-dom';

import Location from '../Location/Location';
import data from '../../data/data';
import {updateCategories,updateCategory} from '../../actions/categoriesAction';

import {
  Button, Navbar, NavItem, Nav, Grid, Image, Row, Col
} from 'react-bootstrap';
import './UserTripSelection.css';

class UserTripSelections extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			disabled: false,
			crazy: false,
			options: CATEGORY,
			value: [],
			sentToServer: false
		};


	}

	handleGetLocationsClicked = (e) => {

    console.log(typeof this.state.value);

    if (this.state.value != []) {
      axios.get('places',{
        params:{
          category_ids: this.state.value
        }
      })
      .then(res=>{
        if (res.data) {
            console.log("server responded with data. ", res.data);
        }else {
          console.log("server responded. ", res);
        }
  		}).catch(err=>{
  			if (err.response) {
  				console.log("Server responded with error. ", err.response);
  			}else {
  				console.log("Server request error. ", err);
  			}
  		});
    }



// console.log("selectedPlaces:", this.state.value);

		this.setState({
			sentToServer: true
		});
	}

	handleSelectChange = (value) => {
		console.log('You\'ve selected:', value);
		this.setState({ value });
	}

	toggleDisabled =(e) =>{

		this.setState({ disabled: e.target.checked });

	}

	render () {

		const dispVacations = this.state.sentToServer? (<div className="randomCategory">
			<Location location={data[Math.floor(Math.random()*3)+1]}/>
			<Location location={data[Math.floor(Math.random()*3)+1]}/>
			<Location location={data[Math.floor(Math.random()*3)+1]}/>
		</div>):"";

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
						<span className="checkbox-label"> </span>
					</label>
					<input type="button"
								 className="btn btn-success"
								 value="Get Locations"
								 onClick={this.handleGetLocationsClicked}/>
				</div>


				{dispVacations}


        <Row className="resultchoices">
          <Col xs={2} md={2}>
            <Link
                  className="btn btn-info"
                  role="button"
                  to="/trip_selection">Select Again!
            </Link>
          </Col>
          <Col xs={2} md={2}>
            <Link
                  className="btn btn-info"
                  role="button"
                  to="/resultpreview">Surprise me!
            </Link>
          </Col>

          <Col xs={2} md={2}>
            <Link
                  className="btn btn-info"
                  role="button"
                  to="/itinerary">Confirm your trip!
            </Link>
          </Col>
        </Row>
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
