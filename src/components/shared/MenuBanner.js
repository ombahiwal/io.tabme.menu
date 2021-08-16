import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import {Button, ButtonGroup, ButtonIcon} from 'react-
import {Image} from 'react-bootstrap';
/**
 * Card is a component that renders a card with a title and image
 * @param  {props} props
 */
const ENV = require('../../services/env-vars');
const MenuBanner = props => {
  // const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Wrapper
      className={props.className} 
      >
      <BannerWrapper style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${ENV.CDN_URL}/user_public_assets/banners/${props.restaurant._id}.png)`}}>
     </BannerWrapper> 
      
      <TextWrapper>
        {/* <Image fluid="true" src={"https://s3.eu-west-2.amazonaws.com/tabme.info/user_public_assets/"+props.restaurant._id+".png"} rounded/>  */}
      </TextWrapper>
      {/* <Image
        // src={props.image}
        src ={`${ENV.CDN_URL}/user_public_assets/banners/${props.restaurant._id}.png`} fluid="true"
        // onLoad={() => setImageLoaded(true)}
        // isLoaded={imageLoaded}
      /> */}
      <LogoImage src={`${ENV.CDN_URL}/user_public_assets/logos/${props.restaurant._id}.png`}/>
    </Wrapper>
  );
};

MenuBanner.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  restaurant : PropTypes.object
};

MenuBanner.defaultProps = {
  title: 'Example'
};

export default MenuBanner;

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


const TextWrapper = styled.div`
  ___CSS_0___
`;


const LogoImage = styled.img`
  width: 150px;
  height: 150px;
  margin: 1px 1px 1px 1px;
  border-radius: 50%;
  display: block;
  box-shadow: 0px 8px 13px 4px rgb(0 0 0 / 7%);
  transition: box-shadow 0.3s ease-out, transform 0.3s ease-out,
    opacity 0.1s ease-out;
  transition-delay: 0.2s;
  position: absolute;
  left:calc(50% - 75px);
  bottom:-50px;
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

