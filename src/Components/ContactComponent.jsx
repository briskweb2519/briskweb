import React, { Component } from 'react'
import { TextField, Radio, Button, Grid, RadioGroup, FormControlLabel, FormControl, FormLabel, TextareaAutosize, Checkbox } from '@material-ui/core'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { Link } from 'react-router-dom'
function FormControlLabelPlacement(props) {
    return (
        <FormControl component="fieldset" style={{ width: '100%' }}>
            <FormLabel component="legend"><h5>Project</h5></FormLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="top" >
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <FormControlLabel name="website" value="Website" control={<Checkbox color="primary" />} label="Website" onChange={props.onHandleChange} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FormControlLabel name="application" value="Web-Application" control={<Checkbox color="primary" />} label="Application" onChange={props.onHandleChange}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FormControlLabel name="digital_marketing" value="Digital Marketing" control={<Checkbox color="primary" />} label="Digital Marketing" onChange={props.onHandleChange}/>
                    </Grid>
                </Grid>
            </RadioGroup>
        </FormControl>
    );
}

export default class ContactComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '',mobile:'', message: '',website : '', application : '',digital_marketing : '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit() {
        const templateId = 'template_7xptVovv';
        this.sendFeedback(templateId, { name: this.state.name, email: this.state.email, mobile: this.state.mobile,website : this.state.website,application : this.state.application,digital_marketing : this.state.digital_marketing, message: this.state.message })
    }

    sendFeedback (templateId, variables) {
        window.emailjs.send(
          'briskweb', templateId,
          variables
          ).then(res => {
            alert("We have recieved your request. We wil get back to you soon.")
            this.setState({
                name : "",
                email:"",
                mobile:"",
                website:"",
                application:"",
                digital_marketing:"",
                message:""
            })
          })
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }

    render() {
        return (
            <div style={{ textAlign: 'left' }} className="maincontainer" id="#contact">
                <div >
                    <p style={{ fontSize: '40px', textAlign: 'left' }}><strong>Contact</strong></p>
                </div>

                <div>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <TextField style={{ width: '100%', marginRight: '10%' }} id="standard-basic" label="Name" name="name" value={this.state.name} onChange={this.handleChange} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField style={{ width: '100%' }} id="standard-basic" label="E-Mail" name="email" value={this.state.email} onChange={this.handleChange}/>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField style={{ width: '100%' }} id="standard-basic" label="Mobile Number" name="mobile" value={this.state.mobile} onChange={this.handleChange} />
                            </Grid>
                        </Grid>
                    </form>
                    <div>
                        <FormControlLabelPlacement onHandleChange={this.handleChange}/>
                    </div>

                    <div>
                        <FormLabel component="legend"><h5>Message</h5></FormLabel>
                        <TextareaAutosize
                            rows={10}
                            defaultValue=""
                            style={{ width: '100%' }}
                            name="message"
                            value={this.state.message}
                            onChange={this.handleChange}
                        /><br />
                        <Button style={{ marginTop: '2%' }} variant="contained" color="primary" onClick={this.handleSubmit}>
                            Send
                        </Button>
                    </div>
                    <div style={{fontSize:'20px'}}>
                        <p>Alternatively you can send an e-mail to <strong>briskweb2519@gmail.com</strong></p>
                        <p>Shail Raval : +917600991213</p>
                        <p>Meet Patel : +919638409065</p>
                        <p>Parth Parmar : +918141630915</p>
                    </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Link to="#home"><ExpandLessIcon fontSize="large" style={{ color: 'black' }} /></Link>
                </div>
            </div>
        )
    }
}