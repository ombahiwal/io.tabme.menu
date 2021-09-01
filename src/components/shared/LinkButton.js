import React from 'react';
import styled from "styled-components";
// import PropTypes from 'prop-types';
import {BsChevronCompactRight} from 'react-icons/bs';
// import {FaRegMoneyBillAlt} from 'react-icons/fa';
// import {RiSecurePaymentLine} from 'react-icons/ri';
import {Link} from "react-router-dom";

/*
* @param  {props} props
*/
const LinkButton = props => {
    // border 2px solid ${props.color ? props.color: '#0a1e42'};
    const ButtonContainer = styled.div`
        display: flex;  
        color: ${props.color ? props.color: '#0a1e42'} ;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 1rem;
        width: calc(100%);
        min-height:35px;
        border-width:2px;
        max-width:420px;
        margin-top:20px;
        margin-bottom:15px;
        margin-left:15px;
        width:90%;
        
        border-radius:2.25rem;
        padding: 5px 10px;
        box-shadow: rgb(45 45 45 / 5%) 0px 2px 2px, rgb(49 49 49 / 5%) 0px 4px 4px, rgb(42 42 42 / 5%) 0px 8px 8px;
        @media(max-width:450px){
            width: 90%;
        }
        @media(min-width:451px){
            width: 75%;
        }
        `;

return(<a href={props.link}>
        <ButtonContainer props> 
            <ButtonIcon>{props.icon1}</ButtonIcon>
            <ButtonText>{props.text}</ButtonText>
            {props.children} 
            <ButtonIcon><BsChevronCompactRight/></ButtonIcon>
        </ButtonContainer>
        </a>);

}

LinkButton.propTypes = {
  };


  const ButtonText = styled.span`
  letter-spacing:1px;
  font-weight: 600;
  font-size: 1.1rem;
  font-family:'Rubik', sans-serif;
  text-align: center;
  align-self: center;
  margin-left:5$px;
  `;
  const ButtonIcon = styled.span`  
  font-style: bold;
  font-weight: 600;
  font-size: 1.6rem;
  `;


export default LinkButton;