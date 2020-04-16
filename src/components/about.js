import React,{Component} from 'react'
import M from 'materialize-css'
import '../style.css'

export default class About extends Component{
    componentDidMount(){
        var elems = document.querySelectorAll('.scrollspy');
        M.ScrollSpy.init(elems, {})
    }
    render(){
        return(
            <div>
                <section className="about section scrollspy">
                    <h5>ABOUT IRENTAL CAR</h5>
                    <span className="title-line"></span>
                    <div className="container">
                        <p id="about-para">At STS Rent a Car, our prime idea is to simplify travelling for you and we are here to make it happen 24/7 easy and luxury transport services and affordable services. Want to know more about us <a href="#">Click Here</a></p>
                    </div>
                    <div className="row">
                        <div className="col m6 offset-m1 s12">
                            <div className="about-row">
                                <p className="">STS Rent a Car has designed their services to facilitate their valued customers to perfection. Our wide range of series of services enables clients to choose driver and the car as per their need and comfort. Our drivers are highly qualified & professional serving you in customer friendly environment.
                                <br/><br/>
                                At STS Rent a Car, our main idea is to simplify travelling for you and we are here to make it happen with easiness and affordable services.</p>
                                <div className="btn waves-effect waves-light #1a237e indigo darken-4">Contact Us</div>
                            </div>
                        </div>
                        <div className="col m4 s12">
                            <div>
                                <h4>t STS Rent a Car, our main idea is to simplify travelling for you and we are here to make it happen with easiness and affordable services.</h4>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg #e0e0e0 grey lighten-2">
                    <img id="bg-car" src="images/car-bg.jpg" alt=""/>
                </section>
            </div>
        )
    }
}