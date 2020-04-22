import React,{Component} from 'react';
import M from 'materialize-css'
import firebase from '../firebase'
import '../style.css'


export default class RegisterCarsForm extends Component{
    constructor(){
        super();
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            name:'',
            car_type:'',
            charges_with_fuel:'',
            charges_without_fuel:'',
            image_src:'',
            isEnabled:false
        };

    }
    validate(){
        console.log('validating .....');
        const {name, car_type, charges_with_fuel, charges_without_fuel, image_src}=this.state;
        if(name !== ""  && charges_with_fuel !=="" && charges_without_fuel !=="" ){
            this.setState({ isEnabled:true})
        }
    }
    handleChange(event){
        this.validate();
        if(event.target.name === 'image_src'){
            console.log(event.target.value.split('\\')[2]);
            this.setState({ [event.target.name]: event.target.value.split('\\')[2] });

        }else{
            this.setState({ [event.target.name]: event.target.value });
        }

    }
    handleSubmit(e){
        e.preventDefault();
        console.log('submitted');
        console.log(this.state);
        const {name, car_type, charges_with_fuel, charges_without_fuel, image_src}=this.state;
        firebase.firestore().collection(this.state.car_type).add({
            name,
            car_type,
            charges_with_fuel,
            charges_without_fuel,
            image_src
        })
        alert('your car has added !!');
        this.setState({
            name:'',
            car_type:'',
            charges_with_fuel:'',
            charges_without_fuel:'',
            image_src:'',
            isEnabled:false
        })
    }

    componentDidMount(){
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {})
    }
    render(){
        console.log(this.state);
        return(
            <div>
                <section>
                    <div className="container">
                    <div className="row">
                        <form onSubmit={this.handleSubmit} id="add-car-form" className="col s12">
                            <div className="row">
                                <div className="input-field col m6">
                                <input placeholder="Honda Civic" id="car_name" name="name" type="text" onChange={this.handleChange}/>
                                <label for="car_name">Car Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col m6">
                                <select name="car_type" id="car_type" onChange={this.handleChange} value={this.state.car_type}>
                                    <option value="luxury">luxury</option>
                                    <option value="standard">standard</option>
                                    <option value="bus">bus</option>
                                    <option value="hatchback">hatchback</option>
                                    <option value="limousines">limousines</option>
                                </select>
                                <label>Choose car type</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col m6">
                                <input id="charges_without_fuel" name="charges_without_fuel" type="text" onChange={this.handleChange} placeholder="Rs 4000" />
                                <label for="charges_without_fuel">Charges without fuel</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col m6">
                                <input id="charges_with_fuel" type="text" name="charges_with_fuel" onChange={this.handleChange} placeholder="Rs 6000" />
                                <label for="charges_with_fuel">Charges with fuel</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="file-field col m6 input-field">
                                    <div  id="car_image" className="btn">
                                        <span><i className="material-icons">image</i></span>
                                        <input name="image_src" placeholder="Add image" type="file" onChange={this.handleChange} />
                                    </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text"/>
                                </div>
                                </div>
                            </div>
                            <button disabled={!this.state.isEnabled} id="register-car-btn" type="submit"  className="waves-effect waves-dark btn #1a237e indigo darken-3 centre">Register</button>
                        </form>
                    </div>

                    <div id="register-status"></div>
                    </div>
                </section>
            </div>
        )
    }
}
