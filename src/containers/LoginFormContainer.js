import React, { Component } from 'react';
import swal from "sweetalert";
import { FormGroup, Col, Row, Input, Label,  Button } from "reactstrap";

export default class LoginFormContainer extends Component {
    userData;

    constructor(props) {
        super();

        this.onChangeUser = this.onChangeUser.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user: '',
            userError: '',
        }
    }

    onChangeUser(e) {
        this.setState({ user: e.target.value })
    }

    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (!localStorage.getItem('user')) {
            this.setState({
                user: '',
            })
        } 
    }

    validate() {
          let isValid = true;
          if (!this.state.user || this.state.user === "") {
            this.setState({ userError: "Username is required" })
            isValid = false;
          }
          else if(this.state.user[0] !== this.state.user[0].toUpperCase()) {
            this.setState({ userError: "First letter should be uppercase" })
            isValid = false;
          }
          else if(this.state.user.length<3) {
            this.setState({ userError: "Minimum 3 characters required" })
            isValid = false;
          }
          else {
            this.setState({ userError: "" })
          }
        
         
          return isValid;
    }

    onSubmit(e) {
        e.preventDefault()
        if(this.validate()) {
        localStorage.setItem('user', JSON.stringify(this.state));
            swal(
                "User confirmed!",
                "",
                "success"
              ).then(function() {
                  window.location.href='/'
              });
            }
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                <FormGroup row>
                <Row>
                    <Col md="12">
                    <Label htmlFor="{input}">
                        Username: 
                    </Label>
                    </Col>
                    <Col md="12">
                    <Input
                        type="text"
                        onChange={this.onChangeUser}
                    ></Input>
                    </Col>
                    
                </Row>
                </FormGroup>
                <Label style={{color:'red'}} className="col-form-label">
                    {this.state.userError}
                </Label>
                <FormGroup row>
                <Row>
                <Col md="12">
                    <FormGroup>
                    <Button
                        color="dark"
                        type="submit"
                        md="12"
                    >
                        Submit
                    </Button>
                    </FormGroup>
                </Col>
                </Row>
                </FormGroup>
                </form>
                
            </div>
        )
    }
}