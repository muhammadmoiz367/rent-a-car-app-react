import React,{Component} from 'react';

import Navbar from '../components/navbar';
import Sidenav from '../components/sidenav'
import Footer from '../components/footer'
import Booking from '../components/booking'

export default class BookingForm extends Component{
    render(){
        return(
            <div>
              <Navbar />
              <Sidenav />
              <Booking  />
              <Footer />
            </div>
        )
    }
}
