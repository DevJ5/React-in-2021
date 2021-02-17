import React from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../HOC/Auxiliary';

const Modal = (props) => {
  return (
    <Aux>
      <Backdrop isOpen={props.isOpen} click={props.toggleModal}></Backdrop>
      <div
        className={[styles.Modal, props.isOpen ? styles.isOpen : null].join(
          ' '
        )}>
        {props.children}
      </div>
    </Aux>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.element,
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
