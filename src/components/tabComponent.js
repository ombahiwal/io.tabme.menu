import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import {NavLink} from 'reactstrap';
import { TiThMenu } from "react-icons/ti";
import {MdAccountCircle} from "react-icons/md";
import {AiOutlineQrcode} from 'react-icons/ai';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cookies from 'universal-cookie';
import AuthService from '../services/auth.service';

import {
    Link, Redirect
  } from "react-router-dom";
  
var cookies  = new Cookies();


class Tabs extends Component{
    constructor(props){
        super(props);
        if(cookies.get('user')){
            this.state = { logged:true, redirect:false, current_order:false};
        }else{
            this.state = {logged:false, redirect:false, current_order:false};
        }
        this.logout = this.logout.bind(this);

    }
    componentDidMount(){
        if(cookies.get('current_order')){
            if(cookies.get('current_order').open)
                this.setState({current_order:true});
        }

        if(cookies.get('user')){
            this.setState({logged:true});
        }
    }

    logout(){
        cookies.remove('user', {path:'/'});
        cookies.remove('token', {path:'/'});
        this.setState({redirect:true});
    }

    render(){ 
        return(   
            <Nav variant="pills" defaultActiveKey="/home" fill>
            {/* <Nav.Item>
                <NavDropdown title={<span className="menu-icon"><TiThMenu/></span>} id="nav-dropdown">
                {(this.props.tablenum !== 0 || this.props.restaurant ==='test') && <NavDropdown.Item><span className=""><b>Table No. {this.props.tablenum}</b></span></NavDropdown.Item>}
                <NavDropdown.Item as={Link} to="/cart" eventKey="4.3">Your Tab</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/home" eventKey="4.1">Profile</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="menu" eventKey="4.2">Menu</NavDropdown.Item>
                   {!this.state.logged && <NavDropdown.Item as={Link} to="/login" eventKey="4.0">Login</NavDropdown.Item>}
                   {this.state.logged && <NavDropdown.Item onClick={()=>this.logout()} eventKey="4.0">Logout</NavDropdown.Item>}
                   {this.state.current_order && <NavDropdown.Item as={Link} to="/order/current" eventKey="4.0">Current Order</NavDropdown.Item>}
                </NavDropdown>
            </Nav.Item> */}

            <Nav.Item>
                <Link to="/home">
                    <span className="qr-icon"><MdAccountCircle/></span>
                </Link>
            </Nav.Item>

            {this.state.redirect && <Redirect to="/"/>}

            <Nav.Item></Nav.Item>

            <Nav.Item>
            <Nav.Link>
                
            </Nav.Link>
            </Nav.Item>
            <Nav.Item></Nav.Item>
            

            <Nav.Item>
                <Link to="/scan">
                    <span className="qr-icon"><AiOutlineQrcode/></span>
                </Link>
            </Nav.Item>
            </Nav>
        );
    }
}

const mapStateToProps = state => {
    return {
        tablenum:state.tablenum,
        restautant: state.restaurant,
        user:state.user,
        order:state.order
        }
  }
const mapDispatchToProps = dispatch =>{
    return {
    }
}

export default connect(
    mapStateToProps,
     mapDispatchToProps
    )(Tabs);

// export default Tabs;