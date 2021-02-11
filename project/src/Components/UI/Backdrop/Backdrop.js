import React from 'react';

import classes from './Backdrop.css';

const backdrop = (props) => {
    return (
        props.isModalOpen ? <div className={classes.Backdrop} onClick={props.updateModalStatus}></div> : null
    )
}

export default backdrop;
