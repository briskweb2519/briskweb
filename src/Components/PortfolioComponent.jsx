import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Logo from '../Images/logo.png'

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
      <div style={{ textAlign: 'left', marginLeft: '12%' }}>
        <h1>Portfolio</h1>
      </div>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} style={{ textAlign: 'center', width: '100%', border: '1px solid' }}>
            <h1>Nutan Vastra Bhandar</h1>
          </Grid>
          <Grid item xs={12} md={6} style={{width: '100%', border: '1px solid' }}>
            <div className="avatar">
              <img alt="complex" src={Logo} />
            </div>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>  
          <Grid item xs={12} md={6} style={{width: '100%', border: '1px solid' }}>
            <div className="avatar">
              <img alt="complex" src={Logo} />
            </div>
          </Grid>
          <Grid item xs={12} md={6} style={{ textAlign: 'center', width: '100%', border: '1px solid' }}>
            <h1>Nutan Vastra Bhandar</h1>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
