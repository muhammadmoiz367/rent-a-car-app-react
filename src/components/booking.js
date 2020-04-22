import React,{Component} from 'react';
import { withRouter } from 'react-router-dom';
import M from 'materialize-css'
import firebase from '../firebase'
import '../style.css'


export default class Booking extends Component{
    constructor(props){
        super(props);
        this.ref = firebase.firestore().collection('booking');
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={
            name:'',
            email:'',
            cnic:'',
            mobile:'',
            days:'',
            date:'',
            city:'',
            fuel:'',
            price:'',
            image_src:this.props.carDetails.cars.image_src,
            isEnabled:false
        }

    }
    validate(){
        console.log('validating .....');
        const {name, email, cnic, mobile, days, date, city, fuel}=this.state;
        if(name !== "" && email !=="" && cnic !=="" && mobile !=="" ){
            this.setState({ isEnabled:true})
        }
    }
    componentDidMount(){
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {})
    }
    handleChange=event=>{
        this.validate();
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit=e=>{
        e.preventDefault();
        console.log('submitted');
        let Price=0;
        let chargesFuel=this.props.carDetails.cars.charges_with_fuel;
        let charges=this.props.carDetails.cars.charges_without_fuel;
        let Days=this.state.days;
        console.log('price before', Price);
        if(this.state.fuel==="withFuel"){
            Price+=chargesFuel*Days
        }
        else if(this.state.fuel==="withoutFuel"){
            Price+=charges*Days
        }
        console.log('price after', Price);
        const {name, email, cnic, mobile, days, date, city, fuel, price,  image_src}=this.state;

        this.ref.add({
            name,
            email,
            cnic,
            mobile,
            days,
            date,
            city,
            fuel,
            price:Price,
            image_src
        })
        alert('your car has booked !!');
        //window.history.goBack()


    }
    render(){
        console.log(this.props.carDetails.cars);
        console.log(this.state);
        return(
            <div>
                <section className="booking-sec">
                    <form onSubmit={this.handleSubmit} className="booking-htmlForm">
                        <div className="row">
                            <div className="col m7 s12">
                                <div className="">
                                    <h5>Book your car</h5>
                                </div>
                                <div className="">
                                    <div className="input-field col s12">
                                        <input id="name-booking" type="text" name="name" onChange={this.handleChange}/>
                                        <label htmlFor="name-booking">Full name</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="email-booking" type="email" name="email" onChange={this.handleChange}/>
                                        <label htmlFor="email-booking">Email</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="cnic-booking" type="text" name="cnic" onChange={this.handleChange}/>
                                        <label htmlFor="cnic-booking">CNIC</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="mobile-booking" type="text" name="mobile" onChange={this.handleChange}/>
                                        <label htmlFor="mobile-booking">Mobile Number</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="days-booking" type="number" name="days" onChange={this.handleChange}/>
                                        <label htmlFor="days-booking">No of days</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="date-booking" type="date" name="date" onChange={this.handleChange}/>
                                        <label htmlFor="date-booking">Date</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <select id="city-booking" value={this.state.city} name="city" onChange={this.handleChange}>
                                            <option value="hyd">Hyderabad</option>
                                            <option value="khi" >Karachi</option>
                                        </select>
                                        <label>Choose city</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <select id="fuel-booking" name="fuel" value={this.state.fuel} onChange={this.handleChange}>
                                            <option value="withFuel">With fuel</option>
                                            <option value="withoutFuel">Without fuel</option>
                                        </select>
                                        <label>Choose one</label>
                                    </div>
                                </div>
                                <div className="">
                                    <p style={{fontSize: '15px'}}><span style={{color: 'red',fontSize: '20px'}}>*</span> All cars are available with drivers</p>
                                    <p style={{fontSize: '15px'}}><span style={{color: 'red',fontSize: '20px'}}>*</span> Days are represented in 12 hours</p>
                                    <div id="price" className="left-align">{this.state.price}</div>
                                </div>
                                <br/>
                                <div className="">
                                    <button type="submit" disabled={!this.state.isEnabled} style={{color: 'white'}} className="waves-effect waves-dark btn right #1a237e indigo darken-3">Book</button>
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
                    </form>
                </section>
           </div>
        )
    }
}
