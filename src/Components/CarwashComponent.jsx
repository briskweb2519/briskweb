import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Paper } from '@material-ui/core';
import C1 from '../Images/carwash/23.png'
import C2 from '../Images/carwash/20.png'
import C3 from '../Images/carwash/21.png'
import C4 from '../Images/carwash/19.png'
import C5 from '../Images/carwash/22.png'
import C6 from '../Images/carwash/18.png'
import C7 from '../Images/carwash/17.png'
import C8 from '../Images/carwash/16.png'
import C9 from '../Images/carwash/15.png'
import C10 from '../Images/carwash/14.png'
import C11 from '../Images/carwash/13.png'
import C12 from '../Images/carwash/12.png'
import C13 from '../Images/carwash/11.png'
import C14 from '../Images/carwash/10.png'
import C15 from '../Images/carwash/9.png'
import C16 from '../Images/carwash/8.png'
import C17 from '../Images/carwash/7.png'
import C18 from '../Images/carwash/6.png'
import C19 from '../Images/carwash/5.png'
import C20 from '../Images/carwash/4.png'
import C21 from '../Images/carwash/3.png'
import C22 from '../Images/carwash/2.png'
import C23 from '../Images/carwash/1.png'
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import Logo from '../Images/carwash/carwash.ico'
import { Link } from 'react-router-dom';
export default class CarwashComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 1, img1: C15, img2: C14, img3: C1, name: "Carwash", description: "Service | Application", place: "Ahmedabad"},
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
  }
}));

function ComplexGrid(props) {
  const classes = useStyles();

  return (
    < div className={classes.root} className="maincontainer" >
      {
        props.data.map(data =>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} style={{ textAlign: 'left', paddingBottom: '15%',marginTop : '5%'}}>
              <h1>{data.name}</h1>
              <h3>{data.description} | {data.place}</h3>
              <h3>Implementation</h3>
              <Button href="https://proto2-1776e.firebaseapp.com" style={{ marginTop: '2%' }} variant="contained" color="primary">
                Visit Website &nbsp; <ArrowRightAltOutlinedIcon />
              </Button>
            </Grid>
            <Grid item xs={12} md={6} style={{ paddingTop: '10%' }}>
              <div className="trans">
                <img alt="complex" src={data.img3} style={{ width: '40%', border: '1px solid' }} />
              </div>
              <div className="avatar">
                <div className="trans">
                  <img alt="complex" className="trans5" src={data.img2} style={{ width: '30%', border: '1px solid' }} />
                </div>
              </div>
              <div className="avatar">
                <div className="trans">
                  <img alt="complex" className="trans6" src={data.img1} style={{ width: '30%', border: '1px solid', position: 'absolute' }} />
                </div>
              </div>
            </Grid>
          </Grid>
        )
      }

      <Grid container style={{ marginTop: '5%' }}>
        <Grid item xs={12} md={8} style={{ textAlign: 'justify', fontSize: '18px' }}>
          {/* <div>
            <strong>
              Client<br />
            </strong>
          Nutan Vastra Bhandar owns a manufacturing, designing, and selling of sarees, kurtis, and various tradditional garments. It tops the market for 86 years.

          </div> */}
          <div style={{ marginTop: '3%' }}>
            <strong> Implementation <br /></strong>
              To achieve the state-of-the-art cross platform application, the most effective tools were choosen. The project was built using the Ionic framework of Angular JS with the support of NodeJS and MongoDB as a backend and database. Google map api is used for the purpose of live tracking and it is hosted on Firebase. 
            </div>
          <div style={{ marginTop: '3%' }}>
            <strong> Tools / Services <br /></strong>
              Ionic, AngularJS, NodeJS, MongoDB, Firebase, Heroku(Hosting for trial Purpose)
            </div>
        </Grid>
        <Grid item xs={12} md={4} style={{ textAlign: 'left', fontSize: '30px', padding: '5%' }}>
          <img src={Logo} alt="Logo" width='50%' />Carwash
        </Grid>
      </Grid>
      <Grid container >
        <Grid item xs={12} md={6} style={{ padding: '2%' }}>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>

              <img src={C1} alt="C1" width="100%" />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>
              <img src={C3} alt="C3" width="100%" style={{ marginTop: '5%' }} />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>
              <img src={C5} alt="C5" width="100%" style={{ marginTop: '5%' }} />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>

              <img src={C7} alt="C1" width="100%" />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>
              <img src={C9} alt="C3" width="100%" style={{ marginTop: '5%' }} />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>
              <img src={C11} alt="C5" width="100%" style={{ marginTop: '5%' }} />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>

              <img src={C13} alt="C1" width="100%" />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>
              <img src={C15} alt="C3" width="100%" style={{ marginTop: '5%' }} />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>
              <img src={C17} alt="C5" width="100%" style={{ marginTop: '5%' }} />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>

              <img src={C19} alt="C1" width="100%" />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>
              <img src={C21} alt="C3" width="100%" style={{ marginTop: '5%' }} />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>
              <img src={C23} alt="C5" width="100%" style={{ marginTop: '5%' }} />
            </div>
          </Paper>

        </Grid>
        <Grid item xs={12} md={6} style={{ padding: '2%' }}>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>

              <img src={C2} alt="C2" width="100%" />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>
              <img src={C4} alt="C4" width="100%" />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>
              <img src={C6} alt="C6" width="100%" />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>

              <img src={C8} alt="C2" width="100%" />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>
              <img src={C10} alt="C4" width="100%" />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>
              <img src={C12} alt="C6" width="100%" />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>

              <img src={C14} alt="C2" width="100%" />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>
              <img src={C16} alt="C4" width="100%" />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>
              <img src={C18} alt="C6" width="100%" />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>

              <img src={C20} alt="C2" width="100%" />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>
              <img src={C22} alt="C4" width="100%" />
            </div>
          </Paper>
                  </Grid>

      </Grid>
    </div >
  );
}
