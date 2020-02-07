import React, { useState, useEffect } from 'react';
import './form.style.css';
import Validator from '../../validator';
import { Input } from '../../component/input.component';
import { updateValidators, displayValidationErrors, isFormValid } from '../utils.page';

const Form = () => {

  const validators = Validator

  const initialState = {
    username: '',
    email: '',
    phone_number: '',
    password: '',
    password2: '',
    card_number: '',
    date: '',
    pin: '',
  }

  const [data, setdata] = useState(initialState)

  const handleInputChange =(name, value) => {
    const newState = Object.assign({}, data)
    newState[name] = value
    if(name === 'date') {
        const newValue = value.replace(/\//g, '')
        console.log( newValue)
        updateValidators(name, newValue, validators)
        let new_value =  newValue.replace(/^(\d{2})(\d{2})/, '$1/$2')
        newState[name] = new_value
        setdata(newState)
    }
    else if (name === 'card_number'){
        const newValue = value.replace(/ /g, '')
        console.log( newValue)
        updateValidators(name, newValue, validators)
        let new_value =  newValue.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'')
        newState[name] = new_value
        setdata(newState)
    }
    else{
        updateValidators(name, value, validators)
    }
    setdata(newState)
  }

  
  useEffect(() => console.log(data, validators), [data, validators]);
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
                            ADMIN PANEL
                        </div>

                        <div className="col-lg-12 login-form">
                            <div className="col-lg-12 login-form">
                            
                                <form >
                                    <Input name = 'username' type='text' label = 'Username'  onChange = {e => handleInputChange(e.target.name, e.target.value)} />
                                    { displayValidationErrors('username', validators) }
                                    <Input name = 'password' type='password' label = 'Password'  onChange = {e => handleInputChange(e.target.name, e.target.value) } />
                                    { displayValidationErrors('password', validators) }
                                    <Input name = 'password2' type='password' label = 'Confirm Password'  onChange = {e => handleInputChange(e.target.name, e.target.value) } />
                                    { displayValidationErrors('password2', validators) }
                                    <Input name = 'email' type='email' label = 'Email Address'  onChange = {e => handleInputChange(e.target.name, e.target.value) } />
                                    { displayValidationErrors('email', validators) }
                                    <Input name = 'phone_number' type='number' label = 'Phone Number'  onChange = {e => handleInputChange(e.target.name, e.target.value) } />
                                    { displayValidationErrors('phone_number', validators) }
                                    <Input value={data.card_number} name = 'card_number'  type='text' label = 'Card Number' onChange = {e => handleInputChange(e.target.name, e.target.value) }   />
                                    { displayValidationErrors('card_number', validators) }

                                    <Input value={data.date} name = 'date'  type='text' label = 'Expiry Date' onChange = {e => handleInputChange(e.target.name, e.target.value) }   />
                                    { displayValidationErrors('date', validators) }

                                    <Input name = 'pin' type='password' label = 'PIN'  onChange = {e => handleInputChange(e.target.name, e.target.value) } />
                                    { displayValidationErrors('pin', validators) }
                                   
                                    <div className="col-lg-12 loginbttm">
                                        
                                        <div className=" login-btm login-button">
                                            <button type="submit"  className="btn btn-outline-primary"  disabled = {!isFormValid(validators)}>LOGIN</button>
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
