import React from 'react'
import { BaseInput } from './base-input.component'


export const Input = ({type, children, value,name, onChange, ...props}) => (
    <BaseInput {...props}>
        <input value = {value} onChange = {onChange} name={name} type={type} className="form-control"  required/>
    </BaseInput>
)