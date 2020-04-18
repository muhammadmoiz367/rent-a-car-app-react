import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../style.css'
import firebase from '../firebase'


export default class Luxury extends Component{
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('luxury');
        this.unsubscribe = null;
        this.state = {
          cars: []
        };
      }
      onCollectionUpdate = (querySnapshot) => {
        const cars = [];
        querySnapshot.forEach((doc) => {
          const { name, car_type, charges_with_fuel, charges_without_fuel, image_src } = doc.data();
          cars.push({
            key: doc.id,
            name,
            car_type,
            charges_with_fuel,
            charges_without_fuel,
            image_src,
          });
        });
        this.setState(previousState=>({
            cars:previousState.cars.concat(cars)
       }));
      }

      componentDidMount(){
        this.unsubscribe = firebase.firestore().collection('luxury').onSnapshot(this.onCollectionUpdate);

        console.log(this.state.cars)
      }
    render(){
      const x=this.state.cars.filter(car => car.charges_without_fuel < 10000);
      console.log(x);

        return(
            <div className="row" id="luxury">
            {this.state.cars.map(car=>(
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