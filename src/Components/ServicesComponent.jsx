import React, {Component} from 'react'
import './styles.css'
import { Grid } from '@material-ui/core'
import Solution from '../Images/Solution.png'
import Meeting from '../Images/Meeting.png'
import Pricing from '../Images/Pricing.png'
class ServicesComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : [
                {id : 1, img : Solution, name : "State of the Art Solutions", description : "It is 2020 and you should see that in the final product. This means much more than responsiveness and cross-browser-compatibility and involves best practices regarding performance, accessibility, security and usability.This results in appropriate design, secure websites, fast load times and happy customers. Ultimately, this is also the best and most reliable way to achieve Search Engine Optimization (SEO)."},
                {id : 2, img : Meeting, name : "Non-Binding Introductory Meeting", description : "The first meeting or (video) call is always free and non-binding. It serves the purpose of defining the scope of the project and talking about possible solutions. If the expectations are not met in the end for whatever reason, that's unfortunate, but definitely not a problem."},
                {id : 3, img : Pricing, name : "Transparent Pricing", description : "The price will be fully transparent at any stage of the project. That means: I will usually not charge on an hourly basis, but rather we will agree on a fixed price. Only if the scope of the project changes will the price be adjusted accordingly with prior agreement. Therefore it is always clear on what the final price will be, and there will be no surprises."},
                
            ]
        }
    }
    render(){
        return(
            <div style={{minHeight:'130vh'}} className="maincontainer">
                <p style={{fontSize:'40px', textAlign:'left'}}><strong>Services</strong></p>
                <p style={{fontSize:'20px', textAlign:'left'}}>Creating a relationship of trust and a pleasant atmosphere is essential for every successful partnership. Therefore, following aspects are part of all of our projects:</p>
                {this.state.data.map(d => 
                    <Services style={{textAlign:'justify'}} data = {d}/>
                )}
            </div>
        )
    }
}

function Services(props){
    return(
        <div style={{minHeight:'100px'}}>
                    <Grid container>
                    <Grid item xs={12} md={3} className="gridContent" style={{padding:'5%'}}>
                        <img src={props.data.img} alt = {props.data.name} style={{height:'70px', width:'50%'}}/>
                    </Grid>
                    <Grid item xs={12} md={9} className="gridContent">
                    <div style={{textAlign:'left'}}>
                        <strong>{props.data.name}</strong><br/><br/>
                        {props.data.description}
                    </div>
                    </Grid>
                    </Grid>
                </div>
    )
}
export default ServicesComponent