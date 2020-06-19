import React, { Component } from 'react'
import { TextField, Radio, Button, Grid, RadioGroup, FormControlLabel, FormControl, FormLabel, TextareaAutosize } from '@material-ui/core'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {Link} from 'react-router-dom'
function FormControlLabelPlacement() {
    return (
        <FormControl component="fieldset" style={{ width: '100%' }}>
            <FormLabel component="legend"><h5>Project</h5></FormLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="top" >
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <FormControlLabel value="1" control={<Radio color="primary" />} label="Website" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FormControlLabel value="2" control={<Radio color="primary" />} label="Web Application" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FormControlLabel value="3" control={<Radio color="primary" />} label="Other" />
                    </Grid>
                </Grid>



            </RadioGroup>
        </FormControl>
    );
}

export default class ContactComponent extends Component {
    render() {
        return (
            <div style={{ textAlign: 'left'}} className="maincontainer" id="#contact">
                <div >
                    <p style={{ fontSize: '40px', textAlign: 'left' }}><strong>Contact</strong></p>
                </div>

                <div>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField style={{ width: '80%', marginRight: '10%' }} id="standard-basic" label="Name" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField style={{ width: '80%' }} id="standard-basic" label="E-Mail" />
                            </Grid>
                        </Grid>
                    </form>

                    <div>
                        <FormControlLabelPlacement />
                    </div>

                    <div>
                        <FormLabel component="legend"><h5>Message</h5></FormLabel>
                        <TextareaAutosize
                            rows={10}
                            defaultValue=""
                            style={{ width: '90%' }}
                        /><br />
                        <Button style={{ marginTop: '2%' }} variant="contained" color="primary">
                            Send
                        </Button>
                    </div>
                    <div>
                        <p>Alternatively you can send an e-mail to <a href="wewolfpack2519@gmail.com">wewolfpack2519@gmail.com</a></p>
                    </div>

                </div>
                <div style={{textAlign:'center'}}>
                <Link to="/home/#home"><ExpandLessIcon fontSize="large" style={{color:'black'}}/></Link>
                </div>
            </div>
        )
    }
}