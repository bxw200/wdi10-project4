import React, {PropTypes} from 'react';
import { Button } from 'react-bootstrap';
import './Failure.css';

export default class Failure extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Failure
        <div>
          <a href="/Locations">
            <Button bsStyle="primary">Confirm</Button>
          </a>
        </div>
      </div>
    );
  }
}

Failure.propTypes = {
};
