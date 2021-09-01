
import React, { useEffect, useState } from 'react';
// import {Image} from 'react-bootstrap';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import {RiInstagramLine, RiFacebookBoxFill, RiTwitterFill} from 'react-icons/ri';
import LinkButton from './shared/LinkButton';
import PaymentButton from './shared/PaymentButton';
import axios from 'axios';
import Cookies from 'universal-cookie';
import MenuBanner from './shared/MenuBanner';
import { useDispatch, useSelector } from "react-redux";
import DataService from '../services/data-service';
import LoadingOverlay from 'react-loading-overlay';
import t from '../i18n/translate';

const cookies = new Cookies();
const Actions  = require('../redux/actions/index');

// import t from '../i18n/translate';

// var restaurant = {
//     image: 'https://www.tabme.info/user_public_assets/test.png',
//     about: 'Machen Sie lange Reisen überflüssig und genießen Sie eine authentische Auswahl an täglich frisch zubereiteten ost- und südostasiatischen Gerichten.',
//     active_menu_id: '5f4908c3e25e870846903598',
//     bank_code: '',
//     bank_account_number: 'true',
//     bank_beneficiary: '',
//     alias: 'afusion',
//     info: {
//       paypal_client_id: 'AaztiV6NziBPJeZ5z1ozBlr_uytjUjgFO5p8btAxJVwxlkmBCDdu2AqUO04bdwgT00T-FEjem36g2X5i',
//       razorpay_account_id: '-',
//       delivery: {
//         delivery_msg: 'Hello this is delivery message 4',
//         delivery_fee: '1.2',
//         delivery_time: 60,
//         delivery_open: true
//       },
//       pickup: {
//         pickup_msg: 'Hello welt this is pickup message',
//         pickup_address: 'Streeto Pickpo in-o di italiano',
//         pickup_open: true
//       },
//       table: {
//         table_open: true,
//         table_msg: ' ',
//         table_time: 25,
//         table_count: 20
//       },
//       _id: '608b033547deb4249f97e3f1',
//       updatedAt: '2021-05-05T06:21:42.543Z',
//       createdAt: '2021-05-05T06:21:42.543Z'
//     },
//     open: true,
//     pickup_time: '30',
//     stripe_account_id: 'acct_1IG6qQR8LPTWYQS0',
//     time_opening: '01:00',
//     time_closing: '23:59',
//     payment_methods: [
//       'cash',
//       'stripe',
//       'paypal'
//     ],
//     auto_accept: false,
//     order_options: [
//       'table',
//       'delivery',
//       'pickup'
//     ],
//     _id: '5f4298d1a1f2d03aedeb6cb3',
//     fname: 'Test',
//     lname: 'Man',
//     rname: 'Asian Fusion',
//     email: 'r@r.co',
//     password: '',
//     phone: '+919373130909',
//     rphone: '9030303',
//     location: '48.106655,11.5818041',
//     address: '13, Tesla Straße',
//     zip: '00000',
//     region: 'Bayern',
//     country: 'Germany',
//     createdAt: '2020-08-23T16:26:57.947Z',
//     updatedAt: '2021-07-19T18:00:40.387Z',
//     __v: 0,
//     bname: 'Tabme UG (haftungsbeschränkt)',
//     city: 'München'
//   }

  const Links = props =>{
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
              //  console.log(res.data);
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
        setTimeout(async ()=>{
          await axios.post('https://api.tabme.io/api/v1/ds/tlinks/get/restaurant',  {restaurant_id:restaurant._id, alias:restaurant.alias}).then((resp, err)=>{
            if(!err){
              // console.log(resp.data.link_data);
              setLinkButtons(resp.data.link_data.links);
            }
          });
      },0); 
      }
    }, [restaurant]);
    var link_buttons2 = [
        {type:"cash", route:'https://google.com', label:"tabme menu", icon1:"", color:'#2f4f4f'},
        {type:"stripe", route:'/stripe', label:"Lieber", icon1:"", color:'#0a1e42'},
    ];
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
            // console.log('hrere');
            if(parseInt(qr.table_number) === -4){
                // console.log('hrere')
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

    return(
        <div>
            {restaurant && <Wrapper>
            <MainWrapper>
                {/* <CenterText>
                {true && <LogoImage src={`https://cdn.tabme.io/user_public_assets/logos/${restaurant._id}.png`}/>}
                </CenterText> */}
                <MenuBanner restaurant={restaurant}/>
            </MainWrapper>
            <center>
            
            <div className="theme-card">
            <h4><b>{restaurant.rname}</b></h4>
            {/* <p className="about-restaurant">{restaurant.about}</p> */}
            </div>
            <div>
              {/*<span>
            
             <PaymentButton color={'#2f4f4f'} mode={restaurant.mode} link={restaurant.mode ? 'https://app.tabme.io/'+restaurant.alias : "menu6"} id={10} text={'Menu'} /></span> */}
            {link_buttons.map((lbtn, idx)=>{
              if(lbtn.active){
                if(lbtn.type === 'default'){
                  switch(lbtn.link_address){
                    case 'menu':
                      return <span><PaymentButton color={'#2f4f4f'} mode={restaurant.mode} link={restaurant.mode ? 'https://app.tabme.io/'+restaurant.alias : "menu6"} id={10} text={'Menu'} /></span>
                    case 'pay':
                      return <span  key={idx+10}><LinkButton route={false} color={lbtn.color} link={`https://pay.tabme.io/${restaurant.alias}`} id={idx+10} text={lbtn.label} icon1={lbtn.icon1}/></span>
                    case 'about':
                      return <span  key={idx+10}><LinkButton route={false} color={lbtn.color} link={`/${restaurant.alias}/about`} id={idx+10} text={lbtn.label} icon1={lbtn.icon1}/></span> 
                  }
              }else{
                  return <span  key={idx+10}><LinkButton route={false} color={lbtn.color} link={lbtn.link_address} id={idx+10} text={lbtn.label} icon1={lbtn.icon1}/></span>
              }
              }
                        
                
            })}

            </div>
            {/* <div className="theme-card">
              <h3>
                  <RiInstagramLine style={{color:'#E1306C'}}/>&nbsp;&nbsp;
                  <RiFacebookBoxFill style={{color:'#4267B2'}} />&nbsp;&nbsp;
                  <RiTwitterFill style={{color:'#1DA1F2'}}/>&nbsp;&nbsp; 
                  <span style={{fontSize:'20px', color:"#657786"}}>luca</span>
              </h3>
            </div> */}
            </center>
            </Wrapper>}
        </div>
    );
  }

  export default Links;
  const Wrapper = styled.div`
  min-height:100vh;
  `;
  const MainWrapper = styled.div`
  min-height:170px;
  object-fit: contain;
  `;
  const CenterText = styled.span`
  top: 70px;
  left: calc(50% - 75px);
  font-weight:800;
  font-size:50px;
  color:#0a1e42;
  letter-spacing:-3px;
  position: absolute;
  object-fit: contain;
`;

const LogoImage = styled.img`
  animation-duration: 1.5s;
  animation-name: slightly_move_up_logo_img;
  top:70px;
  bottom:0px;
  left:calc(50% - 75px);
  width: 150px;
  height: 150px;
  margin: 1px 1px 1px 1px;
  border-radius: 50%;
  display: block;
  box-shadow: 0px 8px 15px 5px rgb(0 0 0 / 10%);
  transition: box-shadow 0.3s ease-out, transform 0.3s ease-out,
    opacity 0.1s ease-out;
  transition-delay: 0.2s;

  border-style: solid;
  border-color: white;
  background-color:white;
  @media (min-width: 450px) {
    width: 150px;
    height:150px;
    bottom:-50px;
    left: calc(50% - 75px)
  }
  ___CSS_0___
  ___CSS_1___
`;
