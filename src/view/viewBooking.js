import React,{Component} from 'react';

import Navbar from '../components/navbar';
import Sidenav from '../components/sidenav'
import ViewCarsBooking from '../components/viewCarsBooking'
import Footer from '../components/footer'

export default class viewBooking extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Sidenav />
                <ViewCarsBooking />
                <Footer />
            </div>
        )
    }
}