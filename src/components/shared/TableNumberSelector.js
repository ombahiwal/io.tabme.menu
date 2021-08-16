import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {RiCloseFill} from 'react-icons/ri';
// import {Image} from 'react-bootstrap';
import CurrencySymbol from '../CurrencySymbolComponent';
import _ from 'lodash';
/**
 * Card is a component that renders a card with a title and image
 * @param  {props} props
 */
const TableNumberSelector = props => {
    const [switchTable, setSwitchTable]= useState(false);
    // console.log(POCard);
  const [imageLoaded, setImageLoaded] = useState(false);
  return (

          <div>
    <Wrapper>
       <TextWrapper>
      <TNImage
        src={'https://cdn.tabme.io/app-public-assets/tnumberknifeandfork.png'}
        centered={props.centered}
        onLoad={() => setImageLoaded(true)}
        isLoaded={imageLoaded}
        />
        <Title>Tischnummer: <b>{_.padStart(props.tablenum, 2, 0)}</b>
        <br/>
        {switchTable && <Selector defaultValue={props.tablenum} onChange={props.onChange}>
            <option value={0}>
               00
            </option>
            <option value={1}>
               01
            </option>
            <option value={2}>
               02
            </option>
        </Selector>}
            {!switchTable && <Btn onClick={()=>{setSwitchTable(!switchTable)}}>Tischnummer Änderen</Btn>}
        </Title>
         {/* <Text><Btn>Tischnummer Änderen</Btn></Text> */}
        {props.children}
      </TextWrapper>
      {switchTable &&<ModalCloseBtn onClick={()=>{setSwitchTable(!switchTable)}}>
            <RiCloseFill/>
        </ModalCloseBtn>}

    </Wrapper>
        {/* <White></White>
          <Gray></Gray> */}
    </div>

  );
};

TableNumberSelector.propTypes = {

};

TableNumberSelector.defaultProps = {
};

export default TableNumberSelector;

const Wrapper = styled.div`
  
  max-width: 350px;
  min-height:105px;
  background: white;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  transition: all 0.3s ease-out;
  transform: translateZ(0);
  margin-left:5%; 
  margin-right:5%;
  box-shadow: rgb(45 45 45 / 5%) 0px 2px 2px, rgb(49 49 49 / 5%) 0px 4px 4px, rgb(42 42 42 / 5%) 0px 8px 8px, rgb(32 32 32 / 5%) 0px 16px 16px, rgb(49 49 49 / 5%) 0px 0px 0px, rgb(35 35 35 / 5%) 0px 15px 35px;
  z-index:105;
  ___CSS_0___
`;

const Selector = styled.select`
  position:absolute;

  padding-left:22px;
  width:70px;
  font-size: 1rem;
  border: 1.5px solid black;
  border-radius: 6px;
  height: 32px;
  left:0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background:url(https://cdn.tabme.io/app-public-assets/sort-down-solid.svg) 45px -1px / 22% no-repeat white;
`;
const White = styled.div`
    position:fixed;
    top:0;
    left:0;
    height:100vh;
    width:100vw;
    z-index:100;
    background-color:white;
    opacity:50%
`;
const Gray = styled.div`
    position:fixed;
    top:0;
    left:0;
    height:100vh;
    width:100vw;
    z-index:101;
    background-color:gray;
    opacity:50%
`;
const ModalCloseBtn =styled.div`
    position:fixed;
    top:5px;
    right:5px;
    font-size:1.5rem;
`;

/*
 position:absolute;
  display: -webkit-box;
  left:0;
  right:0;
  margin-top:auto;
  margin-left:auto;
  margin-right:auto;
  overflow: hidden;



  position:absolute;
left:0;
right:0;
top:30px;
margin-top:auto;
margin-left:auto;
margin-right:auto;
  color: #2f4f4f;
*/
const Title = styled.h2`
    font-size: 1.1rem;
    color: #333333;
    position: absolute;
    left: 75px;
    top: 12%;
    /* margin-top: auto; */
    margin-left: 39px;
    margin-right: auto;
    display: -webkit-box;
    line-height: 2;
`;

const TNImage = styled.img`
  height: 90%;
  margin: 1px 1px 1px 1px;
  border-radius: 50%;
  display: block;
  
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.3s ease-out, transform 0.3s ease-out,
    opacity 0.1s ease-out;
  transition-delay: 0.1s;
  position: absolute;
  
  @media (min-width: 450px) {

  }

  ___CSS_0___

  ___CSS_1___
`;

const Btn = styled.button`

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
font-size: 10px;
line-height: 1.1;
border-radius: 1.25rem;
transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

const TextWrapper = styled.div`
    z-index:105;
    height: 100px;
    width: 275px;
    background: ;
    margin: auto;
    top: 0px;
    bottom: 0;
    right: 0;
    left: 0;
    position:absolute;
    margin-top:auto;
    margin-left:auto;
    margin-right:auto;
`;

const Text = styled.div`
position:absolute;
left:0;
right:0;
top:30px;

margin-top:auto;
margin-left:auto;
margin-right:auto;
  color: #2f4f4f;
`;

const Price = styled.div`
  font-size:15px;
  font-weight:400;
  margin: 0px 10px 10px 30px;
  position:absolute;
  display: -webkit-box;
  right:5px;
  top:15px;
  color: #2f4f4f;

  @media (max-width: 325px) {
    right:0px;
    margin: 0px 10px 10px 10px;
    font-size:12px;

  }
`;

const Active = styled.div`
  font-size:12px;
  font-weight:400;
  margin: 0px 10px 10px 30px;
  position:absolute;
  display: -webkit-box;
  right:5px;
  top:38px;
  color: forestgreen;

  @media (max-width: 325px) {
    right:0px;
    margin: 0px 10px 10px 10px;
    font-size:12px;

  }
`;