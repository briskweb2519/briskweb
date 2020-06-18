import React, {Component} from 'react'
import Logo from '../Images/logo.png'
class HomeComponent extends Component{
    render(){
        return(
            <div>
        <img src={Logo} alt = "Logo"/>
        <h1>WOLFPACK</h1>
        </div>
        )}
}

export default HomeComponent