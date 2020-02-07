import React from 'react'
import { BaseInput } from './base-input.component'


export const Input = ({type,displayValidationErrors, children, value,name, onChange, ...props}) => {

    const error = displayValidationErrors
    console.log(error)
    return(
    
    <BaseInput {...props}>
        
        <input   value = {value} onChange = {onChange} name={name} type={type} className="form-control"  required/>
        {error?
            <div className= 'error col-sm-7 hidden'>
                {error}
            </div>
        : null}
    </BaseInput>
)}