import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Home from './view/home'
import BookingForm from './view/bookingForm'
import Contact from './view/contact'
import ViewBooking from './view/viewBooking'
import RegisterCars from './view/registerCars'

class App extends React.Component{
  state={
      cars:null
    }

  componentDidMount(){

  }
  
  render(){
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/booking" component={BookingForm} />
          <Route path="/contact" component={Contact} />
          <Route path="/view-booking" component={ViewBooking} />
          <Route path="/register-cars" component={RegisterCars} />
        </Switch>

      </div>
    );
  }

}

export default App;
