import React,{Component} from 'react';

import Navbar from '../components/navbar';
import Sidenav from '../components/sidenav'
import Footer from '../components/footer'
import Booking from '../components/booking'

export default class BookingForm extends Component{
    constructor(props){
        super(props);
        this.state={
            carDetails:this.props.location.aboutProps
        }
    }
    render(){
        return(
            <div>
              <Navbar />
              <Sidenav />
              <Booking  carDetails={this.state.carDetails}/>
              <Footer />
            </div>
        )
    }
}
