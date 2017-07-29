import React, {PropTypes} from 'react';
import Location from '../Location/Location'
import data from '../../data/data';
import { Button } from 'react-bootstrap';

import './Cart.css'

const Cart = () => {
    return (
        <div className="cartDiv">
          {data.map(x => <Location key={x.id} location={x}/>)}
          <a href="/itinerary">
            <Button bsStyle="primary">Itinerary</Button>
          </a>
        </div>
      );
}

Cart.propTypes = {
};


export default Cart;
