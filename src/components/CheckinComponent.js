import React, {Component} from 'react';
// import AuthService from '../services/auth.service';
import {connect} from 'react-redux';
// import DataService from '../services/data-service';
// import { Redirect } from "react-router-dom";
// import Cookies from 'universal-cookie';
import {Image, Button, FormGroup, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom';
// const cookies = new Cookies();
var Action = require('../redux/actions/index');

class Checkin extends Component{
    constructor(props){
        super(props);
        this.state = {user: this.props.user, redirect:{show:false, path:'/checkin'}, showpage:true, verified:false, gastro:this.props.restaurant, showTableNumIn:false, tablenum:this.props.tablenum};
    }
    table_num = this.props.tablenum;
    componentDidMount(){

    }
    renderHomePage(){
        return(
            <div className="col-12">
            <div className="row">
                
            </div>
            <br/><br/>
            <div className="row">
               
            </div>
            </div>
        );
    }

    render(){
        return(
        
        <div className="register-form col-12"><br/><center>
            <h4>Willkommen!</h4>
            <hr/>
            <Image className="restaurant-logo-img-welcome" fluid="true" src={this.props.restaurant.image} rounded/>
            <h3>
                {this.props.restaurant.rname}
            </h3>
            <p className="about-restaurant"><small>
                {this.props.restaurant.about}
                </small></p> 
                <Form>
                    <FormGroup>
                        <Form.Label>
                            <b>Table No. {this.table_num}</b>
                        </Form.Label><br/>
                    </FormGroup>

                </Form>
                
                <Button as={Link} to="/menu" variant="outline-success">Check-In</Button>{' '}
            
           {this.state.showpage && this.renderHomePage()}
           </center>
        </div>  
        );
    }
}


const mapStateToProps = state => {
    return {
            user:state.user,
            restaurant:state.restaurant,
            tablenum:state.tablenum
        }
  }
const mapDispatchToProps = dispatch =>{
    return {
        setUserInStore: (user) => dispatch(Action.setUserSession(user)),
        getUserFromStore: () => dispatch(Action.getUserSession()),
        setTableNum: (tnum) => dispatch(Action.setTableNumber(tnum))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkin);
  