import React from 'react';
import { Motion, spring } from 'react-motion';
// import './styles.css';

const PBannerBlock = ({ children }) => {
  return (
    <section className="Pbanner">
      {children}
    </section>
  );
}

const PBannerWrapper = ({ children }) => {
  return (
    <div className="Pbanner__wrapper">
      {children}
    </div>
  );
}

const PBannerDescription = ({ children })  => {
  return (
    <div className="Pbanner__description" dangerouslySetInnerHTML={{ __html: children }} />
  );
}

const PBannerActions = ({ children })  => {
  return (
    <div className="Pbanner__actions">
      {children}
    </div>
  );
}

const PBannerAccept = ({ children, onClick }) => {
  return (
    <button className="Pbanner__button Pbanner__button--accept" onClick={onClick}>
      {children}
    </button>
  );
}

const PBannerReject = ({ children, onClick }) => {
  return (
    <button className="Pbanner__button Pbanner__button--reject" onClick={onClick}>
      {children}
    </button>
  );
}

function initialErrorStyle() {
  return {
    opacity: spring(0),
    y: spring(100)
  }
}
function finalErrorStyle() {
  return {
    opacity: spring(1),
    y: spring(0)
  }
}

const PBanner = ({
  description,
  show
}) => {
  let errorStyle = show ? finalErrorStyle() : initialErrorStyle();
  return (
    <PBannerBlock>
       <PBannerWrapper>
        {/* <PBannerDescription>
          {description}
        </PBannerDescription> */}
        {/* <PBannerActions>
          <PBannerAccept onClick={() => acceptFunc()}>
            {acceptLabel}
          </PBannerAccept>
          <PBannerReject onClick={() => rejectFunc()}>
            {rejectLabel}
          </PBannerReject> 
         </PBannerActions>/ */}
          <Motion style={errorStyle}>
          {({opacity, y}) => {
              return (
                <PBannerDescription style={{ opacity: opacity, transform: `translateY(${y}px)` }}>
                  An error occured while submitting your form.
                  {/* Try again later or contact us directly at email@domain.com */}
                </PBannerDescription>);
             }
          }
        </Motion>
      </PBannerWrapper>
    </PBannerBlock>
  );
}

export {
  PBannerBlock,
  PBannerWrapper,
  PBannerDescription,
  PBannerActions,
  PBannerAccept,
};

export default PBanner;