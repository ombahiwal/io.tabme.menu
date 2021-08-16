import React, { useState, useEffect } from 'react';
// import {loadStripe} from '@stripe/stripe-js';
// import {CardElement, Elements, useStripe, useElements} from '@stripe/react-stripe-js';
import {Redirect, Link} from 'react-router-dom';
// import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
// import {Form} from 'reactstrap';
import { Alert, Form, InputGroup, Button} from "react-bootstrap";
// import { Card, Input} from 'react-rainbow-components';
// import { white } from 'color-name';
import axios from 'axios';
import CurrencySymbol from './CurrencySymbolComponent';
import LoadingOverlay from 'react-loading-overlay';
import Cookies from 'universal-cookie';
import DataService from '../services/data-service';
import SubTitle from './shared/SubTitle';
import AccountInfoList from './shared/AccountInfo';
// import '../styles/common.css';
import t from '../i18n/translate';
import {FormattedMessage} from 'react-intl';

var cookies = new Cookies();
var Actions = require('../redux/actions/index');
var CurrencyCode =  require('./shared/CurrencyFromCode');
const ENV = require('../services/env-vars');
var payment_backend_url = ENV.API_URL+'/api/v1/ps';
//http://localhost:8006
// console.log(ENV);

const CheckoutForm = () => {
  // const stripe = useStripe();
  // const elements = useElements();
  var cart = useSelector(state => state.cart);
  const user = useSelector(state => state.user);
  const tablenum = useSelector(state=>state.tablenum);
  var restaurant = useSelector(state => state.restaurant);
  // const [showAlert, setShowAlert] = useState(false);
  const [showAlertFailure, setShowAlertFailure] = useState(false);
  const [showAlertOrderFailure, setShowAlertOrderFailure] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  // const [showAlertEmpty, setShowAlertEmpty] = useState(false);
  const [showAlertBillInfo, setShowAlertBillInfo ] = useState(false);
  // const [cardInfoComplete, setCardInfoComplete] = useState(false)
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Processing...")
  const dispatch = useDispatch();
  
  

  // const [isUserPresent, setUserPresent] = useState(false);
  const [redirect, setRedirectPage ] = useState(false);
  // const pay = {
  //   type:"card"
  // }; 
  var billInfo = {
    fname:"",
    lname:"",
    email:"",
    phone:"",
    address:"",
    zip:"",
    phone_code:""
  }

  useEffect(()=>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;

  },[]);

  
  if(restaurant._id === 'test'){
    restaurant = cookies.get('gastro');
    if(restaurant._id !== 'test')
      dispatch(Actions.setRestaurant(restaurant));
  }

  // if(cart.dishes.length === 0){
  //   cart = cookies.get('cart');
  //   if(cart)
  //     dispatch(Actions.updateCart(cart));
  // }



  // Payments process
  const handleSubmit = async (event) =>{
    event.preventDefault();
    // console.log(event)
    
    var billInfoObj = {
        fname:billInfo.fname.value,
        lname:billInfo.lname.value,
        email:billInfo.email.value,
        phone:billInfo.phone_code.value+billInfo.phone.value,
        address:billInfo.address.value,
        zip:billInfo.zip.value,
        guest:true
      }; 
      // console.log(billInfoObj);
      // return;
    // Alles Conditions (Bendigungen)

    // For delivery
    if(tablenum === -2){
      billInfoObj = {
        fname:billInfo.fname.value,
        lname:billInfo.lname.value,
        email:billInfo.email.value,
        phone:billInfo.phone_code.value+billInfo.phone.value,
        address:billInfo.address.value,
        zip:billInfo.zip.value,
        guest:true
      }
      // if(!(billInfoObj.address && billInfoObj.zip)){
      //   return
      // }
    }else{
       billInfoObj = {
        fname:billInfo.fname.value,
        lname:billInfo.lname.value,
        email:billInfo.email.value,
        phone:billInfo.phone_code.value+billInfo.phone.value,
        guest:true
      }
    }
    
    if(restaurant === undefined)
      return null
    if(restaurant._id === 'test'){
      return null
    }
    if(!restaurant.open){
      return null
    }

    if(cart.totalCost <=0){
      return null
    }
    
    // Remove Email for now
    // Condition for Guest User
    if(billInfoObj.email === ""){
      billInfoObj.email = "info@tabme.info";
    }
    

    if(billInfoObj.fname !== "" && billInfoObj.lname !== ""  && billInfoObj.phone !== "" && user.email === null){
      setShowAlertBillInfo(false);
    }else if(user.email === null){
      setShowAlertBillInfo(true);
      // console.log('Guest User');
      return null
    }

    // Condition for Regular User
    if(user.email !== null){
      billInfoObj = user;
      // console.log('user is present', billInfoObj)
    }

    //condition for delivery address

    if(billInfoObj.address === "" || /^\\d{5}$/.test(billInfoObj.zip) || billInfoObj.zip === ""){
      setShowAlertBillInfo(true);
      console.log('Guest User, Delivery Addres not valid');
      return null
    }

    
   
      

    // Stage Order Object

    var OrderRequestData = {
      user:billInfoObj,
      menu_id:restaurant.active_menu_id,
      restaurant_id:restaurant._id,
      rname:restaurant.rname,
      tablenum:tablenum,
      cart:cart,
      paymentInfo:null,
      pickup_time:restaurant.pickup_time
    };
   
    // Add payment Method to cart.. temporary
    //
    OrderRequestData.cart.pmethod = "CASH / External";

    // Payment Intent

    /*
    if(!cardInfoComplete){
      // check card info empty
      setShowAlertEmpty(true);
      return
    }
    */
    setLoading(true);
    /*const {error, paymentMethod} = await stripe.createPaymentMethod({
      type:pay.type,
      card: elements.getElement(CardElement)
    });
      
    */
    // if(!error){
     
      // const {id} = paymentMethod;
      // console.log(paymentMethod);
        // try{
          var shipping;
          if(billInfoObj.guest){
             shipping = {
              name: `${billInfoObj.fname} ${billInfoObj.lname}`,
              address: {
                line1: restaurant.address,
                postal_code: restaurant.zip,
                city: "--",
                state: restaurant.region,
                country: CurrencyCode.getCountry2Alpha(restaurant.country),
              }
            };
          }else{
            shipping = {
              name: `${billInfoObj.fname} ${billInfoObj.lname}`,
              address: {
                line1: restaurant.address,
                postal_code: restaurant.zip,
                city: "--",
                state: restaurant.region,
                country: CurrencyCode.getCountry2Alpha(restaurant.country),
              },
            
            };
            
          }

          // console.log(JSON.stringify(new Object({ 
          //   user:new Object(billInfoObj),
          //   tablenum:tablenum,
          //   restaurant_id:restaurant._id,
          // pay_req:{ 
          //       amount: Math.trunc(cart.totalCost*100), 
          //       currency:OrderRequestData.cart.currency,
          //       shipping:shipping,
          //       payment_method_types: ['cash', 'external'],
          //       phone:String(billInfoObj.phone),
          //       email:String(billInfoObj.email)
          //   }})));

                 
          const response = await axios.post(payment_backend_url+"/charge/cash", 
            { 
            user:billInfoObj,
            tablenum:tablenum,
            restaurant_id:restaurant._id,
          pay_req:{ 
                amount: Math.trunc(cart.totalCost*100), 
                currency:OrderRequestData.cart.currency,
                shipping:shipping,
                payment_method_types: ['cash', 'external'],
                phone:String(billInfoObj.phone),
                email:String(billInfoObj.email)
            }});
            
          // console.log(response);
          if(response.data.success){
            // setShowAlertSuccess(true);
            // Paymenr Succeeded
              cookies.remove('current_order');
              cookies.remove('current_order', {path:'/'});

            setLoadingText('Sending Order!');
            
            // Set Payment Info
            OrderRequestData.paymentInfo =  response.data.p_id;          

            // Create Order POST
            var OrderReq = await DataService.createOrder(OrderRequestData).then((response)=>{
              // console.log(response.data);
              return response.data;
            }).finally((obj, err) =>{
              // console.log(obj);
            });

            if(!OrderReq.success){
              // Order Creation Failed
              setLoadingText('Order Failed.');
              setLoading(false);
              // setShowAlertFailure(true);
              setShowAlertOrderFailure(true);
            }else{
              // Order Success..
              // Set order_id in store.
              dispatch(Actions.setOrder(OrderReq.order));
               //  & Remove Current Order 
               
              cookies.remove('current_order');
              cookies.remove('current_order', {path:'/'});
              cookies.set('current_order', OrderReq.order,  {path:'/'});
              // Refresh or Clear Cart
              dispatch(Actions.updateCart({
                dishes:[],
                itemCount:0,
                cartTotal:0,
                taxlabel:"VAT",
                taxpercent:5,
                tax:0,
                discountpercent:0,
                promo:0,
                tip:0,
                totalCost:0,
                delivery_fee:0
            }));
            cookies.remove('cart', {path:'/'});
              setLoadingText('Order Created!');
              setLoading(false);
              setRedirectPage(true);
              setShowAlertFailure(false);
            }
          
            
          }else{            
            setShowAlertSuccess(false);
            setShowAlertFailure(true);
          }
          
          setLoading(false);
          // setShowAlertEmpty(false);
        // }catch(error){
          // console.log(error)
        // }
    
  };
  // Payments process

  // const renderPaymentSummary = (cart)=>{
    
  //   return(
  //     <div className="col-12">
  //     <hr/>
  //      <center><b>BILL SUMMARY</b></center> 
  //     <br/>
  //         <div className="row">
  //             <div className="col-4">Sub Total</div>
  //             <div className="col-4"><hr/></div>
  //             <div className="col-4"><center><CurrencySymbol/> {cart.cartTotal.toFixed(2)}</center></div>
  //         </div>
  //         <div className="row">
  //             <div className="col-4"><small>Tip</small></div>
  //             <div className="col-4"><hr/></div>
  //             <div className="col-4"><center><small><CurrencySymbol/> {cart.tip.toFixed(2)}</small></center></div>
  //         </div>
  //         <div className="row">
  //             <div className="col-4"><small>Promo</small></div>
  //             <div className="col-4"><hr/></div>
  //             <div className="col-4"><center><small><CurrencySymbol/> {cart.promo.toFixed(2)}</small></center></div>
  //         </div>
  //         <div className="row">
  //             <div className="col-4"><small>Taxes ({cart.taxlabel})</small></div>
  //             <div className="col-4"><hr/></div>
  //             <div className="col-4"><center><small><CurrencySymbol/> {cart.tax.toFixed(2)}</small></center></div>
  //         </div>
  //         <div className="row">
  //             <div className="col-4"><b>Total Cost</b></div>
  //             <div className="col-4"><hr/></div>
  //             <div className="col-4"><center><b><CurrencySymbol/> {cart.totalCost.toFixed(2)}</b></center></div>
  //         </div>
  //         <hr/>
  //     </div>
  //   );
  // }

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
                              {(placeholder)=><Form.Control ref={node => (billInfo.zip = node)} name="zip"  type="text" inputmode="numeric" pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$" placeholder={placeholder} required/>}
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

                  {showAlertBillInfo && <Alert variant="warning">{t('payment_msg_bill_info')}</Alert>}

                </div>
              );
          }

        }catch(e){
          console.log('Some Error related to User Login happened');
        }
        return null
  }

  const renderCheckoutForm = ()=>{
    return(
      <div className="col-12 background-white">
        <Form onSubmit={handleSubmit} >          
          <center>
          {showAlertSuccess && <Alert variant="success"><b>{t('payment_success')}</b><small><br/>{t('payment_msg_order_failed')}</small></Alert>}
          {showAlertFailure && <Alert variant="danger"><b>{t('payment_failed')}</b></Alert>}  
          </center>
          <div className="row">
        {redirect && <Redirect to='/order/current'/>}
          <div className="col-12 menu-footer">
          <FormattedMessage id="btn_pay" defaultMessage="Pay">
           {(label)=><Button disabled={loading} className="wide-btn" type="submit" variant="dark" label={label} ><b> {t('btn_place_order')} <CurrencySymbol/> {cart.totalCost.toFixed(2)}</b></Button>}
           </FormattedMessage>
          </div>
          </div>
        </Form>
      </div>
    );
  }

  return(
    <LoadingOverlay
    active={loading}
    spinner
    text={loadingText}
    style={{'z-index':'200'}}
    >
    <div className="col-12">
    
    <div className="row">
      <div className="col-12">
      {/* <center><h4><b>Payment</b></h4></center> */}
      {/* <hr/> */}
      </div>
    </div>
    <div className="row">
      <div className="col-12">
      {/* <center><h6><b>Debit / Credit Card</b></h6></center> */}
      {showAlertOrderFailure && <Alert variant="danger"><b>{t('order_failed')}</b></Alert>}  
      </div>
    </div>
    

    <div className="row">
    <div className="col-12 background-white">
    <SubTitle text={t('payment_bill_info_title')}/>
    {/* <center><b>Billing Info.</b></center><br/>
     */}
    </div>  
    
    {renderBillingInfo()}
    <br/>
    </div>
   
    <br/>
    <div className="row">
    <div className="col-12 background-white">
     <SubTitle text={t('payment_info_title')}/>  
     <br/>
    </div>
      
      <div className="col-12 background-white margin-btm">
      <center>
            <h5><b>{t('proceed_to_place')}</b></h5>
            {parseInt(tablenum) !== -2 &&<h6>{t('pay_at_counter')}</h6>}
             {parseInt(tablenum) === -2 && <h6>{t('pay_to_delivery_cash')}</h6>}
          </center>
      
      </div>
      {renderCheckoutForm()}
    </div>
    {/* <hr/> */}
    </div>
    
</LoadingOverlay>
 
  );
};

// const stripePromise = loadStripe("pk_test_51HBhc2Cmx7edPwMa2vgiiUlonAhCJDf6VGEDmirOgBbrOGQFsGUpMel7aROUfQi9lirsEGeYVQpzjNClNGnAgpIZ00I9Ey33uE");


const Checkout = ()=>{
    return(
        <CheckoutForm/>
    );
};

export default Checkout;

//Stripe_API_Key_private = sk_test_51HBhc2Cmx7edPwMaiiWooeZExH2E8WAEzLFsovee1J6MBtDuyDOBKFnvnvan0YgH4XHmIf7g5tzvq8wkfQ2xJl7I00ydmg27vn
// Public = pk_test_51HBhc2Cmx7edPwMa2vgiiUlonAhCJDf6VGEDmirOgBbrOGQFsGUpMel7aROUfQi9lirsEGeYVQpzjNClNGnAgpIZ00I9Ey33uE

