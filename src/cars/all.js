import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../style.css'
import firebase from '../firebase'

export default class AllCars extends Component{
    render(){
      console.log(this.props.cars)
        return(
            <div className="row" id="all">
            {this.props.cars.map(car=>(
                    <div className="col s12 m3">
                        <div className="card hoverable">
                            <div className="card-image">
                                <img src={`${process.env.PUBLIC_URL}/images/${car.image_src}`} /><br/><br/>
                                <p className="card-title">{car.name}</p>
                                <Link to={{
                                  pathname:'/booking',
                                  aboutProps:{
                                    cars:car
                                  }
                                }} className="btn-floating halfway-fab add-btn waves-effect waves-light red modal-trigger" ><i className=" material-icons">add</i></Link>
                            </div>
                            <div className="card-content">
                                <p>{car.car_type}</p>
                                <p className="right rates">{`RS. ${car.charges_without_fuel} &Backslash;Day`}</p>
                            </div>
                        </div>
                    </div>
            ))}
            </div>
        )
    }
}