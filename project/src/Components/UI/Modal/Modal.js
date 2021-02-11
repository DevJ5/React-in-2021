import React from 'react'
import Aux from '../../../HOC/auxiliary';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.css';

const modal = (props) => {
    return (
        <Aux>
            <Backdrop isModalOpen={props.isModalOpen} updateModalStatus={props.updateModalStatus}></Backdrop>
            <div
                className={classes.Modal}
                style={{
                    transform: props.isModalOpen ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.isModalOpen ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Aux>
    )
}

export default modal