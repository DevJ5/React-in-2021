import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

type BackdropProps = {
  onClose: () => void;
};

type ModalOverlayProps = {
  children: JSX.Element | JSX.Element[];
};

const Backdrop = (props: BackdropProps) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

type ModalProps = {
  children: JSX.Element | JSX.Element[];
  onClose: () => void;
};

const ModalOverlay = (props: ModalOverlayProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays') as HTMLElement;

const Modal = (props: ModalProps) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
