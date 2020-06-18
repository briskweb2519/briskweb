import React, { Component } from 'react';
import react from '../Images/react.png'
import node from '../Images/node.webp'
import dj from '../Images/dj.png'
import angular from '../Images/angular.jfif'

export default class TechnologyComponent extends Component {
    render() {
        return (
            <div>
                <div className="maincontainer">
                <p style={{ fontSize: '40px', textAlign: 'left' }}><strong>Technologies</strong></p>
                </div>
                <div style={{ textAlign: 'left', marginLeft: '12%' }}>
                    <img src={react} alt="" style={{ width:'15%',margin : '2%' }}/>
                    <img src={node} alt="" style={{ width:'15%',margin : '2%' }}/>
                    <img src={angular} alt="" style={{ width:'15%',margin : '2%' }}/>
                    <img src={dj} alt="" style={{ width:'5%',margin : '2%' }}/>
                </div>
            </div >
        )
    }
}