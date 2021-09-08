import React, { Component } from 'react';
import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';
import classes from './Auth.css';

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Mail address',
        },
        value: '',
        validationRules: {
          required: true,
          isEmail: true,
        },
        isValid: false,
        touched: false,
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password',
        },
        value: '',
        validationRules: {
          required: true,
          minLength: 6,
        },
        isValid: false,
        touched: false,
      },
    },
  };
  render() {
    const formControls = [];
    for (let key in this.state.controls) {
      formControls.push({ id: key, ...this.state.controls[key] });
    }
    console.log(formControls);
    const form = formControls.map((el) => (
      <Input
        key={el.id}
        elementType={el.elementType}
        elementConfig={el.elementConfig}
        value={el.value}
        change={(e) => this.formDataChangeHandler(e, el.id)}
      />
    ));
    return (
      <div>
        <form className={classes.Auth}>
          {form}
          <Button btnType="Success">Submit</Button>
        </form>
      </div>
    );
  }
}

export default Auth;
