import React,{Component} from 'react'
import M from 'materialize-css'
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
            doc, // DocumentSnapshot
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
                                <img src={`images/${car.image_src}`} /><br/><br/>
                                <p className="card-title">{car.name}</p>
                                <a className="btn-floating halfway-fab add-btn waves-effect waves-light red modal-trigger" href="booking.html"><i className=" material-icons">add</i></a>
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