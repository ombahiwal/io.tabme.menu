import React, {Component} from 'react';
// import AuthService from '../services/auth.service';
import {connect} from 'react-redux';
// import DataService from '../services/data-service';
import { Redirect } from "react-router-dom";
// import Cookies from 'universal-cookie';
import MenuBanner from './shared/MenuBanner';
import {Button, FormGroup, Form, InputGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import TnC from './shared/TnCFoot';
import t from '../i18n/translate';
// const cookies = new Cookies();

var Action = require('../redux/actions/index');

class RestaurantPickup extends Component{
    constructor(props){
        super(props);
        if(props.restaurant._id === 'test'){
            // console.log('restaurant not set')
            this.state = {user: this.props.user, redirect:{show:true, path:'/'}, showpage:true, verified:false, gastro:this.props.restaurant, showTableNumIn:false, tablenum:this.props.tablenum, showAlertSuccess:false, loading:false };
        }else{
            this.state = {user: this.props.user, redirect:{show:false, path:'/r/pickup'}, showpage:true, verified:false, gastro:this.props.restaurant, showTableNumIn:false, tablenum:this.props.tablenum, showAlertSuccess:true, loading:false, restaurant_open:this.props.restaurant.open, pickup_date:null, default_pickup_time:(parseInt((new Date()).getHours())+1).toString().padStart(2, "0") +":"+(new Date()).getMinutes().toString().padStart(2, "0")};
        }
        this.changetablenum = this.changetablenum.bind(this);
        this.setPickupDateObj = this.setPickupDateObj.bind(this);
    }
    table_num = this.props.tablenum;
    componentDidMount(){
        // console.log(this.set_pickup_time);
        let now = new Date();
        // let pickup_prep_time = parseInt(this.props.restaurant.pickup_time);
        // let time_pickup_start = (now.getHours()* 100) + 100; // Add 1 hour
        now = (now.getHours()* 100) + now.getMinutes();
        let opening = this.props.restaurant.time_opening.split(":").map(Number);
        opening = (opening[0] *100) + opening[1];
        let closing = this.props.restaurant.time_closing.split(":").map(Number);
        // let time_pickup_closing = closing[0] *100 - 100; // remove 1 hour 
        closing = (closing[0] *100) + closing[1];
        if(now < opening || now > closing){
            // this.restaurant_open = false;
            this.setState({restaurant_open:false});
        }
        // let pickup_times = [];
        // this.setState({default_pickup_time:(parseInt((new Date()).getHours())+1).toString() +":"+(new Date()).getMinutes()});
        console.log(this.state.default_pickup_time);
        const today = new Date();
        var value = new Date(today.toDateString() + ' ' + this.state.default_pickup_time);
        this.props.setOrderMetaStore({pickup:{date:value}});
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
    changetablenum(e){
        if(e.target.value>0){
            this.table_num = parseInt(e.target.value, 10);
        }else{
            this.table_num = parseInt(this.props.tablenum , 10);
        }
        this.setState({showTableNumIn:true});
    }

    handleCheckin(){
        this.props.setTableNum(this.table_num);
        this.setState({showAlertSuccess:true})
    }

    setPickupDateObj(e){
        // console.log(e.target.value);
        // const val = e.target.value;
        const today = new Date();
        // console.log(this.props)
        // if(val === 'Today'){
        //     console.log(new Date(today.toDateString() + ' ' + e.target.value));
        // }else if(val === 'Tomorrow'){
        // }else{
        // }
        var value = new Date(today.toDateString() + ' ' + e.target.value);
        this.props.setOrderMetaStore({pickup:{date:value}});
        this.setState({pickup_date:value});

    }
    renderPickupTimeSelector(){
        
        return(
            <div className="col-12">
            <div className="col-12">
                <Form.Group controlId="formBasicEmail">
                        <InputGroup>
                        <Form.Control defaultValue={"0"}  as="select" name="pickup_day">
                            <option value="0">Today</option>                        
                            {/* <option value="24">Tomorrow</option> */}
                        </Form.Control>
                        
                        <Form.Control defaultValue={this.state.default_pickup_time} min={this.state.default_pickup_time} step={"00:"+this.props.restaurant.pickup_time+":00"} max={this.props.restaurant.time_closing} onChange={this.setPickupDateObj} type="time" name="pickup_time">
                        
                        </Form.Control>
                            </InputGroup>
                            </Form.Group>
                            </div>
                            <br/>
            </div>
        )

    }


    renderContinueBtns(){
        // Check if already loggedin 
        /*
        if(this.props.user.email === null || this.props.user.fname === null){
            // user is not logged in 
            return(
                <>
                <center> <h5><b>View Menu</b></h5></center>
                <Button as={Link} to="/menu6" className="welcome-btn" variant="outline-info">Continue as Guest</Button>
                <br/>or<br/>
                <Button as={Link} to="/login" className="welcome-btn"  variant="outline-success">Login or Register</Button>
                </>
            );
        }else{
            return(
                <Button as={Link} to="/menu6" className="welcome-btn" variant="outline-success styled-btn-solid-orange">Continue to Menu</Button>
            );
        }
        */
       return(
        <Button as={Link} to="/menu6" className="welcome-btn" variant="outline-success"><b>{t('continue_menu_btn')}</b></Button>
        );
    }
    render(){
        return(
        
        <div className="register-form col-12 no-padding-float-left background-white">
        
        {this.props.restaurant._id !=='test' && <center>
            {/* <h4>Welcome!</h4><hr/> */}
            {/* <Image className="restaurant-logo-img-welcome" fluid="true" src={"https://s3.eu-west-2.amazonaws.com/tabme.info/user_public_assets/"+this.props.restaurant._id+".png"} rounded/> */}
            <MenuBanner restaurant={this.props.restaurant}/>
            <div className="theme-card"> 
                <h3><b>{this.props.restaurant.rname}</b>
                </h3>
                <p className="about-restaurant">{this.props.restaurant.about}</p> 
            </div>
            <br/>
                <Form>
                    <FormGroup>
                        <Form.Label>
                            <h5><b>{t('welcome_order_for_pickup')}</b></h5>
                            
                            {/* <small>{t('pickup_msg_time', {time:this.props.restaurant.pickup_time})}</small> */}
                            { this.props.restaurant.info.pickup.pickup_address.length < 5 ? <small>{t('pickup_msg_addr', {zip:this.props.restaurant.zip, address:this.props.restaurant.address, city:this.props.restaurant.city, opening:this.props.restaurant.time_opening, closing:this.props.restaurant.time_closing})} </small> : <small>{this.props.restaurant.info.pickup.pickup_address}</small>}
                            <small>{this.props.restaurant.info.pickup.pickup_msg}</small><br/>
                            
                            
                        </Form.Label><br/>
                        {!this.state.showAlertSuccess && this.state.showTableNumIn && <b><Form.Control min="1" className="table-num-checkin" onChange={this.changetablenum} style={{display:"block"}} variant="outline-success" type="number" inline/> </b> }
                    </FormGroup>
                    {this.renderPickupTimeSelector()}
                </Form>
                {this.props.restaurant.open && <>
                {/* {this.state.showAlertSuccess && <Alert variant="success"><b>You've Opted for Pickup!</b></Alert>} */}
                {/* {!this.state.showAlertSuccess && <Button onClick={()=>{this.handleCheckin();}} variant="outline-success">Pickup</Button>}{' '} */}
                {this.state.showAlertSuccess && this.renderContinueBtns()}
                {this.state.showpage && this.renderHomePage()}
                </>}

                {!this.state.restaurant_open && <span className="restaurant_closed">
                    <b >{t('restaurant_closed_msg')}</b>
                </span>}
                
                
                
           </center>}
           {this.state.redirect.show && <Redirect to={this.state.redirect.path}/>}
           <span>
     <TnC/>
    </span>
        </div>  
        );
    }
}


const mapStateToProps = state => {
    return {
            user:state.user,
            restaurant:state.restaurant,
            tablenum:state.tablenum,
            order_meta:state.order_meta,
        }
  }
const mapDispatchToProps = dispatch =>{
    return {
        setUserInStore: (user) => dispatch(Action.setUserSession(user)),
        getUserFromStore: () => dispatch(Action.getUserSession()),
        setTableNum: (tnum) => dispatch(Action.setTableNumber(tnum)),
        setOrderMetaStore: (order_meta) => dispatch(Action.setOrderMeta(order_meta))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(RestaurantPickup);
  