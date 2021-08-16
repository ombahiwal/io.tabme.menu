const orderReducer = (order={
    _id:null
}, action) => {
        
        switch(action.type){
            case 'UPDATE_ORDER':
                return action.payload;
            default:
                return order;
        }
}

export default orderReducer;