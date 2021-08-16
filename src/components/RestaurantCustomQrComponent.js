import React, {Component} from 'react';
// import AuthService from '../services/auth.service';
import {connect} from 'react-redux';
// import DataService from '../services/data-service';
import { Redirect } from "react-router-dom";
// import Cookies from 'universal-cookie';
import MenuBanner from './shared/MenuBanner';
import {Button, FormGroup, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import t from '../i18n/translate';
import TnC from './shared/TnCFoot';
import CurrencySymbol from './CurrencySymbolComponent';
// const cookies = new Cookies();

var Action = require('../redux/actions/index');

class RestaurantCustomQR extends Component{
    constructor(props){
        super(props);
        if(props.restaurant._id === 'test'){
            // console.log('restaurant not set')
            this.state = {user: this.props.user, redirect:{show:true, path:'/'}, showpage:true, verified:false, gastro:this.props.restaurant, showTableNumIn:false, tablenum:this.props.tablenum, showAlertSuccess:false, loading:false };
        }else{
            this.state = {user: this.props.user, redirect:{show:false, path:'/r/delivery'}, showpage:true, verified:false, gastro:this.props.restaurant, showTableNumIn:false, tablenum:this.props.tablenum, showAlertSuccess:true, loading:false, restaurant_open:this.props.restaurant.open};
        }
        
        this.changetablenum = this.changetablenum.bind(this);
    }
    table_num = this.props.tablenum;
    componentDidMount(){
        let now = new Date();
        now = (now.getHours()* 100) + now.getMinutes();
        let opening = this.props.restaurant.time_opening.split(":").map(Number);
        opening = (opening[0] *100) + opening[1];
        let closing = this.props.restaurant.time_closing.split(":").map(Number);
        closing = (closing[0] *100) + closing[1];
        if(now < opening || now > closing){
            // this.restaurant_open = false;
            this.setState({restaurant_open:false});
        }
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
        <><Button as={Link} to="/menu6" className="welcome-btn" variant="outline-success styled-btn-outline-blue"><b>{t('continue_menu_btn')}</b></Button>
            {/* {this.props.restaurant.info.delivery.delivery_fee > 0 && <small> <br/><b>{t('delivery_charge_label')} <CurrencySymbol/> {this.props.restaurant.info.delivery.delivery_fee} </b></small>} */}
        </>
        );
    }
    render(){
        return(
        
        <div className="register-form col-12 no-padding-float-left background-white">
        
        <center>
            {/* <h4>Welcome!</h4>
            <hr/> */}
            {/* <Image className="restaurant-logo-img-welcome" fluid="true" src={"https://s3.eu-west-2.amazonaws.com/tabme.info/user_public_assets/"+this.props.restaurant._id+".png"} rounded/> */}
            <MenuBanner restaurant={this.props.restaurant}/>

            <h3><b>{this.props.restaurant.rname}</b>
            </h3>
            <p className="about-restaurant"><small>
                {this.props.restaurant.about}
                </small></p> 
                <Form>
                    <FormGroup>
                        <Form.Label>
                            {/* <h5><b>{t('welcome_order_for_delivery')}</b></h5> */}
                            
                            <h6><b>{t('order')}</b></h6>
                            <h5><b>{this.props.cart.order_label}</b></h5>
                            
                            {/* <b>Once you place your order, it will be set for delivery in approx. {this.props.restaurant.pickup_time}mins*<br/><small>*(preparation time may vary)</small> </b> */}
                            <small>{this.props.restaurant.info.delivery.delivery_msg}</small><br/>
                        </Form.Label><br/>
                        {/* <small>{this.props.restaurant.info.delivery.delivery_fee}</small> */}
                        {!this.state.showAlertSuccess && this.state.showTableNumIn && <b><Form.Control min="1" className="table-num-checkin" onChange={this.changetablenum} style={{display:"block"}} variant="outline-success" type="number" inline/> </b> }
                    </FormGroup>
                    
                </Form>
                { this.props.restaurant.open && <>
                {/* {this.state.showAlertSuccess && <Alert variant="success"><b>You've Opted for Delivery!</b></Alert>} */}
                {/* {!this.state.showAlertSuccess && <Button onClick={()=>{this.handleCheckin();}} variant="outline-success">Pickup</Button>}{' '} */}
                {this.state.showAlertSuccess && this.renderContinueBtns()}
                {this.state.showpage && this.renderHomePage()}
                </>}

                {!this.state.restaurant_open && <span className="restaurant_closed">
                    <b>{t('restaurant_closed_msg')}</b>
                </span>}
                
                {this.state.redirect.show && <Redirect to={this.state.redirect.path}/>}
           </center>
                    
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
            cart:state.cart
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
    )(RestaurantCustomQR);
  