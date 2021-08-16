import React from 'react';
import './styles.css';

const CookieBannerBlock = ({ children }) => {
  return (
    <section className="cookiebanner">
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
    <div className="cookiebanner__description" dangerouslySetInnerHTML={{ __html: children }} />
  );
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
  description,
}) => {
  return (
    <CookieBannerBlock>
      <CookieBannerWrapper>
        <CookieBannerDescription>
          {description}
        </CookieBannerDescription>
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
};

export default CookieBanner;