import React,{Component} from 'react'
import M from 'materialize-css'
import '../style.css'

export default class Slider extends Component{
    componentDidMount(){
        var elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems, {
            fullWidth: true,
            duration:200,
            indicators:true
        })
    }
    render(){
        return(
            <div>
                <div className="row ">
                    <div className="carousel carousel-slider">
                        <a className="carousel-item" href="#one!"><img src="images/slider-1.jpg"/></a>
                        <a className="carousel-item" href="#two!"><img src="images/slider-2.jpg"/></a>
                        <a className="carousel-item" href="#three!"><img src="images/slider-3.jpg"/></a>
                        <a className="carousel-item" href="#four!"><img src="images/slider-4.jpg"/></a>
                        <a className="carousel-item" href="#five!"><img src="images/slider-5.jpg"/></a>
                    </div>
                    <div className="jumbotran-content">
                        <div className="jumbotran">
                            <h2 className="display-2">BOOK YOUR IDEAL TODAY!</h2>
                            <p>NOW! hire car that you desire, select to pay the way you want. Our professional teams are always there to guarantee your ride is flexible.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}