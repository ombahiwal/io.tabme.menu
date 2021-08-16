import React, { useState, PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { ButtonIcon} from 'react-rainbow-components';

// import {ButtonIcon} from 'react-rainbow-components';
import {MdRemove, MdAdd} from "react-icons/md";
import CurrencySymbol from '../CurrencySymbolComponent';
// import { ImPlus } from "react-icons/im";
// import {Button, ButtonGroup} from 'reactstrap';

/**
 * Card is a component that renders a card with a title and image
 * @param  {props} props
 */
function format_name_uscore(name){
  return name.split('_')[0];
}
const calc_options = (opt) =>{
  var opt_price = 0;
  opt.values.map((val)=>{
    opt_price+=(val.addPrice * 100);
  });
  opt_price = opt_price / 100
  if(opt_price > 0){
    return(<>(<CurrencySymbol /> {opt_price.toFixed(2)})</>);
  }else{
    return('');
  }
}

const txt_options = (options, flag=true)=>{
  // var strarr = []
  var str = "";
 
 
    if(options.length === 0 && flag){
      return ""
    }
    var option_value_count = 0;
    var opt_seperator = ",";
  return(
    <>
        {options.map((opt)=>{
            if(opt.values.length >0){
              // str = str + '<b>'+format_name_uscore(opt.title)+ " </b>: " ; 
              option_value_count = opt.values.length;
              return(
                <span key={opt._id}>
                <OptionTitle>{format_name_uscore(opt.title)}&nbsp;</OptionTitle><br/> 
                  {opt.values.map((val, idx)=>{
                    if(option_value_count === idx + 1){
                      opt_seperator = "";
                    }else{
                      opt_seperator = ",";
                    }
                    return (<OptionText key={val._id}>{val.value}{opt_seperator}&nbsp;</OptionText>);
                  })}<br/>
                </span>)
            }
            })}

    </>

  );
}
const CDCard = props => {
  const [imageLoaded, setImageLoaded] = useState(false);
  var count_opt=0;
  var count_dish= props.num;
  var txt;

  
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
      <DishOptionCount><b>{props.optionobj.option_dish_count}x &nbsp;</b></DishOptionCount>
        <Title> 
          {props.cartdish.name}
        </Title>
        <Text>
          {txt_options(props.optionobj.optionset)}
        </Text>
        <Price><CurrencySymbol currency={props.currency}/>{((props.cartdish.basePrice + props.optionobj.option_price) * props.optionobj.option_dish_count).toFixed(2)}</Price>
        {props.remove && <RemoveBtn onClick={props.onClickRemove}><ButtonIcon className="theme-button"><MdRemove/></ButtonIcon></RemoveBtn>}

         {props.remove && <AddBtn onClick={props.onClickAdd}><ButtonIcon className="theme-button"><MdAdd/></ButtonIcon></AddBtn>}
        {props.children}
      </TextWrapper>
      
    </Wrapper>
  );
};

CDCard.propTypes = {
  add:PropTypes.bool,
  image: PropTypes.string,
  children: PropTypes.object,
  className: PropTypes.string,
  cartdish: PropTypes.object,
  num: PropTypes.number,
  remove: PropTypes.bool,
  optionobj: PropTypes.object,
  optidx: PropTypes.number,
  customisations:PropTypes.bool,
  dish:PropTypes.object,
  currency:PropTypes.string,
  onClickRemove: PropTypes.func,
};

CDCard.defaultProps = {
  title: 'Example'
};

export default CDCard;

const Wrapper = styled.div`
    
width: 92%;
margin:10px 4% 10px 4%;
min-height:70px;
background: white;
cursor: pointer;
border-radius: 8px;
padding: 20px;
padding-left:5px;
padding-bottom:10px;
box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
transition: all 0.3s ease-out;
transform: translateZ(0);
overflow-y:scroll;
@media (max-width: 320px) {
  width: 90%;
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

const Title = styled.h2`
  font-size: 1rem;
  font-weight:500;
  color: black;
  margin: 15px 50px 10px 38px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  ___CSS_0___
`;

const DishOptionCount = styled.h2`
    font-size: 1rem;
    font-weight:500;
    color: black;
    margin: 0 0 0px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    position: absolute;
    left: 10px;
    top: 5px;
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
  transition-delay: 0.1s;
  opacity: 0;
  @media (min-width: 450px) {
    width: 60%;
  }

  ___CSS_0___

  ___CSS_1___
`;

const TextWrapper = styled.div`
  ___CSS_0___
`;

const Text = styled.div`
  margin: 0px 0px 20px 39px;
  font-size:0.80rem;
  color: black;
`;

const OptionText = styled.span`
  color:#3e3e3e;
`;

const OptionTitle = styled.span`
  font-weight:500;
`;

const Price = styled.h2`
  font-size: 1rem;
  font-weight:500;
  color: black;
  margin: 0 0 4px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  position: absolute;
  right: 10px;
  top: 5px;
`;

const RemoveBtn = styled.div`
  font-size: 1.35rem;
  font-weight:600;
  margin: 5px 0 5px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  position: absolute;
  right: 44px;
  bottom: 0px;
`;

const Veg = styled.h3`
  font-size: 0.9rem;
  font-weight:600;
  color: gray;
  margin: 6px 0 5px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  position: absolute;
  left: 35px;
  bottom: 5px;
`;

const OptPrice = styled.h3`
  font-size: 0.9rem;
  font-weight:600;
  color: gray;
  margin: 6px 0 5px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  position: inherit;
  left:100%;
  bottom:25%;
`;

const AddBtn = styled.div`
  font-size: 1.35rem;
  font-weight:600;
  margin: 5px 0 5px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  position: absolute;
  right: 10px;
  bottom: 0px;
`;

const ButtonIcon = styled.button`
  color: #466dd6;
  border: 1px solid #466dd6;
  box-shadow: none;
  background: white;
  font-size: 15px;
  padding: 1px 6px;
  &:hover{
    background:#466dd6;
    color:white;
    border-color:#466dd6;
  }
  &:active{
    background:#466dd6;
    color:white;
    border-color:#466dd6;
  }
`;