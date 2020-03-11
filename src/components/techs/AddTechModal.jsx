import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addTech } from '../../redux/actions/techActions';

const AddTechModel = ({ toggleNested, toggleAll2, addTech }) => {

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ alert, setAlert ] = useState(false);

    const onSubmit = () => {
        if( firstName === '' || lastName === '' ) {
            setAlert(true);
        } else {

            addTech({
                firstName,
                lastName
            });
            
            setAlert(true);

            // Clear fields
            setFirstName('');
            setLastName('');

            // toggleNested();

            toggleAll2();
        }
    }

    return (
        <Form>
            <FormGroup>
                { alert && firstName === '' ? <Alert className='container font-weight-bold' color="danger">Please enter first name</Alert> : null }
                { alert && lastName === '' ? <Alert className='container font-weight-bold' color="danger">Please enter last name</Alert> : null }
                { alert && firstName.length > 3 && lastName.length > 3 ? <Alert className='container font-weight-bold' color="danger">{firstName} {lastName} was added as Technician</Alert> : null }
                <div className="row container">
                    <Label for="firstName">First name</Label>
                    <Input type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />                
                </div> 
                <div className="row container">
                    <Label for="lastName">Last name</Label>
                    <Input type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />                
                </div>                
            </FormGroup>
            <Button color="info" onClick={onSubmit}>Submit</Button>{' '}
        </Form>    
    )
}

AddTechModel.propTypes = {
    addTech: PropTypes.func.isRequired
}

export default connect(null, { addTech })(AddTechModel);
