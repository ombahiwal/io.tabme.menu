import React, { Component } from 'react';
// Components
import DefaultPage from './components/defaultPage';
// import Menu from './components/MenuComponentv5';
// import Cart from './components/CartComponent';
import Heading from './components/HeaderComponent';
import QRCodeReader from './components/QRReaderComponent';
// import UserLogin from './components/LoginComponent';
// import Home from './components/HomeComponent';
import Links from './components/LinksComponent';
import RestaurantWelcome from './components/RestaurantWelcomeComponent';
import Scanned from './components/scannedInterComp';
import Pickup from './components/pickupInterComp';
import Delivery from './components/deliveryInterComp';
import Checkin from './components/CheckinComponent';
// import CurrentOrder from './components/CurrentOrderComponent';
// import OrderInfo from './components/OrderComponent';
import RestaurantPickup from './components/RestaurantPickupComponent';
import RestaurantDelivery from './components/RestaurantDeliveryComponent';
import MenuRedirect from './components/menuInterComp';
import RestaurantCustomQR from './components/RestaurantCustomQrComponent';
// Paypal
// import PaypalCheckout from './components/PaypalCheckoutComponent';

// Stripe 
import StripeCheckout from './components/StripeCheckout';

// Razor Pay
// import RazorPayDialog from './components/RazorPayCheckoutComponent';

//  Test Components
// import CheckoutExternal from './components/CashExternalComponent';
import Menu6 from './components/MenuComponentv6';
import SimpleMapView from './components/SimpleMapViewComponent';

// QR Code
// import QRCodeDisplay from "react-qr-code";
// Redux
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import history from './history';
import { I18nProvider} from "./i18n/index";
// import i18n from "./i18n";

// Language Locale
import {connect} from 'react-redux';
import {countryToLocales} from './components/shared/CurrencyFromCode'


class AppInner extends Component{

  constructor(props){
    super(props);
    this.state = {
      counter:0,
      state : false,
      locale:'de-de'
    };

    // console.log(props.restaurant)
    // ReactGA.initialize('UA-90856241-1');
    // ReactGA.pageview(window.location.pathname + window.location.search);
    
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(prevProps.restaurant, this.props);
        try{
          if(prevProps.restaurant.country !== this.props.restaurant.country)
            this.setState({locale:countryToLocales(this.props.restaurant.country)});
        }catch(e){}
  }

pageDefault(){
  return <DefaultPage/>;
}

// pageHome() {
//   return <Home/>;
// }
// pageCart(){
//   return <Cart/>;
// }
// pageLogin(){
//   return <UserLogin history={history}/>;
// }
// pageRegister(){
//   return <Register/>;
// }
pageRestaurantWelcome(){
  return <RestaurantWelcome table_number="12"/>;
}

render() {
      return (
  <Router>
  <I18nProvider locale={this.state.locale}>
    {/* <Heading history={history}/> */}
    <div className="main-body">
      
     {/* <Tabs/> */}
    <div className="container fillup">
      <Switch>
        <Route path="/welcome">
            {this.pageRestaurantWelcome}
        </Route>
      {/* <Route path="/register">
            {this.pageRegister}
        </Route>
        <Route path="/login">
            {this.pageLogin}
        </Route> */}
      {/* <Route path="/qr">
            <QRCodeDisplay value="TABME"/>
        </Route> */}
        <Route path="/scan">
            <QRCodeReader/>
        </Route>

          <Route path="/menu6">
            <Menu6 />
          </Route>

          <Route path="/map">
            <SimpleMapView/>
          </Route>
       
          <Route path="/stripe/:session_id" component={StripeCheckout}/>

          <Route path="/checkin">
            <Checkin/>
          </Route>
          {/* <Route path="/order/current">
            <CurrentOrder/>
          </Route> */}
          <Route path="/r/pickup">
            <RestaurantPickup/>
          </Route>
          <Route path="/r/delivery">
            <RestaurantDelivery/>
          </Route>
          <Route path="/r/custom">
              <RestaurantCustomQR/>
          </Route>
          

          {/* <Route path="/order/:id" component={OrderInfo}/> */}

          {/* <Route path="/pickup/:id" component={Pickup}/> */}
          {/* <Route path="/delivery/:id" component={Delivery}/> */}
          <Route path="/menu/:id" component={Scanned}/>
          <Route path="/m/:id" component={MenuRedirect}/>
          <Route path="/:id" component={Links}/>
          <Route path="/link/:id" component={Links}/>
          <Route path="/r/:id" component={Scanned}/>
          <Route path="/">
            {this.pageDefault}
          </Route>
      </Switch>
    </div>
          </div>
          {/* <CountContainer/> */}
          </I18nProvider>
    </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
          restaurant:state.restaurant,
        }
}
const mapDispatchToProps = dispatch =>{
  return {

  }
}

// export default AppInner;

export default connect(
    mapStateToProps,
     mapDispatchToProps
)(AppInner);