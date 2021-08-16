import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
// import {Navbar, NavbarBrand} from 'reactstrap';
// import {Image} from 'react-bootstrap';
import styled from "styled-components";
import {MdAccountCircle, MdKeyboardArrowLeft} from "react-icons/md";
// import { FaArrowLeft } from 'react-icons/fa';
// import history from '../history';
import {
    Link, Redirect, useLocation
  } from "react-router-dom";
// var Action = require('../redux/actions/index');
const ENV = require('../services/env-vars');

function Heading(props) {
  const restaurant = useSelector(state => state.restaurant);
  const [redirect, setRedirect] = useState({state:false, to:"/"});
  const location = useLocation();
  var logo = restaurant.country === 'India';
  var [to, setTo]= useState(false);
  // console.log(props);
  
  useEffect(()=>{
    // props.history.onpopstate = function(event) {
    //   alert(`location: ${document.location}, state: ${JSON.stringify(event.state)}`)
    // }
    if(!to){
      setTo(restaurant.open ? '/menu6': '/');
    
    
      let now = new Date();
      now = (now.getHours()* 100) + now.getMinutes();
      let opening = restaurant.time_opening.split(":").map(Number);
      opening = (opening[0] *100) + opening[1];
      let closing = restaurant.time_closing.split(":").map(Number);
      closing = (closing[0] *100) + closing[1];
      if(now < opening || now > closing){
          // this.restaurant_open = false;
          setTo('/');
      }
    }
  }, [to, restaurant.open, restaurant.time_opening, restaurant.time_closing]);

  const goBack = () =>{
    // props.history.push('/sbakery');
    // props.history.replace('https://checkout.stripe.com/pay', [{pathname:'/menu'}]);
    // console.log(location.pathname);
    if(location.pathname.includes('stripe')){
        setRedirect({ state:false});
        setRedirect({to:"/cart", state:true});
    }else if(location.pathname.includes('cart')){
      setRedirect({ state:false});
        setRedirect({to:"/menu6", state:true});
    }else
    switch(location.pathname){  
      case '/order/current':
        setRedirect({ state:false});
        setRedirect({to:"/menu6", state:true});
        break;
      case '/stripe':
        setRedirect({state:false});
        setRedirect({to:"/cart", state:true});
        break;

      case '/cart':
        setRedirect({ state:false});
        setRedirect({to:"/menu6", state:true});
        break;
      
      case '/menu6':
        setRedirect({state:false});
        setRedirect({to:"/", state:true});
        break;

      case '/welcome':
        setRedirect({state:false});
        setRedirect({to:"/", state:true});
        break;
      case '/':
        // setRedirect({to:"/welcome", state:true});
        break;
      default:
        setRedirect({to:"/", state:false});
        props.history.go(-1);
    }
    // setRedirect({to:"/", state:false});
  
  }

  return (
    <Container {...props}>
    {redirect.state && <Redirect to={redirect.to}/>}
      <LeftWrapper>
        <LeftIconButton>
          <ButtonOverlay>
            <LeftText>
               {/* <MdKeyboardArrowLeft onClick={()=>{goBack()}}/> */}
               
               </LeftText>
          </ButtonOverlay>
        </LeftIconButton>
      </LeftWrapper>
      <RightWrapper>
        <RightIconButton>
          <ButtonOverlay>
          {/* <Link to="/home">
            <RightText><MdAccountCircle/></RightText>
            </Link> */}
          </ButtonOverlay>
        </RightIconButton>
      </RightWrapper>
      <Link to={to}>
      {/* <span className="tabme-logo-in">tabme.</span> */}
      {!logo &&<CenterText>tabme<Dot>.</Dot></CenterText>}         
      {/* {!logo && <Image src={`${ENV.CDN_URL}/public_assets/tabme-logo-proto-small-pride.png`}></Image>} */}
      </Link>
    </Container>
  );
}

const Container = styled.div`
display: flex;
flex-direction: row;
background-color: white;
padding: 10px;
padding-bottom: 5px;
position: fixed;
width:100%;
z-index:9999;
top:0px;
background-color:white;
box-shadow: 0px 1px 3px 3px rgba(209, 209, 209, .3);
min-height: 64px;
`;
const ButtonOverlay = styled.button`
display: block;
background: none;
height: 100%;
width: 100%;
border:none
`;
const LeftWrapper = styled.div`
  flex: 1 1 0%;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const LeftIconButton = styled.div`
  flex-direction: row;
  border: none;
`;

const LeftText = styled.span`
  font-family: Arial;
  font-size: 1.9rem;

  align-self: center;
  color:#5c5c5c;

`;

const RightWrapper = styled.div`
  flex: 1 1 0%;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const RightIconButton = styled.div`
  flex-direction: column;
  display: flex;
  border: none;
`;

const RightText = styled.span`
  font-family: Arial;
  font-size: 1.8rem;
  align-self: center;
  color:#5c5c5c;
`;

const Image = styled.img`
  top: 15px;
  left: calc(50% - 55px);
  width: 110px;
  height: 40px;
  position: absolute;
  object-fit: contain;
`;
const CenterText = styled.span`
top: 15px;
left: calc(50% - 44px);
font-weight:800;
font-size:27px;
color:#0a1e42;
letter-spacing:-2px;
position: absolute;
object-fit: contain;
`;
const Dot = styled.span`
color:#ff9268;
`;


export default Heading;
