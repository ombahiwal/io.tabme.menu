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
return(<>
        <Wrapper className={props.className} >
            <BannerWrapper style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${ENV.CDN_URL}/user_public_assets/banners/${props.order.gastro_id}.png)`}}>
            </BannerWrapper>
        </Wrapper>
        <ImageHolder>
        
    <RestaurantLogo style={{'borderColor':status_color(props.order.status)}}>
        <center>
        <Image src={`${ENV.CDN_URL}/user_public_assets/logos/${props.order.gastro_id}.png`} roundedCircle />
        </center>
        </RestaurantLogo>

    <OverlayStatusImage>
        {(props.order.status === 'Completed' || props.order.status === 'Served') && <Image2 src={`${ENV.CDN_URL}/app-public-assets/green-tick.png`}/>}
    </OverlayStatusImage>
    </ImageHolder></>);
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
  position: relative;
  margin-top: -45px;
  margin-left: -50px;
`;

const Image2 = styled.img``;

const ImageHolder = styled.div`
    position: absolute;
    display: block;
    top:0px;
    left: 50%;
    width:110px;
    height:110px;
    align-items: center;
`;

const Image = styled.img`
    height:100px;
    width:100px;
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
  const BannerWrapper = styled.div`
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  
  margin-left: auto;
  margin-right: auto;
  
  min-height:28vh;
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: block;
  `;

  const Wrapper = styled.div`  
  width: 100%;
  background: white;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  transition: all 0.3s ease-out;
  transform: translateZ(0);
  margin-bottom:68px;
  ___CSS_0___
`;


export default OrderStatusImage;