const tablenumReducer = (tn=0, action) => {
    
    switch(action.type){
        case 'SET_TABLENUM':
            return action.payload
        default:
            return tn;
    }
}

export default tablenumReducer;