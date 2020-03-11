import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import TechSelectOptions from '../techs/TechSelectOptions';

import { connect } from 'react-redux';
import { addLog } from '../../redux/actions/logActions';

const AddLogModel = ({ toggleNested, addLog }) => {

    const [ message, setMessage ] = useState('');
    const [ attention, setAttention ] = useState(false);
    const [ tech, setTech ] = useState('');
    const [ alert, setAlert ] = useState(false);

    const onSubmit = () => {
        if(message === '' || tech === '' ) {
            setAlert(true);
        } else {
            toggleNested();

            const newLog = {
                message, 
                attention, 
                tech,
                date: new Date()
            }
            addLog(newLog);

            // Clear fields
            setMessage('');
            setTech('');
            setAttention(false);
        }
    }

    return (
        <Form style={formStyle}>
            <FormGroup>
                { alert && message === '' ? <Alert className='container font-weight-bold' color="danger">Please enter a message</Alert> : null }
                { alert && tech === '' ? <Alert className='container font-weight-bold' color="danger">Please select a Technician</Alert> : null }
                <div className="row container">
                    <Label for="message">Log Message</Label>
                    <Input type="text" name="message" placeholder="Enter a log message" value={message} onChange={e => setMessage(e.target.value)} />                
                </div>                
            </FormGroup>

            <FormGroup>
                <div className="row container">
                    <Label for="exampleSelect">Technicians</Label>
                    <Input type="select" name="tech" value={tech} onChange={e => setTech(e.target.value)}>
                        <option value='' disabled>Select Technician</option>
                        <TechSelectOptions />
                    </Input>
                </div>
            </FormGroup>

            <FormGroup>
                <div className="row container">
                    <Input className="ml-1" type="checkbox" name="" placeholder="" value={attention} onChange={e => setAttention(!attention)} /> 
                    <Label for="attention" className="ml-4">Needs Attention</Label>
                </div>
            </FormGroup>
            <Button color="info" onClick={onSubmit}>Submit</Button>{' '}
        </Form>    
    )
}

AddLogModel.propTypes = {
    addLog: PropTypes.func.isRequired
}

const formStyle = {
    width: '100%',
    height: '100%'
}

export default connect(null, { addLog })(AddLogModel);
