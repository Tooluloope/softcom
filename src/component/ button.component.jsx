import React from 'react'

const Button = ({type, className, handleClick, label, disabled}) => (
    <button
      type={type}
      className={className}
      onClick={handleClick}
      disabled = {disabled}
    >
      {label}
    </button>
  )

export default Button