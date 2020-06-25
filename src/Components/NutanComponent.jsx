import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Paper } from '@material-ui/core';
import Nutan1 from '../Images/Nutan/Nutan1b.png'
import Nutan2 from '../Images/Nutan/Nutan2b.png'
import Nutan3 from '../Images/Nutan/Nutan3a.png'
import Nutan4 from '../Images/Nutan/Nutan4.png'
import Nutan5 from '../Images/Nutan/Nutan5.png'
import Nutan6 from '../Images/Nutan/Nutan6.png'

import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import Logo from '../Images/Nutan/Nutan.ico'
import { Link } from 'react-router-dom';
export default class NutanComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 1, img1: Nutan3, img2: Nutan2, img3: Nutan1, name: "Nutan Vastra Bhandar", description: "Online Shopping", place: "Ahmedabad" },
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
              <Button onClick={window.open("https://nutan.herokuapp.com/Nutan","_blank")} style={{ marginTop: '2%' }} variant="contained" color="primary">
                Visit Website &nbsp; <ArrowRightAltOutlinedIcon />
              </Button>
            </Grid>
            <Grid item xs={12} md={6} style={{ paddingTop: '10%' }}>
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
        )
      }

      <Grid container style={{ marginTop: '5%' }}>
        <Grid item xs={12} md={8} style={{ textAlign: 'justify', fontSize: '18px' }}>
          <div>
            <strong>
              Client<br />
            </strong>
          Nutan Vastra Bhandar owns a manufacturing, designing, and selling of sarees, kurtis, and various tradditional garments. It tops the market for 86 years.

          </div>
          <div style={{ marginTop: '3%' }}>
            <strong> Implementation <br /></strong>
              To achieve the state-of-the-art responsive website, the most effective tools were choosen. The project was implemeneted using React, Node and MognoDB with the styling of Material UI and React Bootstrap. Heroku takes care of the deployment of the website in trial mode and then it will be shifted to digital ocean.
            </div>
          <div style={{ marginTop: '3%' }}>
            <strong> Tools / Services <br /></strong>
              React, Node, MongoDB, Heroku(Hosting for trial Purpose)
            </div>
        </Grid>
        <Grid item xs={12} md={4} style={{ textAlign: 'left', fontSize: '30px', padding: '5%' }}>
          <img src={Logo} alt="Logo" width='15%' /> Nutan Vastra Bhandar
        </Grid>
      </Grid>
      <Grid container >
        <Grid item xs={12} md={6} style={{ padding: '2%' }}>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>

              <img src={Nutan1} alt="Nutan1" width="100%" />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>
              <img src={Nutan3} alt="Nutan3" width="100%" style={{ marginTop: '5%' }} />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>
              <img src={Nutan5} alt="Nutan5" width="100%" style={{ marginTop: '5%' }} />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} style={{ padding: '2%' }}>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>

              <img src={Nutan2} alt="Nutan2" width="100%" />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>
              <img src={Nutan4} alt="Nutan4" width="100%" />
            </div>
          </Paper>
          <Paper elevation={7}>
            <div style={{ marginTop: '15%' }}>
              <img src={Nutan6} alt="Nutan6" width="100%" />
            </div>
          </Paper>
        </Grid>

      </Grid>
    </div >
  );
}
