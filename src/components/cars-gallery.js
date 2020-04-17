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
          cars: [],
          luxuryCars:[],
          bus:[],
          standardCars:[],
          hatchbackCars:[],
          limousinesCars:[]
        };

      }

    componentDidMount(){
        var elems = document.querySelectorAll(".tabs");
        M.Tabs.init(elems, {});
        const cars = [];
        this.unsubscribe = firebase
        .firestore()
        .collection("luxury")
        .onSnapshot((querySnapshot) => {
            console.log(1);
            querySnapshot.forEach((doc) => {
            cars.push(doc.data());
            });
        });
        this.unsubscribe = firebase
        .firestore()
        .collection("bus")
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            console.log(2);
            cars.push(doc.data());
            });
        });
        this.unsubscribe = firebase
        .firestore()
        .collection("standard")
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            console.log(3);
            cars.push(doc.data());
            });
        });
        console.log("boom");
        this.setState({
            cars,
        });
        const luxuryCars=this.state.cars.filter( car => car.car_type==='luxury');
        const bus=this.state.cars.filter( car => car.car_type==='bus');
        const standardCars=this.state.cars.filter( car => car.car_type==='standard');
        const hatchbackCars=this.state.cars.filter( car => car.car_type==='hatchback');
        const limousinesCars=this.state.cars.filter( car => car.car_type==='limousines');

        console.log(luxuryCars,bus,standardCars);
        this.setState({
            luxuryCars,
            bus,
            standardCars,
            hatchbackCars,
            limousinesCars
        });


    }

    render(){
        console.log(this.state);
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