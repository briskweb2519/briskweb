import React, {Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Shail from '../Images/Shail.jpeg'
import Meet from '../Images/Meet.jpeg'
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
      width: 345,
      marginTop:'4%',
    },
  });

class AboutComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            data:[
                {id:1, name:'Shail Raval', img: Shail},
                {id:2, name:'Meet Patel', img: Meet}
            ]
        }
    }
    render(){
        return(
            <div className="maincontainer" id="#about">
                <p style={{fontSize:'40px', textAlign:'left'}}><strong>Team</strong></p>
                <p style={{fontSize:'20px' , textAlign:'justify'}}> We are a team of full stack developer and digital marketing. We focus on taking the business online and help them grow. We take the full responsibility for the development and hosting of your website or your application. We totally believe in working with modern technologies and trending styles. Let us make the slogan <strong>Vocal For Local</strong> real. </p><br/>
                <Grid container >
                    <Grid item xs={12} md={6} className="gridContent">
                    <a href="https://www.linkedin.com/in/shail-raval-6a513b139/" style={{textDecoration:'none'}}><ImgMediaCard data={this.state.data[0]}/></a>
                    </Grid>
                    <Grid item xs={12} md={6} className="gridContent">
                    <a href="https://www.linkedin.com/in/meetpatel19/" style={{textDecoration:'none'}}><ImgMediaCard data={this.state.data[1]}/></a>
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
            <Typography variant="body2" color="textSecondary" component="p">
              
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
export default AboutComponent