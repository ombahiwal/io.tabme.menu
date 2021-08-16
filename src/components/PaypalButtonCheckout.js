import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import { loadStripe } from '@stripe/stripe-js';
// import Axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
// import CurrencySymbol from './CurrencySymbolComponent';
import Cookies from 'universal-cookie';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import DataService from '../services/data-service';
import PaypalButton from './PaypalButton';
// import scriptLoader from "react-async-script-loader";
import {Alert} from "react-bootstrap";
var cookies = new Cookies();
var Actions = require('../redux/actions/index');
var payment_server_url;
// var stripe_key = "";
const ENV = require('../services/env-vars');
const __DEV__ = document.domain === 'localhost';
if(__DEV__){
    // payment_server_url = "http://localhost:8006/api/";
    payment_server_url = "http://localhost:8000/api/v1/ps/";
}else{
  payment_server_url = ENV.API_URL+"/api/v1/ps/";
}



/*
async function loadScript(src){
    return new Promise(resolve => {
        const script = document.createElement('script');
        script.src = src;
        
        script.onload = () =>{
            resolve(true); 
        }
        script.onerror = () =>{
            resolve(false);
        }
        document.body.appendChild(script);
    });
}
*/

export default function PaypalCheckout(props) {
  var cart = useSelector(state => state.cart);
  // const user = useSelector(state => state.user);
  const tablenum = useSelector(state=>state.tablenum);
  var restaurant = useSelector(state => state.restaurant);
  const dispatch = useDispatch();
  // const [showAlert, setShowAlert] = useState(false);
  // const [showAlertFailure, setShowAlertFailure] = useState(false);
  const [showAlertOrderFailure, setShowAlertOrderFailure] = useState(false);
  // const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  // const [showAlertEmpty, setShowAlertEmpty] = useState(false);
  // const [showAlertBillInfo, setShowAlertBillInfo ] = useState(false);
  // const [cardInfoComplete, setCardInfoComplete] = useState(false)
  // const [loading, setLoading] = useState(false);
  // const [loadingText, setLoadingText] = useState("Processing...");
  const [redirect, setRedirectPage ] = useState(false);
  const [billuserinfo, setBilluserinfo] = useState(false);
//   const CLIENT_ID = "AaztiV6NziBPJeZ5z1ozBlr_uytjUjgFO5p8btAxJVwxlkmBCDdu2AqUO04bdwgT00T-FEjem36g2X5i"
  // var billInfo = {
  //   fname:"",
  //   lname:"",
  //   email:"",
  //   phone:"",
  //   address:"",
  //   zip:""
  // }
  
  // console.log(props, user)

    async function paypalOrderCancelled(){
        props.cartLoading(false, 'Payment Not Received!')
    }

  async function initiateTabmeOrder(paymentData){
    props.cartLoading(true, 'Payment Successful!');
    // console.log(paymentData, 'Parent');
    var shipping_address = paymentData.details.purchase_units[0].shipping.address;
    shipping_address = shipping_address.address_line_1+ " ";
    var billInfoObj;
    setBilluserinfo(paymentData.data.payment_id);
    
    billInfoObj = {
        fname:paymentData.details.payer.name.given_name,
        lname:paymentData.details.payer.name.surname,
        email:paymentData.details.payer.email_address,
        phone:paymentData.details.payer.email_address,
        address:shipping_address,
        zip:shipping_address.postal_code,
        guest:true
      }; 
    
      
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
      OrderRequestData.cart.pmethod = "Paypal Client";
      props.cartLoading(true, 'Bestellung senden...');
      const response = await axios.post(payment_server_url+"paypal/client", 
        { 
          user:billInfoObj,
          tablenum:tablenum,
          restaurant_id:restaurant._id,
          pay_req:{ 
              amount: Math.trunc(cart.totalCost*100), 
              currency:OrderRequestData.cart.currency,
              payment_method_types: ['paypal', 'client'],
              email:String(billInfoObj.email)
        },
        api_resp:paymentData
      });      
      // console.log(response);
      if(response.data.success){
        // setShowAlertSuccess(true);
        // Paymenr Succeeded
        props.cartLoading(true, 'Verarbeitung...');
        
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
          props.cartLoading(true, 'Bestellung fehlgeschlagen!');
          
          // setShowAlertFailure(true);
          props.cartLoading(false, 'Bestellung fehlgeschlagen!');
          setShowAlertOrderFailure(true);
        }else{
          // Order Success..
          props.cartLoading(true, 'Bestellung gesendet!');
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
            taxlabel:"included",
            taxpercent:0,
            tax:0,
            delivery_fee:0,
            discountpercent:0,
            promo:0,
            tip:0,
            currency:'',
            totalCost:0,
            notes:"",
            promo_data:null,
            tax_data:null,
            pickup_date:null,
            order_label:null
        }));
        cookies.remove('cart', {path:'/'});
        //   setLoading(false);
          setRedirectPage(true);
          // setShowAlertFailure(false);
        }
      }else{            
        // setShowAlertSuccess(false);
        // setShowAlertFailure(true);
      }
    //   setLoading(false);
      // setShowAlertEmpty(false);
    }
  
  // useEffect(()=>{  
  // }, []);
  return (
        <div>
            {redirect && <Redirect to={'/order/current'}/>}
           {showAlertOrderFailure && <Alert variant="danger">Es ist ein Fehler aufgetreten!
                Falls ein Betrag abgezogen wurde, kontaktieren Sie bitte das Restaurant für eine Rückerstattung mit <b>Ref. {billuserinfo}</b>.</Alert>}
            {(restaurant.info && restaurant.payment_methods.includes('paypal') && restaurant.info.paypal_client_id)  && <PaypalButton restaurant={restaurant} cart={cart} orderCancelled={paypalOrderCancelled} initiateTabmeOrder={initiateTabmeOrder}/>}
        </div>
  );
}

 
