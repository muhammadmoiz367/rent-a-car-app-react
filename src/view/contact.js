import React,{Component} from 'react';

import Navbar from '../components/navbar';
import Sidenav from '../components/sidenav'
import Footer from '../components/footer'

export default class BookingForm extends Component{
    render(){
        return(
            <div>
              <Navbar />
              <Sidenav />
              <Footer />
            </div>
        )
    }
}
