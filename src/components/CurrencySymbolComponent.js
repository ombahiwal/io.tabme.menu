import React, {useState, useEffect} from 'react';
// import {useDispatch, useStore} from 'react-redux';
import { useSelector } from "react-redux";

const CurrencySymbol = (props)=> {
        // super(props);
        // this.state = ;
    const [status, setState] = useState({symbol: "€"});
        // this.symbolChooser();
    const restaurant = useSelector(state=>state.restaurant);
    useEffect(()=>{        
        // console.log(restaurant);
        // console.log(props.currency);
        if(props.currency){
            
           setState({symbol:symbolCode(props.currency)});
        }else{
            setState({symbol:symbolChooser(restaurant.country)});
            // symbolChooser(restaurant.country);
        }
    }, [props, restaurant]);

    function symbolCode(code){
            // Symbol Logic Here.
            // country Location, etc
            var symbolCodes = {
                "EUR" :'€',
                'INR' : '₹',
                "GBP":'£',
                "JPY":'¥',
                "USD":'$'
            };
            // switch(code){
            //     case "EUR":
            //     setState({symbol: '€'});
            //     break;
    
            //     case "INR":
            //     setState({symbol: '₹'});
            //     break;
    
            //     case "GBP":
            //     setState({symbol: '£'});
            //     break;

            //     case "JPY":
            //     setState({symbol: '¥'});
            //     break;

            //     default:
            //     setState({symbol: '$'});            
            // }
        // setState({symbol: currentSymbol});
        // console.log(status.symbol);
        return symbolCodes[code];
    }


    function symbolChooser(country){
        // var currentSymbol = "₹";
            // Symbol Logic Here.
            // ₹
            // country Location, etc
            var symbols = {
                "Germany" : '€',
                "India" : "₹",
                "United Kingdom":'£',
                "Japan" : '¥'
            }
        // switch(country){
        //     case "Germany":
        //     setState({symbol: '€'});
        //     break;

        //     case "India":
        //     setState({symbol: '₹'});
        //     break;

        //     case "United Kingdom":
        //     setState({symbol: '£'});
        //     break;

        //     case "Japan":
        //     setState({symbol: '¥'});
        //     break;

        //     default:
        //     setState({symbol: '€'});            
        // }

        // setState({symbol: currentSymbol});
        // console.log(status.symbol);

        return country ? symbols[country] : "€";
    }
    
        return(<span>{status.symbol}</span>)
}

export default CurrencySymbol;