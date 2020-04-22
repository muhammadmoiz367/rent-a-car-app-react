import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../style.css'
import Loader from 'react-loader-spinner'

export default class Luxury extends Component{
  state={
    showLoader:true,
    showData:false
  }
  componentDidMount(){
    setTimeout(()=>{
        this.setState({
          showLoader : false,
          showData:true
        })
    },5000)
  }

  render(){
        return(
            <div className="row" id="van">
            {this.props.cars.length===0 &&
                <div className="center">
                    No cars available
                </div>
              }
             { this.state.showLoader && (
              <Loader style={{position:'absolute',left:'50%'}}
              type="ThreeDots"
              color="darkBlue"
              height={100}
              width={100}
              timeout={3000} //3 secs
              radius={40}
            />
            )}
            {this.state.showData && this.props.cars.map(car=>(
                    <div key={car.name} className="col s12 m3">
                        <div className="card hoverable">
                            <div className="card-image">
                                <img src={`${process.env.PUBLIC_URL}/images/${car.image_src}`} /><br/><br/>
                                <p className="card-title">{car.name}</p>
                                <Link to={{
                                  pathname:'/booking',
                                  aboutProps:{
                                    cars:car
                                  }
                                }} className="btn-floating halfway-fab add-btn waves-effect waves-light red modal-trigger" ><i className=" material-icons">add</i></Link>
                            </div>
                            <div className="card-content">
                                <p>{car.car_type}</p>
                                <p className="right rates">{`RS. ${car.charges_without_fuel} \\ Day`}</p>
                            </div>
                        </div>
                    </div>
            ))}
            {this.props.cars.length===0 &&
            <div className="center">
                No cars available
            </div>
            }
            </div>
        )
    }
}