import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {ButtonIcon} from 'react-rainbow-components';
// import { MdAddCircleOutline, MdInfoOutline } from "react-icons/md";
import {BsInfoCircle, BsPlus } from "react-icons/bs";
import CurrencySymbol from '../CurrencySymbolComponent';
import {Button} from 'react-bootstrap';
import RoundButton from './RoundButton';
import {FaLeaf, FaEgg}  from "react-icons/fa";
import { RiLeafLine } from "react-icons/ri";
import {ReactComponent as MeatIcon} from './meat-svgrepo-com.svg';
// import './styledbutton.scss';
// import { ImPlus } from "react-icons/im";
// import {Button, ButtonGroup} from 'reactstrap';
// import StyledButton from './RoundButton';
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
const DCardImage = props => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [aboutExpand, setAboutExpand] = useState(false);  
  const [veg, setVeg] = useState(<BsInfoCircle/>);
   if(!aboutExpand){
    
   }else{}
   useEffect(()=>{

    switch(props.veg){
      case 'Vegan':
        setVeg(<FaLeaf style={{color:"green"}}/>);
      break;
      case 'Veg':
        setVeg(<RiLeafLine style={{color:"green"}}/>);
        break;
      case 'Meat':
        // setVeg(<MeatIcon style={{height:'12px'}}/>);
        setVeg(<BsInfoCircle/>);
      break;
      case 'Egg':
        setVeg(<FaEgg style={{color:"#ffc107"}}/>);
      break;  
    }

   },[]);

  return (
    <Wrapper
      className={props.className}
      centered={props.centered}
      onClick={props.onClickAllergenInfo}
      style={props.dish.image ? {minHeight:'110px', maxHeight:'150px'}: {minHeight:'100px'}}
      >
      {/* <ClickSpace  onClick={props.onClickCustom}/> */}
      <Title>{props.title} <sup>{veg}</sup></Title>
      <TextWrapper  centered={props.centered} >
        <Price ><CurrencySymbol/>&nbsp;{props.price.toFixed(2)}</Price>
        {/* <Veg>{props.veg}</Veg> */}
        {/* {(props.text && aboutExpand) && <TextExpanded onClick={()=>{ if(props.text.length > 87) setAboutExpand(!aboutExpand)}}>{props.text}</TextExpanded>} */}
        {(props.text && !aboutExpand) && <Text
        // onClick={()=>{if(props.text.length > 87) setAboutExpand(!aboutExpand)}}
        >{dishDescShortDisplay(props.text)}</Text>}
        {props.dish.image && <Image src={`https://cdn.tabme.io/user_public_assets/menus/${props.menu_id}/items/${props.dish._id}.png`}
        centered={props.centered}
        onLoad={() => setImageLoaded(true)}
        isLoaded={imageLoaded}
        />}
          {props.children}
  
      </TextWrapper>
    </Wrapper>
  );
};

DCardImage.propTypes = {
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

DCardImage.defaultProps = {
  title: 'Example'
};

export default DCardImage;

const Wrapper = styled.div`
  
  width: 100%;
  max-height:calc(100%);
  max-width:calc(100% - 5px);
  background: white;
  cursor: pointer;
  border-radius: 8px;
  padding: 10px 20px 20px 10px;
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  transition: all 0.2s ease-out;
  transform: translateZ(0);
  box-shadow: rgb(45 45 45 / 5%) 0px 2px 2px, rgb(49 49 49 / 5%) 0px 4px 4px, rgb(42 42 42 / 5%) 0px 8px 8px, rgb(32 32 32 / 5%) 0px 16px 16px;

  @media(min-width:320px){
    max-width:90%;
    margin-left:5%;
    margin-right:5%;
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
// const TextExpanded = styled.span`
//   margin: 5px 95px 12px 0px;
//   font-size:0.75rem;
//   color: #2f4f4f;
//   display: -webkit-box;
//   -webkit-box-orient: vertical;
// `;

const Title = styled.h2`
  font-size: 0.96rem;
  font-weight:600;
  color: #333333;
  margin: 2px 90px 0 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  ___CSS_0___
`;

const Image = styled.img`
    height:100%;
    margin: 0 0 0 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    position: absolute;
    right: 0px;
    bottom: 0px;
    border-radius: 0px 8px 8px 0px;
`;

const TextWrapper = styled.div`
  transition: all 1s;
  height:100%;
  ___CSS_0___
`;

   var Text = styled.span`
    margin: 5px 100px 12px 0px;
    font-size:0.75rem;
    color: #969696;
    font-weight:400;
    display: -webkit-box;
    text-align: justify;
    text-justify: inter-word;
    -webkit-box-orient: vertical;
  `;

const Price = styled.h2`
  font-size: 0.9rem;
  font-weight:600;
  color: #466dd6;
  margin: 6px 0 5px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  position: absolute;
  left: 10px;
  bottom: 1px;
  width:75%;
`;

// const AddBtn = styled.div`

//   color:white;
//   font-weight:600;
//   color: #3aa8f2;
//   margin: 5px 0 5px;
//   overflow: hidden;
//   display: -webkit-box;
//   -webkit-line-clamp: 3;
//   position: absolute;
//   right: 26px;
//   bottom: 21px;
//   border-radius:50%;
// `;

// const Veg = styled.h3`
//   font-size: 0.7rem;
//   font-weight:600;
//   color: gray;
//   margin: 6px 0 5px;
//   overflow: hidden;
//   display: -webkit-box;
//   -webkit-line-clamp: 3;
//   position: absolute;
//   left: 20px;
//   bottom: 1px;
// `;