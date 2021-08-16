// Secret 9acWp9k7kXPFjPpDzPgaJLv4
// Key iD rzp_test_qn2BOTg5q3nYpw
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Image, Alert, Form, InputGroup, Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SubTitle from './shared/SubTitle';
import AccountInfoList from './shared/AccountInfo';
import Cookies from 'universal-cookie';
import CurrencySymbol from './CurrencySymbolComponent';
import {Redirect, Link} from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';
import DataService from '../services/data-service';
// const t = require('../i18n/index')
var cookies = new Cookies();
var Actions = require('../redux/actions/index');
// var CurrencyCode =  require('./shared/CurrencyFromCode');
const ENV = require('../services/env-vars');
var payment_backend_url = ENV.API_URL+'/api/v1/ps';
// var payment_backend_url = "http://localhost:8006";



async function loadScript(src){
    return new Promise(resolve => {
        const script = document.createElement('script');
        script.src = src;
        // 'https://checkout.razorpay.com/v1/checkout.js'
        
        script.onload = () =>{
            resolve(true); 
        }
        script.onerror = () =>{
            resolve(false);
        }
        document.body.appendChild(script);
    });
}

const __DEV__ = document.domain === 'localhost';


export default function RazorpayDialog(){
    // const [razorpay_order_id_server, setRazorpayOrderId] = useState('');
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
  const [loadingText, setLoadingText] = useState("Processing...");
  const [redirect, setRedirectPage ] = useState(false);
  // const [billuserinfo, setBilluserinfo] = useState(false);
  const dispatch = useDispatch();
  var billInfo = {
    fname:"",
    lname:"",
    email:"",
    phone:"",
    address:"",
    phone_code:"",
  }

  useEffect(()=>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  },[]);

  async function createOrder(orderinfo, p_id){
    try{
    var OrderRequestData = orderinfo;
    
        // setShowAlertSuccess(true);
        // Payment Succeeded
        setLoadingText('Sending Order!');
        
        // Set Payment Info
        OrderRequestData.paymentInfo =  p_id;          

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
          cookies.remove('current_order', {path:'/'});
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
          setLoadingText('Order Created!');
          setLoading(false);
          setRedirectPage(true);
          setShowAlertFailure(false);
        }  
      setLoading(false);
      // setShowAlertEmpty(false);

    }catch(e){
        setShowAlertOrderFailure(true);
        setLoadingText('Order Failed.');
        setLoading(false);
    }
  }

  // after razorpay payment is complete
  async function handlePaymentSuccess(response,orderinfo, success){
    setLoading(true);
    try{
    var payment_obj = Object.create({ 
        user:Object.create(orderinfo.user),
        tablenum:tablenum,
        restaurant_id:restaurant._id,
        pay_req:{},
        pay_res:response,
        success:success
    });
    const payment_record_response = await Axios.post(payment_backend_url+"/razorpay/tabmepayment", payment_obj).catch();
    if(payment_record_response.data.success && success){
        // create order
            createOrder(orderinfo, payment_record_response.data.p_id);
    }else{            
        setShowAlertSuccess(false);
        setShowAlertFailure(true);
        setLoading(false);
      }
    }catch(e){
        setShowAlertSuccess(false);
        setShowAlertFailure(true);
        setLoading(false);
    }
  }

        // Payments process
  const handleSubmit = async (event) =>{
    event.preventDefault();

    var billInfoObj = {
      fname:billInfo.fname.value,
      lname:billInfo.lname.value,
      email:billInfo.email.value,
      phone:billInfo.phone_code.value+billInfo.phone.value,
      guest:true
    }
    
    if(restaurant === undefined)
      return
    if(restaurant._id === 'test'){
      return   
    }
    if(!restaurant.open){
      return
    }

    if(cart.totalCost <=0){
      return
    }
    
    if(billInfoObj.fname !== "" && billInfoObj.lname !== ""  && billInfoObj.phone !== ""  && billInfoObj.email !== "" && user.email === null){
      setShowAlertBillInfo(false);
    }else if(user.email === null){
      setShowAlertBillInfo(true);
      // console.log('Guest User');
      return
    }

    // Condition for Regular User
    if(user.email !== null){
      billInfoObj = user;
      // console.log('user is present', billInfoObj)
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
    OrderRequestData.cart.pmethod = "RazorPay";
    // setBilluserinfo(OrderRequestData.user);
    // var userbillinfo = 
    // Payment Intent
    try{
    displayRazorpay(OrderRequestData);
    }catch(e){

    }

    
    }
    
    async function displayRazorpay(orderinfo){
      try{

        // razorpay account info for split
        // default account id
        var rz_acc_id = false;
        if(restaurant.info){  
          if(restaurant.info.razorpay_account_id){
            rz_acc_id = restaurant.info.razorpay_account_id;
          } 
        }
        // console.log(rz_acc_id);

        // console.log(orderinfo);
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js').catch((e)=>{
          // console.log(e);
        });
        if(!res){
            alert('razorpay sdk failed, are you online?');
            return
        }
       await Axios.post(payment_backend_url+'/razorpay/order', {currency:orderinfo.cart.currency, amount:orderinfo.cart.totalCost, rz_acc_id:rz_acc_id}).then((t)=>{
            // console.log(t.data);
            // setRazorpayOrderId(t.data.id)
            const options = {
                "key": __DEV__ ?  ENV.RZ_PK_TEST :  ENV.RZ_PK_LIVE , // The Key ID generated from the Dashboard
                "amount": parseInt(orderinfo.cart.totalCost* 100), 
                "currency": orderinfo.cart.currency,
                // "amount": 1000,
                // "currency": 'INR',
                "name": restaurant.rname,
                "description": "tabme India",
                "image": `${ENV.CDN_URL}/app-public-assets/logo-blue-small.png`,
                "order_id":t.data.id, 
                "handler": function (response){
                  handlePaymentSuccess(response, orderinfo, true);
                    // alert(response.razorpay_payment_id);
                    // alert(response.razorpay_order_id);
                    // alert(response.razorpay_signature);
                },
                // function (response){
                    // Payment Success
                    // alert(response.razorpay_payment_id);
                    // alert(response.razorpay_order_id);
                    // alert(response.razorpay_signature);
                // },
                
                "prefill": {
                    "name": orderinfo.user.fname + " " + orderinfo.user.lname,
                    "email": orderinfo.user.email, 
                    "contact": orderinfo.user.phone
                },
                "notes": {
                    "rname": restaurant.rname,
                    "restaurant_id": orderinfo.restaurant_id,
                    "uname": orderinfo.user.fname + " " + orderinfo.user.lname,
                    "razorpay_account_id":rz_acc_id
                },
                "theme": {
                    "color": "#0a1e42"
                }
            };
            var paymentObject = new window.Razorpay(options);
            paymentObject.open();
            paymentObject.on('payment.failed', function (response){handlePaymentSuccess(response, orderinfo, false);}); 
        });
      }catch(e){
        
      }
    }


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
                    <div className="col-12 no-padding-float-left background-white">
                      <Form>
                      <Form.Group>
                        <InputGroup>
                                <Form.Control ref={node => (billInfo.fname = node)} name="fname" type="text"  placeholder="First Name " required />
                                <Form.Control ref={node => (billInfo.lname = node)} name="lname" type="text"  placeholder="Last Name "required />
                          </InputGroup> 
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
    
                        <Form.Group>
                          
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                      
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control ref={node => (billInfo.email = node)} name="email" type="email" placeholder="Email Address" required/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                            <InputGroup>
                        <InputGroup.Prepend>
                        <Form.Control defaultValue={"+91"} ref={node => (billInfo.phone_code = node)} as="select" name="phone_code">
                        <option value="+49">+49</option>
                        <option value="+44">+44</option>
                        <option value="+91">+91</option>
                        </Form.Control>
                        </InputGroup.Prepend>

                                <Form.Control ref={node => (billInfo.phone = node)} name="phone" min="0" type="tel" placeholder="Phone Number" required/>
                            
                            </InputGroup>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                      </Form>
                      <div className="col-12">
                        <Link to="/login"><i><small>Login or Register to tabme</small></i></Link>
                        <Form.Text className="text-muted">
                            <small> 
                              We do not share your information with any third parties. We ensure appropriate security measures to provide you the best customer experience.
                            </small>
                            </Form.Text>
                    </div>
                    <br/>
                      {showAlertBillInfo && <Alert variant="warning">Please check the Billing info.</Alert>}
    
                    </div>
                  );
              }
    
            }catch(e){
              // console.log('Some Error related to User Login happened');
            }
      }
    
      const renderCheckoutForm = ()=>{
        return(
          <div className="col-12 background-white">
            <Form onSubmit={handleSubmit} >          
              <center>
              {showAlertSuccess && <Alert variant="success"><b>Payment Successful!</b><small><br/>(If your order has failed, please try again. The deducted amount will be refunded within 7 working days.)</small></Alert>}
              {showAlertFailure && <Alert variant="danger"><b>Payment Failed!</b><small><br/>(If any amount was deducted, it will be refunded within 7 working days.)</small></Alert>}  
              </center>
              <div className="row">
            {redirect && <Redirect to='/order/current'/>}
              <div className="col-12 menu-footer">
               <Button disabled={loading} onClick={handleSubmit} className="wide-btn" type="submit" variant="dark" label="Pay" ><b> Proceed to Pay <CurrencySymbol/> {cart.totalCost.toFixed(2)}</b></Button>
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
        <div className="col-12 margin-btm">
        
        <div className="row">
          <div className="col-12">
          {/* <center><h4><b>Payment</b></h4></center> */}
          {/* <hr/> */}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
          {/* <center><h6><b>Debit / Credit Card</b></h6></center> */}
          {showAlertOrderFailure && <Alert variant="danger"><b>Order Failed!</b></Alert>}  
          </div>
        </div>
        
    
        <div className="row">
        <div className="col-12 background-white">
        <SubTitle text="Billing Info"/>
        {/* <center><b>Billing Info.</b></center><br/>
         */}
        </div>  
        
        {renderBillingInfo()}
        <br/>
        </div>
       
        <br/>
        <div className="row">
        <div className="col-12 background-white">
         <br/>
         <center>
             powered by<br/>
             <Image src={`${ENV.CDN_URL}/app-public-assets/razorpay-logo-small.svg.png`}/>
             <center><small><a href={`${ENV.CDN_URL}/public_assets/app_public_assets/tc/Datenschutzerklarung_06012021.1_18.docx.html`} rel="noopener noreferrer" target="_blank">privacy policy</a></small></center>
         </center>
        </div>
          
          <div className="col-12 background-white">
              <center>
              </center>
          </div>
          {renderCheckoutForm()}
        </div>
        {/* <hr/> */}
        </div>
        
    </LoadingOverlay>
    )

}


