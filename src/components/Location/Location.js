import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Checkbox, Button } from 'react-bootstrap';

// import { getItemQtyInCart } from '../../apis/cartAPI';
// import {
//   addToCart,
//   removeFromCart,
//   removeAllFromCart} from  '../../actions/cartActions';

import './Location.css';

class Product extends Component {
    constructor(props){
      super(props);
    }

    checkBoxChange = (e) => {
      e.preventDefault();
      // debugger;
      console.log(e.target.checked);
      return;
      // // eslint-disable-next-line
      // const { id, removeFromCart, removeAllFromCart } = this.props;
      //
      // if (e.target.name === 'minusOne') {
      //   removeFromCart(id);
      // }else if (e.target.name === 'minusAll') {
      //   removeAllFromCart(id);
      // }
    }

    // add item to cart.
    pictureClicked = (e) => {
        e.preventDefault();
        return;
          // const {addToCart, id} = this.props;
          // addToCart(id);
    }

    render() {
      // eslint-disable-next-line
      const { name,
              price,
              currency,
              image,
              description,
              pax,
              url,
              qty,
              quantityInCart } = this.props.location;

      var cartQty, minusAllButton, minusOneButton;
      if (quantityInCart) {
        cartQty = (<span className="qtySpan">{quantityInCart}</span>);
        minusOneButton = (
          <button
            name="minusOne"
            className='btn btn-danger'
            onClick={this.removeItemClicked}>  - 1</button>);
        if (quantityInCart > 1) {
            minusAllButton =
            (<button name="minusAll"
                    className='btn btn-danger'
                    onClick={this.removeItemClicked}>- All</button>)
        }
      }

      // const { name, price, pax, image, description } = this.props;

      return (
          <div className="product thumbnail" >
              <img src={image}alt="product" onClick={this.pictureClicked}/>
              <div className="caption">
                  <h3>
                      <a href={url}>{name}</a>
                      <Checkbox> I want to go!</Checkbox>
                      {/*<input type="checkBox" onChecked={this.checkBoxChange}>

                      </input>*/}
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
