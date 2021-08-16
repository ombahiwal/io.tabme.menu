import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {ButtonIcon} from 'react-rainbow-components';
// import { MdAddCircleOutline, MdInfoOutline } from "react-icons/md";
import {BsInfoCircle, BsPlus } from "react-icons/bs";
import CurrencySymbol from '../CurrencySymbolComponent';
// import { ImPlus } from "react-icons/im";
// import {Button, ButtonGroup} from 'reactstrap';

/**
 * Card is a component that renders a card with a title and image
 * @param  {props} props
 */

function dishDescShortDisplay(desc){
  if(desc.length > 84){
      return desc.slice(0,79)+"..."
  }else{
      return desc
  }
}
const DCard = props => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [aboutExpand, setAboutExpand] = useState(false);  
   if(!aboutExpand){
    
   }else{
     
  
   
   }
  return (
    <Wrapper
      className={props.className}
      centered={props.centered}
      onClick={props.onClick}
      >
      
      <Image
        src={props.image}
        centered={props.centered}
        onLoad={() => setImageLoaded(true)}
        isLoaded={imageLoaded}
      />
      <TextWrapper centered={props.centered}>
        <Title onClick={props.onClickAllergenInfo}>{props.title} <sup><small><BsInfoCircle/></small></sup> 
        </Title>
        <Price><CurrencySymbol/> {props.price.toFixed(2)}</Price>
        <Veg>{props.veg}</Veg>
        {(props.text && aboutExpand) && <TextExpanded onClick={()=>{ if(props.text.length > 87) setAboutExpand(!aboutExpand)}}>{props.text}</TextExpanded>}
        {(props.text && !aboutExpand) && <Text onClick={()=>{if(props.text.length > 87) setAboutExpand(!aboutExpand)}}>{dishDescShortDisplay(props.text)}</Text>}
        
        <AddBtn>
          <ButtonIcon className="addButton" onClick={props.onClickCustom} variant="border" size="small" icon={<BsPlus/>}></ButtonIcon>
          </AddBtn>
        
        {props.children}
      </TextWrapper>
    </Wrapper>
  );
};

DCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  price: PropTypes.number, 
  allergen: PropTypes.bool,
  veg: PropTypes.string,
  centered: PropTypes.bool,
  children: PropTypes.object,
  className: PropTypes.string,
  onClickAllergenInfo: PropTypes.func,
  onClickCustom: PropTypes.func
};

DCard.defaultProps = {
  title: 'Example'
};

export default DCard;

const Wrapper = styled.div`
  
  width: 100%;
  max-height:calc(100%);
  max-width:calc(100%);
  min-height:60px;
  background: white;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  transition: all 0.3s ease-out;
  transform: translateZ(0);
  @media(max-width:320px){
    max-width:95%
  }

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

const TextExpanded = styled.p`
margin: 8px 25px 12px 0px;
font-size:0.75rem;
color: #2f4f4f;
display: -webkit-box;
-webkit-box-orient: vertical;
`;

const Title = styled.h2`
  font-size: 0.96rem;
  font-weight:600;
  color: #333333;
  margin: 15px 55px 0 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  ___CSS_0___
`;

const Image = styled.img`
  display: flex;
  width: calc(100% - 20px);
  margin: -30px auto 0px;
  border-radius: 8px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.3s ease-out, transform 0.3s ease-out,
    opacity 0.1s ease-out;
  transition-delay: 0.3s;
  opacity: 0;
  @media (min-width: 450px) {
    width: 60%;
  }

  ___CSS_0___

  ___CSS_1___
`;

const TextWrapper = styled.div`
  transition: all 1s;
  ___CSS_0___
`;

   var Text = styled.p`
    margin: 8px 25px 12px 0px;
    font-size:0.75rem;
    color: #2f4f4f;
    font-weight:400;
    display: -webkit-box;
    text-align: justify;
    text-justify: inter-word;
    -webkit-box-orient: vertical;
  `;
const Price = styled.h2`
  font-size: 0.9rem;
  font-weight:600;
  color: #2f4f4f;
  margin: 5px 0 5px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  position: absolute;
  right: 16px;
  top: 0px;
`;

const AddBtn = styled.div`
  font-size: 1.35rem;
  font-weight:600;
  color: #3aa8f2;
  margin: 5px 0 5px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  position: absolute;
  right: 15px;
  bottom: 0px;
`;

const Veg = styled.h3`
  font-size: 0.7rem;
  font-weight:600;
  color: gray;
  margin: 6px 0 5px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  position: absolute;
  left: 20px;
  bottom: 1px;
`;