import React, { useEffect } from 'react';
import {FormControl , InputGroup, Button } from 'react-bootstrap';
import {FormattedMessage} from 'react-intl';
import t from '../../i18n/translate';
import {FaRegTimesCircle } from 'react-icons/fa';
import axios from 'axios';
import { useSelector } from "react-redux";
import styled from 'styled-components';
// const __DEV__ = ;
const ENV = require('../../services/env-vars');
const PROMO_API_URL = document.domain !== 'localhost' ? 'http://localhost:8000/api/v1/ps/promo/': ENV.API_URL+'/api/v1/ps/promo/';  
// var Actions = require('../../redux/actions/index');

const PromoField = (props)=>{
    const [alert, setAlert] = React.useState({show:false, response:"cart_apply_btn", variant:"danger", style:{color:''}})
    const [promo, setPromo] = React.useState({valid:false, value:"", discount:0, discountpercent:0, data:null});
    var restaurant = useSelector(state => state.restaurant);
    var cart = useSelector(state => state.cart);
    // const dispatch = useDispatch();
    useEffect(()=>{
        if(cart.promo_data){
            // console.log('preset');
                    setPromo({valid:true, value:cart.promo_data.promo, discount:cart.promo_data.discount, discountpercent:cart.promo_data.discountpercent , data:cart.promo_data});                
                    setAlert({show:true, response:'cart_promo_valid', variant:"success", style:{color:'green'}});
        }
        

    },[cart]);

    const handlePromoSubmit = async (event) => {
        event.preventDefault();
        try{        
            if(promo.value.length){
                var request = await axios.post(PROMO_API_URL+'get/user', {restaurant_id:restaurant._id, value:promo.value});
                // console.log(request.data);
                if(request.data.success){
                    // Valid
                    var promo_data = request.data.promo_data
                    setPromo({valid:true, value:promo.value ,discount:promo_data.discount, discountpercent:promo_data.discountpercent , data:promo_data});
                    props.getPromo({valid:true, discount:promo_data.discount, discountpercent:promo_data.discountpercent , data:promo_data});
                    setAlert({show:true, response:'cart_promo_valid', variant:"success", style:{color:'#6cff6c'}})
                }else{
                    // OInValid
                    setAlert({show:false, response:'cart_promo_invalid', variant:"danger", style:{color:'palevioletred'}});
                    setPromo({valid:false, value:promo.value, discount:0, discountpercent:0, data:null });
                    props.getPromo({valid:false, value:promo.value, discount:0, discountpercent:0, data:null });        
                }
                
            }
        }catch(e){}
    }
    const filterCode = (code_input)=>{
        return code_input.replace(/[^\w\s]/gi, '').toUpperCase()
    }
    const onChangePromo = (e) => {
        setPromo({valid:false, value:filterCode(e.target.value), discount:0, discountpercent:0});
        setAlert({show:false, response:'cart_apply_btn', variant:"danger", style:{color:''}});
    }
    const removeCode = ()=>{        
        props.getPromo({valid:!promo.valid, value:"", discount:0, discountpercent:0 });
        setPromo({valid:!promo.valid, value:"", discount:0, discountpercent:0 });
        setAlert({show:false, response:'cart_apply_btn', variant:"danger", style:{color:''}});
    }

       return( <Wrapper>
                    <InputGroup  size="sm" className="mb-3">
                        <FormattedMessage id='cart_enter_promo' defaultMessage="Enter Code...">
                                {(placeholder)=><FormControl className="input-cart-promo-code" disabled={promo.valid} aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={promo.value} placeholder={placeholder} onChange={onChangePromo}/>}
                            </FormattedMessage>
                            <InputGroup.Append>
                                <button className="theme-button button-cart-promo-apply" disabled={promo.valid} style={alert.style} variant="outline-secondary" onClick={handlePromoSubmit}><small><b>{t(alert.response)} {promo.valid  && <FaRegTimesCircle onClick={()=>{removeCode()}} />}</b></small></button>
                            </InputGroup.Append>    
                    </InputGroup>
                </Wrapper>);

}

export default PromoField;

const Wrapper = styled.div`
    width:90%;
    /*max-width:350px;*/
    margin:5px 5% 5px 5%;
`;
