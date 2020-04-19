import React,{Component} from 'react';
import M from 'materialize-css'
import '../style.css'


export default class RegisterCarsForm extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            car_type:'',
            charges_with_fuel:'',
            charges_without_fuel:'',
            image_src:''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        if(event.target.name === 'image_src'){
            //this.setState({ [event.target.name]: event.target.value.split('\\')[2]});
            console.log(event.target.value.split('/')[2]);

        }
        this.setState({ [event.target.name]: event.target.value });
    }
    submitForm(event){
        event.preventDefault();
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
                        <form id="add-car-form" className="col s12">
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
                                <option value="hatcback">hatchback</option>
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
                                <span>Image</span>
                                <input name="image_src" type="file" onChange={this.handleChange} />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text"/>
                            </div>
                            </div>
                        </div>
                        <input id="register-car-btn" onSubmit={this.submitForm} type="submit" value="Register your car " className="waves-effect waves-dark btn #1a237e indigo darken-3" />
                        </form>
                    </div>

                    <div id="register-status"></div>
                    </div>
                </section>
            </div>
        )
    }
}
