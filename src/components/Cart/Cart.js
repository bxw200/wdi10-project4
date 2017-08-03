import React, {PropTypes} from 'react';
import Location from '../Location/Location'
import data from '../../data/data';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import './Cart.css'

class Cart extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      locations: []
    }

    axios.get('/places').then(res=>{
      console.log("server responded: ", res);

      this.setState({
        locations: res.data
      });

    }).catch(err=>{
      if (err.response) {
        console.log("server responded with error. ", err.response);
      }else {
        console.log("request to server error. ", err);
      }
    });

  }
  render(){
    return (
        <div className="cartDiv">
          {
            this.state.locations?
            this.state.locations.map(x => <Location key={x.id} dontShowCheckbox={true} location={x}/>):""
          }
          <a href="/itinerary">
            <Button>Itinerary</Button>
          </a>
        </div>
      );
    }
}

Cart.propTypes = {
};


export default Cart;
