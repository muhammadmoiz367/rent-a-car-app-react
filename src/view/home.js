import React,{Component} from 'react';

import Navbar from '../components/navbar';
import Sidenav from '../components/sidenav'
import Slider from '../components/carousel'
import About from '../components/about'
import CarsGallery from '../components/cars-gallery'
import Footer from '../components/footer'

export default class Home extends Component{
    render(){
        return(
            <div>
              <Navbar />
              <Sidenav />
              <Slider />
              <About />
              <CarsGallery />
              <Footer />
            </div>
        )
    }
}