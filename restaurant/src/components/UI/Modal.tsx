import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../UI/Backdrop';
import classes from './Modal.module.css';

const Modal = ({
  children,
  onToggleModal,
  isModalOpen,
}: {
  children: any;
  onToggleModal: any;
  isModalOpen: any;
}) => {
  const overlayElement = document.querySelector('#overlays');

  return (
    <Fragment>
      {overlayElement &&
        ReactDOM.createPortal(
          <Backdrop
            onToggleModal={onToggleModal}
            isModalOpen={isModalOpen}></Backdrop>,
          overlayElement
        )}
      {overlayElement &&
        ReactDOM.createPortal(
          <div
            className={`${classes['modal']} ${
              isModalOpen && classes['is-open']
            }`}>
            {children}
          </div>,
          overlayElement
        )}
    </Fragment>
  );
};

export default Modal;
