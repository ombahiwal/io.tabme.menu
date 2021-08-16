import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, Button, Alert} from 'react-bootstrap';
import { Redirect } from "react-router-dom";
// import { setState } from 'expect/build/jestMatchersObject';
// import history from '../history';
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
import AuthService from '../services/auth.service';
import LoadingOverlay from 'react-loading-overlay';
import TnC from './shared/TnCFoot';
import t from '../i18n/translate';
import { FormattedMessage } from 'react-intl';
const cookies = new Cookies();
var Action = require('../redux/actions/index');

/*
Sample User

{ 
    "user":{
        "email": "t@t.co",
        "password" : "test",
        "name": "Omkar B",
        "address": "GOoglel, Ausreich"
    } 
}

*/

class UserLogin extends Component{

    constructor(props){
        super(props);
        this.state = {redirect:"/login",status:false, alert:{show:false,variant:null}, response:null, loading:false};
        // console.log("Login Component Constructor Invoked!");
        // console.log(this.props.history);
    }

    handleSubmit = async (event) =>{
            
        this.setState({loading:true});

            try{
                event.preventDefault();        
              
                AuthService.login(this.email.value, this.pass.value)
                .then( (response) => {
                // console.log(response.data);
                // 
                
                //Login Succeess
                    if(response.data.login){
                        
                        // Set user in Redux Store 
                        var user_data = response.data.data.user;
                        // console.log(user_data);
                        this.props.setUserInStore(user_data);
                        // Cookie set
                        cookies.set('user', user_data, { path: '/' });
                        cookies.set('token', response.data.token, {path: '/'});
                        // Display Login Success
                        if(this.props.menu !== null){
                            this.setState({redirect:"/menu6", status:true, alert:{show:false, variant:"success"}, response:response.data.response, loading:false});
                            this.props.history.go(-1);
                        }else
                        this.setState({redirect:"/home", status:true, alert:{show:true, variant:"success"}, response:response.data.response, loading:false});
                        // history.push("/home");
                        // Redirect to the Home Page
                        
                    }else{
                        // Login Failure
                        // Display Login Failure
                        this.setState({redirect:"/login" ,status:true, alert:{show:true, variant:"danger"}, response:response.data.response, loading:false});
                        // Display Error Message using BS component Alert
                    }

              }).catch((err) => {
                //   console.log(err);
                this.setState({redirect:"/login" ,status:true, alert:{show:true, variant:"warning"}, response:"Some Error Occured! - Please try again later.", loading:false});
                });
              
              
            //   console.log(response);
            }catch(error){
                console.log(error);
            }
        
      };

      handleEmailChange(e){
        // this.email= e.target.value;
     }
     handlePasswordChange(e){
        // this.password= e.target.value;
     }


    renderLoginPage(){
        return (
            <React.Fragment>
             
                <Form onSubmit={this.handleSubmit} method="post">
               <div className="login-form col-12 m-1"><br/>
                <h2>{t('login')}</h2>
                <hr/>
                {this.state.alert.show && <Alert variant={this.state.alert.variant}>{this.state.response}</Alert>}
                {this.state.alert.show && <Redirect to={this.state.redirect}/>}
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label></Form.Label>
                            <FormattedMessage id='placeholder_enter_email' defaultMessage="Enter your Email">
                                {(placeholder)=><Form.Control ref={node => (this.email = node)} name="email" type="email" placeholder={placeholder} />}
                            </FormattedMessage>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                        <FormattedMessage id="password" defaultMessage="Password">
                            {(placeholder)=><Form.Control onChange={this.handlePasswordChange} ref={node => (this.pass = node)} name="pass" type="password" placeholder={placeholder} />}
                            </FormattedMessage>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            {/* <Form.Check type="checkbox" label="Keep me logged" /> */}
                        </Form.Group>
                        <Button variant="success" type="submit">
                        {t('login')}
                        </Button> 
                        <hr/>
                        <Link to="/register">{t('register_link1')}</Link>
                </div>
                </Form>
            
               
            </React.Fragment>
        );
    }

    renderRegisterPage(){
        return (
            <div>Registration Page</div>
        );
    }

    render(){
        // Logic for choosing the page.
        return(
            <LoadingOverlay
                    active={this.state.loading}
                    spinner
                    text='Checking Credentials...'
                    >
                {this.renderLoginPage()}
                <span>
     <TnC/>
    </span>
            </LoadingOverlay>
            
        );
    }
}


const mapStateToProps = state => {
    return {
            user:state.user,
            menu:state.menu
        }
  }
const mapDispatchToProps = dispatch =>{
    return {
        setUserInStore: (user) => dispatch(Action.setUserSession(user)),
        getUserFromStore: () => dispatch(Action.getUserSession())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(UserLogin);
  