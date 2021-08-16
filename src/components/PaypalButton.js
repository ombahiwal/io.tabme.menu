import React from "react";
import ReactDOM from "react-dom";
// import scriptLoader from "react-async-script-loader";
// import Car from "../assets/img/car.jpg";
// import Spinner from "./Spinner"/;
import { Alert} from "react-bootstrap";
// import Cookies from 'universal-cookie';
// import { ReactReduxContext } from 'react-redux'
// const cookies = new Cookies();

    // var CLIENT = {
    //   sandbox:"",
    //   production:"",
    // }; 
    async function loadScript(src){
      return new Promise(resolve => {
          const script = document.createElement('script');
          script.src = src;
          script.onload = () =>{
              resolve(true); 
          }
          script.onerror = () =>{
              resolve(false);
          }
          document.body.appendChild(script);
      });
  }
 

let PayPalButton = null;


class PaypalButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButtons: false,
      loading: true,
      paid: false,
      currency:props.cart.currency,
      client_id:props.restaurant.info.paypal_client_id
    };
    // // console.log(this.props.cart);
    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  componentDidMount() {
    setTimeout(async ()=>{
      await loadScript(`https://www.paypal.com/sdk/js?currency=${this.state.currency}&client-id=${this.state.client_id}&locale=de_DE&disable-funding=card,credit,giropay,sepa,sofort,ideal`).then(loaded=>{
        // console.log('PAYPAL LOADED?', loaded);
        if(loaded){
          PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
          this.setState({ loading: false, showButtons: true });
        }  
      });
    },0);
  }
 
  createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: +"Tabme Order - "+this.props.restaurant.rname,
          amount: {
            currency_code: this.props.cart.currency,
            value: this.props.cart.totalCost
          }
        }
      ]
    });
  };

  onApprove = (data, actions) => {
    actions.order.capture().then(details => {
      const paymentData = {
            data:data,
            details:details    
        };
        this.props.initiateTabmeOrder(paymentData);
      // console.log("Payment Approved: ", paymentData);
      this.setState({ showButtons: false, paid: true });
    });
  };

  render() {
    const { showButtons, paid } = this.state;

    return (
      <div className="payment_option_div_paypal">
        {/* {loading && <Spinner />} */}

        {showButtons && 
        <PayPalButton
              createOrder={(data, actions) => this.createOrder(data, actions)}
              onApprove={(data, actions) => this.onApprove(data, actions)}
            />}

        {paid && (
          <div className="main">
            <Alert variant="success">Payment Successful!</Alert>
          </div>
        )}
      </div>
    );
  }
}


export default PaypalButton;


 