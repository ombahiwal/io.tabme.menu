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
import LoadingOverlay from 'react-loading-overlay';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      counter:0,
      state : false,
      locale:'de-de',
      loading:true,
      redirect:false,
    };
    // console.log(props.restaurant)
    ReactGA.initialize('UA-90856241-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  componentDidMount(){
    if((document.domain === 'sortengold.de' || document.domain === 'www.sortengold.de') && window.location.pathname === '/'){
      // window.location.href = ('https://sortengold.de/sg');
    }else{
      this.setState({loading:false});
    }
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
    {/* <LoadingOverlay
    spinner
    active={this.state.loading}>
      <div style={{display: !this.state.loading ?'none':'block'}} className="loading-div2">.</div>
    </LoadingOverlay> */}
      <AppInner/>
     </Provider> 
    );
  }
}
export default App;