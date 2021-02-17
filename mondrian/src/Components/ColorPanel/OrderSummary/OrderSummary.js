import React from 'react';
import Aux from '../../../HOC/Auxiliary';
import Button from '../../UI/Button/Button';

const OrderSummary = () => {
  return (
    <Aux>
      <h3>Your painting</h3>
      <p>A beautiful mondrian with the following squares:</p>
      <ul>
        <li>Yellow: 1</li>
        <li>Red: 2</li>
      </ul>
      <p>Total price: 500</p>
      <p>Continue to checkout?</p>
      <div>
        <Button>Cancel</Button>
        <Button>Continue</Button>
      </div>
    </Aux>
  );
};

export default OrderSummary;
