import React,{Component} from 'react'
import M from 'materialize-css'
import {Link} from 'react-router-dom'
import '../style.css'


class Navbar extends Component{
    componentDidMount(){
        var elem = document.querySelectorAll('.modal');
        M.Modal.init(elem, {})
        var elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {})
      }

    render(){
        return(
            <div>
                <div className="navbar-fixed">
                    <nav className="main-nav  #1a237e indigo darken-4">
                        <div className="container">
                            <div className="nav-wrapper">
                                <a href="#" className="brand-logo"><img  id="logo" src={process.env.PUBLIC_URL + '/images/logo.jpg'}/></a>
                                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                                <ul className="right hide-on-med-and-down">
                                    <li><Link to="/" className="active" >Home</Link></li>
                                    <li><a className="dropdown-trigger " href="#!" data-target="dropdown1">Packages<i className="material-icons right">arrow_drop_down</i></a></li>
                                    <li><a href="#about">About us</a></li>
                                    <li><Link to="/contact" >Contact</Link></li>
                                    <li><a href="#modal1" className="waves-effect waves-light btn modal-trigger #1a237e indigo darken-2">Admin Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <ul id="dropdown1" className="dropdown-content">
                    <li><Link to="/register-cars">Register cars</Link></li>
                    <li className="divider"></li>
                    <li><Link to="/view-booking">View Bookings</Link></li>
                </ul>
                <div id="modal1" className="modal">
                    <div id="admin-login" className="login-div">
                        <div className="row">
                        <div id="status"></div>
                        <h5 className="center-align">Sign in</h5>
                        <h6 className="center-align">Register your car</h6>
                        </div>
                        <div className="row">
                        <div className="input-field col s12">
                            <input id="email-login" type="text"/>
                            <label htmlFor="email_input">Email</label>
                        </div>
                        </div>
                        <div className="row">
                        <div className="input-field col s12">
                            <input id="password-login" type="password"/>
                            <label htmlFor="password_input">Password</label>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col s6"><a href="#">Create account</a></div>
                        <div className="col s6 right-align login-btn"><a className="waves-effect waves-light btn  #1a237e indigo darken-4">Login</a></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar