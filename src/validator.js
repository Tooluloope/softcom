const Validator = {
    fullname: {
      rules: [
        {
          test: /^[a-zA-Z]([-']?[a-zA-Z]+){1,}( [a-zA-Z]([-']?[a-zA-Z]+){1,})$/,
          message: 'Valid firstname must not be less that two characters, must include a space and then a valid second name. ',
        },
        {
          test: (value) => {
            return value.length >= 2;
          },
          message: 'Username must be longer than two characters. ',
        },
      ],
      errors: [],
      valid: false,
      state: '',
    },
    email: {
        rules: [
          {
            test: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Enter a Valid Email Address. ',
          },
          
        ],
        errors: [],
        valid: false,
        state: '',
      },
    
    password: {
      rules: [
        {
          test: (value) => {
            return value.length >= 6;
          },
          message: 'Password must not be shorter than 6 characters. ',
        },
        {
            test: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W])[A-Za-z\d\W]{6,}$/,
            message: 'Password must contain  alphabets-numeric characters with atleast one Uppercase and special Character. ',
          },
      ],
      errors: [],
      valid: false,
      state: ''
    },
    password2: {
        rules: [
          {
            test: (value ) => {
              return value === Validator.password.state;
            },
            message: 'Passwords must be the same. ',
          },
        ],
        errors: [],
        valid: false,
        state: ''
      },
      phone_number: {
        rules: [
            {
                test: /^([0]{1})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/,
                message: 'Enter a Nigerian Phone Number without +234. ',
            },
            {
                test: (value) => {
                  return value.length === 11;
                },
                message: 'Password must 11 digits. ',
              },

        ],
        errors: [],
        valid: false,
        state: ''
      },
      pin: {
        rules: [
          {
            test: (value) => {
              return value.length === 4;
            },
            message: 'Pin must be four characters. ',
          },
          {
            test: /^([\d]{4})$/,
            message: 'Pin must be  digits only. ',
            },
        ],
        errors: [],
        valid: false,
        state: ''
      },
      card_number: {
        rules: [
          {
            test: (value) => {
              return value.length === 16;
            },
            message: 'Card number must be sixteen characters. ',
          },
          {
            test: /^([\d]{16})$/,
            message: 'Input must be  digits only. ',
            },
        ],
        errors: [],
        valid: false,
        state: ''
      },
      date: {
        rules: [
          {
            test: (value) => {
              return value.length === 4;
            },
            message: 'Invalid date. (MM/YY). ',
          },
          {
            test: /^([\d]{4})$/,
            message: 'Date must be  digits only. ',
            },
        ],
        errors: [],
        valid: false,
        state: ''
      },
  };
  
  export default Validator;