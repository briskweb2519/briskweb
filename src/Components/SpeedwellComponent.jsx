import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Paper } from '@material-ui/core';
import Speedwell1 from '../Images/speedwell/speedwell1.png'
import Speedwell2 from '../Images/speedwell/speedwell2.png'
import Speedwell3 from '../Images/speedwell/speedwell4.png'

export default class ProjectDetailsComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 1, img1: Speedwell1, img2: Speedwell2, img3: Speedwell3, name: "Speedwell", description: "Cycle Industries", place: "Ahmedabad", path: "/speedwell" },
      ]
    }
  }
  render() {
    return (
      <ComplexGrid data={this.state.data} />
    )
  }
}

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

function ComplexGrid(props) {
  const classes = useStyles();

  return (
    < div className={classes.root} className="maincontainer" >
      {
        props.data.map(data =>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5} style={{ textAlign: 'left' }}>
                <h1>{data.name}</h1>
                <h3>{data.description} | {data.place}</h3>
                <h3>Implementation</h3>
                <Button style={{ marginTop: '2%' }} variant="contained" color="primary">
                  Visit Website
                </Button>
              </Grid>
              <Grid item xs={12} md={5} style={{ paddingTop: '5%' }}>
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
        )
      }
    </div >
  );
}
