import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Speedwell1 from '../Images/speedwell/speedwell1.png'
import Speedwell2 from '../Images/speedwell/speedwell2.png'
import Speedwell3 from '../Images/speedwell/speedwell4.png'
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
        { id: 1, img1: Speedwell1, img2: Speedwell2, img3: Speedwell3, name: "Speedwell", description: "Cycle Industries", place: "Ahmedabad", path: "/speedwell" },
        { id: 2, img1: Speedwell1, img2: Speedwell2, img3: Speedwell3, name: "Nutan Vastra Bhandar", description: "Online Shopping", place: "Ahmedabad" },
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
    <div id="#projects">
      {/* eslint-disable-next-line */}
      <div className={classes.root} className="maincontainer">
        <p style={{ fontSize: '40px', textAlign: 'left' }}><strong>Portfolio</strong></p>
      </div>
      {
        props.data.map(data =>
          <Link style={{ textDecoration: 'none' }} to={data.path}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ textAlign: 'left' }}>
                  <h1>{data.name}</h1>
                  <h3>{data.description} | {data.place}</h3>
                </Grid>
                <Grid item xs={12} md={6} style={{ paddingTop: '5%' }}>
                  <div className="trans">
                    <img alt="complex" src={data.img3} style={{ width: '45%', border: '1px solid' }} />
                  </div>
                  <div className="avatar">
                    <div className="trans">
                      <img alt="complex" className="trans1" src={data.img2} style={{ width: '40%', border: '1px solid' }} />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="trans">
                      <img alt="complex" className="trans2" src={data.img1} style={{ width: '40%', border: '1px solid', position: 'absolute' }} />
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Link>
        )
      }
    </div >
  );
}
