/* eslint-disable */
import React, { useEffect, useState} from 'react';
import { Redirect} from "react-router-dom";
import { Alert, Button} from 'react-bootstrap';
// import mergeImages from 'merge-images';
// import {Image, Canvas} from 'canvas';
// import Button from 'react-rainbow-components';
import LoadingOverlay from 'react-loading-overlay';
import DataService from '../services/data-service';
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'universal-cookie';
import CurrencySymbol from './CurrencySymbolComponent';
// import {Link} from 'react-router-dom';
import CDCard from './shared/CartDishCard'
import OrderStatusImage from './shared/OrderStatusImage';
import Grid from './shared/Grid';
import t from '../i18n/translate';
import TnC from './shared/TnCFoot';
// import {FormattedMessage} from 'react-intl';
const cookies = new Cookies();
const Actions  = require('../redux/actions/index');

// const flag = false;

function renderCartDishCard(dish, currency){
    var rem = false;
    // console.log('Cart Dish',dish);
  
    return(
       <div key={dish.dish_id}>
       {dish.optionSets.map((optsobj, idx)=>{
        return(<CDCard optionobj={optsobj} cartdish={dish} remove={rem} key={idx} optidx={idx} currency={currency}/>)
        })}
       </div>
    );   
}


function  renderDishes(order){
    // var count;
    // console.log(order.cart.currency);
        if(order.cart.dishes.length>0){
            // count = 0;
            return(<Grid>{order.cart.dishes.map((cartdish)=>{
                // count +=1;
                return(
                    <div key={cartdish.dish_id}>
                    {renderCartDishCard(cartdish, order.cart.currency)}
                    </div>
                );
            })} </Grid>);
        }else{
            return (
                <div className="col-12">
                <center>
                 Seems like you haven't chosen any dishes yet.<br/>
                </center>
                </div>
               );
        }
}

function Process(subprop){
    const [loading, setLoading] = useState(false);
    // const [qr, setQr] = useState(false);
    // const [state, setState] = useState(0);
    const [alertParams, setAlertParams]  = useState({show:false, text:'', variant:'' });
    const [redirect, setRedirect] = useState(false);
    var [pickup, setPickup] = useState({status:false, estimate:0, msg:""});
    var [delivery, setDelivery] = useState({status:false, estimate:0, msg:""});
    const [dt, setDt] = useState('N/A');
    // const id = subprop.id;  
    // const user = useSelector(state => state.user);
    // const restaurant = useSelector(state=>state.restaurant);
    const ENV = require('../services/env-vars');
    var order = useSelector(state=>state.order);
    const dispatch = useDispatch();
    
    // Fetch Order every x seconds y times
   try{

        if(order._id === null){
                try{
                    order = cookies.get('current_order');
                    // console.log(order);
                    if(order._id && order !== undefined){
                        dispatch(Actions.setOrder(order)); 
                        cookies.remove('current_order', {path:'/'});
                    }
                    
                    // console.log(order);
                }catch(e){
                    // console.log(e, 'cookie not set');
                }
            }else{
                // console.log('get cookies');
                cookies.remove('current_order', {path:'/'});
                cookies.set('current_order', order,  {path:'/'});
            }
            }catch(e){}
        



    useEffect(()=>{
        // if(order.open === false || order === null){
        //     setRedirect(true);
        // }
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
        setLoading(true);
        if(order !== undefined){
            // setRedirect(true);
            var dt_order = new Date(order.createdAt);
        var newOrder;
        dt_order = ('0'+(dt_order.getMonth()+1)).slice(-2)+ '/'+ ('0'+dt_order.getDate()).slice(-2)+'/'+dt_order.getFullYear()+' at '+('0'+dt_order.getHours()).slice(-2)+":"+('0'+dt_order.getMinutes()).slice(-2);
        setDt(dt_order);
        }
        
        
        // set image
        // mergeImages([
        //     { src: './green-tick.png', x: 0, y: 0 },
        //     { src: './green-tick.png', x: 32, y: 0 },

        //   ], {Canvas:Canvas, Image:Image})
          
        
        setTimeout(()=>{
            if(order !== undefined){
                if(order.open === false && order.isComplete === false){
                    // Cancelled by restaurant
                    setAlertParams({show:true, text:'order_cancelled_msg', variant:'danger' });
                }
                if(order.isComplete){
                    // Complete and closed
                    setAlertParams({show:true, text:'order_complete_msg', variant:'success' });
                }

                // console.log(order.tablenum);
                switch(parseInt(order.tablenum)){
                    case -1:
                        pickup = {status:true, msg:"hello", estimate:"30"};
                        setPickup({status:true, msg:"hello", estimate:"30" });
                        console.log(pickup, order.pickup_time);
                    break;
                    case -2:
                    // Delivery Orange Color    
                        delivery = {status:true, msg:"hello", estimate:"30"};
                        setDelivery({status:true, msg:"hello", estimate:"30" });
                    break;
                    default:
                  }
                
            }else{
                setRedirect(true);
            }
            
        },0);

        setInterval(async ()=>{
            try{
                newOrder = await DataService.fetchOrder({order_id:order._id});
                // console.log(newOrder);

                if(newOrder === undefined)
                    setRedirect(true);
                else
                    dispatch(Actions.setOrder(newOrder.data.order));

                if(order.open === false && order.isComplete === false){
                    // Cancelled by restaurant
                    setAlertParams({show:true, text:'order_cancelled_msg2', variant:'danger' });
                }
                if(order.isComplete === true){
                    // Complete and closed
                    setAlertParams({show:true, text:'order_complete_msg', variant:'success' });
                }
            }catch(e){
                
            }
            
        },15000);
        setLoading(false);
    },[]);

    return (
        <LoadingOverlay
        active={loading}
        spinner
        text='Loading...'
        >
           {/* <OrderStatusImage order={order}/> */}

        <div className="col-12">
            <div className="row">
            {redirect && <Redirect to="/home"/>}
            </div>
        </div>
        {(!redirect && order) &&
        <div className="col-12">
            <div className="row">
            {/* <hr/> */}
                <div className="col-12">
                {/* <br/> */}
                    <center><h5><b>
                    {/* {t('order_current_head')} */}
                    </b></h5>
                    {/* <h4>"<b>{order._id.slice(18, 24).toUpperCase()}</b>"</h4> */}
                    {/* <h4>"<b>{t(order.status)}</b>"</h4> */}
                    </center>
                </div>
            </div>
            {/* <hr/> */}
            {/* <br/> */} 
            <div className="theme-card">
                <div className="row">
                    <div className="col-12 no-padding-float-left">
                        <center>
                            <br/>
                            {/* <img crossOrigin="anonymous" id="acceptance-img" /> */}
                            <OrderStatusImage order={order}/>
                            <br/>
                            {/* {parseInt(order.tablenum) === -1 && <h5><b>Pickup Order</b></h5>} */}
                            {(!pickup.status && parseInt(order.tablenum) > -1) && <h5><b> {t('table_num', {tablenum:order.tablenum})}</b></h5>}
                            {(pickup.status || parseInt(order.tablenum) === -1) && <h5><b> {t('pickup_order', {id:String(parseInt(order._id.slice(18, 24), 16)).slice(5,8)})} </b></h5>}
                            {(delivery.status || parseInt(order.tablenum) === -2) && <h5><b>{t('delivery_order', {id:String(parseInt(order._id.slice(18, 24), 16)).slice(5,8)})}</b></h5>} 
                            {(parseInt(order.tablenum) === -4) && <h5><b>{order.cart.order_label} - {String(parseInt(order._id.slice(18, 24), 16)).slice(5,8)}</b></h5>} 
                            {order.status === 'Received' && <><br/><h5><b>{t('order_current_state_msg_placed')} <br/></b></h5></>}
                            {/* {order.status !== 'Received' && <h5><b>Your Order is {order.status}.</b></h5>} */}
                            {/* {(!pickup.status && order.status !== 'Cancelled' ) &&  <small>{t('order_current_keep')}</small>} */}
                            {pickup.status &&  <small> {t('order_current_state_msg_pickup',{estimate:pickup.estimate})}</small>}
                            
                        </center>
                    </div>
                </div>
                {/* <hr/> */}
                <div className="row m-2">
                <div className="col-12">
                <center>
                    {/* {order.open && <b>( Live )</b>} */}
                    {alertParams.show &&  <Alert variant={alertParams.variant}><b>{t(alertParams.text)}</b></Alert>}
                </center>

                </div>
                </div> 

            </div>
            <div className="theme-card">
                <div className="row m-3">
                    <div className="col-12 no-padding-float-left">
                        {renderDishes(order)}
                    </div>
                </div> 
            </div>
            
            
            <div className="row">
                <div className="col-12">
                <hr/>
            <div className="theme-card">
            <div className="col-12">
            <div className="row">
            <div className="col-5"> 
            <small><b>{t('order_status')}</b></small>
            </div>
            <div className="col-7 d-flex"> 
            <div className="ml-auto"><h6 style={{color:'#0a1e42'}}><b>
            {(pickup.status && order.status === 'Served') && 'Picked'}
            {!(pickup.status && order.status === 'Served') && <>{t(order.status)}</>}
            </b></h6></div> 
            </div>
            </div>

            <div className="row">
            <div className="col-5"> 
            <small><b>{t('order_total')}</b></small>
            </div>
            <div className="col-7 d-flex"> 
            <div className="ml-auto"><CurrencySymbol currency={order.cart.currency} /> {order.cart.totalCost.toFixed(2)}</div> 
            </div>
            </div>
            {/* {order.cart.promo_data && <><b>Promo : </b> {order.cart.promo_data.promo}</>} */}
             <div className="row">
            <div className="col-5"> 
            <small><b>{t('order_total_items')}</b></small>
            </div>
            <div className="col-7 d-flex"> 
            <div className="ml-auto">{order.cart.itemCount}</div> 
            </div>
            </div>
            

            {/* {!pickup.status && <><div className="row">
            <div className="col-5"> 
            <small><b>Table No. :</b></small>
            </div>
            <div className="col-7 d-flex"> 
            <div className="ml-auto">{order.tablenum}</div> 
            </div>
            </div>
            </>} */}


            <div className="row">
            <div className="col-5"> 
            <small><b>{t('order_id')}</b></small>
            </div>
            <div className="col-7 d-flex"> 
            <div className="ml-auto"><small><b>{order._id.slice(18, 24).toUpperCase()}</b></small></div> 
            </div>
            </div>

            {/* <div className="row">
            <div className="col-5"> 
            <small> <b>Payment ID :</b></small>
            </div>
            <div className="col-7 d-flex"> 
            <div className="ml-auto"><small>{order.paymentInfo.slice(18, 24).toUpperCase()}</small></div> 
            </div>
            </div>
           <br/> */}

                <div className="row">
                <div className="col-5"> 
                <small> <b>{t('order_time_placed')}</b></small>
                </div>
                <div className="col-7 d-flex"> 
                <div className="ml-auto"><small>{dt}</small></div> 
                </div>
                </div>
            </div>
            </div>   


            <hr/>
            {!order.open &&
            <div className="row">
            <div className="col-7"> 
            <br/>
            <a target="_blank" rel="noopener noreferrer" href={`${ENV.CDN_URL}/user_invoices/${order._id}.pdf`}>
            <Button variant="outline-dark" size="small" >
                <b>{t('order_receipt_btn')}</b>
            </Button>
            </a>
            {/* <a target="_blank" href=></a> */}
            </div>
            <div className="col-5 d-flex"> 
            <div className="ml-auto"><small></small></div> 
            </div>
            </div>
            }
            <hr/>
            <div className="row">
            <div className="col-12"> 
                <small>{ pickup.status && <>{t('order_pickup_est_msg')}&nbsp;</>}
                    {t('order_bottom_msg')}</small>
            <br/>
                <span>
                <TnC/>  
                </span>
            </div>
            </div>
            </div>
        
            </div>
            
        </div>}
        </LoadingOverlay>
    );
}

function CurrentOrder(props){
    return <Process/>
}

export default CurrentOrder;