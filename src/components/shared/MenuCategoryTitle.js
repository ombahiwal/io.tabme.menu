import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
/*
* @param  {props} props
*/
const MenuCatTitle = props => {

  return(<MenuTitleContainer> 
      <SubTitleText>{props.text}</SubTitleText>
      {props.children}
      </MenuTitleContainer>);
  }

MenuCatTitle.propTypes = {
    text: PropTypes.string,
    children: PropTypes.object,
  };


const MenuTitleContainer = styled.div`
  display: flex;  
  flex-direction: row;
  color:black;
  /*background-color:white;*/
  /*background:white;*/
  /*border-top: 1px solid #ededed;*/
  /*border-bottom: 1px solid #ededed;*/
  margin-top:10px;
  margin-bottom:2px;
  padding:10px;
  padding-left:15px;
  justify-content: space-between;
  align-items: center;
  width: calc(100%);
  height: 50px;
  @media(max-width:375px){
      width: 100%;
  }
`;

const SubTitleText = styled.span`
  
  font-style: bold;
  font-weight: 700;
  color: black;
  font-size: 1.25rem;
  text-align: center;
  align-self: center;
  

`;

export default MenuCatTitle;