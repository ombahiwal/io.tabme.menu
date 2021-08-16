import React, { Component} from 'react';
// Components
import DefaultPage from './components/defaultPage';
import Cart from './components/CartComponent';
import UserLogin from './components/LoginComponent';
import Home from './components/HomeComponent';
import Register from './components/RegisterComponent';
import RestaurantWelcome from './components/RestaurantWelcomeComponent';
// Redux
import {Provider} from 'react-redux';
import Store from './redux/Store';
import history from './history';
import ReactGA from 'react-ga';
import AppInner from './AppInner';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      counter:0,
      state : false,
      locale:'de-de'
    };
    // console.log(props.restaurant)
    ReactGA.initialize('UA-90856241-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  componentDidUpdate(prevProps, prevState, snapshot) { 
  }
pageDefault(){
  return <DefaultPage/>;
}
pageHome() {
  return <Home/>;
}
pageCart(){
  return <Cart/>;
}
pageLogin(){
  return <UserLogin history={history}/>;
}
pageRegister(){
  return <Register/>;
}
pageRestaurantWelcome(){
  return <RestaurantWelcome table_number="12"/>;
}
render() {
  return (
    <Provider store={Store}>
      <AppInner/>
     </Provider> 
    );
  }
}
export default App;