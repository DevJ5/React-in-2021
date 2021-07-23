import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = ({
  onToggleModal,
  isModalOpen,
}: {
  onToggleModal: any;
  isModalOpen: any;
}) => {
  return isModalOpen ? (
    <div className={classes.backdrop} onClick={onToggleModal}></div>
  ) : null;
};

export default Backdrop;
