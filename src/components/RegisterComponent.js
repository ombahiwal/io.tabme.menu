import React, {Component} from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import {Form, Button, Alert, InputGroup} from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import AuthService from '../services/auth.service';
// import { setState } from 'expect/build/jestMatchersObject';
// import history from '../history';
// import { Link } from "react-router-dom";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
// var Action = require('../redux/actions/index');

/*
Sample User

*/

class Register extends Component{

    constructor(props){
        super(props);
        this.state = {country:'', region:'',redirect:"/register",status:false, alert:{show:false,variant:null}, response:null, success:false, email:null};
        // console.log("Login Component Constructor Invoked!");
        // console.log(this.props.history);
    }
    strCompare(s1, s2){
        if(s1 === s2)
            return true;
        else
            return false;
    }
    handleSubmit = async (event) =>{
        console.log('submitpresed');
        /* Logic
            -- Get Form Info, 
            -- Check Fields
                -- Pass1 and 2 
                - Other Criteria
            - Send POST to API
                - true
                    - Display Message Registered
                    - 
                - False
                    - Display error Message
                    - No Redirect 
        */
        // var registered = false;
            try{
                event.preventDefault();        
                var usercred={
                    user:{
                        fname:this.fname.value,
                        lname:this.lname.value,
                        email:this.email.value,
                        password:this.pass2.value,
                        phone:this.phone_code.value+this.phone.value,
                        address:this.address.value,
                        city:this.city.value, 
                        zip:this.zip.value,
                        region:this.state.region,
                        country:this.state.country 
                    }
                };
                
                if(this.strCompare(this.pass1,this.pass2)){
                    this.setState({redirect:"/register", status:true, alert:{show:true, variant:"danger"}, response:"Password doesn't match, Please check the entered passwords and confirm..."});                

                }else if(this.fname.value==="" && this.lname.value ==="" && this.pass1.value==="" && this.address.value ==="" && this.region.value === "" && this.country.value ===null && this.city.value===null && this.zip.value===""){
                    // console.log("something in the form is empty");
                    this.setState({redirect:"/register", status:true, alert:{show:true, variant:"danger"}, response:"Some fields are missing, Please Fill-in the form completely."});                
                }else{
                // console.log(usercred);
                
              AuthService.register(usercred)
              .then( (response) => {            
                // console.log(response.data);
                
                //Creation Success
                    if(response.data.created){ 
                        // console.log(response.data.created);
                        // Display  Success
                        this.setState({redirect:null, status:true, success:true, email:this.email.value,alert:{show:true, variant:"success"}, response:response.data.response});
                        // Redirect to the Home Page
                        
                    }else{
                        // Registration Failure Did not create
                        this.setState({redirect:"/register" ,status:true, alert:{show:true, variant:"danger"}, response:response.data.response, success:false, email:this.email.value});
                        // Display Error Message using BS component Alert
                    }            
              }).catch((err) => {
                //   console.log(err)
                this.setState({redirect:"/register" ,status:true, alert:{show:true, variant:"warning"}, response:"Some Error Occured! - Please try again later."});
                });
              
            //   console.log(response);
            }}catch(error){
                // console.log(error);
            }
        
      };

      handleEmailChange(e){
        // this.email= e.target.value;
     }

     handlePasswordChange(e){
        // this.password= e.target.value;
     }

     selectCountry (val) {
        this.setState({ country: val });
      }
    
      selectRegion (val) {
        this.setState({ region: val });
        // console.log(this.state);
      }
    renderRegisterPage(){
        const country = this.state.country;
        const region = this.state.region;
        return (
            <React.Fragment>
            
                <Form onSubmit={this.handleSubmit} method="post">
                <div className="register-form col-12 m-1"><br/>
                <h2>Onboarding.</h2>
                <small>Please fill-in your details for registration with tabme. We do not share your data with anyone except to the restaurants you visit, this will help them serve you better.</small>
                <hr/>
                {this.state.alert.show && <Alert variant={this.state.alert.variant}>{this.state.response}</Alert>}
                {this.state.alert.show && <Redirect to={this.state.redirect}/>}
                    <h4>Registration</h4>
                    
                        <Form.Group>
                            <Form.Control ref={node => (this.fname = node)} name="fname" type="text"  placeholder="First Name " required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control ref={node => (this.lname = node)} name="lname" type="text"  placeholder="Last Name "required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control ref={node => (this.email = node)} name="email" type="email" placeholder="Email Address" required/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control  ref={node => (this.pass1 = node)} name="pass1" type="password" placeholder="Create Password" required/>
                        </Form.Group>

                        
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control  ref={node => (this.pass2 = node)} name="pass2" type="password" placeholder="Confirm Password" required/>
                        </Form.Group>
                        <hr/>
                        <h4>Account Info</h4>
                        <Form.Group>
                            <Form.Control ref={node => (this.phone = node)} name="phone" type="number"  placeholder="Phone Number " required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                 
                        <InputGroup>
                        <InputGroup.Prepend>
                        <Form.Control defaultValue={"+49"} ref={node => (this.phone_code = node)} as="select" name="phone_code">
                        <option value="+49">+49</option>
                        <option value="+44">+44</option>
                        <option value="+91">+91</option>
                        </Form.Control>
                        </InputGroup.Prepend>
                            <Form.Control ref={node => (this.phone = node)} name="phone" min="0" type="tel" placeholder={'Phone Number'} required/>
                            </InputGroup>

                        <Form.Group>
                            <Form.Control ref={node => (this.address = node)} name="address" type="text" placeholder="Address Line, Street " required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                       
                        <Form.Group>
                            <Form.Control ref={node => (this.city = node)} name="city" type="text" placeholder="City / Town" required />
                            <Form.Text className="text-muted">
                            </Form.Text>  
                        </Form.Group>

                        <Form.Group>
                            <Form.Control ref={node => (this.zip = node)} name="zip" type="text" placeholder="Postal / Zip code." required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <CountryDropdown className="form-control"
                                value={country}
                                onChange={(val) => this.selectCountry(val)} 
                                priorityOptions={["DE", "GB", "FR", "IT", "ES","NL", "IN"]}
                                ref={node => (this.country = node)}
                                />
                            <RegionDropdown className="form-control"
                                country={country}
                                value={region}
                                onChange={(val) => this.selectRegion(val)} 
                                ref={node => (this.region = node)}
                                />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check  type="checkbox"  required />
                            <Form.Label><small>I agree with the terms and conditions of use. </small></Form.Label>
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Register
                        </Button>
                </div>
                
                </Form>
               
            </React.Fragment>
        );
    }

  renderSuccessPage(){

    return(
        <div className="register-form col-12 m-1">
           <br/>
                <h2>Onboarding.</h2>
                <hr/>
                <Alert variant="success">
                    <Alert.Heading>Registration Success!</Alert.Heading>
                    <p>You have successfully registered with id - {this.state.email} to tabme and it's <b>Corona List</b> feature, please <Alert.Link href="/login">continue to login.</Alert.Link></p>
                    <Alert.Link href="/login"><Button variant="success">Continue..</Button></Alert.Link>
                </Alert>
                
        </div>


    );
  }

    render(){
        // Logic for choosing the page.
        return(
            <div>
            { !this.state.success && this.renderRegisterPage()}
            {this.state.success && this.renderSuccessPage()}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
            user:state.user
        }
  }
const mapDispatchToProps = dispatch =>{
    return {
        // setUserInStore: (user) => dispatch(Action.setUserSession(user)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Register);
  