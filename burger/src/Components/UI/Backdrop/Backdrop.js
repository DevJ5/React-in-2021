import React from 'react';

import classes from './Backdrop.css';

const backdrop = (props) => {
    return (
        props.isShown ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
    )
}

export default backdrop;
