import React, { Component } from 'react'
import Logo from '../Images/logo_white.png'
import './styles.css'
class HomeComponent extends Component {
    render() {
        return (
            <div className="container" style={{backgroundColor:'black', color:'white'}} id="#home">
                <div className="avatar">
                    <img src={Logo} alt="Logo" style={{height:'150px', width:'30%'}}/>
                </div>
                {/* <h1>BRISKWEB</h1>
                <h2>We will take your business online</h2> */}
                <div style={{padding : '5%'}}>
                <h2> Briskweb is a Software Development Company to develop website and application for your business and help it expand with the tools of digital marketing</h2>
                </div>
            </div>
        )
    }
}

export default HomeComponent