import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Logo from '../Images/logo.png'
import Speedwell1 from '../Images/speedwell/speedwell1.png'
import Speedwell2 from '../Images/speedwell/speedwell2.png'
import Speedwell3 from '../Images/speedwell/speedwell4.png'
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
    <div className={classes.root}>
      <div className="maincontainer">
        <p style={{ fontSize: '40px', textAlign: 'left' }}><strong>Portfolio</strong></p>
      </div>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} style={{ textAlign: 'center', width: '100%', border: '1px solid' }}>
            <h1>Nutan Vastra Bhandar</h1>
          </Grid>
          <Grid item xs={12} md={6} style={{ width: '100%', border: '1px solid' }}>
            <div className="avatar">
              <img alt="complex" src={Logo} />
            </div>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} style={{ width: '100%',border: '1px solid' }}>
            
            
            <div className="trans">
              <img alt="complex" src={Speedwell3} style={{ width: '40%', height: '200px' }} />
            </div>
            <div className="trans" style={{position:'absolute',width:'30%'}}>
              {/* <div className="avatar" style={{height:'40%'}}> */}
                <img alt="complex" src={Speedwell1} style={{height:'200px', width:'200px'}}/>
              {/* </div> */}
            </div>
            <div className="trans" style={{ width:'30%',position : 'absolute'}}>
              {/* <div className="avatar" style={{height:'40'}}> */}
                <img alt="complex" src={Speedwell2} style={{height:'200px', width:'200px'}}/>
              {/* </div> */}
            </div>
            
          </Grid>
          <Grid item xs={12} md={6} style={{ textAlign: 'center', width: '100%', border: '1px solid' }}>
            <h1>SPEEDWELL</h1>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
