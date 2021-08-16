import React from 'react';
import styled from "styled-components";
// import PropTypes from 'prop-types';
/*
* @param  {props} props
*/
const HeadTitle = props => {
return(<HeadTitleContainer> 
    <HeadTitleText></HeadTitleText>
    <HeadTitleText>
    <Icon>{props.icon}</Icon>
    {props.text}</HeadTitleText>
    <HeadTitleText></HeadTitleText>
     {props.children}
    </HeadTitleContainer>);

}

const Icon = styled.span`
  font-size:2.5rem;
`;
const HeadTitleContainer = styled.div`
  margin-top:10px;
  display: flex;  
  flex-direction: row;
  color:#5c5c5c;
  background-color:white;
  justify-content: space-between;
  align-items: center;
  width: calc(100%);
  height: 44px;
  @media(max-width:375px){
      width: 100%;
  }
`;

const HeadTitleText = styled.span`
  
  font-style: bold;
  font-weight: 700;
  color: #121212;
  font-size: 1.5rem;
  text-align: center;
  align-self: center;
  

`;

export default HeadTitle;