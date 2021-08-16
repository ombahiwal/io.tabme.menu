// STORE -> Globalised storage
import countReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';
import cartReducer from './cartReducer.js';
import restaurantInfo from './restaurantInfoReducer';
import userReducer from './userReducer';
import tablenumReducer from './tablenumreducer';
import menuReducer from './menuReducer';
import orderReducer from './orderReducer'
import orderMetaReducer from './orderMetaReducer';
// import { useReducer } from 'react';

const allReducers = combineReducers({
    counter: countReducer,
    isLogged: loggedReducer,
    cart: cartReducer,
    restaurant: restaurantInfo,
    user: userReducer,
    tablenum: tablenumReducer,
    menu:menuReducer,
    order:orderReducer,
    order_meta:orderMetaReducer
});

export default allReducers;