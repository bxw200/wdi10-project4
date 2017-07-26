import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Checkbox, Button } from 'react-bootstrap';

import './Location.css';

class Product extends Component {
    constructor(props){
      super(props);
    }

    checkBoxChange = (e) => {
      e.preventDefault();

      console.log(e.target.checked);
      return;
    }

    render() {
      const {
        name, price, currency, image, description, pax, url, qty, quantityInCart
      } = this.props.location;
      console.log(this.props.location);
      return (
          <div className="product thumbnail" >
              <img src={image}alt="product" onClick={this.pictureClicked}/>
              <div className="caption">
                  <h3>
                    <a href={url}>{name}</a>
                    <input type="checkBox" onChecked={this.checkBoxChange}>
                      I want to go!
                    </input>
                  </h3>
                  <div className="product__price row">
                    <div className="col-md-3">
                      <strong className="dPrice">${price}</strong>
                    </div>
                    <div className="col-md-4">
                      <strong className="Pax">Pax: {pax}</strong>
                    </div>
                    <div className="col-md-5">
                      <strong className="totalPrice">to: ${price*pax}</strong>
                    </div>
                  </div>
                  <p>
                  {description}
                  </p>
              </div>
          </div>
      );
    }
}

Product.propTypes = {
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

export default Product;
