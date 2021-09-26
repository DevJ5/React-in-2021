import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { isTouched: state.isTouched, value: action.value };
  }
  if (action.type === 'BLUR') {
    console.log(state);
    return { isTouched: true, value: state.value };
  }
  if (action.type === 'RESET') {
    return { isTouched: false, value: '' };
  }
  return inputStateReducer;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  let errorText;
  let valueIsValid = validateValue.every((validateObj) => {
    if (!validateObj.fn(inputState.value)) {
      errorText = validateObj.errorText;
      return false;
    }
    return true;
  });

  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    console.log('inputBlurHandler runs');
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    errorText,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
