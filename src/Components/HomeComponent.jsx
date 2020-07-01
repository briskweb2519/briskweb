import React, { Component } from 'react'
import Logo from '../Images/logo_white.png'
import './styles.css'
class HomeComponent extends Component {
    render() {
        return (
            <div className="container" style={{backgroundColor:'black', color:'white',fontFamily: 'Cormorant Garamond serif'}} id="#home">
                <div className="avatar">
                    <img src={Logo} alt="Logo" style={{height:'150px', width:'30%'}}/>
                </div>
                <h1>BRISKWEB</h1>
                <h2>We will take your business online</h2>
            </div>
        )
    }
}

export default HomeComponent