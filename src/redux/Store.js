import {createStore} from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';


//import {createStore} from 'redux';
import allReducer from './reducers/index'


const Store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// console.log(Store);
export default Store;


// exports.


