const cartReducer = (cart={
    dishes:[],
    itemCount:0,
    cartTotal:0,
    taxlabel:"included",
    taxpercent:0,
    tax:0,
    delivery_fee:0,
    discountpercent:0,
    promo:0,
    tip:0,
    currency:'',
    totalCost:0,
    notes:"",
    promo_data:null,
    tax_data:null,
    pickup_date:null,
    order_label:null
}, action) => {
        
        switch(action.type){
            case 'UPDATE':
                return action.payload;

            default:
                return cart;
        }
}

export default cartReducer;