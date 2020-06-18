import React, { Component } from 'react'
import { TextField, Radio, Button, RadioGroup, FormControlLabel, FormControl, FormLabel, TextareaAutosize } from '@material-ui/core'

function FormControlLabelPlacement() {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend"><h5>Project</h5></FormLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel value="1" control={<Radio color="primary" />} label="Website" />
                <FormControlLabel value="2" control={<Radio color="primary" />} label="Web Application" />
                <FormControlLabel value="3" control={<Radio color="primary" />} label="Other" />
            </RadioGroup>
        </FormControl>
    );
}

export default class ContactComponent extends Component {
    render() {
        return (
            <div style={{ textAlign: 'left' }} className="maincontainer">
                <div >
                    <p style={{ fontSize: '40px', textAlign: 'left' }}><strong>Contact</strong></p>
                </div>
                <div>
                    <form>
                        <TextField style={{ width: '35%', marginRight: '10%' }} id="standard-basic" label="Name" />
                        <TextField style={{ width: '35%' }} id="standard-basic" label="E-Mail" />
                    </form>
                    <div>
                        <FormControlLabelPlacement />
                    </div>

                    <div>
                        <FormLabel component="legend"><h5>Message</h5></FormLabel>
                        <TextareaAutosize
                            rows={10}
                            cols={116}
                            defaultValue=""
                        /><br />
                        <Button style={{ marginTop: '2%' }} variant="contained" color="primary">
                            Send
                        </Button>
                    </div>

                    <div>
                        <p>Alternatively you can send an e-mail to <a href="wewolfpack2519@gmail.com">wewolfpack2519@gmail.com</a></p>
                    </div>
                </div>
            </div>
        )
    }
}