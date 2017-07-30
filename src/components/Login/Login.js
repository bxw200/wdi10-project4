import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, InputGroup, ControlLabel, FormControl, Glyphicon, Row, Col, Form, Checkbox } from 'react-bootstrap';
import { login } from '../../actions/loginAction';

import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password:''
    }
  }


  onChange = (e) => {
    let state = this.state;
    let field = e.target.name;
    let value = e.target.value;
    // setState takes an object. the {} creates a new object.
    // Field is the property that you are changing.
    // if you put "field : value", js will think that are are assigning a key property of field.
    //[field] will give you the value of field which is what you would want.
    this.setState({...state, [field]: value})
  }

  onClick = (e) => {

   this.props.events(this.state, this.props.history);
  }

  onSignup = (e) => {
    //redirect to signup page
    this.props.signup(this.props.history);
  }



  render() {
    return (
    <div>
      <Row className="show-grid">
      {/* Title header */}
      <Col md={8} mdOffset={2} className="loginField">
        <h1 id="login">Login</h1>


        {/* Email Input */}
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail" className="email">
            <Col componentClass={ControlLabel}
                 md={1}
                 className="emailLabel">
              Email
            </Col>

            <Col md={8} mdOffset={1}>
              <FormControl name="email"
                           type="email"
                           placeholder="Email"
                           autoFocus
                           onChange={this.onChange}/>
            </Col>
          </FormGroup>

          {/* Password Input */}
          <FormGroup controlId="formHorizontalPassword" className="password">
              <Col componentClass={ControlLabel}
                   md={1}
                   className="passwordLabel">
                Password
              </Col>
              <Col md={8} mdOffset={1}>
                <FormControl name="password"
                             type="password"
                             placeholder="Password"
                             onChange={this.onChange}/>
              </Col>
          </FormGroup>



        </Form>

        <Row className="show-grid">

        {/* Sign UP button */}
          <Col md={6} mdPush={6}>
                  <FormGroup>
                        <Button bsStyle="info"
                                type="submit"
                                className="signupButton"
                                onClick={this.onSignup}>
                           Sign up
                        </Button>
                    </FormGroup>
          </Col>

          {/* Login button */}
          <Col md={6} mdPull={6}>
                    <FormGroup>
                        <Button bsStyle="success"
                                type="submit"
                                className="loginButton"
                                onClick={this.onClick}>
                           Login
                        </Button>
                    </FormGroup>
          </Col>
        </Row>

      </Col>

    </Row>
  </div>

    );
  }
}

// A higher order component is when you do a {connect}: a higher-order component is a function that takes a
// component and returns a new component.
const mapStateToProps = (state) => {
    return{
      email:state.auth.email,
      password:state.auth.password,
      name:state.auth.name,
      isAuthenticated:state.auth.isAuthenticated

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      events(state, history){
        dispatch(login(state, history))
      },
      signup(history){
        history.push("/signUp/");
      }
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Login);

// {/* Remember-Me Checkbox */}
//   <FormGroup className="checkbox">
//     <Col md={6}>
//       <Checkbox id="rememberMe">Remember me</Checkbox>
//     </Col>
//   </FormGroup>
