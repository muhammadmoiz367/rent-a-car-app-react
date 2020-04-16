import React,{Component} from 'react';
import M from 'materialize-css'
import '../style.css'


export default class Booking extends Component{
    componentDidMount(){
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {})
    }
    render(){
        return(
            <div>
                <section class="booking-sec">
                    <htmlForm class="booking-htmlForm">
                        <div class="row">
                            <div class="col m7 s12">
                                <div class="">
                                    <h5>Book your car</h5>
                                </div>
                                <div class="">
                                    <div class="input-field col s12">
                                        <input id="name-booking" type="text" />
                                        <label htmlFor="name-booking">Full name</label>
                                    </div>
                                    <div class="input-field col s12">
                                        <input id="email-booking" type="email" />
                                        <label htmlFor="email-booking">Email</label>
                                    </div>
                                    <div class="input-field col s12">
                                        <input id="cnic-booking" type="text" />
                                        <label htmlFor="cnic-booking">CNIC</label>
                                    </div>
                                    <div class="input-field col s12">
                                        <input id="mobile-booking" type="text" />
                                        <label htmlFor="mobile-booking">Mobile Number</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input id="days-booking" type="number" />
                                        <label htmlFor="days-booking">No of days</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input id="date-booking" type="date" />
                                        <label htmlFor="date-booking">Date</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <select id="city-booking">
                                            <option value="khi" selected>Karachi</option>
                                            <option value="hyd">Hyderabad</option>
                                        </select>
                                        <label>Choose city</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <select id="fuel-booking">
                                            <option value="withFuel">With fuel</option>
                                            <option value="withoutFuel" selected>Without fuel</option>
                                        </select>
                                        <label>Choose one</label>
                                    </div>
                                </div>
                                <div class="">
                                    <p style={{fontSize: '15px'}}><span style={{color: 'red',fontSize: '20px'}}>*</span> All cars are available with drivers</p>
                                    <p style={{fontSize: '15px'}}><span style={{color: 'red',fontSize: '20px'}}>*</span> Days are represented in 12 hours</p>
                                    <div id="price" class="left-align">Price div</div>
                                </div>
                                <br/>
                                <div class="">
                                    <input type="submit" value="Book " style={{color: 'white'}} class="waves-effect waves-dark btn right #1a237e indigo darken-3"/>
                                </div>
                            </div>
                            <div id="booking-car-specs" class="car-specs col m5 s12">

                            </div>
                        </div>
                    </htmlForm>
                </section>
           </div>
        )
    }
}
