import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import {Image} from 'react-bootstrap';
import CurrencySymbol from '../CurrencySymbolComponent';
/**
 * Card is a component that renders a card with a title and image
 * @param  {props} props
 */
const POCard = props => {
    // console.log(POCard);
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Wrapper
      className={props.className}
      centered={props.centered}
      onClick={props.onClick}>
              
        <POImage
        src={props.image}
        centered={props.centered}
        onLoad={() => setImageLoaded(true)}
        isLoaded={imageLoaded}
        />
      <TextWrapper centered={props.centered}>
        <Title>{props.title}</Title>
        {props.text && <Text>{props.text}</Text>}
        {props.children}
      </TextWrapper>
      <Price><b>
    <CurrencySymbol currency={props.currency}/>&nbsp;{props.price.toFixed(2)}</b></Price>
    <Active>{props.open &&  <span>active</span>}</Active>
    </Wrapper>
  );
};

POCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.object.isRequired,
  text: PropTypes.object,
  centered: PropTypes.bool,
  children: PropTypes.object,
  className: PropTypes.string,
  price: PropTypes.number,
  open:PropTypes.bool,
  currency:PropTypes.string
};

POCard.defaultProps = {
  title: 'Example'
};

export default POCard;

const Wrapper = styled.div`
  max-width: 500px;
  min-height:80px;
  background: white;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  transition: all 0.3s ease-out;
  transform: translateZ(0);

  &:hover {
    box-shadow: rgba(45, 45, 45, 0.05) 0px 2px 2px,
      rgba(49, 49, 49, 0.05) 0px 4px 4px, rgba(42, 42, 42, 0.05) 0px 8px 8px,
      rgba(32, 32, 32, 0.05) 0px 16px 16px, rgba(49, 49, 49, 0.05) 0px 32px 32px,
      rgba(35, 35, 35, 0.05) 0px 64px 64px;
    transform: translate(0, -4px);
  }

  &:hover img {
    box-shadow: rgba(45, 45, 45, 0.02) 0px 2px 2px,
      rgba(49, 49, 49, 0.02) 0px 4px 4px, rgba(42, 42, 42, 0.02) 0px 8px 8px,
      rgba(32, 32, 32, 0.02) 0px 16px 16px, rgba(49, 49, 49, 0.02) 0px 32px 32px,
      rgba(35, 35, 35, 0.02) 0px 64px 64px;
    transform: translate(0, -2px);
  }

  ___CSS_0___
`;

const Title = styled.h2`
  font-size: 15px;
  color: #333333;

  margin: 0px 10px 10px 30px;
  position:absolute;
  display: -webkit-box;
  left:52px;
  top:15px;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  ___CSS_0___
`;

const POImage = styled.img`
  width: 55px;
  height: 55px;
  margin: 1px 1px 1px 1px;
  border-radius: 50%;
  display: block;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.3s ease-out, transform 0.3s ease-out,
    opacity 0.1s ease-out;
  transition-delay: 0.1s;
  position: absolute;
  left:10px;
  top:10px;
  
  @media (min-width: 450px) {
    width: 60px;
    height:60px;
  }

  ___CSS_0___

  ___CSS_1___
`;

/*
const ImageWrapper = styled.div`
    display: block;
    width: 50px;
    margin: -30px auto 0px;
    border-radius: 8px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.04);
    transition: box-shadow 0.3s ease-out, transform 0.3s ease-out,
    opacity 0.1s ease-out;
    transition-delay: 0.1s;
    opacity: 0;
    @media (min-width: 450px) {
        width: 60%;
    }

    ___CSS_0___

    ___CSS_1___

`;
*/

const TextWrapper = styled.div`
   
  ___CSS_0___
`;

const Text = styled.p`
  margin: 0px 10px 10px 30px;
  position:absolute;
  display: -webkit-box;
  left:52px;
  top:35px;
  color: #2f4f4f;
`;

const Price = styled.div`
  font-size:15px;
  font-weight:400;
  margin: 0px 10px 10px 30px;
  position:absolute;
  display: -webkit-box;
  right:5px;
  top:15px;
  color: #2f4f4f;

  @media (max-width: 325px) {
    right:0px;
    margin: 0px 10px 10px 10px;
    font-size:12px;

  }
`;

const Active = styled.div`
  font-size:12px;
  font-weight:400;
  margin: 0px 10px 10px 30px;
  position:absolute;
  display: -webkit-box;
  right:5px;
  top:38px;
  color: forestgreen;

  @media (max-width: 325px) {
    right:0px;
    margin: 0px 10px 10px 10px;
    font-size:12px;

  }
`;