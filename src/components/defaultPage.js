import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import QRCodeReader from './QRReaderComponent';
import {Link} from 'react-router-dom';
import t from '../i18n/translate';
import TnC from './shared/TnCFoot';
import RoundButton from './shared/RoundButton';
const ENV = require('../services/env-vars');

class DefaultPage extends Component{

    constructor(props){
        super();
        this.state = {show:false}; 
    }
    componentDidMount(){
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    }
    
    render(){
        return(
            <div className="background-white">
                <center>
                <h3><b>
                    {t('default_welcome')}
                    <br/>
                    
                    <br/>
                    <QRCodeReader/>
                    <br/>
                    {t('default_msg1')}
                    <br/>
                    {t('default_msg2')}
                    <br/>
                    {t('default_msg3')}
                    <br/>
                    <small>
                        <b>{t('default_with')}</b>
                    </small>
                    </b>
                    <br/>
                    </h3>
                    {/* <RoundButton/> */}
                <span><Image src={`${ENV.CDN_URL}/public_assets/tabme-logo-proto-small.png`}/></span>
                    <h3>
                        <small>
                        <b>{t('default_and')}</b>
                         </small>
                         <br/>
                    <b>{t('default_enjoy')}
                    <br/>
                    </b>
                    </h3>
                    <br/><br/>
                    {/* {t("Introduction")} */}
                    <Link to="/map" ><h6><b>{t('default_worldmap')}</b></h6></Link>
                    <small><small>{t('default_tabme_foot_cr', {year:'2021'})}</small></small>
                </center>
                    <span>
      <TnC/>
    </span>


            </div>
        );
    }
}

export default DefaultPage