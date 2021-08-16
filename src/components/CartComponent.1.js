/* eslint-disable */

import React, {Component} from 'react';
import CurrencySymbol from './CurrencySymbolComponent';
import SubTitle from './shared/SubTitle';
import HeadTitle from './shared/HeadTitle';
import LoadingOverlay from 'react-loading-overlay';
import { FaPencilAlt} from 'react-icons/fa';
import PromoField from './shared/PromoField';
import CDCard from './shared/CartDishCard'
import {connect} from 'react-redux';
import Cookies from 'universal-cookie';
import { Form, FormGroup, FormControl, Button, ButtonGroup, ToggleButton, Image} from 'react-bootstrap';
import PaypalCheckout from './PaypalButtonCheckout';
import t from '../i18n/translate';
import {FormattedMessage} from 'react-intl';
import TnC from './shared/TnCFoot';
import PaymentButton from './shared/PaymentButton';
import {FaRegMoneyBillAlt} from 'react-icons/fa';
import {RiSecurePaymentLine} from 'react-icons/ri';
import FooterComponent from './shared/FooterComponent';
import {RiHandbagFill} from 'react-icons/ri';

var CurrencyCode =  require('./shared/CurrencyFromCode');
var Action = require('../redux/actions/index');
const cookies = new Cookies();

class Cart extends Component {

    constructor(props){
        super(props);
       
        this.state = {
            cart:props.cart, status:false, payment:"external", menu:props.menu, tip:0, 
            tipstate:false, promo:0, notesbox:{show:true, note:""}, 
            currency:'INR', loading:false, loadingText:"Processing",
            isPaypal:(this.props.restaurant.info && this.props.restaurant.payment_methods.includes('paypal') && this.props.restaurant.info.paypal_client_id)
        };

        this.onChangePaymentMethod = this.onChangePaymentMethod.bind(this);
        this.onChangeTip = this.onChangeTip.bind(this);
        this.renderTipButtons = this.renderTipButtons.bind(this);
    
        this.renderNotesBox = this.renderNotesBox.bind(this);
        this.renderPromo = this.renderPromo.bind(this);
        this.getPromo = this.getPromo.bind(this);
        cookies.set('cart', this.state.cart, {path:'/'});
        this.calcCartSum = this.calcCartSum.bind(this);
        this.renderPaymentOptions = this.renderPaymentOptions.bind(this);
        this.showRazorpay = this.showRazorpay.bind(this);
        this.setCartLoading = this.setCartLoading.bind(this);
        // console.log('ispaypal', (this.props.restaurant.info && this.props.restaurant.payment_methods.includes('paypal') && this.props.restaurant.info.paypal_client_id));
    }

    payment_options = [
        
        {type:"cash", route:'/external', label:t('payment_optn_cash'), icon1:<FaRegMoneyBillAlt/>, color:'#2f4f4f'},
        {type:"stripe", route:'/stripe', label:t('payment_optn_stripe'), icon1:<RiSecurePaymentLine/>, color:'#0a1e42'},
        {type:"razorpay", route:'/razorpay', label:t('payment_optn_razorpay'), icon1:<RiSecurePaymentLine/>, color:'#0a1e42'}
    ];
    radios = [
        { name: '0%', value: 0 },
        { name: '5%', value: 0.05 },
        { name: '10%', value: 0.10 },
        { name: '15%', value: 0.15 },
        { name: '20%', value: 0.20 },
      ];
      
    cart = this.props.cart;
    current_dish_optionset = [];
    current_dish_count = 0;
    cart_current_dish = {
        dish_id:"",
        name:"",
        optionSets:[],
        dishCount:0,
        basePrice:0,
        optionPrice:0,
        totalPrice:0,
        discount:0
    }; 

    current_required_ispresent = false;
    current_required_isselected = false;

    roundToTwo(num){    
        return +(Math.round(num + "e+2")  + "e-2");
    }

    componentDidMount(){
        if(this.state.cart.dishes.length > 0){
            this.setState({status:true});
        }
    }
    componentWillUnmount(){
        // remove paypal client when not needed
        // cookies.remove("paypal_client_id");
    }
    componentWillMount(){
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
        // console.log(CurrencyCode.countryToCode('India'))
        this.cart.currency = CurrencyCode.countryToCode(this.props.restaurant.country);
        this.cart.tablenum = this.props.tablenum;
        // If india
        if(this.cart.currency === 'INR'){
            this.setState({payment:'external'});
        }
        // If paypal Client
        // localStorage.removeItem("paypal_client_id", );
        // if(this.props.restaurant.info && this.props.restaurant.info.paypal_client_id){
        //     cookies.set("paypal_client_id", this.props.restaurant.info.paypal_client_id, {path:'/'});
        // }
        
        this.calcCartSum();
    }

    // Redux Menu Update 
    updateInStore(newState){
        this.props.updateCartInStore(newState);
    }

    setCartLoading(ld, lT){
        this.setState({loading:ld, loadingText:lT});
    }

    updateCartItemCount(){
        // Update cart item count 
        // Calculate cart item count here
        var count = 0;
        this.cart.dishes.forEach(function (dish){
            count += dish.dishCount;
        })
        this.cart.itemCount = count;      
        // this.setState({status:true});
        return count;
    }

    calcCartTotal(){
        var total = 0;
        this.cart.dishes.forEach(function (dish){
            total += dish.totalPrice;
        })
        this.cart.cartTotal = this.roundToTwo(total);
        return total;

    }

    calcDishTotal(dish_id){
        var total = 0;
        // this.cart.dishes.find(function (d, i){
        //     if(d.dish_id === dish_id){
        //         // Optionset
        //         total = ((this.cart.dishes[i].basePrice * 100) *this.cart.dishes[i].dishCount) + (this.cart.dishes[i].optionPrice * 100) ;
        //         // update cart dish total
        //         this.cart.dishes[i].totalPrice = this.roundToTwo(total/100);
        //         console.log(total);
        //         return true;
        //     }
        // });
        this.cart.dishes.map((dish, i)=>{
                // Optionset
                if(dish.dish_id === dish_id){
                    total = ((this.cart.dishes[i].basePrice * 100) *this.cart.dishes[i].dishCount) + (this.cart.dishes[i].optionPrice * 100) ;
                    // update cart dish total
                    this.cart.dishes[i].totalPrice = this.roundToTwo(total/100);
                }
                // console.log(total);s
        });

        return total;
    }

    renderNotesBox(){

        if(!this.state.notesbox.show){
            return (<div className="background-white" style={{float:'right'}}>
            <br/>
                        <Button onClick={()=>{this.setState( {notesbox:{show:true, msg:''}})}} size="sm" variant="outline-secondary"> <FaPencilAlt/> </Button>
                </div>);
        }else{
            return (<div className="col-12 user-notes background-white">
            <br/>
            <FormattedMessage id='cart_note_msg' defaultMessage="Write a note for the staff along with your order...">
                        {(placeholder)=><FormControl onChange={(e)=>{
                            this.cart.notes = e.target.value;
                            this.calcCartSum();
                            this.setState({notesbox:{show:true, msg:e.target.value}});
                            }} value={this.cart.notes} as="textarea" className="user-notes" aria-label="With textarea"
                            placeholder={placeholder} />}
                            </FormattedMessage>
                        <br/><br/>
                        {/* <Button onClick={()=>{this.setState( {notesbox:{show:false, msg:''}})}} size="sm" variant="outline-secondary">Cancel <FaPencilAlt/> </Button> */}
                </div>);
        }

    }

    onChangePaymentMethod = (type) => {
        // console.log(type);
        this.setState({payment:type});
        this.calcCartSum();
        return
    }
    calcOptionPrice(dish_id, dcount){
        // Calculate the total price of the options
        var total = 0;
        this.cart.dishes.filter(dish => dish.dish_id === dish_id).forEach((d, i)=>{
            if(d.dish_id === dish_id){
            
                // total = this.cart.dishes[i].optionPrice * 100;
                d.optionSets.forEach(function (optsobj){
                    // console.log(optsobj);
                     total += (optsobj.option_price * 100) * optsobj.option_dish_count;
                });
                // update cart 
                // console.log(total/100);
                this.cart.dishes[i].optionPrice = this.roundToTwo(total/100);
                return true;
            }
        });
        return total;
    }

    addDishtoCartIncrement(cartdish, optsetobj, optionset_idx){
        // console.log(dish);
        

       // Find dish in Cart
        console.log('Increment Dish', cartdish, optsetobj, optionset_idx);
        this.cart.dishes.find((dish, i)=>{
            if(cartdish.dish_id === dish.dish_id){
                // Dish found in cart
                // console.log('dish found in cart', dish);
                    // dish has options, +dc,  optionset,
                    if(this.cart.dishes[i].optionSets[optionset_idx].option_dish_count > 0 && this.cart.dishes[i].dishCount>0){
                        this.cart.dishes[i].optionSets[optionset_idx].option_dish_count +=1;
                        this.cart.dishes[i].dishCount += 1;
                    }
                    // Recalculate the OptionPrice
                    this.calcOptionPrice(cartdish.dish_id);
                    return true
            }else{
                return false
            }
        });

        // if(!oper){
        //     console.log('dish not found in cart, so do nothing');
        //     // this.cart.dishes.push(this.cart_current_dish);
        //     // this.calcOptionPrice(this.cart_current_dish.dish_id);
        // }
        
        this.updateCartItemCount();
        this.calcDishTotal(cartdish.dish_id);
        this.calcCartTotal();
        this.calcCartSum();
        // Open Toast Modal
        // this.setState({ status:true});
        // this.current_dish_optionset=[]; 
        this.cart_current_dish = {}
        this.setState({status:true});
        // Update redux store cart
        this.updateInStore(this.cart);
        // console.log(this.cart);
        
    }

    removeDishfromCart(cartdish, optsetobj, optionset_idx){
        // console.log(dish);   
       // Find dish in Cart
        // console.log('Remove', cartdish, optsetobj, optionset_idx);
         this.cart.dishes.find((dish, i)=>{
            
            if(cartdish.dish_id === dish.dish_id){
                // Dish found in cart
                // console.log('dish found in cart', dish);
                
                    // dish has options, -dc, remove optionset,
                    if(this.cart.dishes[i].optionSets[optionset_idx].option_dish_count > 0 && this.cart.dishes[i].dishCount>0){
                        this.cart.dishes[i].optionSets[optionset_idx].option_dish_count -=1;
                        this.cart.dishes[i].dishCount -= 1;
                    }

                    if( this.cart.dishes[i].optionSets[optionset_idx].option_dish_count === 0){
                        // remove the optionset object
                        this.cart.dishes[i].optionSets.splice(optionset_idx,1);
                    }

                    if(this.cart.dishes[i].dishCount === 0){
                        // remove the dish 
                        this.cart.dishes.splice(i,1);
                    }
                       
                    // Recalculate the OptionPrice
                    this.calcOptionPrice(cartdish.dish_id);
                    return true
            }else{
                return false
            }
        });

   
        this.updateCartItemCount();
        this.calcDishTotal(cartdish.dish_id);
        this.calcCartTotal();
        this.calcCartSum();
        // Open Toast Modal
        // this.setState({ status:true});
        // this.current_dish_optionset=[]; 
        this.cart_current_dish = {}
        this.setState({status:true});
        // Update redux store cart
        this.updateInStore(this.cart);
        // console.log(this.cart);
        
    }

    renderCartDishCard(dish){
        var rem = true;
        // console.log('Cart Dish',dish);
        return(
           <>
           {dish.optionSets.map((optsobj, idx)=>{
            return(<> {<CDCard optionobj={optsobj} cartdish={dish} remove={rem} key={idx} onClickRemove={()=>this.removeDishfromCart(dish, optsobj, idx)} onClickAdd={()=>{this.addDishtoCartIncrement(dish, optsobj, idx)}}/>} </>)
            })}
           </>
        );   
    }

    renderDishes(){
        var count;
            if(this.state.cart){
            if(this.state.cart.dishes.length>0){
                count = 0;
                return(<> {this.state.cart.dishes.map((cartdish)=>{
                    count +=1;
                    return(this.renderCartDishCard(cartdish, count));
                })}<br/> </>);
            }else{
                return (
                    <div className="col-12">
                    <center>
                        {t('cart_no_items')}
                    </center>
                    <br/>
                    </div>
                   );
            }
        }
    }

    calcCartSum(){
        // this.cart. 
        // Make Final Total
        // this.cart.tax = ((this.cart.cartTotal * this.cart.taxpercent)/100);
        
        // Delivery Fee
        if(this.cart.tablenum === -2 && this.props.restaurant.info.delivery.delivery_fee){
            this.cart.delivery_fee = parseFloat(this.props.restaurant.info.delivery.delivery_fee);
        }

        this.cart.tax = 0;
        this.cart.promo = ((this.cart.cartTotal * this.cart.discountpercent) / 100);
        this.cart.tip = this.cart.cartTotal * this.state.tip;
        this.cart.totalCost = this.cart.tip + this.cart.cartTotal + this.cart.tax + this.cart.delivery_fee - this.cart.promo ;
        this.cart.pickup_date = this.props.order_meta.pickup.date;
        this.props.updateCartInStore(this.cart);
        this.setState({status:true});
    }
    
    // onChangePromoCode(e){
    //     // console.log(e.target.value);
    //     this.setState({promo:{value:e.target.value.toUpperCase()}});
    // }
    handlePromoSubmit(){
        // console.log('promo submit');
        this.setState({promo:{show:true, description: "Invalid code!"}})
    }

    onChangeTip(act){
        // act is the percentage of tip
        this.setState({tip:act});
        // this.cart.tip = this.cart.cartTotal * act;
        this.calcCartSum();

        return
    }

    renderTipButtons(){
        //   console.log(this.state.tip);
          return (<div className="toggle-button-wrapper">
          
          <ButtonGroup toggle style={{width:'100%'}}>
        
          {this.radios.map((radio, idx) => {
              var classN = idx === 0 ? "button-modal-left theme-button" : "button-modal-center theme-button";
                classN = idx === (this.radios.length - 1) ? "button-modal-right theme-button" : classN;
                
          return <ToggleButton
                    size="sm"
                    className={classN}
                    key={idx}
                    type="radio"
                    name="radio"
                    value={radio.value}
                    checked={radio.value === this.state.tip}
                    // checked={radioValue === radio.value}
                    onClick={() => {this.onChangeTip(radio.value)}}
            //   onChange={(e) => this.onChangeTip(parseFloat(e.currentTarget.value))}
                 >
          <small> <b>{radio.name}</b> </small>                              
          </ToggleButton>
        })}
        </ButtonGroup></div>);
    
    }

    getPromo(promo){
        // console.log(promo);
        if(promo){
            this.cart.discountpercent = promo.discountpercent;
            this.cart.promo_data = promo.data;
            this.calcCartTotal();
            this.calcCartSum();
        }
    }

    renderPromo(){

        return <PromoField getPromo={this.getPromo}/>;

    }

    renderBillingInfo(){
        return(
            <div className="row">
            {this.state.status && <div className="col-12 margin-middle">
            {/* <hr/> */}
             {/* <center><b>BILL SUMMARY</b></center>  */}
            
                <div className="row">
                    <div className="col-3"><small>{t('cart_subtotal')}</small></div>
                    <div className="col-5"></div>
                    <div className="col-4"><center><small><CurrencySymbol/>{this.props.cart.cartTotal.toFixed(2)}</small></center></div>
                </div>
                { this.props.cart.delivery_fee > 0 &&
                <div className="row">
                    <div className="col-3"><small>{t('delivery_charge_label')}</small></div>
                    <div className="col-5"><hr/></div>
                    <div className="col-4 no-padding-float-right"><center><small><CurrencySymbol/> {this.cart.delivery_fee.toFixed(2)}</small></center></div>
                </div> }
                <div className="row">
                    <div className="col-3">
                    <small>{t('cart_tip')} 
                        &nbsp;
                    </small></div>
                    <div className="col-5">  
                        {/* {this.renderTipButtons()} */}
                    </div>
                    <div className="col-4"><center><small><CurrencySymbol/>{this.cart.tip.toFixed(2)}</small></center></div>
                </div>
                <div className="row">
                    <div className="col-3"><small>{t('cart_promo')} </small>    </div>
                    <div className="col-5">
                </div>
                    <div className="col-4 no-padding-float-right"><center><small><CurrencySymbol/>{this.cart.promo.toFixed(2)}</small></center></div>
                </div>
               
                {/* 
                <div className="row">
                    <div className="col-4"><small>Taxes ({this.props.cart.taxlabel})</small></div>
                    <div className="col-4"><hr/></div>
                    <div className="col-4"><center><small><CurrencySymbol/> {this.cart.tax.toFixed(2)}</small></center></div>
                </div> 
                */}
                <br/>
                <div className="row">
                    <div className="col-3"><b style={{fontWeight:'bold'}}>{t('cart_total')}</b></div>
                    <div className="col-5"><hr/></div>
                    <div className="col-4 no-padding-float-right"><center><b style={{fontWeight:'bold'}}><CurrencySymbol/>{this.cart.totalCost.toFixed(2)}</b></center></div>
                </div>
            </div>}
            </div>
        );
    }

    showRazorpay(){
        // console.log(typeof(this.props.restaurant.bank_account_number));
        if(this.props.restaurant.bank_account_number === 'false'){
            return;
            // console.log('BANK DETAILS not added');
        }else{
            return (<>
                    {/* <Form.Check onChange={()=>{this.onChangePaymentMethod('razorpay')}} name="paymentmenthod" type="radio" id="2" label="Card, UPI & More."/> <br/> */}
                    {/* <span ><Link to={"/razorpay"}><Button variant="light" className='payment_option_btn' onChange={()=>{this.onChangePaymentMethod('razorpay')}} name="payment_method"  type="razorpay">Card, UPI, Wallets and More.</Button></Link><br/><br/></span> */}
                    <span ><PaymentButton color={'#0a1e42'} link={'/razorpay'}name="payment_method"  value={'razorpay'} text={'Card, UPI & More'} icon1={<RiSecurePaymentLine/>}/></span>
                    <center><small><br/></small><Image src="https://tabme.info/app-public-assets/india-payment-options.png"/></center>  
              </>)
        }
    }

    renderPaymentOptions(){

        switch(this.cart.currency){
            case 'INR':
                return(<Form>
                    <FormGroup><b>
                    {/* <Form.Check onChange={()=>{this.onChangePaymentMethod('external')}} name="paymentmenthod" type="radio" id="3" label="CASH / Pay at Counter."/>  */}
                    {/* <span><Link to="/external"><Button variant="light" className='payment_option_btn' onChange={()=>{this.onChangePaymentMethod("external")}} name="payment_method" value={'external'}>CASH / Pay at Counter</Button></Link></span> */}
                            <span ><PaymentButton color={'#2f4f4f'} link={"/external"} name="payment_method"  value={'external'} text={'CASH / Pay at Counter'} icon1={<FaRegMoneyBillAlt/>}/></span>

                        {this.showRazorpay()}  
                        </b>
                    </FormGroup>
                </Form>);
    
            default:
                    // Testing Cash
            return(
            <Form>
                {this.props.restaurant.payment_methods && <FormGroup>

                    {this.payment_options.map((p_opt, idx)=>{
                        if(this.props.restaurant.payment_methods.includes(p_opt.type)){    
                                return <span  key={idx+10}><PaymentButton color={p_opt.color} link={p_opt.route} name="payment_method" id={idx+10}  value={p_opt.type} text={p_opt.label} icon1={p_opt.icon1}/></span>
                        }
                    })}
                        {this.props.restaurant.payment_methods.includes('stripe') && <span className="payment_options_stripe_image"><Image src="https://www.tabme.info/app-public-assets/accepted_stripe2.png" style={{height:'90px'}} fluid/></span>}
                     <div>
                    </div>
                        {this.state.isPaypal && <span><hr/><PaypalCheckout cartLoading={this.setCartLoading}/></span>}
                </FormGroup>}
                     
                {!this.props.restaurant.payment_methods && <FormGroup>
                    <span ><PaymentButton color={'#2f4f4f'} name="payment_method" link={'/external'} value={'external'} text={'CASH / Pay at Counter'} icon1={<FaRegMoneyBillAlt/>}/></span>
                </FormGroup>}

                {/* <center>or</center> */}
                {/* <Form.Check onChange={()=>{this.onChangePaymentMethod('paypal')}} name="paymentmenthod" type="radio" id="8"/>  */}
                {/* or <PaypalCheckout cart={this.props.cart}/> */}


            </Form>);
        }

        
    }


    renderCheckoutForm(){

        return(
            <div className="container no-padding-float-left margin-btm">
                {/* <div className="row">
                    <div className="col-12">
                    <center><h4><b>Tab Summary</b></h4></center>
                    <hr/>
                    </div>
                </div> */}
                <div className="row">
                
                <div className="col-12 no-padding-float-left ">
                <HeadTitle text={"Tab Warenkorb"} icon={<RiHandbagFill/>}/>
                {/* <SubTitle text={t('cart_tab_summary_title')}/> */}
                {/* {this.state.status && <center><b>DISH SUMMARY</b></center> } */}
                <br/>
                <div className="theme-card">
                 {this.renderDishes()}
                </div>
                    
                </div>
                </div>

                <div className="row">
                <div className="col-12">
                    {/* <Button as={Link} to='/menu' size="sm" variant="outline-secondary"><FaUtensils/> </Button> */}
                    {/* {this.renderNotesBox()} */}
                    <div className="theme-card">
                    {/* <SubTitle text={"Promo"} /> */}
                    {/* <small><b>{t('cart_promo')}</b></small> */}
                    {this.renderPromo()}
                    {/* <SubTitle text={"Trinkgeld"}/> */}
                    <small><b>{t('cart_tip')}</b></small>
                    {this.renderTipButtons()}
                     </div>
                    
                </div>
                </div>
                <div className="theme-card">
                    {this.state.status && this.renderBillingInfo()}
                    </div>
                <br/>
                <div className="row">
                    {this.state.status && <div className="col-12">

                    {/* {<center><b>Payment Options</b></center> } */}
                    {/* <SubTitle text={t('cart_payment_options_title')}/> */}
                    {/* {this.renderPaymentOptions()} */}
                    <hr/>
                    
                    {/* <center><Link to="/checkout"><Button className="wide-btn" variant="dark"><b>Proceed to Pay</b></Button></Link></center> */}
                    {/* <center>{t('or')}</center>
                                <br/>
                                <PaypalCheckout cartLoading={this.setCartLoading} /> */}

                    </div>}
                </div>

                <div className="row">
                {/* <div className="menu-footer">
                    <Link to={`/${this.state.payment}`}>
                    
                        <Button className="wide-btn" variant="dark"><b>{t('proceed_btn', {text:""})}</b></Button>

                        </Link>
                    </div>    */}
                    <FormattedMessage id='menu' defaultMessage="Menu">
                {(placeholder)=><FormattedMessage values={{text:""}} id="proceed_btn">{(placeholder2)=><FooterComponent next={{text:placeholder2, to:"/asd"}}back={{show:true, to:"/menu6", type:"route", text:placeholder, arrow:true}}></FooterComponent>}</FormattedMessage>}
                    </FormattedMessage>
                </div>
            </div>
        );
    }

    render(){
        // Dish Count for each dish
        return ( 
            <div className="container">
              <LoadingOverlay
                active={this.state.loading}
                spinner
                text={this.state.loadingText}
                >
                {this.renderCheckoutForm()}

                {/* <PaypalCheckout cartLoading={this.setCartLoading}/> */}
                {/* <PaymentButton color={'#0a1e42'}link="/cart" text={"Karte und Mehr"} icon1={<RiSecurePaymentLine/>}/>
                <center>
                    <Image src="https://www.tabme.info/app-public-assets/accepted_cards.png" fluid/>
                </center> */}
                {/* <PaymentButton text={"Online Banking"} icon1={<RiBankLine/>}/> */}
                {/* <PaymentButton text={"ApplePay"} icon1={<FaApplePay/>}/> */}
                {/* <PaymentButton text={"GPay"} icon1={<RiGoogleLine/>}/> */}
                {/* <PaymentButton text={"Cash at Counter"} icon1={<FaRegMoneyBillAlt/>}/> */}
                <br/>   
                <TnC/>
                </LoadingOverlay>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {cart:state.cart,
            restaurant:state.restaurant,
            menu:state.menu,
            tablenum:state.tablenum,
            order_meta:state.order_meta
        }
  }
const mapDispatchToProps = dispatch =>{
    return {
        updateCartInStore: (cart) => dispatch(Action.updateCart(cart)),
        updateMenuInStore: (menu) => dispatch(Action.setMenu(menu))
    }
}

export default connect(
    mapStateToProps,
     mapDispatchToProps
)(Cart);

// export default Menu;
// Start Function
