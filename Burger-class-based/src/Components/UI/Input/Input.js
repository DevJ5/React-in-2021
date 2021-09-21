import React from 'react';
import classes from './Input.css';

const Input = (props) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];
  if (props.isTouched && props.shouldValidate && !props.isValid) {
    inputClasses.push(classes.Invalid);
  }
  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          type={props.elementConfig.type}
          value={props.value}
          placeholder={props.elementConfig.placeholder}
          onChange={props.change}></input>
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={classes.InputElement}
          type={props.elementConfig.type}
          value={props.value}
          placeholder={props.elementConfig.placeholder}
          onChange={props.change}></textarea>
      );
      break;
    case 'select':
      inputElement = (
        <select
          value={props.value}
          className={classes.InputElement}
          onChange={props.change}>
          {props.elementConfig.options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.displayName}
              </option>
            );
          })}
        </select>
      );
      break;
    case 'password':
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          type={props.elementConfig.type}
          value={props.value}
          placeholder={props.elementConfig.placeholder}
          onChange={props.change}></input>
      );
      break;
    default:
      return;
  }

  return inputElement;
};

export default Input;
