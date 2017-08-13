import React, {PropTypes} from 'react';
import Location from '../Location/Location'
import data from '../../data/data';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import './Cart.css'

import {connect} from 'react-redux';

import {addPlaces} from '../../actions/placesAction'

class Cart extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if (this.props.places.length === 0) {
        const svrCall = 'places';
        console.log(`I'm making a server call to ${svrCall}`);
        axios.get(svrCall).then(res=>{
          console.log(`server-call ${svrCall} responded: `, res);
          this.props.addPlaces(res.data)
        }).catch(err=>{
          if (err.response) {
            console.error(`server-call ${svrCall} responded with error. `, err.response);
          }else {
            console.error(`request ${svrCall} to server error. `, err);
          }
        });
    }
  }

  render(){
    return (
        <div className="cartDiv">
          {
            // this.state.locations?
            this.props.places?
            this.props.places.map(x => <Location key={x.id} dontShowCheckbox={true} location={x}/>):""
          }
          <a href="/trip_selection">
            <Button>Trip selection</Button>
          </a>
        </div>
      );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPlaces: (places) => dispatch(addPlaces(places))
  }
}

const mapStateToProps = (state) => {
  return {
    places: state.places
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
