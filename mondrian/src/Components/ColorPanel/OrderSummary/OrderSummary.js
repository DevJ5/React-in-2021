import React from 'react';
import Aux from '../../../HOC/Auxiliary';
import Button from '../../UI/Button/Button';
import PropTypes from 'prop-types';

const OrderSummary = (props) => {
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
        <Button click={props.toggleModal}>Cancel</Button>
        <Button click={props.purchasePainting}>Continue</Button>
      </div>
    </Aux>
  );
};

OrderSummary.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  purchasePainting: PropTypes.func.isRequired,
};

export default OrderSummary;
