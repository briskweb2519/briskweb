import React, { Component } from 'react';
import react from '../Images/react.png'
import node from '../Images/node.webp'
import dj from '../Images/dj.png'
import angular from '../Images/angular.jfif'

export default class TechnologyComponent extends Component {
    render() {
        return (
            <div>
                <div style={{ textAlign: 'left', marginLeft: '12%' }}>
                    <h1>Technologies</h1>
                </div>

                <div style={{ textAlign: 'left', marginLeft: '12%' }}>
                    <img src={react} alt=""  height="110"/>
                    <img src={node} alt="" height="112" style={{margin : '0 2%'}} />
                    <img src={angular} alt="" height="100" style={{margin : '0 2%'}} />
                    <img src={dj} alt="" height="90" style={{margin : '0 2%'}}/>
                </div>
                
            </div >
        )
    }
}