import React from 'react';
import styled from "styled-components";
// import PropTypes from 'prop-types';
/*
* @param  {props} props
*/
import {RiHandbagFill} from 'react-icons/ri';
// import {IoCaretBack} from 'react-icons/io5'; 
import CurrencySymbol from '../CurrencySymbolComponent';
// import {ReactComponent as BackIcon} from './caret-left-solid.svg';
import {Link} from "react-router-dom";
import t from '../../i18n/translate';
const ENV = require('../../services/env-vars')

const FooterComponent = props => {

  return(
  <div>
   {props.hide && <Container></Container>}
  {!props.hide && <Container style={{bottom: props.tnc ? 22 : 0}}> 
      <LeftWrapper>
        <LeftIconButton>
              {props.menucart && <Link style={{color:'white'}} to={'/cart'}><span style={{fontSize:'1.75rem'}}> <RiHandbagFill/></span>  &nbsp;
                        <b><CurrencySymbol/>{props.total}</b></Link>}
              {(!props.menucart && props.back.show) && <Link to={props.back.to}>
                  <FooterButton  style={{color:'black', background: props.back.arrow ? 'url("https://cdn.tabme.io/app-public-assets/caret-left-solid.svg") 9% 4.5px / 9px no-repeat white' : 'white' }}>
                    <b>{props.back.text}</b>
                  </FooterButton></Link>}

        </LeftIconButton>
      </LeftWrapper>

      <RightWrapper>
        <RightIconButton>
        { props.next.type==="route" && <Link to={props.next.to}> 
                        <FooterButton  style={{color:'white', background:'#466dd6'}}><b>{props.next.text}</b>
                        {/* &nbsp;<small><b><CurrencySymbol/>{this.renderCartTotal()}</b></small> */}
                        </FooterButton>
                    </Link>}
        { props.next.type==="function" && 
            <FooterButton onClick={props.next.func} style={{color:'white', background:'#466dd6'}}><b>{props.next.text}</b>
                {/* &nbsp;<small><b><CurrencySymbol/>{this.renderCartTotal()}</b></small> */}
            </FooterButton>}
        </RightIconButton>
      </RightWrapper>
      {props.children}
      </Container>}
      {(props.tnc && !props.hide) && <TnCContainer> 
                          <ItemWrapper><a href={`${ENV.CDN_URL}/agb.html`} rel="noopener noreferrer" target="_blank" >{t('tnc')}</a></ItemWrapper>
                          <ItemWrapper><a href={`${ENV.CDN_URL}/datapolicy.html`} rel="noopener noreferrer" target="_blank">{t('privacy_data_policy')}</a></ItemWrapper>
                          <ItemWrapper><a href={`${ENV.CDN_URL}/impressum.html`} rel="noopener noreferrer" target="_blank">{t('imprint')}</a></ItemWrapper>
                   </TnCContainer>}
      </div>
      );
  }

  const LeftWrapper = styled.div`
  flex: 1 1 0%;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const LeftIconButton = styled.div`
  flex-direction: row;
  width:80%;
  margin-left:10%;
  max-width:260px;
  border: none;
`;

const LeftText = styled.span`
  font-family: Arial;
  font-size: 1rem;
  align-self: center;
  color:white;
`;

const RightWrapper = styled.div`
  flex: 1 1 0%;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const RightIconButton = styled.div`
  flex-direction: column;
  display: flex;
  width:80%;
  margin-right:10%;
  max-width:260px;
  border: none;
`;

const RightText = styled.span`
  font-family: Arial;
  font-size: 1.8rem;
  align-self: center;
  color:#5c5c5c;
`;


const FooterButton = styled.button`
    /*background-color: #466dd6;*/  
    display: inline-block;
    font-weight: 300;
    width:100%;
    color: white;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .5rem .75rem;
    padding-left:20px;
    padding-right:20px;
    font-size:1rem;  
    line-height: 1.1;
    border-radius: 1.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    /*box-shadow: rgb(45 45 45 / 5%) 0px 2px 2px, rgb(49 49 49 / 5%) 0px 4px 4px, rgb(42 42 42 / 5%) 0px 8px 8px, rgb(32 32 32 / 5%) 0px 16px 16px, rgb(49 49 49 / 5%) 0px 0px 0px;*/
`;


const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height:60px;
  position: fixed;
  bottom:0;
  padding:20px;
  background-color: black;
  z-index: 100;
  color:white;
  padding-top:10px;
  padding-left:10px;
  padding-right:10px;
  @media screen and (min-width: 600px) {
      width:78%;
  }
`;

const ItemWrapper = styled.div`
  flex: 1 1 0%;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  display: flex;
  text-align:center;
  align-items:center;
  font-weight:600;
  font-size:0.75rem;
  color:red;

  `;

const TnCContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: fixed;
  bottom:0;
  padding:5px 5px 8px 5px;
  background-color: black;
  z-index: 100;
  color:white;
  @media screen and (min-width: 600px) {
      width:78%;
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

export default FooterComponent;