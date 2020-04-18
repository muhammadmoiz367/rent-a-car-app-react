import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import M from 'materialize-css'
import '../style.css'

export default class Sidenav extends Component{
    componentDidMount(){
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {draggable:true});
        var elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {})
    }
    render(){
        return(
            <div>
                <ul className="sidenav" id="mobile-demo">
                    <li><Link to="/">Home</Link></li>
                    <li><a className="dropdown-trigger " href="#!" data-target="dropdown1">Packages<i className="material-icons right">arrow_drop_down</i></a></li>
                    <li><a href="#about">About us</a></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><a href="#modal1" className="waves-effect waves-light btn modal-trigger #1a237e indigo darken-2">Admin Login</a></li>
                </ul>
                <ul id="dropdown1" className="dropdown-content">
                    <li><Link to="/register-cars">Register cars</Link></li>
                    <li className="divider"></li>
                    <li><Link to="/view-booking">View Bookings</Link></li>
                </ul>
            </div>

        )
    }
}