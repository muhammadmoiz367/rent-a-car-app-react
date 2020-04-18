import React,{Component} from 'react'
import firebase from '../firebase'
import '../style.css'

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
                const { name, mobile,fuel,email,days,date,cnic,city } = doc.data();
                carsData.push({
                  key: doc.id,
                  name,
                  mobile,
                  fuel,
                  email,
                  days,
                  date,
                  cnic,
                  city
                });
            });
            this.setState({
                carsData
             });
            });
    }
    render(){
        console.log(this.state.carsData)
        return(
            <div>
                <div className="row">
                    <div className="container">
                        <h4>View Bookings</h4>
                        <ul className="collection">
                            <li className="collection-item avatar">
                            <img src={process.env.PUBLIC_URL + '/images/user.png'} alt="" className="circle" />
                            <span className="title">Name: Saad khan</span>
                            <p>Email: saad123@gamil.com <br/>
                                CNIC: 12345-1234567-8<br/>
                                Mobile: 090078601<br/>
                                Date: 30-2-2020
                                Days: 3
                            </p>
                            <a href="#!" className="secondary-content"><img style={{width: '120px',height: '100px'}} src={process.env.PUBLIC_URL + '/images/audi.jpg'} alt="" /></a><br/><br/>
                            <div className="delete-btn"><a href="#">Cancel booking</a></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}