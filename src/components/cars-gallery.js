import React,{Component} from 'react';
//import { db } from '../firebase';
import firebase from '../firebase'
import M from 'materialize-css'
import '../style.css'
import AllCars from '../cars/all'
import Van from '../cars/van'
import Luxury from '../cars/luxury'
import Standard from '../cars/standard'
import HatchBack from '../cars/hatchback'
import Limousines from '../cars/lumousines'

export default class CarsGallery extends Component{

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('luxury');
        this.unsubscribe = null;
        this.state = {
          cars: []
        };

      }
      getCars=()=>{
            console.log(this.state)
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
            cars : previousState.cars.concat(cars)
       }));
      }



    componentDidMount(){
        var elems = document.querySelectorAll('.tabs');
        M.Tabs.init(elems, {})
        this.unsubscribe = firebase.firestore().collection('luxury').onSnapshot(this.onCollectionUpdate);
        this.unsubscribe = firebase.firestore().collection('bus').onSnapshot(this.onCollectionUpdate);
        this.unsubscribe = firebase.firestore().collection('standard').onSnapshot(this.onCollectionUpdate);
        this.unsubscribe = firebase.firestore().collection('hatchback').onSnapshot(this.onCollectionUpdate);
        this.unsubscribe = firebase.firestore().collection('lumousines').onSnapshot(this.onCollectionUpdate);
        this.getCars();
    }
    render(){
        return(
            <div>
                <section className="cars">
                    <div className="container">_
                        <h5>Popular cars</h5>
                        <span className="title-line"></span>
                        <br/>
                        <ul className="tabs tabs-fixed-width tab-demo z-depth-1 ">
                            <li className="tab"><a className="active" href="#all">All</a></li>
                            <li className="tab"><a href="#luxury">Luxury</a></li>
                            <li className="tab"><a href="#van">Bus/Van</a></li>
                            <li className="tab"><a href="#standard">Standard</a></li>
                            <li className="tab"><a href="#hatchback">HatchBack/MPV</a></li>
                            <li className="tab"><a href="#lumousines">Limousines</a></li>
                        </ul>
                    </div>
                    <div className="cars-gallery">

                        <AllCars />
                        <Luxury />
                        <Van />
                        <Standard />
                        <HatchBack />
                        <Limousines />
                    </div>
                </section>
            </div>
        )
    }
}