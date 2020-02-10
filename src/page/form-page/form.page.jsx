import React, { useState, useEffect } from 'react';
import './form.style.css';


import Validator from '../../validator';
import { Input } from '../../component/input.component';
import { updateValidators, displayValidationErrors, isFormValid, resetValidators } from '../utils.page';
import Button from '../../component/ button.component';
import { history } from '../../App';


const Form = (props) => {


    const validators = Validator
    


    const initialState = {
        fullname: '',
        email: '',
        phone_number: '',
        password: '',
        password2: '',
        card_number: '',
        date: '',
        pin: '',
    }

    const [data, setdata] = useState(initialState)

    // Handles all input change in the form field
    const handleInputChange =(name, value) => {
        const newState = Object.assign({}, data)
        newState[name] = value

        // handles Date field
        if(name === 'date') {
            if(value.length > 5 || (value.length > 0 && isNaN(parseInt(value.charAt(value.length -1))))) {
                return
            }
            const newValue = value.replace(/\//g, '')
            
            updateValidators(name, newValue, validators)
            let new_value =  newValue.replace(/^(\d{2})(\d{2})/g, '$1/$2')
            newState[name] = new_value
            setdata(newState)
        }

        // handles Card number Field
        else if (name === 'card_number'){
            if(value.length > 19 || (value.length > 0 && value.charAt(value.length -1) !==' ' && isNaN(parseInt(value.charAt(value.length -1))))) {
                return
            }
            const newValue = value.replace(/ /g, '')
            updateValidators(name, newValue, validators)
            let new_value =  newValue.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'')
            newState[name] = new_value
            setdata(newState)
        }

        // Handles all other Field
        else{
            updateValidators(name, value, validators)
        }
        setdata(newState)
    }

    // Redirect to Dashboard once Valid and Submit button is clicked
    const onSubmit = (e) => {
        e.preventDefault()
        history.push('/dashboard')
    }

    // Reset validatiors
    useEffect(() => {
        resetValidators(validators)
    }, [validators])
    return (
        <div className="App">
            <div className='body'>
                <div className="container height">
                    <div className="row ">
                        <div className="col-lg-3 col-md-2"></div>
                        <div className="col-lg-6 col-md-8 login-box">
                            <div className="col-lg-12 login-key">
                                <i className="fa fa-key" aria-hidden="true"></i>
                            </div>
                            <div className="col-lg-12 login-title">
                                PANEL
                            </div>

                            <div className="col-lg-12 login-form">
                                <div className="col-lg-12 login-form">
                                
                                    <form >
                                        <Input displayValidationErrors ={displayValidationErrors('fullname', validators)} name = 'fullname' type='text' label = 'Full Name'  onChange = {e => handleInputChange(e.target.name, e.target.value)} />
                                        <Input displayValidationErrors ={displayValidationErrors('password', validators)} name = 'password' type='password' label = 'Password'  onChange = {e => handleInputChange(e.target.name, e.target.value) } />
                                        <Input displayValidationErrors = { displayValidationErrors('password2', validators) } name = 'password2' type='password' label = 'Confirm Password'  onChange = {e => handleInputChange(e.target.name, e.target.value) } />
                                        <Input displayValidationErrors = { displayValidationErrors('email', validators) } name = 'email' type='email' label = 'Email Address'  onChange = {e => handleInputChange(e.target.name, e.target.value) } />
                                        <Input displayValidationErrors = { displayValidationErrors('phone_number', validators) } name = 'phone_number' type='number' label = 'Phone Number'  onChange = {e => handleInputChange(e.target.name, e.target.value) } />
                                        <Input displayValidationErrors = { displayValidationErrors('card_number', validators) } value={data.card_number} name = 'card_number'  type='text' label = 'Card Number' onChange = {e => handleInputChange(e.target.name, e.target.value) }   />
                                        <Input displayValidationErrors = { displayValidationErrors('date', validators) } value={data.date} name = 'date'  type='text' label = 'Expiry Date' onChange = {e => handleInputChange(e.target.name, e.target.value) }   />
                                        <Input displayValidationErrors = { displayValidationErrors('pin', validators) } name = 'pin' type='password' label = 'PIN'  onChange = {e => handleInputChange(e.target.name, e.target.value) } />
                                        <div className="col-lg-12 loginbttm">
                                            <div className=" login-btm login-button">
                                                <Button handleClick = {onSubmit} type="submit"  className="btn btn-primary" label='SUBMIT' disabled = {!isFormValid(validators)} />
                                            
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
