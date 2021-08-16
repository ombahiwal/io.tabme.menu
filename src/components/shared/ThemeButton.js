import React, { useEffect } from 'react';
import styled from 'styled-components';
const ThemeButton = props =>{

const ButtonWrap = styled.button`
    display: inline-block;
    font-weight: 400;
    color: white;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: black;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size:1rem;  
    line-height: 1.1;
    border-radius: 1.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    box-shadow: rgb(45 45 45 / 5%) 0px 2px 2px, rgb(49 49 49 / 5%) 0px 4px 4px, rgb(42 42 42 / 5%) 0px 8px 8px, rgb(32 32 32 / 5%) 0px 16px 16px, rgb(49 49 49 / 5%) 0px 0px 0px;
  `;
// useEffect()

return <ButtonWrap style={props.style} >{props.children}</ButtonWrap>

}

export default ThemeButton;

