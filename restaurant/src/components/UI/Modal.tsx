import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../UI/Backdrop';
import classes from './Modal.module.css';
import { IModalProps } from '../Interfaces';

const Modal: React.FC<IModalProps> = ({
  children,
  onToggleModal,
  isModalOpen,
}): JSX.Element => {
  const overlayElement = document.querySelector('#overlays')!;

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop
          onToggleModal={onToggleModal}
          isModalOpen={isModalOpen}></Backdrop>,
        overlayElement
      )}
      {ReactDOM.createPortal(
        <div
          className={`${classes['modal']} ${
            isModalOpen && classes['is-open']
          }`}>
          {children}
        </div>,
        overlayElement
      )}
    </>
  );
};

export default Modal;
