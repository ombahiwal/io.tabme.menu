import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import {Redirect} from 'react-router-dom';
import t from '../i18n/translate';
class QRCodeReader extends Component {
  state = { result: "",
    msg: 'default_looking',
    redirect:false,
    appurl:/app.tabme.info/
  }
 
  handleScan = data => {
    // console.log(data);
    if (this.state.appurl.test(data)) {
      this.setState({
        result: data.replace(/(.+\w\/)(.+)/, "/$2"),
        msg: 'default_qr_scanner_msg_found',
        redirect: true
      });

      // Do something with data.
    }else{

      this.setState({
        result:"",
        msg:'default_looking'
      });
    }
  }

  handleError = err => {
    console.error(err)
  }
  
  render() {
    return (
      <div className="col-12 ">
        <center>
        <h5><b>{t('default_scan_qr')}</b></h5>
        <hr/>
        <QrReader
          delay={1000}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <hr/>
        <h6><b>{t(this.state.msg)}</b></h6></center>
        {this.state.redirect && <Redirect to={this.state.result}/>}
      </div>
    )
  }
}

export default QRCodeReader;