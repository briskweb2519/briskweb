import React, { Component } from 'react'
import Logo from '../Images/logo_white.png'
import './styles.css'
import Background from '../Images/background.jpg'
import Typical from 'react-typical';

class HomeComponent extends Component {
    render() {
        return (
            <div className="container"  style={
                {  
                    backgroundImage: `url(${Background})` ,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'auto',
                    backgroundPosition:'center',
                    WebkitBackgroundSize:'cover',
                    MozBackgroundSize:'cover',
                    backgroundSize:'cover',            
                    color:'white'}} id="#home">

                <div className="avatar">
                    <img src={Logo} alt="Logo" style={{height:'130px', width:'30%',marginTop:"20%"}}/>
                </div>

                {/* <h1>BRISKWEB</h1>
                <h2>We will take your business online</h2> */}
                <div className="maincontainer" style={{padding : '5%'}}>
                    <p style={{fontSize:'2em'}}>
                        <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                        'Web development',
                        1000,
                        'Digital Marketing',
                        1000,
                        'Application Development',
                        1000,
                        ''
                    ]}

                        />
                    </p>

                <h2 style={{marginTop:"10%"}}   > Briskweb is a Software Development Company to develop websites and applications for your business and help it expand with the tools of digital marketing</h2>
                </div>
            </div>
        )
    }
}

export default HomeComponent