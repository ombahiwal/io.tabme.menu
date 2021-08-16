 import React from 'react';
 import {connect} from 'react-redux';
 var Action = require('../redux/actions/index');
function countContainer(props){
     return(
         <div>
             <h2>Number of Cakes - {props.count}</h2>
            <button onClick={props.increment}>Buy Cake</button>
         </div>
     )
 }


 // Redux Functions
 const mapStateToProps = state => {
    return {
        count: state.counter
    }
  }
const mapDispatchToProps = dispatch =>{
    return {
        increment: () => dispatch(Action.increment())
    }
}

export default connect(
    mapStateToProps,
     mapDispatchToProps
    )(countContainer);
  