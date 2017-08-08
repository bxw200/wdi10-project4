import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import createClass from 'create-react-class';
import Select from 'react-select';
import axios from 'axios';

import {BUDGET, CATEGORY} from './categoryAndBudget';
import { Link } from 'react-router-dom';

import Location from '../Location/Location';
import data from '../../data/data';
import {addCategory, addCategories} from '../../actions/categoriesAction';
import {addPlace} from '../../actions/placesAction';

import {addTrip, addTrips, removeTrip, removeTrips} from '../../actions/userSelectedTripsAction';

import {
  Row, Col
} from 'react-bootstrap';
import './UserTripSelection.css';

class UserTripSelections extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			options: [],
			value: [],
      serverRecommendedPlaces: [],
      userSelectedPlaces: []
		};
	}

  componentDidMount(){
    const {options} = this.state;
    if (options && options.length > 0) {
    }else {
      const path = 'categories';
      axios.get(path).then(res=>{
        // console.log(`server responded with data(${path}): ${res.data}`);
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
          console.error(`server-call ${path} error. Responded with data. ${err.response}`);
        }else {
          console.error(`server-call ${path} error: ${err.response}`);
        }
      });
    }
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
          // console.log("server responded with data. ", res.data);
          this.setState({
            serverRecommendedPlaces: res.data
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

	handlePlacesSelectionsChanged = (value) => {
		this.setState({ value });
    if (value.length === 0) {
      this.setState({
        serverRecommendedPlaces: []
      })
    }
	}

  placeCheckChanged = (state, location, pax)=>{
    const going = state;
    if (going) {
      location.pax = pax;
      this.props.addTrip(location);
    }else {
      this.props.removeTrip(location);
    }

    return;



    let userSelectedPlaces = this.state.userSelectedPlaces;
    const index = userSelectedPlaces.findIndex(loc=>loc.id === location.id);

    if (going) {
      if (index < 0) {//not found, so add
        userSelectedPlaces.push(location)
      }
    }else {
      if (index >= 0) {// not going & found, hence remove
        userSelectedPlaces.splice(index,1);
      }
    }
    this.setState({userSelectedPlaces});
  }

  confirmTripsButtonClick = () => {
    // const {userSelectedPlaces} = this.state;
    // console.log(`is it? ${Array.isArray(userSelectedPlaces)}`);
    console.clear();
    try {
      // localStorage.setItem('user-trip-selection', JSON.stringify(userSelectedPlaces));
      window.location.replace(`itinerary`);
      // console.log('store success?');
    } catch (e) {
      console.error(`store fail: ${e}`);
    }

  }

	render () {
    let dispVacations = (this.state.serverRecommendedPlaces.length > 0)?
    (<div className="randomCategory">
      {
        this.state.serverRecommendedPlaces.map(loc=>{
          return <Location key={loc.id} location={loc} checkChanged={this.placeCheckChanged}/>
        })
      }
     </div>
    ):"";

    // let {userSelectedPlaces} = this.state;

    let userSelectedPlaces = this.props.user_selected_trips;

		return (
			<div className={this.state.serverRecommendedPlaces.length > 0 ? "section" : "section-to-mid-screen"} id="">
      <Row className="show-grid">
        <Col xs={12} md={8}>
  				<h3 className="section-heading">{this.props.label}</h3>
  				<Select className="select"
                  multi
                  simpleValue
                  autofocus
                  value={this.state.value}
                  placeholder="Select by categories"
                  options={this.state.options}
                  onChange={this.handlePlacesSelectionsChanged} />
        </Col>
        <Col xs={6} md={4} id="getBtn">
					<input type="button"
								 className="btn btn-success"
								 value="Get Locations"
								 onClick={this.handleGetLocationsClicked}/>
         </Col>
         <Col xs={6} md={4} id="getBtn">
 					<input type="button"
 								 className={userSelectedPlaces.length > 0? "btn btn-lg btn-warning":"hidden"}
 								 value="Confirm trips"
 								 onClick={this.confirmTripsButtonClick}/>
          </Col>
        </Row>

				{dispVacations}

        {/*<Row className="resultchoices">
          <Col xs={2} md={2}>
            <Link className="btn btn-info"
                  role="button"
                  to="/trip_selection">Select Again!
            </Link>
          </Col>
          <Col xs={2} md={2}>
            <div className="btn btn-info">Surprise me!</div>
          </Col>

          <Col xs={2} md={2}>
            <Link
                  className="btn btn-info"
                  role="button"
                  to="/itinerary">Confirm your trip!
            </Link>
          </Col>
        </Row>*/}
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addCategory: (category) => {
			dispatch(addCategory(category));
		},
    addCategories: (categories) => {
      dispatch(addCategories(categories))
    },
    addTrip: (trip) => {
      dispatch(addTrip(trip))
    },
    addTrips: (trips) => {
      dispatch(addTrips(trips))
    },
    removeTrip: (trip) => {
      dispatch(removeTrip(trip))
    },
    removeTrips: () => {
      dispatch(removeTrips())
    }
	}
}

const mapStateToProps = (state) => {
	return {
		categories: state.categories,
    user_selected_trips: state.user_trips
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTripSelections);
