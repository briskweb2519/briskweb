import React, { Component } from 'react'
import Logo from '../Images/logo.png'
import './styles.css'
class HomeComponent extends Component {
    render() {
        return (
            <div className="container" style={{backgroundColor:'black', color:'white'}}>
                <div className="avatar">
                    <img src={Logo} alt="Logo" />
                </div>
                <h1>WOLFPACK</h1>
            </div>
        )
    }
}

export default HomeComponent