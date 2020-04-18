import React,{Component} from 'react';

import Navbar from '../components/navbar';
import Sidenav from '../components/sidenav'
import RegisterCarsForm from '../components/registerCarsForm'
import Footer from '../components/footer'

export default class RegisterCars extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Sidenav />
                <RegisterCarsForm />
                <Footer />
            </div>
        )
    }
}