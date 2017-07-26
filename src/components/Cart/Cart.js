import React, {PropTypes} from 'react';
import Location from '../Location/Location'
import data from '../../data/data';
import { Button } from 'react-bootstrap';

import './Cart.css'

const Cart = () => {
  const pt = (<p>
  vdfhbv dbvukhbvfdfvbv vdhfvbudbvuidbv vdufhybvudbv vbdusfb
  vdfhbv dbvukhbvfdfvbv vdhfvbudbvuidbv vdufhybvudbv vbdusfb
  vdfhbv dbvukhbvfdfvbv vdhfvbudbvuidbv vdufhybvudbv vbdusfb
  vdfhbv dbvukhbvfdfvbv vdhfvbudbvuidbv vdufhybvudbv vbdusfb
  </p>);

  const ray = [1,1,1,1,1,1,1,1];

    return (
        <div>
      {ray.map(x => pt)}
          <a href="/itinerary">
            <Button bsStyle="primary">Itinerary</Button>
          </a>
        </div>
      );
}

Cart.propTypes = {
};


export default Cart;
