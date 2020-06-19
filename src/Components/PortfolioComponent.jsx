import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Speedwell1 from '../Images/speedwell/speedwell1.png'
import Speedwell2 from '../Images/speedwell/speedwell2.png'
import Speedwell3 from '../Images/speedwell/speedwell4.png'
import Nutan1 from '../Images/Nutan/Nutan1b.png'
import Nutan2 from '../Images/Nutan/Nutan2b.png'
import Nutan3 from '../Images/Nutan/Nutan3a.png'
import Nutan4 from '../Images/Nutan/Nutan4.png'
import Nutan5 from '../Images/Nutan/Nutan5.png'
import Nutan6 from '../Images/Nutan/Nutan6.png'
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1000,
    // width : '100%'
  },
}));

export default class PortfolioComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 1, img1: Nutan3, img2: Nutan2, img3: Nutan1, name: "Nutan Vastra Bhandar", description: "Online Shopping", place: "Ahmedabad", path: "/nutan" },
        { id: 2, img1: Speedwell1, img2: Speedwell2, img3: Speedwell3, name: "Speedwell Cycle Industries", description: "Wholesale Supplier", place: "Ahmedabad", path:'/speedwell' },
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
        <p style={{ fontSize: '40px', textAlign: 'left' }}><strong>Portfolio</strong></p>
      </div>
      {/* {
        props.data.map(data => */}
          <Link style={{ textDecoration: 'none' }} to={props.data[0].path}>
            <Paper className={classes.paper}>
              <Grid container >
                <Grid item xs={12} md={6} style={{ textAlign: 'left',paddingBottom: '10%'}}>
                  <h1>{props.data[0].name}</h1>
                  <h3>{props.data[0].description} | {props.data[0].place}</h3>
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
            </Paper>
          </Link>
          <Link style={{ textDecoration: 'none' }} to={props.data[1].path}>
            <Paper className={classes.paper}>
              <Grid container>
                <Grid item xs={12} md={6} style={{ textAlign: 'left',paddingBottom: '10%'}}>
                  <h1>{props.data[1].name}</h1>
                  <h3>{props.data[1].description} | {props.data[1].place}</h3>
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
            </Paper>
          </Link>
        {/* )
      } */}
    </div >
  );
}
