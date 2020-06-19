import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Paper } from '@material-ui/core';
import Speedwell1 from '../Images/speedwell/speedwell1.png'
import Speedwell2 from '../Images/speedwell/speedwell2.png'
import Speedwell3 from '../Images/speedwell/speedwell4.png'
import Speedwell4 from '../Images/speedwell/speedwell3.png'

import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import Logo from '../Images/speedwell/speedwellLogo.ico'
import { Link } from 'react-router-dom';
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
              <Grid item xs={12} md={6} style={{ textAlign: 'left' }}>
                <h1>{data.name}</h1>
                <h3>{data.description} | {data.place}</h3>
                <h3>Implementation</h3>
                <Button href="https://www.speedwells.in" style={{ marginTop: '2%' }} variant="contained" color="primary">
                  Visit Website &nbsp; <ArrowRightAltOutlinedIcon/>
                </Button>
              </Grid>
              <Grid item xs={12} md={6} style={{ paddingTop: '7%' }}>
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

      <Grid container style={{marginTop:'5%'}}>
        <Grid item xs={12} md={8} style={{textAlign:'justify',fontSize:'18px'}}>
          <div>
          <strong>
            Client<br/>
          </strong>
          Speedwell Cycle Industries is a company which owns the wholesale supply of various companies of sports goods and automobile tyre-tubes.

          </div>
          <div style={{marginTop:'3%'}}>
            <strong> Implementation <br/></strong>
              To achieve the state-of-the-art responsive website, the most effective tools were choosen. The project was implemeneted using React with the styling of Material UI. Github takes care of the deployment of the website. 
            </div>
            <div style={{marginTop:'3%'}}>
            <strong> Tools / Services <br/></strong>
              React , Github(Hosting)
            </div>
        </Grid>
        <Grid item xs={12} md={4} style={{textAlign:'left',fontSize:'30px', padding:'5%'}}>
          <img src={Logo} alt="Logo" width='15%' /> Speedwell Cycle Industries
        </Grid>
      </Grid>
      <Grid container >
        <Grid item xs={12} md={6} style={{padding:'2%'}}>
          <Paper elevation={7}> 
          <div style={{marginTop:'15%'}}>

          <img src={Speedwell1} alt="Speedwell1" width="100%"/>
</div>          
          </Paper>
          <Paper elevation={7}>
          <div style={{marginTop:'15%'}}>
          <img src={Speedwell3} alt="Speedwell3" width="100%" style={{marginTop:'5%'}}/>
          </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} style={{padding:'2%'}}>
        <Paper elevation={7}>
        <div style={{marginTop:'15%'}}>

        <img src={Speedwell2} alt="Speedwell2" width="100%" />
</div>        
        </Paper>
        <Paper elevation={7}>
        <div style={{marginTop:'15%'}}>
        <img src={Speedwell4} alt="Speedwell4" width="100%" />
        </div>
        </Paper>
        </Grid>
      </Grid>
    </div >
  );
}
