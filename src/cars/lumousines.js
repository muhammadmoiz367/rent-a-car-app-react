import React,{Component} from 'react'
import M from 'materialize-css'
import '../style.css'
import firebase from '../firebase'

export default class Luxury extends Component{
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('lumousines');
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
        this.setState({
          cars
       });
      }

      componentDidMount(){
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
        console.log(this.state.cars)
      }
    render(){
        return(
            <div className="row" id="lumousines">
            {this.state.cars.map(car=>(
                    <div className="col s12 m3">
                        <div className="card hoverable">
                            <div className="card-image">
                                <img src={`images/${car.image_src}`} /><br/><br/>
                                <p className="card-title">{car.name.toUpperCase()}</p>
                                <a className="btn-floating halfway-fab add-btn waves-effect waves-light red modal-trigger" href="booking.html"><i className=" material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>{car.car_type}</p>
                                <p className="right rates">{`RS. ${car.charges_without_fuel} &Backslash;Day`}</p>
                            </div>
                        </div>
                    </div>
            ))}
            {this.state.cars.length===0 &&
            <div className="center">
                No cars available
            </div>
            }
            </div>
        )
    }
}