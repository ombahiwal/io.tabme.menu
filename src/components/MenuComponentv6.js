/* eslint-disable */
import React, {Component} from 'react';
// import {FormGroup, Form, ListGroup, Tooltip} from 'reactstrap';
import {Toast, Badge, Button, ButtonGroup} from 'react-bootstrap';
// UI Components
import Grid from './shared/Grid';
import { Modal } from 'react-rainbow-components';
// import DCard from './shared/Card';
import CDCard from './shared/CartDishCard';
import DCardImage from './shared/CardImage';

import MenuBanner from './shared/MenuBanner';
import MenuCategories from './shared/MenuCategories';
import MenuCatTitle from './shared/MenuCategoryTitle';

import CurrencySymbol from './CurrencySymbolComponent';
import Cookies from 'universal-cookie';
import { FaPlus, FaMinus } from 'react-icons/fa';
// import DataService from '../services/data-service';
import sampleMenu from './shared/sampleMenu';
import { Waypoint } from 'react-waypoint';
import Drawer from './shared/drawer/dist/Drawer';
import {FormattedMessage} from 'react-intl';
import {
    Link, Redirect
  } from "react-router-dom";
// import { connect } from 'net';
import {connect} from 'react-redux';
import t from '../i18n/translate';
import FooterComponent from './shared/FooterComponent';
var Action = require('../redux/actions/index');
var _ = require('lodash');
const cookies = new Cookies();

function format_name_uscore(name){
    return name.split('_')[0];
}

class Menu6 extends Component {

    constructor(props){
        super(props);
        // console.log("Props:");
        // console.log(props.cart);
        // var carttempfromprops = {selectedDishes:props.cart.selectedDishes, totalPrice:props.cart.totalPrice, itemTotal:props.cart.itemTotal};

        this.renderCategories = this.renderCategories.bind(this);
        this.OpenInfoModalOnClick = this.OpenInfoModalOnClick.bind(this);
        this.ModalInfoOnClose = this.ModalInfoOnClose.bind(this);
        this.dishCardDisplay = this.dishCardDisplay.bind(this);
        this.ModalCustomOnClose = this.ModalCustomOnClose.bind(this);
        this.ModalInfoOnClose = this.ModalInfoOnClose.bind(this);
        this.renderCustomisationModal = this.renderCustomisationModal.bind(this);
        this.renderCartDrawer = this.renderCartDrawer.bind(this);
        this.addDishtoCart = this.addDishtoCart.bind(this);
        this.onClickDishOption = this.onClickDishOption.bind(this);
        this.updateCartItemCount = this.updateCartItemCount.bind(this);
        this.calcCartTotal = this.calcCartTotal.bind(this);
        this.calcDishTotal = this.calcDishTotal.bind(this);
        this.calcOptionPrice = this.calcOptionPrice.bind(this);
        this.calcOneDishOptionPrice = this.calcOneDishOptionPrice.bind(this);
        this.roundToTwo = this.roundToTwo.bind(this);
        this.renderDishCount = this.renderDishCount.bind(this);
        this.renderCartTotal = this.renderCartTotal.bind(this);
        this.renderCartItemCount = this.renderCartItemCount.bind(this);
        this.updateInStore = this.updateInStore.bind(this);
        this.dishHasOptions = this.dishHasOptions.bind(this);
        this.onChangeCurrentDishCount = this.onChangeCurrentDishCount.bind(this);
        this.getCurrentDishPrice = this.getCurrentDishPrice.bind(this);
        this.checkCurentRequiredSelected = this.checkCurentRequiredSelected.bind(this);
        this.findCartDishOptionSetAndCompare = this.findCartDishOptionSetAndCompare.bind(this);
        this.renderImageBanner = this.renderImageBanner.bind(this);
        // if(this.props.menu == null)
        // this.state = {cart:props.cart, status:false, menu:sampleMenu, isOpenInfo:false, dishInfo:{}, isOpenCustom:false, dishCustom:{}, customOptionValueRadio:'auto', open:false};
        // else
        if(this.props.menu === null){
            // Temporary for dev.. set menu to store
                // props.updateMenuInStore(sampleMenu);
                // cookies.set('menu', sampleMenu, {path:'/'});
                // this.state = {cart:props.cart, status:false, menu:sampleMenu, isOpenInfo:false, dishInfo:{}, isOpenCustom:false, dishCustom:{}, customOptionValueRadio:'auto', open:false, redirect:false};
                // console.log(this.state.menu);
                // // Set cart
            
                var cookie_menu = cookies.get('menu');
                if(cookie_menu){
                    props.updateMenuInStore(cookie_menu);
                }else{
                    this.setState({redirect:true});
                }
                // 
            // Redirect to  (set True after dev)
            this.state = {cart:props.cart, status:false, menu:this.props.menu, isOpenInfo:false, dishInfo:{}, isOpenCustom:false, dishCustom:{}, customOptionValueRadio:'auto', open:false, redirect:true, tooltip:false, active_category:"Menu", menu_rendered:[]};
            console.log(this.state.menu);
        }else{
            cookies.set('menu', props.menu, {path:'/'});
            this.state = {cart:props.cart, status:false, menu:this.props.menu, isOpenInfo:false, dishInfo:{}, isOpenCustom:false, dishCustom:{}, customOptionValueRadio:'auto', open:false, redirect:false, tooltip:false, active_category:"Menu", menu_rendered:[]};
        }
    }

    //cs_test_a1UasTvtHY5UufeokeOkQCeqsEOzsCVzkPIrfiHFaGb3ix4Jmpcg4XtneB

    // Cart Global Object
    // menu = this.state.menu;
    cart=this.props.cart;
    current_dish_optionset = [];
    current_dish_count = 1;
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
    current_required_count = 0;
    onChangeCurrentDishCount(act){
        if(act){
            this.current_dish_count +=1;
        }else if(this.current_dish_count > 0){
            this.current_dish_count -=1;
        }
        this.setState({status:false});
        // console.log(this.current_dish_count);
        return 
    }
    componentDidMount(){
        if(!this.state.redirect){
        var subcategories;
        var subcats;
        this.setState({menu_rendered: <div className="menu-container margin-btm">
        <Waypoint
             topOffset = "120px"
             bottomOffset ="80%"
             onEnter={()=>{
                //  console.log(`MEnu leave start`);
                 this.setState({active_category:"Menu", active_category_index:-1})}}
         /> 

     {this.state.menu.categories.map((cat, cat_idx)=>{
         // Search Sub Categories of this menu from dishes
         subcategories = [];
         this.state.menu.dishes.forEach((o) => {
             if (o.category === cat && o.subcategory !=='none') {
                 subcategories.push(o.subcategory);
             }
         });
         subcats = [...new Set(subcategories)];

         return(<div>
                <div id={cat}></div>
         
             <MenuCatTitle text={cat}/>
             <Waypoint
                topOffset = "140px"
                bottomOffset ="80%"
                onEnter={()=>{ this.setState({active_category:cat, active_category_index:cat_idx})}}
             /> 
         <div className="col-12" style={{padding:'0px'}}>               
         <Grid>
             
            {this.state.menu.dishes.map((dish)=>{
                if(dish.category === cat && dish.subcategory==='none'){
                    return(this.dishCardDisplay(dish));
                }
            })}
         
         {subcats.map(((subcat)=>{
             return(
                 <div key={subcat}>
                 <span className="menu-subcategory"><center>{subcat}</center></span>
                 <Grid>
                        {this.state.menu.dishes.map((dish)=>{
                             if(dish.category === cat && dish.subcategory===subcat){
                                 return(
                                     this.dishCardDisplay(dish)
                                 );
                             }
                         })}
                     </Grid>
                 </div>
             );
         }))}
        </Grid>
        <Waypoint
             bottomOffset = "82%"
             topOffset ="110px"
             onLeave={()=>{ this.setState({active_category:cat, active_category_index:cat_idx})}}
         />
         </div>
         </div>);
                
     })}
      
  {/* </Accordion> */}
    </div>});
        }
    }

    componentWillMount(){
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    }
    checkCurentRequiredSelected(dsh){
        this.current_required_count = 0;
        this.current_required_ispresent = false;
        dsh.options.map((optn)=>{
            if(optn.required){
                this.current_required_count +=1;
                this.current_required_ispresent = true;
            } 
        });
    }

    checkDishAddButtonState(){
        if(this.current_dish_count === 0){
            return true;
        }
        if(this.current_required_ispresent === this.current_required_isselected){
            return false;
        }else{
            return true;
        }   
        
    }
    
    getCurrentDishPrice(){
        var current_dish_selection_total = 0;
        // console.log(this.current_dish_optionset, this.current_dish_count, this.cart_current_dish, this.calcOneDishOptionPrice());
        current_dish_selection_total = this.roundToTwo((this.calcOneDishOptionPrice() + this.cart_current_dish.basePrice ) * this.current_dish_count);
        return (<b>({<CurrencySymbol/>}&nbsp;{current_dish_selection_total.toFixed(2)})</b>);
    }

    // for calculation dish optionset Price of current selected dish 
    // and check if required is selected
    calcOneDishOptionPrice(){
        var option_price = 0;
        // console.log(this.current_dish_optionset);
        var current_required_count_selected = 0;
        this.current_dish_optionset.map((opt)=>{
            if(this.current_required_ispresent){
                if(opt.required){
                    current_required_count_selected +=1;
                    if(current_required_count_selected === this.current_required_count)
                        this.current_required_isselected = true;
                }
            }
                opt.values.map((v)=>{
                    // console.log(v.value, v.addPrice);
                    option_price += (v.addPrice * 100);
                }) 
            });
        // console.log(this.current_required_isselected, this.current_required_ispresent);
        
        return this.roundToTwo(option_price/100);
    }

    renderCartToast(){
        return(
            <div>
                <Modal hideCloseButton={true} isOpen={this.state.status}>
            <Toast onClose={() => this.setState({status:false})} show={this.state.status} delay={1000} autohide>
          <Toast.Header closeButton="false">
            <strong className="mr-auto">tabme.</strong>
            <small>Just Now</small>
          </Toast.Header>
          <Toast.Body><h5><center><b>Dish Added!</b></center></h5></Toast.Body>
        </Toast>
        </Modal>
        </div>
        );
    }
  

    findCartDishOptionSetAndCompare(new_optionset, dish_optionsets){
            var flag =  false;
            // var find = false;
            if(new_optionset.length === 0){
                var oper;
                // console.log(oper);
                if( dish_optionsets.find((optnobj, idx)=>{
                    // console.log(optnobj, idx)
                    if(optnobj.optionset.length === 0){
                        oper = idx;
                        return true;
                    }
                })){
                    return oper;
                }else{
                    return false
                }
            }

            // console.log(new_optionset, dish_optionsets);
            
            var c  = dish_optionsets.find((optsetobj, idx)=>{
                 if(_.isEqual(optsetobj.optionset, new_optionset)){
                    flag = idx;
                    return true
                }
            });

            // console.log(c);
            /*
            console.log(dish_optionsets.find((optsetobj, idx)=>{
                console.log(optsetobj, idx);
                    return optsetobj.optionset.find((optn)=>{
                            new_optionset.find((n_opt)=>{
                                if(n_opt._id === optn._id){
                                    if(_.isEqual(n_opt, optn)){
                                        find = true;
                                    }else{
                                        find = false;
                                        return false;
                                    }
                                }
                            });
                            return find;

                    })
            })); 
            */
            // console.log('index of option set', flag);
            return flag;
    }

    addDishtoCart(dish, dcount, cart=false){
        if(dcount === 0){
            return
        }
        // console.log('current count - ', dcount);
        var oper = false;
        // Add OptionSets
        var arr = new Array();
       
        this.current_dish_optionset.map((optn)=>{
           var optn2 = new Object({});
            optn2.title = optn.title;
            optn2._id = optn._id;
            optn2.required = optn.required;
            optn2.type = optn.type;
            optn2.values = [];

            // console.log(optn, optn2);

            // Ithe issue yetoy option cha - jo solve zalay atta tar

            try{optn.values.map((val)=>{
                var optnValues = new Object({});
                optnValues._id = val._id;
                optnValues.addPrice = val.addPrice;
                optnValues.value = val.value;
                // console.log(new Object(optnValues));
                optn2.values.push(new Object(optnValues));
            });
            // sort by ID;
            // console.log(optn2)
            optn2.values = optn2.values
            .sort(function(a, b)
            {
             var x = a._id; var y = b._id;
             return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });

            // console.log(optn2)

            arr.push(new Object(optn2));}catch(e){ return }
            
        });
        this.cart_current_dish.optionSets = arr.slice(0);
        this.cart_current_dish.optionSets = this.cart_current_dish.optionSets.sort(function(a, b)
        {
         var x = a._id; var y = b._id;
         return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
        // Find dish in Cart
        
        oper = this.cart.dishes.find((cartdish, i)=>{

            if(cartdish.dish_id === dish._id || cart){
                // Dish found in cart
                // console.log('dish found in cart');
                var opt_idx;
                // if(dish.options.length === 0){
    
                    opt_idx = this.findCartDishOptionSetAndCompare(arr.slice(0), this.cart.dishes[i].optionSets);
                    // console.log(opt_idx);
                    if(opt_idx === false){
                        this.cart.dishes[i].optionSets.push({option_dish_count:dcount, option_price:this.calcOneDishOptionPrice(), optionset:arr.slice(0)});
                    }else{
                        this.cart.dishes[i].optionSets[opt_idx].option_dish_count +=dcount;
                    }
                        
                    // New Logic - 

                    this.cart.dishes[i].dishCount += dcount;
                    // Recalculate the OptionPrice
                    this.calcOptionPrice(cartdish.dish_id, dcount);
                    return true;
                // }
            }else{
                return false;
            }
        });

        if(!oper){
            // console.log('dish not found in cart, so pushed', this.cart_current_dish.dishCount);
            // create new obj
            // for first entry
            if(this.current_dish_optionset.length === 0){
                this.cart_current_dish.optionSets = [];
            }

            var cart_d = new Object({
                dish_id:this.cart_current_dish.dish_id,
                name:this.cart_current_dish.name,
                optionSets:[new Object({ option_dish_count:dcount, option_price:this.calcOneDishOptionPrice(), optionset:this.cart_current_dish.optionSets.slice(0)})],
                dishCount:dcount,
                basePrice:this.cart_current_dish.basePrice,
                optionPrice:this.cart_current_dish.optionPrice,
                totalPrice:this.cart_current_dish.totalPrice,
                discount:this.cart_current_dish.discount
            });
            
            this.cart.dishes.push(cart_d);
           
            this.current_required_isselected = false;
            this.calcOptionPrice(this.cart_current_dish.dish_id);
        }

        this.updateCartItemCount();
        this.calcDishTotal(dish._id);
        this.calcCartTotal();
        // Open Toast Modal
        // this.setState({status:true});

        // Update redux store cart
        this.updateInStore(this.cart);
        // this.current_dish_optionset=[]; 
        this.cart_current_dish = new Object({});
        this.current_dish_optionset = [];
        this.current_dish_count = 1;
        // console.log(this.cart); 
        this.current_required_isselected = false;
        // console.log(this.state.menu);
        // Close The Custom modal 
        this.setState({isOpenCustom:false});
    }

    addDishtoCartIncrement(cartdish, optsetobj, optionset_idx){
        // console.log(dish);
        var oper;      

       // Find dish in Cart
        // console.log('Increment Dish', cartdish, optsetobj, optionset_idx);
        oper = this.cart.dishes.find((dish, i)=>{
            
            if(cartdish.dish_id === dish.dish_id){
                // Dish found in cart
                console.log('dish found in cart', dish);
                
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
        // Open Toast Modal
        // this.setState({ status:true});
        // this.current_dish_optionset=[]; 
        this.cart_current_dish = {}
        this.setState({status:false});
        // Update redux store cart
        this.updateInStore(this.cart);
        // console.log(this.cart);
        
    }

    removeDishfromCart(cartdish, optsetobj, optionset_idx){
        // console.log(dish);
        var oper;      

       // Find dish in Cart
        // console.log('Remove', cartdish, optsetobj, optionset_idx);
        oper = this.cart.dishes.find((dish, i)=>{
            
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
        // Open Toast Modal
        // this.setState({ status:true});
        // this.current_dish_optionset=[]; 
        this.cart_current_dish = {}
        this.setState({status:false});
        // Update redux store cart
        this.updateInStore(this.cart);
        // console.log(this.cart);
        
    }

    updateCartItemCount(){
        // Update cart item count 
        // Calculate cart item count here
        var count = 0;
        this.cart.dishes.map((dish)=>{
            count += dish.dishCount;
        })
        this.cart.itemCount = count;      
        // this.setState({status:true});
        return count;
    }

    calcCartTotal(){
        var total = 0;
        this.cart.dishes.map((dish)=>{
            total += dish.totalPrice;
        })
        this.cart.cartTotal = this.roundToTwo(total);
        return total;

    }

    calcDishTotal(dish_id){
        var total = 0;
        this.cart.dishes.find((d, i)=>{
            if(d.dish_id === dish_id){
                // Optionset
                total = ((this.cart.dishes[i].basePrice * 100) *this.cart.dishes[i].dishCount) + (this.cart.dishes[i].optionPrice * 100) ;
                // update cart dish total
                this.cart.dishes[i].totalPrice = this.roundToTwo(total/100);
                // console.log(total);
                return true;
            }
        });
        return total;
    }

    // complete 
    calcOptionPrice(dish_id, dcount){
        // Calculate the total price of the options
        var total = 0;
        this.cart.dishes.find((d, i)=>{
            if(d.dish_id === dish_id){
            
                // total = this.cart.dishes[i].optionPrice * 100;
                d.optionSets.map((optsobj)=>{
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

    dishHasOptions(dish_id){
        // console.log(dish_id);
        var flag = true;
        this.state.menu.dishes.map(d =>{
            if(d._id === dish_id && d.options.length === 0){
                flag= false; 
            }            
        });
        return flag;
    }

    getDishfromMenu(dishId){
        var d = null;
        this.state.menu.dishes.find(dsh=>{
                if(dsh._id === dishId){
                    // check if it has required option 
                    d = dsh;
                }    
        });
        return d
    }

    renderCartDishCard(dish){
        var rem = true;
        // console.log('Cart Dish',dish);
      
        return(
           <div key={dish.dish_id}>
            {dish.optionSets.map((optsobj, idx)=>{
                return(<CDCard optionobj={optsobj} cartdish={dish} remove={rem} key={idx} onClickRemove={()=>this.removeDishfromCart(dish, optsobj, idx)} onClickAdd={()=>{this.addDishtoCartIncrement(dish, optsobj, idx)}}/>);
                })}
           </div>
        );   
    }

    renderCartDrawer(){
        return(
            <div className="cart-drawer no-padding-float-left">
            
            <Drawer side="right" >
                <div className="col-12 m-2"> 
                    <div className="row">
                    <div className="col-12"><h4><b>{t('your_tab')}</b></h4></div>
                        
                        <hr/>
                        <Grid>
                            <div>
                            <hr/>
                            </div>

                            {/* <div>
                            <hr/>
                                <b>No. of Items :</b> {this.cart.itemCount} 
                            </div>
                            <div>
                                <b>Total Price :</b>  <CurrencySymbol/> {this.cart.cartTotal.toFixed(2)}
                            </div> */}
                            <div>
                            <Link to="/cart"> 
                                <button className="theme-button">{t('proceed_btn', {text:""})} &nbsp;<small><b>{this.renderCartTotal()}<CurrencySymbol/></b></small></button>
                            </Link>  
                            </div>
                            <div>
                                <hr/>
                                  <h5><b>{t('dishes_cart')}</b></h5>
                                <br/>
                                {this.cart.dishes.map((cartdish)=>{
                                    return(
                                        <div key={cartdish.dish_id}>
                                        {this.renderCartDishCard(cartdish)}
                                        </div>
                                    );
                                })}
                            </div>
                        </Grid>
                    </div>
                </div>
                {/* <Button onClick={() => this.setState({status:true})} label='show Toast'/> */}
            </Drawer>
            <Badge variant="secondary" label="0" ><b>{this.renderCartItemCount()}</b></Badge>
            </div>
        );
    }
    
    renderCartTotal(){
        this.calcCartTotal();
        return this.cart.cartTotal.toFixed(2);
    }

    renderDishCount(dish_id){
         var dc = 0; 
         this.cart.dishes.find((d, i)=>{
            if(d.dish_id === dish_id){
                dc = d.dishCount;      
                return true;
            }
        })
        return dc;
    }

    renderCartItemCount(){
        return this.cart.itemCount;
    }
    
    renderCustomisationModal(){
        var dish = this.state.dishCustom;
        // reference of menu dish
        var selectOptions = [];
        this.cart_current_dish = new Object({
            dish_id:dish._id,
            name:dish.name,
            optionSets:[],
            basePrice:dish.price,
            optionPrice:0,
            dishCount:1,
            totalPrice:0,
            discount:dish.discount
        });
        var showBar = false;
        var requiremsg = false;
        return(<Modal id="modal-2" isOpen={this.state.isOpenCustom} onRequestClose={()=>{this.ModalCustomOnClose();  this.current_dish_optionset=[]; 
                                                                                                                        this.cart_current_dish = new Object({}); 
                                                                                                                        this.current_dish_count = 1;
                                                                                                                        this.current_required_ispresent = false;
                                                                                                                        this.current_required_isselected = false;}}>
                <h4 style={{"marginRight":"28px"}}><b>{dish.name} {' '} </b></h4>
               <h6><b><CurrencySymbol/> {dish.price.toFixed(2)}</b> </h6>
                <small>{this.dishCatBreadCrumb(dish.category, dish.subcategory)}</small>
                <hr/>
                <div className="col-12">
                        {dish.options.map((option)=>{
                            var optn  = new Object({
                                _id:option._id,
                                values: option.values.slice(0),
                                title: option.title,
                                type: option.type,
                                required: option.required
                            });
                            
                            showBar = true;   
                                if(option.type==='single'){     
                                    requiremsg = option.required;                       
                                    return(
                                        <div key={option.title} className="row">
                                       
                                            <h6> <br/>
                                                <b>
                                            {format_name_uscore(option.title)}
                                            {option.required && 
                                            <span>{this.checkDishAddButtonState() && <span style={{color:'red'}}>*</span>} {!this.checkDishAddButtonState() && '*'}</span>}
                                            </b></h6>    
                                                <div className="col-12">
                                                {option.values.map((opt, idx)=>{
                                                    return(
                                                        <div key={opt.value}className="row">
                                                            <div className="col-1"></div>
                                                            <div className="col-6">
                                                               <input type="radio" className="form-check-input custom-check" onChange={()=>{this.onClickDishOption(optn, opt._id)}} value={opt._id} name={option.title} id={option.title}/> 
                                                               <small> <b> {opt.value}</b></small>
                                                            </div>
                                                            <div className="col-4"><small>+ <CurrencySymbol/> <b>{opt.addPrice.toFixed(2)}</b></small></div>
                                                            {/* <div className="col-1"></div> */}
                                                        </div>
                                                    );
                                                })} 
                                                </div> 
                                        </div>
                                );
                                    
                                }else if(option.type==='multiple'){
                                    return( <div key={option.title} className="row">
                                               
                                                <h6> <br/>
                                                    <b>{format_name_uscore(option.title)}</b>
                                                {option.required && <span>{this.checkDishAddButtonState() && <span style={{color:'red'}}>*</span>} {!this.checkDishAddButtonState() && '*'}</span>}</h6> 
                                            
                                                    <div className="col-12">
                                                    {option.values.map((opt, idx)=>{
                                                        selectOptions.push({value:opt.value, label:opt.value});
                                                        return(
                                                            <div key={opt.value} className="row">
                                                            
                                                                <div className="col-1"></div>
                                                                <div className="col-6">
                                                                    { <input type="checkbox" className="form-check-input" onChange={()=>{this.onClickDishOption(optn, opt._id)}} value={opt._id} id={option.title}/>}
                                                                   <small> <b> {opt.value}</b></small>
                                                                </div>
                                                                <div className="col-4"><small>+ <CurrencySymbol/> 
                                                                    <b>{opt.addPrice.toFixed(2)}</b>
                                                                    </small>
                                                                    </div>
                                                                <div className="col-1"></div>        
                                                            </div>
                                                        );
                                                    })} 
                                                </div> 
                                            
                                        </div>
                                        );
                            }
                        })}
                        {requiremsg && <br/>}
                    {requiremsg && <small> {this.checkDishAddButtonState() && <span style={{color:'red'}}> <b style={{fontSize:'17px'}}>*</b> {t('required')}</span>} </small>}
                        {showBar && <hr/>}
                    <div className="row">
                        <div className="col-4 no-padding-float-left" >
                            <ButtonGroup size="sm">
                                <button className="theme-button button-modal-left" variant="outline-secondary" onClick={()=>{this.onChangeCurrentDishCount(false)}} ><FaMinus/></button>
                                <button className="theme-button button-modal-center"><b>{this.current_dish_count}</b></button>
                                <button className="theme-button button-modal-right" onClick={()=>{this.onChangeCurrentDishCount(true)}}  variant="outline-secondary" label="+"><FaPlus/></button>
                            </ButtonGroup>
                        </div>
                        <div className="col-8 no-padding-float-right" > 

                    
                                <button className="theme-button button-modal-addtocart"  disabled={this.checkDishAddButtonState()}  variant="dark" onClick={()=>{this.addDishtoCart(dish, this.current_dish_count);}}>
                                        <b>{t('add_btn')} {'  '}<small>{this.getCurrentDishPrice()}</small></b>
                                    </button>    
                        </div>
                    </div>

                    {/* <div className="row">
                        <div className="col-12"> 
                        <h6><b>Allergen Info</b></h6>
                    {this.dishAllergenDisplay(dish.allergen)}

                        </div>
                    </div> */}
                    
                </div>

            </Modal>);
    }
 
    // Main Menu Render
    renderCategories(){
        return this.state.menu_rendered;
    }
    
    renderTotal(){
            return(
                  <FormattedMessage values={{text:""}} id="proceed_btn">{placeholder=><FooterComponent back={{show:false}} menucart={true} total={this.renderCartTotal()} next={{text:placeholder, to:'/cart', type:"route"}}/>}</FormattedMessage>
            );

    }

    findOptionValues(option_id, optionValue_ids=[]){
        var values = [];
        var opt = {
            option_id:"",
            title:"",
            values: []
        }
        if(optionValue_ids.length === 0){
            return []
        }
        this.state.menu.dishes.map((d)=>{
            d.options.map((o)=>{
                if(o._id === option_id){
                    opt = {
                        option_id:"",
                        title:"",
                        values: []
                    }
                    opt.option_id = option_id;
                    opt.title = o.title
                    o.values.map((val)=>{
                        optionValue_ids.map((id)=>{
                            if(id === val._id){
                                opt.values.push(val);
                                return true
                            }
                                

                        })
                    })
                    values.push(opt);
                }
            });
        });
        return values
    }

    onClickDishOption(option, optionValue_id){
        // console.log("BEfore - ", this.current_dish_optionset);
        var oper = false;
        var oper2 = false;
        var oper3 = false;
        var optn;
        // If Option type is multiple - Checkbox
        var requiredValObj;            
        if(option.type === 'multiple'){
            // console.log(this.current_dish_optionset);
            // if option is present in the set
            oper2 = this.current_dish_optionset.find((coption, j)=>{
                if(coption._id === option._id){
                    
                    // IF option value is already present in coption.values, remove the value
                    // if not present, push the new found value, searched from option.values
                    oper3 = coption.values.find((v,i)=>{
                        if(v._id === optionValue_id){
                            this.current_dish_optionset[j].values.splice(i,1);
                            this.calcOneDishOptionPrice();
                            return true
                        }
                    });
                    // console.log(option.required);
                    this.setState({status:false});
                    if(!oper3){
                        option.values.find((val, i)=>{
                            if(val._id === optionValue_id){
                                this.current_dish_optionset.find((o,i)=>{
                                    if(o._id === option._id){
                                        this.current_dish_optionset[i].values.push({_id:val._id, addPrice:val.addPrice, value:val.value});
                                        this.calcOneDishOptionPrice();
                                        return true;
                                    }
                                    
                                });
                                
                            }
                            
                        });
                     
                    }
                     
                    return true
                }
            });
            
            if(!oper2){
                // Option not present
                // console.log('option not present - mult');
                optn = {
                    _id:option._id,
                    required:option.required,
                    title:option.title,
                    type:option.type,
                    values:[]
                }
                option.values.map((val)=>{
                    // Just push the value
                    if(val._id === optionValue_id){
                        optn.values.push({_id:val._id, addPrice:val.addPrice, value:val.value});
                    }
                       
                }); 
                this.current_dish_optionset.push(optn);
                this.calcOneDishOptionPrice();
                this.setState({status:false});
            }
            this.calcOneDishOptionPrice();
            this.setState({status:false});

        }else if(option.type === 'single'){
            // If type is single (radio)
            oper = this.current_dish_optionset.find((o,i)=>{
                // if option_id is present
                if(o._id === option._id){
                    // replace values[0] with new value 
                    // replace with optionValue of that ID
                    option.values.find((val) =>{
                        if(val)
                        if(val._id === optionValue_id){
                            requiredValObj = {_id:val._id, addPrice:val.addPrice, value:val.value};
                            return true
                        }
                    });
                    this.current_dish_optionset[i].values[0] = requiredValObj;
                    this.calcOneDishOptionPrice();
                    return true
                }else{                
                    return false
                }
            });
            if(oper){
                this.calcOneDishOptionPrice();
                this.setState({status:false});
                return
            }
            
            // Add Object of option with that id and single value of the corresponding valuesID
            option.values.find((val) =>{
                if(val._id === optionValue_id){
                    requiredValObj = {_id:val._id, addPrice:val.addPrice, value:val.value};

                    return true
                }
            });

            option.values = [requiredValObj];
            this.current_dish_optionset.push(option);
            this.calcOneDishOptionPrice();
            this.setState({status:false});
            return
        } 
        
    }
   
    dishVegDisplay(veg){
        if(veg === "none"){
            return ""
        }else{
            return veg
        }
    }

    

    dishAllergenDisplay(aller){
        if(aller === "true"){
            return(<><h6><b>Allergen Info</b></h6>
                <p><small>This dish may contain any of the following allergy inducing ingredients - Milk, Eggs, Wheat, gluten, Soy, Tree nuts, Fish, Shellfish, Peanuts.</small></p>
                </>
            );
        }else{
            return(
                <p>-</p>
            );
        }
    }

    dishCatBreadCrumb(cat, subcat){
        if(cat !== "" || cat !=="none"){
            if(subcat!== "none"){
                return(<span>{cat} > {subcat}</span>);
            }else{
                return(<span>{cat}</span>);
            }
        }else{
            return "";
        }
    }

    dishCardDisplay(dish){

        if(dish.active){
            return(
                <DCardImage 
                    menu_id = {this.state.menu._id}
                    dish={dish}
                    key={dish.name}
                    title={dish.name}
                    text={dish.description}
                    price={dish.price}
                    veg={this.dishVegDisplay(dish.veg)}
                    onClickCustom={()=>this.OpenCustomModalOnClick(dish)}
                    onClickAllergenInfo={()=>this.OpenInfoModalOnClick(dish)}
                />
            );
        }
      
    }

    OpenInfoModalOnClick(dish){
        return this.setState({ isOpenInfo: true, dishInfo:dish });
    }

    ModalInfoOnClose(){
        return this.setState({ isOpenInfo: false });
    }

    renderAllergenModal(){
        return(
        <Modal id="modal-1" isOpen={this.state.isOpenInfo} onRequestClose={this.ModalInfoOnClose}>
        <h4><b>{this.state.dishInfo.name}</b></h4>
       <small><b>{this.dishVegDisplay(this.state.dishInfo.veg)}</b></small>
        <p><small>{this.dishCatBreadCrumb(this.state.dishInfo.category, this.state.dishInfo.subcategory)}</small></p>
        
        <p>{this.state.dishInfo.description}</p>
        <hr/>
        
        {this.dishAllergenDisplay(this.state.dishInfo.allergen)}
    </Modal>);
    }

    OpenCustomModalOnClick(dish, dishId="", flag=false){
        this.checkCurentRequiredSelected(dish);
        if(flag){
            dish = this.getDishfromMenu(dishId);
            return this.setState({isOpenCustom: true, dishCustom:dish});
        }
        return this.setState({isOpenCustom: true, dishCustom:dish});
    }

    ModalCustomOnClose(){
        return this.setState({isOpenCustom:false});
    }

   // Custom Modal

    roundToTwo(num) {    
        return +(Math.round(num + "e+2")  + "e-2");
    }

    // Redux Cart Update 
    updateInStore(newState){
        this.props.updateCartInStore(newState);
    }


    renderImageBanner(){
        

        return(<div className="menu-banner-container">
        <center>
            <MenuBanner
                restaurant={this.props.restaurant}
            />
        </center>
        </div>);

    }

    render(){
        return ( 
            <div className="container no-padding-float-left">
            {this.state.redirect && <Redirect to="/" />}
            {!this.state.redirect &&<div>
            

            <div className="col-12 no-padding-float-left" >
                <div>
                {this.renderImageBanner()}
                <MenuCategories activecat={this.state.active_category} goTo={this.state.active_category_index} categories={this.state.menu.categories}/>
                {this.renderCategories()}
                <center><b>.</b></center>
                </div>    
                
                <div className="">
                    {/* {this.renderTotal()} */}

                </div>
               
                {this.state.isOpenInfo && this.renderAllergenModal()}
            {this.state.isOpenCustom && this.renderCustomisationModal()}
            </div>
            
            </div>}
            
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {cart:state.cart,
            restaurant:state.restaurant,
            menu:state.menu
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
)(Menu6);
  