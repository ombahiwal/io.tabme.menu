import React from 'react';
import t from '../../i18n/translate';
// import {FormattedMessage} from 'react-intl';
const ENV = require('../../services/env-vars');
const TnC = (props)=>{
    return ( <small><center>
        <br/><br/>
    <a href={`${ENV.CDN_URL}/agb.html`} rel="noopener noreferrer" target="_blank" >{t('tnc')}</a>&nbsp;|&nbsp;
    <a href={`${ENV.CDN_URL}/datapolicy.html`} rel="noopener noreferrer" target="_blank">{t('privacy_data_policy')}</a>
    &nbsp;|&nbsp; <a href={`${ENV.CDN_URL}/impressum.html`} rel="noopener noreferrer" target="_blank">{t('imprint')}</a>
    </center></small>);
}
export default TnC;