import React from 'react';
// import {Image} from 'react-bootstrap';
import styled from "styled-components";
import PropTypes from 'prop-types';
const ENV = require('../../services/env-vars');
/*
* @param  {props} props
*/
function status_color(status){
        
    switch(status){
        case 'Received':
            return 'green'
        case 'Preparing':
            return 'yellowgreen'
        case 'Served':
            return 'green'
        case 'Completed':
            return 'green'
        case 'Cancelled':
            return 'red'
        default:
            return 'rgb(10, 30, 66)';
      }  
}


const OrderStatusImage = props => {
    
  
// border-color: ${status_color(props.order.status)};
return(<ImageHolder>
    <RestaurantLogo style={{'borderColor':status_color(props.order.status)}}>
        <center>
        <Image src={`${ENV.CDN_URL}/user_public_assets/logos/${props.order.gastro_id}.png`} roundedCircle />
        </center>
        </RestaurantLogo>

    <OverlayStatusImage>
        {(props.order.status === 'Completed' || props.order.status === 'Served') && <Image2 src={`${ENV.CDN_URL}/app-public-assets/green-tick.png`}/>}
    </OverlayStatusImage>
    </ImageHolder>);
}

OrderStatusImage.propTypes = {
    text: PropTypes.string,
    order: PropTypes.object,
    children: PropTypes.object,
  };

  
  const RestaurantLogo = styled.div`
    border-width:5px;
    border-style: solid;
    
    border-radius: 50%;
    color:red;
    opacity: 0.6;
    align-items: center;
  `;

const OverlayStatusImage = styled.div`
  left: 50%;
  top: 50%;
  position: absolute;
  margin-top: -45px;
  margin-left: -50px;
`;

const Image2 = styled.img``;

const ImageHolder = styled.div`
position: relative;
display: block;
width:210px;
height:210px;
align-items: center;
`;

const Image = styled.img`
    height:200px;
    width:200px;
    max-width:200px;
    max-height:200px;
    border-radius: 50%;
    display: block;
    border-style: solid;
    border-color: white;
    background-color:white;
 
    ___CSS_0___
  
    ___CSS_1___
  `;


export default OrderStatusImage;