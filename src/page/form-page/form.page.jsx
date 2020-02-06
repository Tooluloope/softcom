import React, { useState, useEffect } from 'react';
import './form.style.css';
import Validator from '../../validator';
import { Input } from '../../component/input.component';
import { updateValidators, displayValidationErrors, isFormValid } from '../utils.page';

const Form = () => {

  const validators = Validator

  const initialState = {
    username: '',
    password: '',
  }

  const [data, setdata] = useState(initialState)

  const handleInputChange =(name, value) => {
    const newState = Object.assign({}, data)
    newState[name] = value
    setdata(newState)
    updateValidators(name, value, validators)
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
