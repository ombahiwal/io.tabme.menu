import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './i18n';
import App from './App';
// import * as serviceWorker from './serviceWorker';

// import {Provider} from 'react-redux';
// import Store from './redux/Store';

ReactDOM.render(
  <React.StrictMode>
     <Suspense fallback={<h6>Loading...</h6>}>
    <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// Redux
// STORE -> Globalised State
// ACTION INCREMENT
// const increment = () =>{
//   return {
//     type: "INCREMENT"
//   }
// }

// const decrement = () =>{
//   return {
//     type: "DECREMENT"
//   }
// }
// // REDUCER 

// const counter = (state = 0, action) =>{
//   switch(action.type){
//       case "INCREMENT":
//           return state +1;
//       case "DECREMENT":
//           return state -1;
//   }
  
// }

// let store = createStore(counter);

// // Display it in the console
// store.subscribe(()=> console.log(store.getState())); 

// // DISPATCH 
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
