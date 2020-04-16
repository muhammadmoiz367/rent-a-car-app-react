import React,{Component} from 'react'
import M from 'materialize-css'
import '../style.css'

export default class Footer extends Component{

    render(){
        return(
            <div>
                <footer>
                    <div className="row">
                        <div className="col s12 m6">
                            <h5>ABOUT STS RENT A CAR</h5><br/>
                            <img src="images/logo.jpg" alt=""/>
                            <p>At STS Rent a Car, our prime business idea is simplify travelling for you and that's why our business solegen is "TRAVELLING FOR YOU"</p>
                        </div>
                        <div className="col s12 m6">
                            <h5>GET TOUCH WITH STS RENT A CAR</h5><br/>
                            <p><i className="material-icons">location_on</i> Office: G4, Ground Floor, Citizen View Building, Near Habib University, Block-9, Gulistan-e-Jauhar, Karachi.</p>
                            <p><i className="material-icons">phone</i> 0333 2067402</p>
                            <p><i className="material-icons">mail</i> oliaatransport@gmail.com</p>
                            <p><i className="fa fa-facebook"></i> facebook.com/oliaa transport</p><br/>
                            <div className="btn waves-effect waves-light #1a237e indigo darken-4 ">SHOW LOCATION </div>
                        </div>
                    </div>
                </footer>
                <div className=" sub-footer row">
                    <p>Copyright 2020 &copy; Oliaa Transport. All Rights Reserved</p>
                </div>
            </div>
        )
    }
}