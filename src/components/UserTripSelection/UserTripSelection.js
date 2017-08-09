import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import axios from 'axios';

// import {BUDGET, CATEGORY} from './categoryAndBudget';
// import { Link } from 'react-router-dom';
// import data from '../../data/data';

import Location from '../Location/Location';
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
    // check if categories available. if yes, do nothing.
    // if no, get from server.
    //
    // map categories to options, used by select.
    console.log(`i was mounted`);
    const {categories} = this.props;
    if (categories.length == 0) {
      const path = 'categories';
      axios.get(path).then(res=>{
        if (res.data) {
          // console.log(`server responded with data(${path}). ${res.data}`);
          // this.props.addCategories(res.data);
          this.setState({
            options:res.data.map(cat=>{
              return {
                value:cat.id.toString(),
                label:cat.name
              }
            })
          });
        }else {
          console.warn(`server responded without data(${path}). ${res}`);
        }
      }).catch(err=>{
        if (err.response) {
          console.error(`server responded with error(${path}). ${err.response}`);
        }else {
          console.error(`server call(${path}), error. ${err}`);
        }
      });
    }
  }

  componentDidUpdate(){
    return;

    const {options} = this.state;
    if (options && options.length > 0) {
    }else {
      const {categories} = this.props;
      if (categories.length > 0) {
        this.setState({
          options:categories.map(cat=>{
            return {
              value:cat.id.toString(),
              label:cat.name
            }
          })
        });
      }
    }
  }

  //  get place reccomendations from server
  serverGetLocationsRequest = (random = false)=>{
    let paramObj = random? {random}: {category_ids: this.state.value};

    axios.get('places',{params:paramObj})
    .then(res=>{
      if (res.data) {
          this.setState({
            serverRecommendedPlaces: res.data
          })
      }else {
        console.warn("server responded without data. ", res);
      }
    }).catch(err=>{
      if (err.response) {
        console.error("Server responded with error. ", err.response);
      }else {
        console.error("Server request error. ", err);
      }
    });
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
      this.props.removeTrips();
    }
	}

  userSelectedPlaceUpdated = (location, pax)=>{
    let userSelectedPlaces = this.state.userSelectedPlaces;
    let foundIndex = userSelectedPlaces.findIndex(usp=>usp.id===location.id);

    // new location
    if (foundIndex < 0 && pax > 0) {
      location.pax = pax;
      userSelectedPlaces.push(location);

    // remove location
    }else if (foundIndex >= 0 && pax <= 0) {
      userSelectedPlaces.splice(foundIndex,1);

    // update pax
    }else if (foundIndex >= 0 && pax > 0) {
      userSelectedPlaces.forEach((elem,ind)=> {
        if (ind == foundIndex) {
          elem.pax = pax;
        }
      });
    }else {
      return;
    }
    this.setState({
      userSelectedPlaces
    });
    // <editor-fold delete me
    // can delete if no bugs found. refactored below code to above.
    // August-09-2017
    // if (foundIndex < 0) {
    //   if (pax > 0) {
    //     userSelectedPlaces.push(location);
    //   }else {
    //     return;
    //   }
    // }else {
    //   if (pax > 0) {
    //     //update
    //     userSelectedPlaces.forEach((elem, index)=>{
    //       if (index === foundIndex) {
    //         elem.pax = pax;
    //       }
    //     });
    //   }else {
    //     userSelectedPlaces.splice(foundIndex,1);
    //   }
    // }
    // </editor-fold>
  }

  confirmTripsButtonClick = () => {
    console.clear();
    try {
      const {userSelectedPlaces} = this.state

      if (userSelectedPlaces.length > 0) {
        this.props.addTrips(userSelectedPlaces);
        this.setState({userSelectedPlaces:[]});
        window.location.replace(`itinerary`);
      }

    } catch (e) {
      // console.error(`store fail: ${e}`);
    }
  }

	render () {
    // display server places to visit reccomendations
    let dispVacations = (this.state.serverRecommendedPlaces.length > 0)?
    (<div className="randomCategory">
      {this.state.serverRecommendedPlaces.map(loc=>{
          return <Location key={loc.id}
                           location={loc}
                           updated={this.userSelectedPlaceUpdated}/>})}
     </div>
    ):"";

    // display button to confirm user selections and go to next page
    // let userSelectedPlaces = this.props.user_selected_trips;
    const {userSelectedPlaces} = this.state;
    let confirmButtonClasses = 'btn btn-lg btn-warning ';
    if (userSelectedPlaces.length === 0) {
      confirmButtonClasses += 'invisible';
    }

    // position selector mid screen when no recommended places
    // and towards the top when there are
    let divPosOnScreenClasses = 'section';
    divPosOnScreenClasses += dispVacations != ''? '':'-to-mid-screen';

		return (
			<div className={divPosOnScreenClasses}>
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
 								 className={confirmButtonClasses}
 								 value="Confirm trips"
 								 onClick={this.confirmTripsButtonClick}/>
         </Col>
        </Row>
				{dispVacations}
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
