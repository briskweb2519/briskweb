import React, {Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Shail from '../Images/Shail.jpeg'
import Meet from '../Images/Meet.jpg'
import Parth from '../Images/Parth.jpg'
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
      width: 300,
      margin:'4%',
    },
  });

class AboutComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            data:[
                {id:1, name:'Shail Raval', img: Shail},
                {id:2, name:'Meet Patel', img: Meet},
                {id:3, name:'Parth Parmar', img: Parth}
            ]
        }
    }
    render(){
        return(
            <div className="maincontainer" id="#about">
                <p style={{fontSize:'40px', textAlign:'left'}}><strong>About</strong></p>
                <p style={{fontSize:'20px' , textAlign:'justify'}}> We are young professionals carrying responsibilty for expanding your business. We focus on taking your business online and help them grow with the tools of digital marketing. We take the full responsibility for the development and hosting of your website or your application. We totally believe in working with modern technologies and trending styles. </p><br/>
                <Grid container >
                    <Grid item xs={12} md={4} className="gridContent">
                    <a href="https://www.linkedin.com/in/shail-raval-6a513b139/" style={{textDecoration:'none'}}><ImgMediaCard data={this.state.data[0]}/></a>
                    </Grid>
                    <Grid item xs={12} md={4} className="gridContent">
                    <a href="https://www.linkedin.com/in/meetpatel19/" style={{textDecoration:'none'}}><ImgMediaCard data={this.state.data[1]}/></a>
                    </Grid>
                    <Grid item xs={12} md={4} className="gridContent">
                    <a href="https://www.linkedin.com/in/parth-parmar-8aa318108/" style={{textDecoration:'none'}}><ImgMediaCard data={this.state.data[2]}/></a>
                    </Grid>
                </Grid>
                
            </div>
        )
    }
}

function ImgMediaCard(props) {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.data.name}
            style={{height:"50vh"}}
            image={props.data.img}
            title={props.data.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.data.name}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="h3">
              Software Developer
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
export default AboutComponent