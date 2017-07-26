import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import Cart from '../../Cart/Cart';
import data from '../../data/data';
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
import './Itinerary.css';

class Itinerary extends Component {
    constructor(props){
      super(props);

      this.state ={
        name:'',
        price:'',
      }
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

          {data.map(loc => {
              return row(loc.name, loc.price, loc.pax)
          })}

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
    // addToCart: PropTypes.func.isRequired,
    // removeFromCart: PropTypes.func.isRequired,
    // removeAllFromCart: PropTypes.func.isRequired,
    // quantityInCart: PropTypes.number
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
