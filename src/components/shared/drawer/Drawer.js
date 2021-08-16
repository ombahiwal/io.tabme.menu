import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import {FaShoppingBag} from 'react-icons';
import Button from './Button';


const SidebarMenu = styled.div`
  height: 100vh;
  background: white;
  position: fixed;
  top: 0;
  right: 0;
  width: 20%;
  min-width: 256px;
  max-width: 400px;
  z-index: 200;
  overflow-y:scroll;
  box-shadow: 1px 0px 7px rgba(0,0,0,0.5);
  transform: ${({isOpen}) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-out;
  transition-delay: 0.2s;
`;

const SidebarDrawer = styled.div`
  background-color: rgba(0,0,0,.75);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top:0;
  right:0;
  z-index: 50;
  transform: ${(props) => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.1s ease-out;
`;

const Drawer = ({ children, side }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <SidebarDrawer isOpen={isOpen} onClick={() => setOpen(!isOpen)}/>
      <Button
        onClick={() => {setOpen(!isOpen); props.openfunc}}
        scale='large'
        color='terciary'
        variant='light'
        radius='regular'
        buttonwidth='null'
        className="styled-btn-outline"
        icon={<FaShoppingBag/>} />}
      />
      <SidebarMenu isOpen={isOpen} side={side}>
        {children}
      </SidebarMenu>
    </>
  )
};


Drawer.propTypes = {
  /**
  * Sets the drawer position on the screen.
  */
  side: PropTypes.oneOf(['left', 'right']),
}

Drawer.defaultProps = {
  side: 'right',
  icon: propTypes.FontAwesomeIcon,
  openfunc: propTypes.func
}

export default Drawer;
