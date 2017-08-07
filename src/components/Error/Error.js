import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, InputGroup, ControlLabel, FormControl, Glyphicon, Row, Col, Form, Checkbox } from 'react-bootstrap';

import './Error.css'

const Error = React.createClass({
  render: function() {
    return (

      <div className="container error">
        <div className="row">
          <div className="span12">
            <div className="hero-unit center">
              <h1>Page Not Found <small><font face="Tahoma" color="red">Error 404</font></small></h1>
              <br />
              <p>The page you requested could not be found, either contact your webmaster or try again.<br/>
              Use your browsers <b>Back</b> button to navigate to the page you have prevously come from</p>
              <p><b>Or you could just press this neat little button:</b></p>
              <a href="/" className="btn btn-large btn-info">
                <i className="icon-home icon-white" /> Take Me Home</a>
            </div>
            <br />

            {/* By ConnerT HTML & CSS Enthusiast */}
          </div>
        </div>
      </div>
    );
  }
});

export default Error;
