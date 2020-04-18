import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../style.css'
import firebase from '../firebase'

export default class AllCars extends Component{
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
        //this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
        this.unsubscribe = firebase.firestore().collection('luxury').onSnapshot(this.onCollectionUpdate);
        this.unsubscribe = firebase.firestore().collection('bus').onSnapshot(this.onCollectionUpdate);
        this.unsubscribe = firebase.firestore().collection('standard').onSnapshot(this.onCollectionUpdate);
        //this.unsubscribe = firebase.firestore().collection('hatchback').onSnapshot(this.onCollectionUpdate);
        //this.unsubscribe = firebase.firestore().collection('lumousines').onSnapshot(this.onCollectionUpdate);


        console.log(this.state.cars)
      }
    render(){
        return(
            <div className="row" id="all">
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