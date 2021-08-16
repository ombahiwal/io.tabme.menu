import React, {Component} from 'react';

import { Motion, spring } from 'react-motion';
// import './styles.css';

class MotionTest extends React.Component {
  constructor(props) {
    super();
    this.state = {
      error: false
    }
    console.log(props.show);
  }
  handleError = () => {
    this.setState({ error: !this.state.error });
  };
  initialErrorStyle() {
    return {
      opacity: spring(0),
      y: spring(100)
    }
  }
  finalErrorStyle() {
    return {
      opacity: spring(1),
      y: spring(0)
    }
  }
  
	render() {
    let errorStyle = this.state.error ? this.finalErrorStyle() : this.initialErrorStyle();
		return (
      <div className="container-bpopup">
        <Motion defaultStyle={{y: -150}} style={{y: spring(0)}}>
          {({y}) => {
            return <button onClick={this.handleError} style={{ transform: `translateY(${y}px)`}} className="btn">Click this!</button>;
           }
          }
        </Motion>
        <Motion style={errorStyle}>
          {({opacity, y}) => {
              return (
                <div className="error-msg" style={{ opacity: opacity, transform: `translateY(${y}px)` }}>
                  An error occured while submitting your form.
                  Try again later or contact us directly at email@domain.com
                </div>);
             }
          }
        </Motion>
      </div>
    );
  }
}

export default MotionTest;