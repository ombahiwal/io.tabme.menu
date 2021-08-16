const userReducer = (user={   
    fname:null,
    lname:null,
    email:null,
    address:null,
    phone: null
    }, action) => {
    switch(action.type){
        case 'SET_USER':
            return action.payload;
        default:
            return user;
    }
}

export default userReducer;