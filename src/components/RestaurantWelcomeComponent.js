import React, {Component} from 'react';
// import AuthService from '../services/auth.service';
import {connect} from 'react-redux';
// import DataService from '../services/data-service';
import { Redirect } from "react-router-dom";
import Cookies from 'universal-cookie';
import {Button, Alert} from 'react-bootstrap'
import MenuBanner from './shared/MenuBanner';
import {Link} from 'react-router-dom';
import CookieBanner from './shared/cookies-banner/CookiesBanner';
import TableNumberSelector from './shared/TableNumberSelector';
import TnC from './shared/TnCFoot';
import t from '../i18n/translate';

// import { turquoise } from 'color-name';
const cookies = new Cookies();

var Action = require('../redux/actions/index');

class RestaurantWelcome extends Component{
    constructor(props){
        super(props);
        if(! props.restaurant._id === 'test'){
            // console.log('restaurant not set');
            this.state = {user: this.props.user, redirect:{show:true, path:'/'}, showpage:true, verified:false, gastro:this.props.restaurant, showTableNumIn:false, tablenum:this.props.tablenum, showAlertSuccess:false, loading:false, cookies_banner:{show:false} };
        }else{
            this.state = {user: this.props.user, redirect:{show:false, path:'/welcome'}, showpage:true, verified:false, gastro:this.props.restaurant, showTableNumIn:false, tablenum:this.props.tablenum, showAlertSuccess:false, loading:false, showAlertSuccessPickup:false, cookies_banner:{show:false}, restaurant_open:this.props.restaurant.open, };
        }
        this.changetablenum = this.changetablenum.bind(this);
        this.handleChangePickup = this.handleChangePickup.bind(this);
        this.acceptCookie = this.acceptCookie.bind(this);
        this.rejectCookie = this.rejectCookie.bind(this);
        this.renderPickupOption = this.renderPickupOption.bind(this);
    }
    table_num = this.props.tablenum;
    restaurant_open = this.props.restaurant.open;


    componentDidMount(){
        // console.log(cookies.get('tabme_consent'));
        if(!cookies.get('tabme_consent')){
            this.setState({cookies_banner:{show:true}});
        }    
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
        // console.log(now, opening, closing, now < opening || now > closing);
    }

    acceptCookie(){
        let now = new Date();
        now.setDate(now.getDate() + 7);
        // console.log(now);
        // console.log('accept.');
        this.setState({cookies_banner:{show:false}});
        // Set cookie
        cookies.set('tabme_consent', true, {path:'/', expires:now});
    }

    rejectCookie(){
        // console.log('reject.');
        this.setState({cookies_banner:{show:false}, redirect:{show:true, path:'/'}});
    }

    renderHomePage(){
        return(
            <div className="col-12">
            <div className="row">
                
            </div>
            <br/>
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
        this.setState({showAlertSuccess:true});
        this.setState({redirect:{show:true, path:'/menu6'}});
    }

    handleChangePickup(){
        this.props.setTableNum(-1);
        this.setState({showAlertSuccessPickup:true});
        this.setState({redirect:{show:true, path:'/menu6'}});
    }

    renderContinueBtns(){
        return(
            <Button as={Link} to="/menu6" className="welcome-btn styled-btn-outline-blue" variant="outline-info"><b>{t('continue_menu_btn')}</b></Button>
        );
    }
    renderPickupOption(){
        if(!(this.state.showAlertSuccess || this.state.showAlertSuccessPickup) && parseInt(this.props.restaurant.pickup_time) > 0){
            return(
                <><br/><br/><Button  className="welcome-btn" onClick={()=>{this.handleChangePickup();}} variant="outline-info"><b>{t('pickup')}</b></Button> <br/>
                    <small>~{this.props.restaurant.pickup_time}min</small>
                    </>
            );
        }else{
            return(<><br/></>);
        }    
    }

    render(){
        return(
        <div className="register-form col-12 no-padding-float-left margin-btm">
        
            {/* <hr/> */}
            {/* <Image className="restaurant-logo-img-welcome" fluid="true" src={"https://s3.eu-west-2.amazonaws.com/tabme.info/user_public_assets/"+this.props.restaurant._id+".png"} rounded/> */}
           
                 <center><MenuBanner restaurant={this.props.restaurant}/>
            
            {/* <h4>Welcome!</h4> */}
            
            <div className="about-restaurant-wrapper">
            <h4><b>{this.props.restaurant.rname}</b></h4>
             <p className="about-restaurant">
                {this.props.restaurant.about}
              </p> 
              </div>
              </center>  
              <center>
              <TableNumberSelector tablenum={this.table_num} onChange={this.changetablenum}/>
                {/* <Form>
                    <FormGroup>
                        <Form.Label>
                            <h5><b>{t('table_num',{tablenum:this.table_num})}</b></h5>
                        </Form.Label><br/>
                        {!this.state.showAlertSuccess && this.state.showTableNumIn && <b><Form.Control min="1" className="table-num-checkin" onChange={this.changetablenum} style={{display:"block"}} variant="outline-success" type="number" inline/> </b> }
                        {!this.state.showAlertSuccess && <div onClick={()=>{this.setState({showTableNumIn:!this.state.showTableNumIn})}}><small><i>{t('another_table')}</i></small></div>}
                    </FormGroup>
                </Form> */}
                <br/><br/>
                { this.props.restaurant.open && <>
                
                {this.state.showAlertSuccess && <Alert variant="success"><b>{t('welcome_checkin_msg')}</b></Alert>}
                {this.state.showAlertSuccessPickup && <Alert variant="success"><b>{t('welcome_pickup_msg')}</b></Alert>}
                {!(this.state.showAlertSuccess || this.state.showAlertSuccessPickup) && <Button className="welcome-btn" onClick={()=>{this.handleCheckin();}} variant="outline-info"><b>{t('checkin_btn')}</b></Button>}{' '}
                
                {this.renderPickupOption()}
                
                {(this.state.showAlertSuccess || this.state.showAlertSuccessPickup) && this.renderContinueBtns()}
                {this.state.showpage && this.renderHomePage()}
                </>}
                {!this.state.restaurant_open && <span className="restaurant_closed">
                    <b>{t('restaurant_closed_msg')}</b>
                </span>}
                {this.state.redirect.show && <Redirect to={this.state.redirect.path}/>}
           </center>
          {this.state.cookies_banner.show &&  <CookieBanner
                description={t('cookies_msg')}
                acceptFunc={this.acceptCookie}
                acceptLabel={t('accept')}
                rejectFunc={this.rejectCookie}
                rejectLabel={t('reject')}
            />}
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
    )(RestaurantWelcome);
  