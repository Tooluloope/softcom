import React from 'react'


export const updateValidators =(name, value, validators) => {
    validators[name].errors = [];
    validators[name].state = value;
    validators[name].valid = true;
    validators[name].rules.forEach((rule) => {
      if (rule.test instanceof RegExp) {
        if (!rule.test.test(value)) {
          validators[name].errors.push(rule.message);
          validators[name].valid = false;
        }
      } else if (typeof rule.test === 'function') {
        if (!rule.test(value)) {
          validators[name].errors.push(rule.message);
          validators[name].valid = false;
        }
      }
    });
}


export const resetValidators = (validators) => {
    Object.keys(validators).forEach((name) => {
      validators[name].errors = [];
      validators[name].state = '';
      validators[name].valid = false;
    });
}


export const displayValidationErrors = (name, validators) =>  {
    const validator = validators[name];
    const result = '';
    if (validator && !validator.valid ) {
    
        const errors = validator.errors
        if(errors.length > 0) {
            
            errors.map((info, index) => {
            return <p className="" key={index}>* {info}</p>;
        });
            return (
                errors
            );
        }
    
    }
    return result;

}

export const isFormValid = (validators) => {
    let status = true;
    Object.keys(validators).forEach((field) => {
      if (!validators[field].valid) {
        status = false;
      }
    });
    return status;
}