import React from 'react'

import classes from './SideDrawer.css'
import Logo from '../../UI/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../HOC/Auxiliary'

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.isShown) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop isShown={props.isShown} clicked={props.closed} ></Backdrop>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo className={classes.Logo}></Logo>
                </div>
                <nav><NavigationItems></NavigationItems></nav>
            </div>
        </Aux >
    )
}

export default SideDrawer
