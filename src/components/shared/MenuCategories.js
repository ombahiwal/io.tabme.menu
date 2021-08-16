import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Dropdown} from 'react-bootstrap';
import Slider from "react-slick";
import { height } from 'dom-helpers';

// import { MdAddCircleOutline, MdInfoOutline } from "react-icons/md";
// import {BsInfoCircle, BsPlus } from "react-icons/bs";
// import {Image} from 'react-bootstrap';
// import CurrencySymbol from '../CurrencySymbolComponent';
// import { ImPlus } from "react-icons/im";
// import {Button, ButtonGroup} from 'reactstrap';

/**
 * Card is a component that renders a card with a title and image
 * @param  {props} props
 *
 */






function onscroll_for_menu_bar(navbar,stickyph, offset) {
  // console.log('ss',window.pageYOffset, offset);
  // Categories offset + menubar offset + top bar offset
  // console.log(stickyph)
  var sticky;
  if(offset <= 0){
    sticky = 350;
  }else{
    sticky = offset ;
  }

  // console.log(window.pageYOffset)
  // if (window.pageYOffset >= sticky && window.pageYOffset >=100) {
  // console.log('sticky', sticky);
  if (window.pageYOffset >= sticky){
    navbar.classList.add("sticky");
    // stickyph.classList.add("stickyplaceholder");
    navbar.classList.remove("stickyhide");
  } else {
    // stickyph.classList.remove("stickyplaceholder");
    navbar.classList.remove("sticky");
    navbar.classList.add("stickyhide");
  }
}

function scrollltoTargetAdjusted(cat, slideIndex, slideref){
  // document.getElementById(cat).scrollIntoView();
  slideref.slickGoTo(slideIndex);
  console.log(slideref, cat)
  var element = document.getElementById(cat);
  var headerOffset = 30; // adjust scroll to. 65 to show, 30 to cover cat heading
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition - headerOffset;
  
  // console.log(elementPosition, offsetPosition, window.pageYOffset)
  window.scrollTo({
       top: offsetPosition + window.pageYOffset,
       behavior: "smooth"
  });

}

const MenuCategories = props => {
  // console.log(props);
  var slideref;
  var settings = {
      dots: false,
      arrows:false,
      infinite: false,
      centerMode: false,
      slidesToShow: 1,
      slidesToScroll: 3,
      variableWidth: true,
      initialSlide: 0,
  };

  const CategoryButton = styled.button`
      color:white;
      display: inline-block;
      border-radius:1.25rem;
      font-weight: 400;
      text-align: center;
      vertical-align: middle;
      background-color: black;
      border: 1px solid transparent;
      padding: .375rem .75rem;
      font-size: 1rem;
      line-height: 1.5;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      box-shadow: rgb(45 45 45 / 5%) 0px 2px 2px, rgb(49 49 49 / 5%) 0px 4px 4px;
    `;

  var active_menu_cat = props.activecat;
  useEffect(()=>{
    var navbar = document.getElementById("menunavbar");
    var stickyph = document.getElementById("stickyph");
    if(props.categories.length <=1){
      stickyph.classList.remove("stickyplaceholder");
    }
    // const menucats_bottom = document.getElementById("menucats").getBoundingClientRect().bottom + window.pageYOffset;
    // console.log(menucats_bottom);
    // const menucats_top = navbar.getBoundingClientRect().top + window.pageYOffset;
    const menucats_top = stickyph.getBoundingClientRect().top + window.pageYOffset;
    

    console.log(menucats_top);
    const onscrollFunc = function(){onscroll_for_menu_bar(navbar, stickyph, menucats_top)};

    window.addEventListener('scroll', onscrollFunc);
    if(slideref)
      slideref.slickGoTo(props.goTo);
    return ()=>{
      // on component unmount
      window.removeEventListener('scroll', onscrollFunc);
    }
  }, [props.goTo]);
  
//   const [imageLoaded, setImageLoaded] = useState(false);
  return (<div>
    <div id="stickyph" className="stickyplaceholder">
    <FixedMenuWrapper key="1" id="menunavbar"  className="stickyhide"  ref={props.innerRef}
      className={props.className}>
      {props.categories.length > 1 && <center>
      
        <div>
        {/* <h2> Responsive </h2> */}
        <Slider style={{height:'54px'}} ref={slider => (slideref = slider)} {...settings}>
        {props.categories.map((cat, idx)=>{
                    return(<div><CategoryButton style={{'marginRight':'0', 'margin':'0px',backgroundColor:props.goTo === idx ? "black" :  "white", color:props.goTo === idx ? "white" :  "black"}} key={cat} onClick={()=>{scrollltoTargetAdjusted(`${cat}`, idx, slideref)}}><small><b>{cat}</b></small></CategoryButton> &nbsp;</div>);
                })}
        </Slider>
      </div>
      
      </center>}
      
    </FixedMenuWrapper>
    </div>
    </div>
  );
};

MenuCategories.propTypes = {
  activecat: PropTypes.string,
  categories : PropTypes.array,
  innerRef: PropTypes.func,
};

MenuCategories.defaultProps = {
  title: 'Example'
};

export default MenuCategories;

const FixedMenuWrapper = styled.div`
  fill:#2f4f4f !important;
  width: 100%;
  padding:8px;
  padding-top: 20px;
  padding-bottom:0px;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease-out;
  transform: translateZ(0);
  line-height: 1.6;
  z-index:100;
  box-shadow: 0px 1px 3px 3px rgba(209, 209, 209, .3);
  overflow:hidden;
  ___CSS_0___
`;

const Wrapper = styled.div`

  width: 100%;
  
  /*padding:8px;
  padding-top:15px;
  padding-bottom:15px;
  margin-bottom:15px;
  border-radius: 5px;
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  */
  background: white;
  cursor: pointer;
  transition: all 0.3s ease-out;
  transform: translateZ(0);
  line-height: 1.6;
  display:flex;
  align-items: center;
  margin-left: auto;
margin-right: auto;
display: block;
  ___CSS_0___
`;
const ActiveCatTitle = styled.span`
  color:#2f4f4f !important;
  fill:#2f4f4f !important;
`;



