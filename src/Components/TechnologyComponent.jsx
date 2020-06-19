import React, { Component } from 'react';
import react from '../Images/react.png'
import node from '../Images/node.webp'
import dj from '../Images/dj.png'
import angular from '../Images/angular.jfif'
import Grid from '@material-ui/core/Grid'

export default class TechnologyComponent extends Component {
    render() {
        return (
            <div id="#technology">
                <div className="maincontainer">
                    <p style={{ fontSize: '40px', textAlign: 'left' }}><strong>Technologies</strong></p>
                </div>
                <div style={{ textAlign: 'center', marginLeft: '7%' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                        <img src={react} alt="" style={{ width: '80%'}} />
                        </Grid>
                        <Grid item xs={12} md={3}>
                        <img src={node} alt="" style={{ width: '80%'}} />
                        </Grid>
                        <Grid item xs={12} md={3}>
                        <img src={angular} alt="" style={{ width: '80%'}} />
                        </Grid>
                        <Grid item xs={12} md={3}>
                        <img src={dj} alt="" style={{ width: '40%'}} />
                        </Grid>
                    </Grid>
                </div>
            </div >
        )
    }
}