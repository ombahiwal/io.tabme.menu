import React, { useState } from 'react';
import styled from "styled-components";
// import PropTypes from 'prop-types';
/*
* @param  {props} props
*/
const SPMGrid = props => {
  const grid_items = [
    {value:"card", class:"active", label:"cards", background:'url(https://cdn.tabme.io/app-public-assets/credit-card-regular.svg) 50% 0 / 45px no-repeat transparent'},
    {value:"giropay", class:"", label:"Giropay", background:'url(https://cdn.tabme.io/app-public-assets/giropay.svg) 50% 0 / 45px no-repeat transparent'},
    {value:"ideal", class:"", label:"iDeal", background:'url(https://cdn.tabme.io/app-public-assets/ideal.svg) 50% 0 / 45px no-repeat transparent'},
    {value:"bancontact", class:"", label:"Bancontact", background:'url(https://cdn.tabme.io/app-public-assets/bancontact.svg) 50% 0 / 50px no-repeat transparent'},
    {value:"wallet", class:"", label:"wallets", background:'url("https://cdn.tabme.io/app-public-assets/applepay.svg") 15% 30% / 26px no-repeat, url("https://cdn.tabme.io/app-public-assets/gpay.svg") 80% 30% / 26px no-repeat'},
  ];

  const [stripe_payment_method, setStripePaymentMethod] = useState('card');
  
  function changeStripeMethod(m){
    // console.log(stripe_payment_method);
    if(m === stripe_payment_method){
      // Toggle self
      if([...document.getElementById(m).classList].includes('active')){
        document.getElementById(m).classList.remove('active');   
        setStripePaymentMethod('card'); 
        props.setMethod('card');
        return
      }else{
        document.getElementById(m).classList.add('active');  
        // setStripePaymentMethod(m); 
      }
    }else{
      // toggle to another
      document.getElementById(stripe_payment_method).classList.remove('active');
      document.getElementById(m).classList.add("active");
      // setStripePaymentMethod(m);
    }
    
    // console.log(m);
    setStripePaymentMethod(m); 
    if(m === 'wallet'){
      m = 'card'
    }
    props.setMethod(m);
    
  }
 
return(<GridWrapper>
            {/* <GridItem style={{border:"5px solid rgb(70, 109, 214)"}}>1</GridItem> */} 
            {/* {stripe_payment_method} */}
            {grid_items.map((item, idx)=>{
                return  <GridItem className={item.class} onClick={()=>changeStripeMethod(item.value)} key={item.value} id={item.value}>
                            <ItemBox style={{background:item.background}}>
                              <ItemLabel>{item.label}</ItemLabel>
                            </ItemBox>
                        </GridItem>
            })}
           
            {/* <GridItem><ItemBox>
              {props.paypal && props.paypal}
              </ItemBox></GridItem> */}
            {/* <GridItem className="active">5</GridItem> */}
    </GridWrapper>);
}


const GridWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 350px) {
    grid-template-columns: repeat(3, 1fr); 
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr); 
  }

`;

const GridItem = styled.div`
  display:block;
  background-color: dogderblue;
  border-radius:8px;
  color: black;
  padding: 0.5rem;
  height: 5rem;
  transition: all 0.2s ease-out;
  box-shadow: rgb(45 45 45 / 5%) 0px 2px 2px, rgb(49 49 49 / 5%) 0px 4px 4px, rgb(42 42 42 / 5%) 0px 8px 8px;
  &.active {
    border: 3px solid rgb(70, 109, 214);
    box-shadow: rgba(45, 45, 45, 0.05) 0px 2px 2px,
      rgba(49, 49, 49, 0.05) 0px 4px 4px, rgba(42, 42, 42, 0.05) 0px 8px 8px,
      rgba(32, 32, 32, 0.05) 0px 16px 16px, rgba(49, 49, 49, 0.05) 0px 32px 32px,
      rgba(35, 35, 35, 0.05) 0px 64px 64px;
    transform: translate(0, -2px);
  }

`;
const ItemLabel = styled.div`
  color:black;
  font-size:0.75rem;
  font-weight:500;
  position:relative;
  top:90%;
  text-align:center;
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);

`;

const ItemBox = styled.div`
  display:block;
  height:100%;
  width:100%;
  color:black;
  z-index:100;
  font-size:0.75rem;
  font-weight:500;
  background: url("https://cdn.tabme.io/app-public-assets/caret-left-solid.svg") 9% 4.5px / 9px no-repeat transparent;
`;

const PaypalBox = styled.div`
  display:block;
  height:100%;
  width:100%;
  color:black;
  font-size:0.75rem;
  font-weight:500;
  background: url("https://cdn.tabme.io/app-public-assets/caret-left-solid.svg") 9% 4.5px / 9px no-repeat transparent;
`;

export default SPMGrid;