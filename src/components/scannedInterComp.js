import React, { useEffect, useState} from 'react';
import { Redirect} from "react-router-dom";
// import Button from 'react-rainbow-components';
import LoadingOverlay from 'react-loading-overlay';
import DataService from '../services/data-service';
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'universal-cookie';
import t from '../i18n/translate';
const cookies = new Cookies();
const Actions  = require('../redux/actions/index');

// const flag = false;
function Process(subprop){
    // console.log(subprop);
    const [loading, setLoading] = useState(true);
    // const [redirect, setRedirect] = useState
    const [qr, setQr] = useState(false);
    // const [redirect, setRedirect] = useState("/welcome");
    var id = String(subprop.id).toLowerCase();  
    const user = useSelector(state => state.user);
    var cart = useSelector(state=> state.cart);
    
    /*
    Send - QR ID 
    Receive - Object with Restaurant Obj, 
    Set Store
    - restaurant:gastro
    - tableNum: tableNum
    */
   useEffect(()=>{
       console.log('MENUUUUUU',id);
    //    console.log(document.location.hostname.split('.')[0], 'menu.tabme.io'.split('.'))
       if(!qr){
        setTimeout(async ()=>{
            await DataService.getQRInfo({id: id.match(/^[0-9a-fA-F]{24}$/) ? id : "" , alias:id}).then((res)=>{
                // console.log(res.data);
                if(!qr){ 
                        if(res.data.success){
                            setQr(res.data);
                            // setLoading(true);
                        }else{
                            setLoading(false);
                        }
                    }
                });
           }, 0);  
       }
        
   },[id, qr]);
   
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

    return (
        <LoadingOverlay
        active={loading}
        spinner
        text='Loading...'
        >
        <div className="col-12">
            <div className="row">
                <div className="col-12">
                <div className="loading-div">
                <center>{t('restaurant_not_found')}</center>
                {loading && <Redirect to={"/menu6"}/>}
                </div>
                </div>    
            </div>
        </div>
        </LoadingOverlay>
    );
}

function Scanned(props){
    return <Process id={props.match.params.id}/>
}

export default Scanned;

