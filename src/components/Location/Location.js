import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Checkbox, Button,Row, Col } from 'react-bootstrap';

import './Location.css';

class Location extends Component {
    constructor(props){
      super(props);

      this.state = {
        view: "locations",
        going: false,
        name:"Some place",
        price: 200,
        description:"This is some place",
        pax:3,
        image_url:"images/3.png",
      }
    }

    checkBoxChange = (e) => {
      // console.log("in checkbox change");
      // e.preventDefault(); causes issue with response
      this.setState({
        going: !this.state.going
      });
    }

    render() {
      const {
        name, price_pax, image, description, pax, image_url, address
      } = this.props.location;

      // console.log(this.props.location);
      return (
          <div className="place thumbnail" >
            <Row className="show-grid">
              <Col xs={12} md={8}>


              <img src={"images/"+image_url}alt="product" onClick={this.pictureClicked}/>
              </Col>
              <div className="caption">
              <Col xs={6} md={4}>
                  <h3>
                    <a href={"images/"+image_url}>{name}</a>
                    <div className="checkbox-section">
                      <span>
                        {this.state.going? "I'm going!":"Take me there!"}
                      </span>
                      <input type="checkBox" onChange={this.checkBoxChange}/>
                    </div>
                  </h3>
                  <div className="pricesDiv">
                    <span>$$ <b>Price</b>/<em>pax</em>: <strong>$ {price_pax}</strong></span>
                  </div>
                  <p>
                    {address}
                  </p>
                  </Col>
              </div>
              </Row>
          </div>
      );
    }
}

Location.propTypes = {
    // id: PropTypes.number.isRequired,
    // name: PropTypes.string.isRequired,
    // price: PropTypes.number,
    // currency: PropTypes.string,
    // image: PropTypes.string,
    // image_url: PropTypes.string,
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

// export default connect(mapStateToProps, mapDispatchToProps)(Location);

export default Location;
