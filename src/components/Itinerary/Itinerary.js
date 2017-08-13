import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {Button, Row, Col} from 'react-bootstrap';

import firstDummyData from '../../data/data';
import {dummyData} from './dummyData';
import './Itinerary.css';

import {removeTrips, updateTrip} from '../../actions/userSelectedTripsAction'
import {mjo} from './massiveJSONobj';

class Itinerary extends Component {
    constructor(props){
      super(props);
      let data = localStorage.getItem('user-trip-selection')
      // console.log(JSON.parse(data));
      data = JSON.parse(data);
      this.state = {
          data
      };
    }

    componentWillUnmount(){
      // debugger;
    }

    cancel = () => {
      // cancel store data
      this.props.cancelTrips();
      this.props.history.goBack();
    }

    confirmTripsClick = () => {
      const svrPath = 'users/1';
      axios.post(svrPath,mjo).
      then(res=>{
        if (res.data) {
          console.log(`server post to ${svrPath} responded with data: `, res.data);
        }else {
          console.log(`server post to ${svrPath} responded: `, res);
        }
      }).
      catch(err=>{
        if (err.response) {
          console.error(`server post to ${svrPath} error. responded with: `, err.response);
        }else {
          console.error(`server post to ${svrPath} error: `, err.response);
        }
      });
    }

    paxChanged = (e,locid) => {
      this.props.updateTrip({id:locid, pax:parseInt(e.target.value)});
    }

    dataRow = (loc) => (
      <tr key={loc.id}>
        <td>
          <text>{loc.name.trim()}</text>
          <img src={`images/${loc.image_url}`}/>
        </td>
        <td>$ {loc.price_pax}</td>
        <td>
          <input type="number"
                 value={loc.pax}
                 max="100"
                 min="0"
                 onChange={(e)=>this.paxChanged(e, loc.id)}/>
         </td>
        <td>$ {loc.price_pax * loc.pax}</td>
      </tr>
      );

    render() {
      const {user_trips} = this.props;
      return(
        <div className="itinerary">
          <table className="table table-hover table-bordered table-responsive">
            <thead>
              <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Pax</td>
                <td>Total</td>
              </tr>
            </thead>
            <tbody>
              {
                user_trips?
                user_trips.map(loc =>
                   this.dataRow(loc)):""
              }
            </tbody>
          </table>
          <span>
            <Button bsStyle="default"
                    bsSize="large"
                    autofocus
                    onClick={this.cancel}>Cancel</Button>
            <Button bsStyle="success"
                    bsSize="large"
                    onClick={this.confirmTripsClick}>Confirm</Button>
          </span>
      </div>)
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cancelTrips: () => {
      dispatch(removeTrips())
    },
    updateTrip: (trip) => {
      dispatch(updateTrip(trip))
    }
  }
}

const mapStateToProps = (state)=>{
  return {
    user_trips: state.user_trips
  }
}

Itinerary = connect(mapStateToProps, mapDispatchToProps)(Itinerary);
export default withRouter(Itinerary);
