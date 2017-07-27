import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import {
  Button,
  FormGroup,
  InputGroup,
  ControlLabel,
  FormControl,
  Glyphicon,
  Row,
  Col,
  Form, Checkbox } from 'react-bootstrap';

import data from '../../data/data';
import './Itinerary.css';

class Itinerary extends Component {
    constructor(props){
      super(props);

      this.state ={
        name:'',
        price:'',
        user: {
          name: "not found",
          email: "not found",
          trips: [{
            itineraries: [{
              places: [{
                price_pax: "not found"
              }]
            }]
            ,pax: -1
          }]

        }
      }
    }

    componentWillMount(){
      console.clear();
      console.log('prior axios call');
      let self = this;
      axios.get('/trips').then(res => {
        console.log(res);
        // self.setState({
        //   user: res.data
        // });
      }).catch(function(err){
        console.log('Error in server call: ',err);
        if (err.response) {
          console.log('server responded with err: ', err.response);
        }
      })
    }

    render() {
      const row = (name, price, pax) => (
        <Row className="show-grid">
        <Col md={3}>
          {name}
        </Col>
        <Col md={3}>
          ${price}
        </Col>
        <Col md={3}>
          {pax}
        </Col>
        <Col md={3}>
          ${price*pax}
        </Col>
      </Row>);


      return (
        <div>
          <Row className="show-grid">
            <Col md={3}>
              <h3>Name</h3>
            </Col>
            <Col md={3}>
              <h3>Price</h3>
            </Col>
            <Col md={3}>
              <h3>Pax</h3>
            </Col>
            <Col md={3}>
              <h3>Total</h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col md={3}>
              <h3>{this.state.user.name}</h3>
            </Col>
            <Col md={3}>
              <h3>{this.state.user.trips[0].itineraries[0].places[0].price_pax}</h3>
            </Col>
            <Col md={3}>
              <h3>{this.state.user.trips[0].pax}</h3>
            </Col>
            <Col md={3}>
              <h3>{this.state.user.trips[0].pax * this.state.user.trips[0].itineraries[0].places[0].price_pax}</h3>
            </Col>
          </Row>


          {/*{data.map(loc => {
              return row(loc.name, loc.price, loc.pax)
          })}*/}

                  <div>
                  <a href="/">
                  <Button bsStyle="primary">Confirm</Button>
                  </a>
                  </div>
        </div>

      );
    }
}

Itinerary.propTypes = {
    // id: PropTypes.number.isRequired,
    // name: PropTypes.string.isRequired,
    // price: PropTypes.number,
    // currency: PropTypes.string,
    // image: PropTypes.string,
    // url: PropTypes.string,

}

// const mapStateToProps = (state, props) => {
//     return {
//         quantityInCart: getItemQtyInCart(state, props)
//     }
// }
//
// const mapDispatchToProps = (dispatch) => ({
//     addToCart: (id) => dispatch(addToCart(id)),
//     removeFromCart: (id) => dispatch(removeFromCart(id)),
//     removeAllFromCart: (id) => dispatch(removeAllFromCart(id))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Product);

export default Itinerary;
