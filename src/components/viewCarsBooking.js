import React,{Component} from 'react'
import firebase from '../firebase'
import '../style.css'
import Loader from 'react-loader-spinner'

export default class ViewCarsBooking extends Component{

    constructor(props) {
        super(props);
        this.unsubscribe = null;
        this.state = {
          carsData: []
        };

      }
      componentDidMount(){
        const carsData = [];
        this.unsubscribe = firebase
        .firestore()
        .collection("booking")
        .onSnapshot((querySnapshot) => {
            console.log('booking data');
            querySnapshot.forEach((doc) => {
                const { name, mobile,fuel,email,days,date,cnic,city, price, image_src } = doc.data();
                carsData.push({
                  key: doc.id,
                  name,
                  mobile,
                  fuel,
                  email,
                  days,
                  date,
                  cnic,
                  city,
                  price,
                  image_src
                });
            });
            this.setState({
                carsData
             });
            });
    }
    cancelBooking=e=>{
        const key=e.target.parentNode.getAttribute('id');
        let flag=window.confirm('are you sure to cancel booking? ');
        if(flag){
            console.log(key);
            firebase.firestore().collection("booking").doc(key).delete()
            .then(() => {
                console.log("Document successfully deleted!");
                window.location.reload();
            })
            .catch((error) => {
                console.error("Error removing document: ", error);
            });
        }

    }

    render(){
        console.log(this.state.carsData)
        return(
            <div>
                <div className="row">
                    <div className="container">
                        <h4>View Bookings</h4>
                        <ul className="collection">
                            {this.state.carsData.map(car=>(
                                <li id={car.key} key={car.key} className="collection-item avatar">
                                <img src={process.env.PUBLIC_URL + '/images/user.png'} alt="" className="circle" />
                                <span className="title">Name: {car.name}</span>
                                <br/>
                                <p>Email: {car.email} <br/>
                                    CNIC: {car.cnic}<br/>
                                    Mobile: {car.mobile}<br/>
                                    Date: {car.date} <br/>
                                    Days: {car.days}
                                </p><br/>
                                <p>Price: Rs.{car.price}</p>
                                <a href="#!" className="secondary-content"><img style={{width: '120px',height: '100px'}} src={`${process.env.PUBLIC_URL}/images/${car.image_src}`} alt="" /></a><br/><br/>
                                <button onClick={this.cancelBooking} className="waves-effect waves-dark btn right #1a237e indigo darken-3 delete-btn">Cancel</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}