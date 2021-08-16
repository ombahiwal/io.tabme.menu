import React, { useEffect, useState} from 'react';
// import { Card, Avatar} from 'react-rainbow-components';
import AuthService from '../services/auth.service';
import DataService from '../services/data-service';
import {Link, Redirect } from "react-router-dom";
import Cookies from 'universal-cookie';
import {ListGroup, Button, Collapse} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import LoadingOverlay from 'react-loading-overlay';
// import CurrencySymbol from './CurrencySymbolComponent';
import {FaEdit, FaRegTimesCircle } from 'react-icons/fa';
import POCard from './shared/PastOrderCard';
import SubTitle from './shared/SubTitle';
import AccountInfoList from './shared/AccountInfo';
// import Pagination from 'react-rainbow-components';
import Pagination from 'react-bootstrap/Pagination'
// import { useTranslation } from 'react-i18next';
// import { translate, Trans } from "react-i18next";
// import { withTranslation } from 'react-i18next';
// import i18next from 'i18next';
// import {FormattedMessage} from 'react-intl';
import t from '../i18n/translate';
import TnC from './shared/TnCFoot';
const Actions  = require('../redux/actions/index');
const cookies = new Cookies();
const ENV = require('../services/env-vars');

async function getOrders(email, page, perpage){
    var Orders = await DataService.fetchUserOrders({user_email:email, page:page, perpage:perpage});
    return Orders;
}


function Process(subprop){
    const [loading, setLoading] = useState(true);
    // const [qr, setQr] = useState(false);
    const [state, setState] = useState(false);
    const [redirect, setRedirect] = useState({yes:false, path:"/login"});
    // const [dt, setDt] = useState('N/A');
    const [Orders, setOrders] = useState(false);
    // const id = subprop.id;  
    var user = useSelector(state => state.user);
    // var order = useSelector(state=>state.order);
    const [activePage, setActivePage] = useState(0);
    // const [openCollapse, setOpenCollapse] = useState(true);
    const openCollapse = true;
    const [updateButton, setUpdateButton] =useState(false);
    // console.log(subprop);
    // console.log(cookies.get('user'));
    // const { t, i18n } = useTranslation();

    const dispatch = useDispatch();
    // var Ord;
    function onClickLogout(){
        setLoading(true);
        AuthService.logout();
        dispatch(Actions.setUserSession(
            {
                fname: null,
                lname: null,
                email: null,
                address: null,
                phone: null
              }
        ));
        setRedirect({yes:true, path:'/login'});
    }

    try{

        if(user === null || user.email === null || user ===  {}  ){
            // try cookies
           
            user = cookies.get('user');
            
            if(user === undefined || user=== null || user === {}){
                
                // console.log('user not loggedIn', user);
            }else{
                dispatch(Actions.setUserSession(user));
                // console.log('user Logged : ',user);
            }
        }

    }catch(e){}

    useEffect(()=>{
            setTimeout(async ()=>{
                if(user !== undefined && user !== null){
                    setLoading(true);
                     await getOrders(user.email, activePage, 6).then((r)=>{
                        setOrders(r.data);
                        return r.data;
                    });
                    setState(true);
                    setLoading(false);
                }else{ 
                    setRedirect({yes:true, path:'/login'});
                    setState(false);
                }
                
                // console.log(user)
            }, 0);
    },[activePage, user]);
    var count = 0;
    var dt_order;


    const handleOnChangePage = (action)=>{
        if(activePage >= 0 && (activePage-1 !== -1 || action)){
            setActivePage(action ? activePage + 1: activePage - 1);
            
            setTimeout(async ()=>{
                if(user !== undefined && user !== null){
                    setLoading(true);
                     await getOrders(user.email, action ? activePage + 1: activePage - 1, 5).then((r)=>{
                        setOrders(r.data);
                        return r.data;
                    });
                    setState(true);
                    setLoading(false);
                }
                    
                else{ 
                    setRedirect({yes:true, path:'/login'});
                    setState(false);
                }
                
                // console.log(user)
            }, 0);
        }   
    }

    return(
        <LoadingOverlay
        active={loading}
        spinner
        text='Loading...'
        class="h-100"
        >
        <div className="loading-div" style={{width:'100%', height:'100%'}}>
        {loading && <>
            &nbsp;
            <br/>
            &nbsp;
            <br/>
            &nbsp;
            <br/>
            &nbsp;
            <br/>
            &nbsp;
        </>}
        {(redirect.yes || user === null) && <Redirect to={redirect.path}/>}
        {(state && user !== null && user !== undefined)  && <div className="col-12" >
        <div className="row">
        <div className="col-12 no-padding-float-left background-white">
        <div className="col-12">
        {/* {t('Introduction')} */}
        <SubTitle text={t('home_account_info_title')}>
            { !updateButton && <FaEdit onClick={()=>{setUpdateButton(!updateButton)}}/>}
            { updateButton && <FaRegTimesCircle onClick={()=>{setUpdateButton(!updateButton)}}/>}
            </SubTitle>
            </div>

            <AccountInfoList user={user} update={updateButton} setUpdate={setUpdateButton} loading={setLoading}/>
                <br/>
              </div>  
            
            </div>
            <br/>
            <div className="row">
            
            <div className="col-12 background-white no-padding-float-left">
            {/* <hr/>
            <center>
          

            <small><Button 
                variant="outline-secondary"
                size="sm"
                onClick={() => setOpenCollapse(!openCollapse)}
                aria-controls="past-orders-collapse"
                aria-expanded={openCollapse}
                >show</Button></small>
            </center> */}
            {Orders && Orders.orders.length>0 && <div className="col-12 "><SubTitle text={t('home_past_orders_title')}/> </div>}
            
            <Collapse in={openCollapse}>
            <div id="past-orders-collapse">
        
            <ListGroup>                
            {Orders && Orders.orders.map((order)=>{
                count +=1;
                dt_order = new Date(order.createdAt);
                dt_order = ('0'+(dt_order.getMonth()+1)).slice(-2)+ '/'+ ('0'+dt_order.getDate()).slice(-2)+'/'+dt_order.getFullYear()+' at '+('0'+dt_order.getHours()).slice(-2)+":"+('0'+dt_order.getMinutes()).slice(-2);
                
              return (<ListGroup.Item key={order._id} className="">
              <div className="row">
                <div className="col-12">
                 <center>
                     <Link to={"/order/"+order._id}>
                <POCard 
                    title={  <Link to={"/order/"+order._id}><b> {order.rname}</b></Link>}
                    // image='https://images.igdb.com/igdb/image/upload/t_cover_big/co1lvo.jpg'
                    image={`${ENV.CDN_URL}/user_public_assets/logos/${order.gastro_id}.png`}
                    text={<small> <b></b>{dt_order}</small> }
                    price={order.cart.totalCost}
                    open={order.open}
                    currency={order.cart.currency}
                />
                </Link>
                </center>
                </div> 
              </div>              
              </ListGroup.Item>);  
            })}
          
            {count === 0 && <center>{'No Orders Yet'}</center>}
            </ListGroup>
                </div>
                </Collapse>
                <div className="row" style={{float:'right', margin:'10px'}}>
                <br/>
                    <Pagination>
                            {/* <Pagination.First /> */}
                            <Pagination.Prev onClick={()=>handleOnChangePage(false)} />
                            <Pagination.Item><b>{activePage+1}</b></Pagination.Item>
                            {/* <Pagination.Item>{2}</Pagination.Item> */}
                            {/* <Pagination.Ellipsis /> */}
                            {/* <Pagination.Item>{20}</Pagination.Item> */}
                            <Pagination.Next onClick={()=>handleOnChangePage(true)} />
                            {/* <Pagination.Last /> */}
                            </Pagination>
                    </div>
                <hr/>
            </div>
          
            <div className="col-12" style={{float:'right'}}>
         
                <div className="row" style={{float:'right', margin:'10px'}}>
                    <Button variant="secondary" onClick={onClickLogout}>{t('home_label_logout')}</Button>
                </div>            
            </div>
           
            </div>
            <span>
            <TnC/>
    </span>
        </div>}
        </div>
        </LoadingOverlay>
    );
}



function Home(){
    return <Process props/>
}

export default  Home;