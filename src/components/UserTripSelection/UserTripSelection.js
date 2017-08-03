import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import createClass from 'create-react-class';
import Select from 'react-select';
import axios from 'axios';

import {BUDGET, CATEGORY} from './categoryAndBudget';
import { Link } from 'react-router-dom';

import Location from '../Location/Location';
import data from '../../data/data';
import {addCategory} from '../../actions/categoriesAction';
import {addPlace} from '../../actions/placesAction';


import {
  Row, Col
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
			sentToServer: false,
      serverRespondedWithData: false,
      serverRecommendedPlaces: []
		};

    // <editor-fold populate categories from server to redux store
		axios.get('categories').then(res=>{
      this.setState({
        options:res.data.map(cat=>{
          return {
            value:cat.id.toString(),
            label:cat.name
          }
        })
      });
		}).catch(err=>{
			if (err.response) {
				console.log("Server responded with error. ", err.response);
			}else {
				console.log("Server request error. ", err);
			}
		});
    // </editor-fold>
	}

  serverGetLocationsRequest = (random = false)=>{

    // return;
    // <editor-fold get place reccomendations from server

    let paramObj = {}

    if (random) {
      paramObj = { random: true }
    }else {
      paramObj = { category_ids: this.state.value }
    }

    axios.get('places',{
        params:paramObj

        // {
        //   category_ids: this.state.value
        // }
      })
    .then(res=>{
      if (res.data) {
          console.log("server responded with data. ", res.data);
          this.setState({
            serverRecommendedPlaces: res.data,
            serverRespondedWithData: true
          })
      }else {
        console.log("server responded. ", res);
      }
    }).catch(err=>{
      if (err.response) {
        console.log("Server responded with error. ", err.response);
      }else {
        console.log("Server request error. ", err);
      }
      this.setState({
        serverRespondedWithData: false
      });
    });
    //</editor-fold>
  }

	handleGetLocationsClicked = (e) => {
    if (this.state.value.length > 0) {
      this.serverGetLocationsRequest();
    }else {
      const aMsg = "Category selection empty. Cannot pass nothing to server."
      console.warn(aMsg);
      alert(aMsg);
    }
	}

	handleSelectChange = (value) => {
		console.log('You\'ve selected:', value);
		this.setState({ value });
    if (value.length === 0) {
      this.setState({
        serverRespondedWithData: false
      })
    }
	}

	toggleDisabled =(e) =>{

		this.setState({ disabled: e.target.checked });

	}

	render () {
    // <editor-fold static, just in case
		// let dispVacations = this.state.sentToServer?
    // (<div className="randomCategory">
		// 	<Location location={data[Math.floor(Math.random()*3)+1]}/>
		// 	<Location location={data[Math.floor(Math.random()*3)+1]}/>
		// 	<Location location={data[Math.floor(Math.random()*3)+1]}/>
		// </div>):"";
		// </editor-fold>

    let dispVacations = (this.state.serverRespondedWithData && this.state.value > 0)?
    (<div className="randomCategory">
      {
        this.state.serverRecommendedPlaces.map(loc=>{
          console.log(loc);
          return <Location key={loc.id} location={loc}/>
        })

      }
     </div>
    ):"";

		return (
			<div className="section" id="selection">
      <Row className="show-grid">
        <Col xs={12} md={8}>
				<h3 className="section-heading">{this.props.label}</h3>
				<Select className="select"
                multi
                simpleValue
                disabled={this.state.disabled}
                value={this.state.value}
                placeholder="Select by categories"
                options={this.state.options}
                onChange={this.handleSelectChange} />

				<div className="checkbox-list">
					<label className="checkbox">
						<input type="checkbox"
									 className="checkbox-control"
									 checked={this.state.disabled}
									 onChange={this.toggleDisabled} />
						<span className="checkbox-label"> </span>
					</label>
            </div>
          </Col>
          <Col xs={6} md={4} id="getBtn">
					<input type="button"
								 className="btn btn-success"
								 value="Get Locations"
								 onClick={this.handleGetLocationsClicked}/>
                 </Col>
                  </Row>


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
            <div className="btn btn-info"
                   >Surprise me!</div>
            {/*<Link
                  className="btn btn-info"
                  role="button"
                  to="/surpriseme">Surprise me!
            </Link>*/}
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
		// categoriesRcvdFromSvr: (categories) => {
		// 	dispatch(updateCategories(categories));
		// },
		addCategory: (category) => {
			dispatch(addCategory(category));
		}
	}
}

const mapStateToProps = (state) => {
	return {
		categories: state.categories
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTripSelections);
