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

        this.unsubscribe = firebase
        .firestore()
        .collection("luxury")
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //cars.push(doc.data());
                //luxuryCars.push(doc.data())
                this.setState({
                    cars:[...this.state.cars,doc.data()]
                });
                this.setState({
                    luxuryCars: [...this.state.luxuryCars,doc.data()]
                });

            });
        });
        this.unsubscribe = firebase
        .firestore()
        .collection("bus")
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.setState({
                    cars:[...this.state.cars,doc.data()]
                });
                this.setState({
                    bus:[...this.state.bus,doc.data()]
                });

                });
            });

        this.unsubscribe = firebase
        .firestore()
        .collection("standard")
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.setState({
                    cars:[...this.state.cars,doc.data()]
                });
                this.setState({
                    standardCars:[...this.state.standardCars,doc.data()]
                });

            });
        });
        this.unsubscribe = firebase
        .firestore()
        .collection("hatchback")
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.setState({
                    cars:[...this.state.cars,doc.data()]
                });
                this.setState({
                    hatchbackCars:[...this.state.hatchbackCars,doc.data()]
                });

            });
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

                        <AllCars cars={this.state.cars}/>
                        <Luxury cars={this.state.luxuryCars}/>
                        <Van cars={this.state.bus}/>
                        <Standard cars={this.state.standardCars}/>
                        <HatchBack cars={this.state.hatchbackCars}/>
                        <Limousines cars={this.state.limousinesCars}/>
                    </div>
                </section>
            </div>
        )
    }
}