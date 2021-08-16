/* eslint-disable */
import React, { useEffect , useState} from 'react';
// import ReactDOM from 'react-dom';
import { loadStripe } from '@stripe/stripe-js';
import Axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// import {Modal} from 'react-rainbow-componepayment_server_url = "http://localhost:8006/api/";nts';
import CurrencySymbol from './CurrencySymbolComponent';
import LoadingOverlay from 'react-loading-overlay';
import Cookies from 'universal-cookie';
import AccountInfoList from './shared/AccountInfo';
import SubTitle from './shared/SubTitle';
import {Redirect, Link} from 'react-router-dom';
// import DataService from '../services/data-service';
import t from '../i18n/translate';
import {FormattedMessage} from 'react-intl';
// import TnC from './shared/TnCFoot';
import FooterComponent from './shared/FooterComponent';
import { Image, Alert, Form, InputGroup, Button} from "react-bootstrap";
import { RiHandbagFill} from 'react-icons/ri';
import SPMGrid from './shared/StripePaymentMethodsGrid';
import HeadTitle from './shared/HeadTitle';
import PaypalCheckout from './PaypalButtonCheckout';

var cookies = new Cookies();
var Actions = require('../redux/actions/index');
var payment_server_url;
var stripe_key = "";
const ENV = require('../services/env-vars')
const __DEV__ = document.domain === 'localhost';
if(__DEV__){
  // TEST KEY.
  payment_server_url = "http://localhost:8000/api/v1/ps/";
  stripe_key = ENV.STRIPE_PK_TEST;
}else{
  // LIVE KEY
  stripe_key = ENV.STRIPE_PK_LIVE;
  payment_server_url = ENV.API_URL+"/api/v1/ps/";
}


// TABME UG PRODUCTION PUBLIC KEY


// TABME UG TEST PUBLIC KEY
// const stripe_key = "pk_test_51I0nwkJFWMf2kdoDpjZaGXgo5TG6GbKs7okf9Qy2PBQxS7aKEhOA7d6wEKRTh6xiYk4te6Mtby9N8mVgfsTElcUw00gRtG7XN3";

// Lukas key 
// const stripe_key = "pk_test_51HueKdEbwHix940Zm1UZaCl9eOwJHkiLaEo2HdJpZGTsuxXMLZBDBENZ1wAC4G0Q6LoERrpuq5rZC4TBKg4mJQ2x00BWMCo0DS";
// Omkar Key
// const stripe_key = "pk_test_51HBhc2Cmx7edPwMa2vgiiUlonAhCJDf6VGEDmirOgBbrOGQFsGUpMel7aROUfQi9lirsEGeYVQpzjNClNGnAgpIZ00I9Ey33uE";
const stripePromise = loadStripe(stripe_key);

export default function StripeCheckout(props) {
  var cart = useSelector(state => state.cart);
  const user = useSelector(state => state.user);
  const tablenum = useSelector(state=>state.tablenum);
  var restaurant = useSelector(state => state.restaurant);
  const dispatch = useDispatch();
  // const [showAlert, setShowAlert] = useState(false);
  const [showAlertFailure, setShowAlertFailure] = useState(false);
  const [showAlertOrderFailure, setShowAlertOrderFailure] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  // const [showAlertEmpty, setShowAlertEmpty] = useState(false);
  const [showAlertBillInfo, setShowAlertBillInfo ] = useState(false);
  // const [cardInfoComplete, setCardInfoComplete] = useState(false)
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Processing...");
  const [redirect, setRedirectPage ] = useState(false);
  // const [billuserinfo, setBilluserinfo] = useState(false);
  const [stripe_payment_method, setStripePaymentMethod] = useState('card');
  var billInfo = {
    fname:"",
    lname:"",
    email:"",
    phone:"",
    address:"",
    zip:"",
    phone_code:""
  }

//  function getPaymentMethodStripe(method){
//     setStripePaymentMethod(method)
//  }
  function loadingScreen(show, text){
    setLoadingText(text);
    setLoading(show);
  }
  function setEnvironment(order, restaurant, menu){
    dispatch(Actions.setRestaurant(restaurant));
    dispatch(Actions.updateCart(order.cart));
    dispatch(Actions.setOrder(order));
    dispatch(Actions.setTableNumber(order.tablenum));
    dispatch(Actions.setMenu(menu));
  }

  async function checkSession(){
        setLoadingText('Processing...');
        try{
          /*
            let search = window.location.search;
            let params = new URLSearchParams(search);
          */
          let session_id;
          if(props.match){
            session_id = props.match.params.session_id; 
          }else{
            session_id = false; 
          }
          // // console.log(session_id);
        if(session_id){
            // setLoadingText('Processing...');
            setLoading(true);
          const session_request_call = await Axios.post(payment_server_url+'stripe/checkout/tabme/process_order_session', {session_id:session_id});
          const retrieved_session = session_request_call.data.session;
          const retrieved_order = session_request_call.data.order_data;
          const retrieved_restaurant = session_request_call.data.restaurant;
          const retrieved_menu = session_request_call.data.menu;
          const retrieved_cart = session_request_call.data.cart;
          // // console.log(retrieved_session, retrieved_order, retrieved_restaurant, session_request_call.data);
          if(session_request_call.data.success){
            // Check the session data.
            if(retrieved_session.payment_status === 'paid'){
              // Order is valid
              setEnvironment(retrieved_order, retrieved_restaurant, retrieved_menu);
              // Order Success..
                    // Set order_id in store.
                    //  & Remove Current Order 
                  try{
                      cookies.remove('current_order');
                      cookies.remove('current_order', {path:'/'});
                      cookies.set('current_order', retrieved_order,  {path:'/'});
                  }catch(e){
                      // console.log('error during order set to cookies');
                  }
                  // Refresh or Clear Cart
                  dispatch(Actions.updateCart({
                    dishes:[],
                    itemCount:0,
                    cartTotal:0,
                    taxlabel:"-",
                    taxpercent:5,
                    tax:0,
                    discountpercent:0,
                    promo:0,
                    tip:0,
                    totalCost:0,
                    delivery_fee:0
                  }));
                cookies.remove('cart', {path:'/'});
                  setLoadingText('Order Verified!');
                  setLoading(false);
                  setShowAlertSuccess(true);
                  setShowAlertFailure(false);
                  setShowAlertOrderFailure(false);
                  setRedirectPage(true);
              // console.log();
            }else if(retrieved_session.payment_status === 'unpaid'){
              setLoading(true);
              setShowAlertFailure(true);
              setLoadingText('Retrieving Session...');
              // Environment 
              dispatch(Actions.setTableNumber(retrieved_cart.tablenum));
              dispatch(Actions.updateCart(retrieved_cart));
              dispatch(Actions.setRestaurant(retrieved_restaurant));
              dispatch(Actions.setMenu(retrieved_menu));
              setLoadingText('Session Retrieved.');
              setLoading(false);
            }
          }else{
            //there is no such session or session query is not present.
            setLoading(false);
            dispatch(Actions.setRestaurant(retrieved_restaurant));
            dispatch(Actions.setMenu(retrieved_menu));
          }
        }
      
      }catch(e){
       // console.log(e);
        // setShowAlertFailure(true);
        setLoading(false);
      }
      setLoading(false);
  }

  
  useEffect(()=>{
    // console.log(props);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    // console.log(props);
    checkSession();
    console.log('update')
  }, []);


  const handleClick = async (event) => {
    event.preventDefault();

    // Stage Bill info object
    
    // var billInfoObj = {
    //   fname:billInfo.fname.value,
    //   lname:billInfo.lname.value,
    //   email:billInfo.email.value,
    //   phone:billInfo.phone_code.value+billInfo.phone.value,
    //   address:billInfo.address.value,
    //   zip:billInfo.zip.value,
    //   guest:true
    // }; 

    var billInfoObj = {
      fname:'Guest',
      lname:'User',
      email:false,
      phone:' ',
      address:' ',
      zip:' ',
      guest:true
    }; 
  

  
  // Alles Conditions (Bendigungen)

      // For delivery
      // if(tablenum === -2){
      //   billInfoObj = {
      //     fname:billInfo.fname.value,
      //     lname:billInfo.lname.value,
      //     email:billInfo.email.value,
      //     phone:billInfo.phone_code.value+billInfo.phone.value,
      //     address:billInfo.address.value,
      //     zip:billInfo.zip.value,
      //     guest:true
      //   }
      //   // if(!(billInfoObj.address && billInfoObj.zip)){
      //   //   return
      //   // }
      // }else{
      //   billInfoObj = {
      //     fname:billInfo.fname.value,
      //     lname:billInfo.lname.value,
      //     email:billInfo.email.value,
      //     phone:billInfo.phone_code.value+billInfo.phone.value,
      //     guest:true
      //   }
      // }
    // if(restaurant === undefined)
    //   return
    // if(restaurant._id === 'test'){
    //   return   
    // }
    // if(!restaurant.open){
    //   return
    // }

    // if(cart.totalCost <=0){
    //   return
    // }
    
    // if(billInfoObj.fname !== "" && billInfoObj.lname !== ""  && billInfoObj.phone !== ""  && billInfoObj.email !== "" && user.email === null){
    //   setShowAlertBillInfo(false);
    // }else if(user.email === null){
    //   setShowAlertBillInfo(true);
    //   // console.log('Guest User');
    //   return
    // }
    
    
    // // Condition for Regular User
    if(user.email !== null){
      billInfoObj = user;
      // console.log('user is present', billInfoObj)
    }

    // //condition for delivery address

    // if(billInfoObj.address === "" || /^\\d{5}$/.test(billInfoObj.zip) || billInfoObj.zip === ""){
    //   setShowAlertBillInfo(true);
    //   // console.log('Guest User, Delivery Addres not valid');
    //   return
    // }

    setLoading(true);
    setLoadingText('Loading...');
    // Get Stripe.js instance
    try{
    const stripe = await stripePromise;
    // Call your backend to create the Checkout Session
    const response = await Axios.post(payment_server_url+'stripe/checkout/create_session', { method: 'POST', restaurant:restaurant, billInfo:billInfoObj, cart:cart, stripe_payment_method:[stripe_payment_method]});
        // console.log(response.data, { method: 'POST', restaurant:restaurant, billInfo:billInfoObj, cart:cart  });
    const session = response.data;
    if(response.data.success){
        // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if(result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
        // console.log(result.error.message);
        setLoading(false);
      }
    }else{
      setLoading(false);
    }
    }catch(e){
      // console.log(e);
      setLoading(false);
    }
    

   
  };


  const renderBillingInfo = ()=>{
    // User Information Display
      try{
          var u = cookies.get('user');
        if(user.email === null && u !== undefined){
          // If logged-in but not set, then set user in store from cookie.
              dispatch(Actions.setUserSession(u));
              // console.log('User set', u);
              // setUserPresent(true);
          }else if(user.email !== null){
            // setUserPresent(true);
              // console.log('User Recently Set!');
               // User Is LoggedIN - Return the User Information Card
               return(
                <div className="col-12 h-100 no-padding-float-left background-white">
                  <AccountInfoList user={user}/>
                  <br/>
                </div>
              );
          }else{
            // setUserPresent(false);
              // User In not LoggedIn - Return the user info input form.

              return(
                <div className="col-12 background-white">
                  <Form>
                  <Form.Group>
                    <InputGroup>
                    <FormattedMessage id="label_name" defaultMessage="First Name" values={{type:"First "}}>
                        {(placeholder)=><Form.Control ref={node => (billInfo.fname = node)} name="fname" type="text" placeholder={placeholder} required />}
                    </FormattedMessage>

                    <FormattedMessage id="label_name" defaultMessage="Last Name" values={{type:"Last "}}>
                        {(placeholder)=><Form.Control ref={node => (billInfo.lname = node)} name="lname" type="text" placeholder={placeholder} required />}
                    </FormattedMessage>

                      </InputGroup> 
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                    <Form.Group>
                      
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                  
                        <Form.Group controlId="formBasicEmail">
                        <FormattedMessage id="label_email" defaultMessage="Email Address">
                              {(placeholder)=><Form.Control ref={node => (billInfo.email = node)} name="email" type="email" placeholder={placeholder} required/>}
                        </FormattedMessage>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                        <InputGroup>
                        <InputGroup.Prepend>
                        <Form.Control defaultValue={"+49"} ref={node => (billInfo.phone_code = node)} as="select" name="phone_code">
                        <option value="+49">+49</option>
                        <option value="+44">+44</option>
                        <option value="+91">+91</option>
                        </Form.Control>
                        </InputGroup.Prepend>
                            <FormattedMessage id="label_phone" defaultMessage="Phone No.">
                                {(placeholder)=><Form.Control ref={node => (billInfo.phone = node)} name="phone" min="0" type="tel" placeholder={placeholder} required/>}
                            </FormattedMessage>
                            </InputGroup>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
              {/* Condition for Delivery  */}
                        {tablenum === -2 && 
                        <>
                          <Form.Group controlId="formBasicEmail">
                          <FormattedMessage id="label_delivery_addr" defaultMessage="Delivery Address">
                             {(placeholder)=> <Form.Control ref={node => (billInfo.address = node)} name="address" type="text" placeholder={placeholder} required/>}
                          </FormattedMessage>
                              <Form.Text className="text-muted">
                              </Form.Text>
                          </Form.Group>
                          <Form.Group controlId="formBasicEmail">
                          <FormattedMessage id="label_zip" defaultMessage="Zip">
                              {(placeholder)=><Form.Control ref={node => (billInfo.zip = node)} name="zip"  type="text" inputmode="numeric" pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$" placeholder="Zip Code" required/>}
                              </FormattedMessage>
                              <Form.Text className="text-muted">
                              </Form.Text>
                          </Form.Group>
                          </>
                        }
                  </Form>
                  <div className="col-12">
                    <Link to="/login"><i><small>{t('register_link2')}</small></i></Link>
                    <Form.Text className="text-muted">
                            <small> 
                              {t('guest_form_security_message')}
                            </small>
                            </Form.Text>
                  </div>
                  <br/>
                  {showAlertBillInfo && <Alert variant="warning">{t('payment_msg_bill_info')}</Alert>}

                </div>
              );
          }
        }catch(e){
          setShowAlertFailure(true);
          console.log('Some Error related to User Login happened');
        }
        
    }

    const renderCheckoutForm = ()=>{
      return(
        <div className="col-12 background-white">
          <Form onSubmit={handleClick}>          
            <center>
            {showAlertSuccess && <Alert variant="success"><b>{t('payment_success')}</b><small><br/>{t('payment_msg_order_failed')}</small></Alert>}
            {showAlertFailure && <Alert variant="danger"><b>{t('payment_failed')}</b><small><br/>{t('payment_msg_failed')}</small></Alert>}  
            </center>
            <div className="row">
          {redirect && <Redirect to='/order/current'/>}
            <div className="col-12 menu-footer">
             <Button disabled={loading} onClick={handleClick} className="wide-btn" type="submit" variant="dark" label="Pay" ><b> {t('proceed_to_pay')} <CurrencySymbol/> {cart.totalCost.toFixed(2)}</b></Button>
            </div>
            </div>
          </Form>
        </div>
      );
    }

  return (
    <LoadingOverlay
        active={loading}
        spinner
        text={loadingText}
        style={{'z-index':'200', height:'90vh'}}
        >
        <div className="col-12 margin-btm">
        <div className="row">
          <div className="col-12">
          <HeadTitle text={"Tab Warenkorb"} icon={<RiHandbagFill/>}/>
          <br/>
          {/* <SubTitle text={stripe_payment_method}/> */}
          <SubTitle text={t('cart_payment_options_title')}/>

          <SPMGrid  setMethod={setStripePaymentMethod}/>
          {/* <center><h4><b>Payment</b></h4></center> */}
          {/* <hr/> */}
          
          {restaurant.info.paypal_client_id && <>
            <br/><br/>
                <SubTitle text={t('cart_other_payment_options')}/>
                <PaypalCheckout cartLoading={loadingScreen}/>
           </>}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
          {showAlertOrderFailure && <Alert variant="danger"><b>{t('error_message_order_creation')}</b></Alert>}  
          </div>
        </div>
        
    
        <div className="row">
        {redirect && <Redirect to='/order/current'/>}
        {/* {renderBillingInfo()} */}
        <br/>
        </div>
       
        <br/>
        <div className="row">
      
          {/* {renderCheckoutForm()} */}
          <br/><br/>
          
          <div className="col-12">

                    {showAlertSuccess && <Alert variant="success"><b>{t('payment_success')}</b><small><br/>{t('payment_msg_order_failed')}</small></Alert>}
                    {showAlertFailure && <Alert variant="danger"><b>{t('payment_failed')}</b><small><br/>{t('payment_msg_failed')}</small></Alert>}  
                    <Form.Text className="text-muted"><small> {t('guest_form_security_message')}</small></Form.Text>
                  </div>
          <div className="col-12">
            <center>
                <Image src={`${ENV.CDN_URL}/app-public-assets/accepted_stripe4.png`} style={{height:'40px'}} fluid/>
                  <br/>
                <Image src={`${ENV.CDN_URL}/app-public-assets/powered_by_stripe.png`} fluid/>
                <center>
                  <small>
                        <a href={`${ENV.CDN_URL}/public_assets/app_public_assets/tc/Datenschutzerklarung_06012021.1_18.docx.html`} rel="noopener noreferrer" target="_blank">
                          <small>{t('payment_privacy')}</small> </a>
                  </small>
                </center>
           </center>
         {/* <TnC/> */}
        </div>
        </div>
        {/* <hr/> */}
        
        </div>
        <div> <FormattedMessage id='cart' defaultMessage="Cart">
                    {(placeholder)=><FormattedMessage values={{text:""}} id="order2">{(placeholder2)=><FooterComponent hide={loading} tnc={true} next={{text:placeholder2, to:"/stripe", type:"function", func:handleClick}} back={{show:true, to:"/cart", type:"route", text:placeholder, arrow:true}}></FooterComponent>}</FormattedMessage>}
              </FormattedMessage></div>
    </LoadingOverlay>
  );
}