import React, {Component, useState, useEffect} from 'react';
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
import DataService from '../services/data-service';
import LoadingOverlay from 'react-loading-overlay';
import t from '../i18n/translate';

import { useDispatch, useSelector } from "react-redux";

// import { turquoise } from 'color-name';
const cookies = new Cookies();
const Actions  = require('../redux/actions/index');

// var Action = require('../redux/actions/index');


const RestaurantAbout = (props)=>{
    const [loading, setLoading] = useState(true);
    // const [redirect, setRedirect] = useState
    const [qr, setQr] = useState(false);
    // const [redirect, setRedirect] = useState("/welcome");
    var id = String(props.match.params.id).toLowerCase();  
    const user = useSelector(state => state.user);
    var cart = useSelector(state=> state.cart);
    // var [restaurant, setRestaurant] = useState(cookies.get('gastro'));
    var [restaurant, setRestaurant] = useState(null);
    var [link_buttons, setLinkButtons] = useState([]);
    
    useEffect(()=>{
        // console.log( document.location.hostname.split('.')[0], 'menu.tabme.io'.split('.'))
        if(!qr){
         setTimeout(async ()=>{
             await DataService.getQRInfo({id: id.match(/^[0-9a-fA-F]{24}$/) ? id : "" , alias:id}).then((res)=>{
                 // console.log(res.data);
                 if(!qr){ 
                         if(res.data.success){
                             setQr(res.data);
                             setRestaurant(res.data.gastro)
                             // setLoading(true);
                         }else{
                             setLoading(false);
                         }
                     }
                 });
            }, 0);  
        }else{
          // Already loaded 
          console.log(restaurant)
        }
      }, [restaurant]);


      const dispatch = useDispatch();
    if(!qr){
        return(
            <LoadingOverlay
            active={loading}
            spinner
            text='Loading...'>
            <div className="loading-div"><br/>
            <center><b>{!loading && t('restaurant_not_found')}</b></center>
            </div>
            </LoadingOverlay>
        );
    }else{
        if(qr.success){
            // Set User if already Logged
            try{
                var u = cookies.get('user');
                if(user.email === null && u !== undefined){
                    dispatch(Actions.setUserSession(u));
                    // console.log('User set', u);
                }else{
                    // console.log('User not Logged!');
                }
            }catch(e){
                // console.log('Some Error related to User Login happened');
            }
            dispatch(Actions.setTableNumber(qr.table_number));
            dispatch(Actions.setRestaurant(qr.gastro));
            dispatch(Actions.setMenu(qr.menu));
            console.log('hrere');
            if(parseInt(qr.table_number) === -4){
                console.log('hrere')
                var new_cart = new Object(cart);
                new_cart.order_label = qr.qr.label;
                dispatch(Actions.updateCart(new_cart));
            }
            cookies.remove('menu', {path:'/'});
            cookies.remove('gastro', {path:'/'});
            cookies.set('gastro', qr.gastro,  {path: '/' });
            cookies.set('menu', qr.menu,  {path: '/' });
        }else
        return(<div><center><b>{t('restaurant_not_found')}</b></center></div>);
    }


    return(<div> 
            {restaurant &&
            <div>
                <MenuBanner restaurant={restaurant}/>
                <div className="theme-card">
                    <center>
                        <h4><b>{restaurant.rname}</b></h4>
                    </center>
                    <br/>
                    <p className="about-restaurant">{restaurant.about}</p>
                </div>
            </div>}
            </div>);
}

export default RestaurantAbout;
  