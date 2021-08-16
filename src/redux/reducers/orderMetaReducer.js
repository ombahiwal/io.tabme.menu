const orderMetaReducer = (order_meta={
    pickup:{
        time:"00:00",
        date:null
    }
}, action) => {
        
        switch(action.type){
            case 'UPDATE_META':
                return action.payload;
            default:
                return order_meta;
        }
}

export default orderMetaReducer;