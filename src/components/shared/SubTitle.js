import React from 'react';
import styled from "styled-components";
// import PropTypes from 'prop-types';
/*
* @param  {props} props
*/
const SubTitle = props => {
return(<SubTitleContainer> 
    <SubTitleText>{props.text}</SubTitleText>
     {props.children}
    </SubTitleContainer>);

}


const SubTitleContainer = styled.div`
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

const SubTitleText = styled.span`
  
  font-style: bold;
  font-weight: 700;
  color: #121212;
  font-size: 1.1rem;
  text-align: center;
  align-self: center;
  

`;

export default SubTitle;