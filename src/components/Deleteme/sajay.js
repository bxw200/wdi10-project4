import React, {PropTypes} from 'react';

import data from '../../data/data';
import Product from '../Location/Location';

export default class Deleteme extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (<div>{
      data.map(x => {
        <Product key={x.id} location={x}/>
      })
    }</div>);

  }
}


Deleteme.propTypes = {
};
