import React from 'react';
import './styles.css';
import t from '../../../i18n/translate';

const CookieBannerBlock = ({ children }) => {
  return (
    <section className="cookiebanner"  >
      {children}
    </section>
  );
}

const CookieBannerWrapper = ({ children }) => {
  return (
    <div className="cookiebanner__wrapper">
      {children}
    </div>
  );
}


const CookieBannerDescription = ({ children })  => {
  return (
    <div className="cookiebanner__description"
    //  dangerouslySetInnerHTML={{ __html: children }} 
     >
    {children}
    </div>
  );
}

const CookieBannerTnC = ({children})=>{
  return (<div className="cookiebanner__tnc" >
  <a href="https://www.tabme.info/datapolicy.html#cookies" rel="noopener noreferrer" target="_blank">{t('cookie_policy')}</a>  
  </div>);
}
const CookieBannerActions = ({ children })  => {
  return (
    <div className="cookiebanner__actions">
      {children}
    </div>
  );
}

const CookieBannerAccept = ({ children, onClick }) => {
  return (
    <button className="cookiebanner__button cookiebanner__button--accept" onClick={onClick}>
      {children}
    </button>
  );
}

const CookieBannerReject = ({ children, onClick }) => {
  return (
    <button className="cookiebanner__button cookiebanner__button--reject" onClick={onClick}>
      {children}
    </button>
  );
}

const CookieBanner = ({
  acceptFunc,
  rejectFunc,
  acceptLabel,
  rejectLabel,
  description
}) => {
  return (
    <CookieBannerBlock>
      <CookieBannerWrapper>
        <CookieBannerDescription>
          {description}  
        </CookieBannerDescription>
        <CookieBannerTnC/>
        <CookieBannerActions>
          <CookieBannerAccept onClick={() => acceptFunc()}>
            {acceptLabel}
          </CookieBannerAccept>
          <CookieBannerReject onClick={() => rejectFunc()}>
            {rejectLabel}
          </CookieBannerReject>
        </CookieBannerActions>
      </CookieBannerWrapper>
    </CookieBannerBlock>
  );
}

export {
  CookieBannerBlock,
  CookieBannerWrapper,
  CookieBannerDescription,
  CookieBannerActions,
  CookieBannerAccept,
  CookieBannerTnC
};

export default CookieBanner;