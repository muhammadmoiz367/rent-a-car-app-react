import React,{Component} from 'react';
import M from 'materialize-css'
import '../style.css'


export default class Booking extends Component{
    componentDidMount(){
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {})
    }
    render(){
        console.log(this.props.carDetails.cars)
        return(
            <div>
                <section className="booking-sec">
                    <htmlForm className="booking-htmlForm">
                        <div className="row">
                            <div className="col m7 s12">
                                <div className="">
                                    <h5>Book your car</h5>
                                </div>
                                <div className="">
                                    <div className="input-field col s12">
                                        <input id="name-booking" type="text" />
                                        <label htmlFor="name-booking">Full name</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="email-booking" type="email" />
                                        <label htmlFor="email-booking">Email</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="cnic-booking" type="text" />
                                        <label htmlFor="cnic-booking">CNIC</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="mobile-booking" type="text" />
                                        <label htmlFor="mobile-booking">Mobile Number</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="days-booking" type="number" />
                                        <label htmlFor="days-booking">No of days</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="date-booking" type="date" />
                                        <label htmlFor="date-booking">Date</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <select id="city-booking">
                                            <option value="khi" selected>Karachi</option>
                                            <option value="hyd">Hyderabad</option>
                                        </select>
                                        <label>Choose city</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <select id="fuel-booking">
                                            <option value="withFuel">With fuel</option>
                                            <option value="withoutFuel" selected>Without fuel</option>
                                        </select>
                                        <label>Choose one</label>
                                    </div>
                                </div>
                                <div className="">
                                    <p style={{fontSize: '15px'}}><span style={{color: 'red',fontSize: '20px'}}>*</span> All cars are available with drivers</p>
                                    <p style={{fontSize: '15px'}}><span style={{color: 'red',fontSize: '20px'}}>*</span> Days are represented in 12 hours</p>
                                    <div id="price" className="left-align">Price div</div>
                                </div>
                                <br/>
                                <div className="">
                                    <input type="submit" value="Book " style={{color: 'white'}} className="waves-effect waves-dark btn right #1a237e indigo darken-3"/>
                                </div>
                            </div>
                            <div id="booking-car-specs" className="car-specs col m5 s12">
                                <img id="image-booking" className="materialboxed" src={`${process.env.PUBLIC_URL}/images/${this.props.carDetails.cars.image_src}`} alt="" />
                                <h4 id="car-booking">{this.props.carDetails.cars.name}</h4>
                                <ul>
                                    <li><i className="material-icons">check</i>ABS brakes</li>
                                    <li><i className="material-icons">check</i>Auto transmission</li>
                                    <li><i className="material-icons">check</i>GPS Navigation</li>
                                    <li><i className="material-icons">check</i>Rear Camera</li>
                                    <li><i className="material-icons">check</i>Power steering</li>
                                    <li><i className="material-icons">check</i>Power mirrors</li>
                                </ul>
                                <div>
                                    <div>
                                        <p className="">RS. <span id="charges">{this.props.carDetails.cars.charges_without_fuel}</span> \ Day without fuel</p>
                                        <p className="">RS. <span id="fuel-charges">{this.props.carDetails.cars.charges_with_fuel}</span> \ Day with fuel</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </htmlForm>
                </section>
           </div>
        )
    }
}
