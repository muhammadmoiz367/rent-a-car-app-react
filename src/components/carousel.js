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
                        <a className="carousel-item" href="#one!"><img src={process.env.PUBLIC_URL + '/images/slider-1.jpg'}/></a>
                        <a className="carousel-item" href="#two!"><img src={process.env.PUBLIC_URL + '/images/slider-2.jpg'} /></a>
                        <a className="carousel-item" href="#three!"><img src={process.env.PUBLIC_URL + '/images/slider-3.jpg'}/></a>
                        <a className="carousel-item" href="#four!"><img src={process.env.PUBLIC_URL + '/images/slider-4.jpg'}/></a>
                        <a className="carousel-item" href="#five!"><img src={process.env.PUBLIC_URL + '/images/slider-5.jpg'}/></a>
                    </div>
                    <div className="jumbotran-content">
                        <div className="jumbotran">
                            <h2 className="display-2">BOOK YOUR IDEAL TODAY!</h2>
                            <p>NOW! hire car that you desire, select to pay the way you want.<br/> Our professional teams are always there to guarantee your ride is flexible.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}