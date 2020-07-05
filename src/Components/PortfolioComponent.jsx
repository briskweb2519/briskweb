import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Speedwell1 from '../Images/speedwell/speedwell1.png'
import Speedwell2 from '../Images/speedwell/speedwell2.png'
import Speedwell3 from '../Images/speedwell/speedwell4.png'
import Nutan1 from '../Images/Nutan/Nutan1b.png'
import Nutan2 from '../Images/Nutan/Nutan2b.png'
import Nutan3 from '../Images/Nutan/Nutan3a.png'
import Carwash3 from '../Images/carwash/23.png'
import Carwash2 from '../Images/carwash/9.png'
import Carwash1 from '../Images/carwash/10.png'
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default class PortfolioComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 1, img1: Nutan3, img2: Nutan2, img3: Nutan1, name: "Nutan Vastra Bhandar", description: "Online Shopping | Website", place: "Ahmedabad", path: "/nutan" },
        { id: 2, img1: Speedwell1, img2: Speedwell2, img3: Speedwell3, name: "Speedwell Cycle Industries", description: "Wholesale Supplier | Website", place: "Ahmedabad", path: '/speedwell' },
        { id: 3, img1: Carwash1, img2: Carwash2, img3: Carwash3, name: "Carwash", description: "Service | Application", place: "Ahmedabad", path: '/carwash' },
      ]
    }
  }
  render() {
    return (
      <div>
        <ComplexGrid data={this.state.data} />
      </div>
    )
  }
}

function ComplexGrid(props) {
  const classes = useStyles();

  return (
    <div id="#projects" className="maincontainer" >
      {/* eslint-disable-next-line */}
      <div className={classes.root}>
        <p style={{ fontSize: '40px', textAlign: 'left' }}><strong>Our Projects</strong></p>
      </div>
      <Link style={{ textDecoration: 'none', color: 'black' }} to={props.data[0].path}>
        <Grid container >
          <Grid item xs={12} md={6} style={{ textAlign: 'left', paddingBottom: '10%' }}>
            <h1>{props.data[0].name}</h1>
            <h3>{props.data[0].description} | {props.data[0].place}</h3>
            <Link to="/nutan" style={{textDecoration:'none'}}><Button style={{ marginTop: '2%' }} variant="contained" color="primary">
                View Project &nbsp; <ArrowRightAltOutlinedIcon />
              </Button></Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="trans">
              <img alt="complex" src={props.data[0].img3} style={{ width: '45%', border: '1px solid' }} />
            </div>
            <div className="avatar">
              <div className="trans">
                <img alt="complex" className="trans1" src={props.data[0].img1} style={{ width: '35%', border: '1px solid' }} />
              </div>
            </div>
            <div className="avatar">
              <div className="trans">
                <img alt="complex" className="trans2" src={props.data[0].img2} style={{ width: '35%', border: '1px solid', position: 'absolute' }} />
              </div>
            </div>
          </Grid>
        </Grid>
      </Link>
      <Link style={{ textDecoration: 'none', color: 'black' }} to={props.data[1].path}>
        <Grid container>
          <Grid item xs={12} md={6} style={{ textAlign: 'left', paddingBottom: '10%' }}>
            <h1>{props.data[1].name}</h1>
            <h3>{props.data[1].description} | {props.data[1].place}</h3>
            <Link to="/speedwell" style={{textDecoration:'none'}}><Button style={{ marginTop: '2%' }} variant="contained" color="primary">
                View Project &nbsp; <ArrowRightAltOutlinedIcon />
              </Button></Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="trans">
              <img alt="complex" src={props.data[1].img3} style={{ width: '50%', border: '1px solid' }} />
            </div>
            <div className="avatar">
              <div className="trans">
                <img alt="complex" className="trans3" src={props.data[1].img2} style={{ width: '40%', border: '1px solid' }} />
              </div>
            </div>
            <div className="avatar">
              <div className="trans">
                <img alt="complex" className="trans4" src={props.data[1].img1} style={{ width: '40%', border: '1px solid', position: 'absolute' }} />
              </div>
            </div>
          </Grid>
        </Grid>
      </Link>
      <Link style={{ textDecoration: 'none', color: 'black' }} to={props.data[2].path}>
        <Grid container>
          <Grid item xs={12} md={6} style={{ textAlign: 'left', paddingBottom: '10%' }}>
            <h1>{props.data[2].name}</h1>
            <h3>{props.data[2].description} | {props.data[2].place}</h3>
            <Link to="/carwash" style={{textDecoration:'none'}}><Button style={{ marginTop: '2%' }} variant="contained" color="primary">
                View Project &nbsp; <ArrowRightAltOutlinedIcon />
              </Button></Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="trans">
              <img alt="complex" src={props.data[2].img3} style={{ width: '40%', border: '1px solid' }} />
            </div>
            <div className="avatar">
              <div className="trans">
                <img alt="complex" className="trans5" src={props.data[2].img2} style={{ width: '30%', border: '1px solid' }} />
              </div>
            </div>
            <div className="avatar">
              <div className="trans">
                <img alt="complex" className="trans6" src={props.data[2].img1} style={{ width: '30%', border: '1px solid', position: 'absolute' }} />
              </div>
            </div>
          </Grid>
        </Grid>
      </Link>
    </div >
  );
}
