import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button, List, ListItem, withStyles, SwipeableDrawer, makeStyles, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const styleSheet = makeStyles((theme) => ({
  main: {
    color: 'red',
  },
  home: {
    fontSize: 20,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    marginLeft: 10,
    paddingLeft: 10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  media: {
    minWidth: 200,
    minHeight: 200,
  },
  grid: {
    minWidth: 300,
    // alignContent: 'flex',
    alignItems: 'flex-end',
  },
  list: {
    width: 200,
  },
  padding: {
    paddingRight: 30,
    cursor: "pointer",
  },

  sideBarIcon: {
    padding: 0,
    cursor: "pointer",
  },

  toolBar: {
  }

}));
class HeaderComponent extends Component {

  constructor(props) {
    super(props);
    this.listener = null;
    this.state = { drawerActivate: false, drawer: false, color: 'white', status: "top" };
    this.updateDrawer = this.updateDrawer.bind(this);
  }

  componentWillMount() {
    if (window.innerWidth <= 600) {
      this.setState({ drawerActivate: true });
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 600) {
        this.setState({ drawerActivate: true });
      }
      else {
        this.setState({ drawerActivate: false })
      }
    });

    this.listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 1) {
        if (this.state.status !== "down") {
          this.setState({ status: "down" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });

  }


  updateDrawer = (text) => { this.setState({ drawer: text }) }
  render() {
    return (
      <div >
        {this.state.drawerActivate ? <CreateDrawer updateState={this.updateDrawer} drawerState={this.state.drawer} status={this.state.status} /> : <DestroyDrawer status={this.state.status} />}
      </div>
    )
  }
}

const CreateDrawer = (props) => {
  const classes = styleSheet()
  return (
    <div className={classes.root}>
      <AppBar position='fixed' style={{ paddingLeft : '6%',paddingRight : '6%',backgroundColor: props.status === 'top' ? "black" : "white", boxShadow: 'none', color: props.status === 'top' ? "white" : "black" }}>
        <Toolbar className={classes.toolbar}>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <MenuIcon
              className={classes.sideBarIcon}
              onClick={() => { props.updateState(true) }}
              style={{ color: props.status === 'top' ? "white" : "black" }} />
            <Typography variant="h6" className={classes.title}>            
            <Link to="/home/#home" style={{ color: props.status === 'top' ? "white" : "black", textDecoration: 'none' }}>WOLFPACK</Link>
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        open={props.drawerState}
        onClose={() => { props.updateState(false) }}
        onOpen={() => { props.updateState(true) }}>

        <div
          tabIndex={0}
          role="button"
          onClick={() => { props.updateState(false) }}
          onKeyDown={() => { props.updateState(false) }}>
          <List className={classes.list}>
            <ListItem key={1} button divider><Link to="/home/#projects" color="inherit" style={{ textDecoration: 'none' }}>Projects </Link> </ListItem>
            <ListItem key={2} button divider><Link to="/home/#services" color="inherit" style={{ textDecoration: 'none' }}>Services </Link> </ListItem>
            <ListItem key={2} button divider><Link to="/home/#details" color="inherit" style={{ textDecoration: 'none' }}>Details </Link> </ListItem>
            <ListItem key={3} button divider><Link to="/home/#technology" color="inherit" style={{ textDecoration: 'none' }}>Technology </Link> </ListItem>
            <ListItem key={4} button divider><Link to="/home/#about" color="inherit" style={{ textDecoration: 'none' }}>About Us </Link> </ListItem>
            <ListItem key={5} button divider><Link to="/home/#contact" color="inherit" style={{ textDecoration: 'none' }}>Contact </Link> </ListItem>
          </List>

        </div>
      </SwipeableDrawer>

    </div>
  );
}

//Larger Screens
const DestroyDrawer = (props) => {
  const classes = styleSheet();
  return (
    <div className={classes.root}>
      <AppBar position='fixed' style={{ paddingLeft : '6%',paddingRight : '6%',backgroundColor: props.status === 'top' ? "black" : "white", boxShadow: 'none', color: props.status === 'top' ? "white" : "black" }}>
        <Toolbar className={classes.toolBar}>
          {/* <img src={logo} alt="logo" width='3%'/> */}
          <Typography variant="h6" className={classes.title}>
            <Link to="/home/#home" style={{ color: props.status === 'top' ? "white" : "black", textDecoration: 'none' }}>WOLFPACK</Link>
          </Typography>
          <Button color="inherit"><Link to="/home/#projects" style={{ color: props.status === 'top' ? "white" : "black", textDecoration: 'none' }}>Projects </Link></Button>
          <Button color="inherit"><Link to="/home/#services" style={{ color: props.status === 'top' ? "white" : "black", textDecoration: 'none' }}>Services </Link></Button>
          <Button color="inherit"><Link to="/home/#details" style={{ color: props.status === 'top' ? "white" : "black", textDecoration: 'none' }}>Details </Link></Button>
          <Button color="inherit"><Link to="/home/#technology" style={{ color: props.status === 'top' ? "white" : "black", textDecoration: 'none' }}>Technologies </Link></Button>
          <Button color="inherit"><Link to="/home/#about" style={{ color: props.status === 'top' ? "white" : "black", textDecoration: 'none' }}>About Us </Link></Button>
          <Button color="inherit"><Link to="/home/#contact" style={{ color: props.status === 'top' ? "white" : "black", textDecoration: 'none' }}>Contact </Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

HeaderComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(HeaderComponent);