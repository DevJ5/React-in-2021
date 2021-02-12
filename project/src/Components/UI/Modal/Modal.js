import React, { Component } from 'react'
import Aux from '../../../HOC/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.css';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.show !== this.props.show) return true;
    }
    render() {

        return (
            <Aux>
                <Backdrop isShown={this.props.isModalOpen} clicked={this.props.updateModalStatus}></Backdrop>
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.isModalOpen ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.isModalOpen ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;