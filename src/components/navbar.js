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
                                <a href="#" className="brand-logo"><img  id="logo" src=""/></a>
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
                <ul id="dropdown1" class="dropdown-content">
                    <li><a href="add-car.html">Register cars</a></li>
                    <li class="divider"></li>
                    <li><a href="view-booking.html">View Bookings</a></li>
                </ul>
                <div id="modal1" class="modal">
                    <div id="admin-login" class="login-div">
                        <div class="row">
                        <div id="status"></div>
                        <h5 class="center-align">Sign in</h5>
                        <h6 class="center-align">Register your car</h6>
                        </div>
                        <div class="row">
                        <div class="input-field col s12">
                            <input id="email-login" type="text"/>
                            <label htmlFor="email_input">Email</label>
                        </div>
                        </div>
                        <div class="row">
                        <div class="input-field col s12">
                            <input id="password-login" type="password"/>
                            <label htmlFor="password_input">Password</label>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col s6"><a href="#">Create account</a></div>
                        <div class="col s6 right-align login-btn"><a class="waves-effect waves-light btn  #1a237e indigo darken-4">Login</a></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar