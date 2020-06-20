import React, {Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Website from '../Images/Web.jpg'
import App from '../Images/App.jpg'
import Deploy from '../Images/hosting.png'
import Maintain from '../Images/maintain.jpeg'
const useStyles = makeStyles({
    root: {
      width: '100%',
      marginTop : '5%'
    },
  });

class ServicesComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            data:[
                {id:1, name:'Website Development', img: Website},
                {id:2, name:'Application Development', img: App},
                {id:1, name:'Deployment', img: Deploy},
                {id:2, name:'Maintenance', img: Maintain}
            ]
        }
    }
    render(){
        return(
            <div className="maincontainer" id="#services">
                <p style={{fontSize:'40px', textAlign:'left'}}><strong>Services</strong></p>
                <p style={{fontSize:'20px' , textAlign:'justify'}}> We accept the responsibilities for developing website and applications. We are here to design, develop, deploy, and maintain the project for your better reach. </p><br/>
                <Grid container >
                    <Grid item xs={12} md={6} className="gridContent" style={{padding:'3%'}}>
                    <ImgMediaCard data={this.state.data[0]}/>
                    </Grid>
                    <Grid item xs={12} md={6} className="gridContent" style={{padding:'3%'}}>
                    <ImgMediaCard data={this.state.data[1]}/>
                    </Grid>
                    </Grid>
                <Grid container direction="row" alignItems='stretch' >
                    <Grid item xs={12} md={6} className="gridContent" style={{padding:'3%'}}>
                    <ImgMediaCard data={this.state.data[2]}/>
                    </Grid>
                    <Grid item xs={12} md={6} className="gridContent" style={{padding:'3%'}}>
                    <ImgMediaCard data={this.state.data[3]}/>
                    </Grid>
                </Grid>
                
            </div>
        )
    }
}

function ImgMediaCard(props) {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}classes="maincontainer">
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.data.name}
            style={{width : '100%'}}
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
export default ServicesComponent