import React from 'react';
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

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div id="#projects">
      <div className={classes.root} className="maincontainer">
        <p style={{ fontSize: '40px', textAlign: 'left' }}><strong>Portfolio</strong></p>
      </div>
      
      <Link style={{textDecoration : 'none'}} to="/speedwell">
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5} style={{paddingTop: '10%' }}>
              <h1>SPEEDWELL</h1>
            </Grid>
            <Grid item xs={12} md={5}>
              <div className="trans">
                <img alt="complex" src={Speedwell3} style={{ width: '45%', border: '1px solid' }} />
              </div>
              <div className="avatar">
                <div className="trans">
                  <img alt="complex" src={Speedwell2} style={{ width: '40%', border: '1px solid', translate: '135% -150%' }} />
                </div>
              </div>
              <div className="avatar">
                <div className="trans">
                  <img alt="complex" src={Speedwell1} style={{ width: '40%', border: '1px solid', position: 'absolute', translate: '-2% -160%' }} />
                </div>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Link>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5} style={{ marginTop: '5%', paddingTop: '15%' }}>
            <div className="trans">
              <img alt="complex" src={Speedwell3} style={{ width: '45%', border: '1px solid' }} />
            </div>
            <div className="avatar">
              <div className="trans">
                <img alt="complex" src={Speedwell2} style={{ width: '40%', border: '1px solid', translate: '135% -150%' }} />
              </div>
            </div>
            <div className="avatar">
              <div className="trans">
                <img alt="complex" src={Speedwell1} style={{ width: '40%', border: '1px solid', position: 'absolute', translate: '-2% -160%' }} />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={5} style={{ marginTop: '5%', paddingTop: '10%' }}>
            <h1>SPEEDWELL</h1>
          </Grid>
        </Grid>
      </Paper>
    </div >
  );
}
