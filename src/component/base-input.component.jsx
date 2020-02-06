import React from 'react'

export const BaseInput = ({children, label}) => (
        <div className="form-group">
            <label className="form-control-label">{label}</label>
            {children}
        </div>
)