import React, {PropTypes} from 'react';
import './Home.css';
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

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="box">

      <div className='homeDiv'>

      <Row className="show-grid">
     <Col xs={12} md={8}>

        <h1>Say Hello! to iTina</h1>
        </Col>
        <Col xs={6} md={4}>
        <span>
          <div className = "logo">
          <img src="images/logo.png" alt="Logo"></img>
          </div>
        </span>
        </Col>
      </Row>
        <div>
          <section>
            <span>
              <h2>When there's time on your hands but you don't know what you want to do.</h2>
              <h2>...and for doing things you never had time for.</h2>
            </span>

          </section>

          <section>
            <h2>Let iTina help! </h2>
          </section>
        </div>
        <a href='/login'>
          <button>Let's get started! </button>
        </a>
      </div>
      </div>
    );
  }
}

Home.propTypes = {
};
