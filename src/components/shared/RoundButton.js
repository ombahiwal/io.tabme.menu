import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RoundButton = props=>{

    return(
        <span onClick={props.onClick}>  
            <Outer>
                <Inner >
                    <svg stroke="black" fill="black" stroke-width="0.2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clip-rule="evenodd"></path></svg>
                </Inner>
                 
            </Outer>
        </span>
    )
}

const Outer =styled.div`
position:fixed;
display:block;
border:2px;
border-radius:20%;
border-color:rgba(47, 79, 79, 0.9);
border-style:solid;
height:28px;
width:28px;
background: rgba(255, 255, 255, 0.7)
`
const Inner = styled.span`
opacity:100%;
`
export default RoundButton