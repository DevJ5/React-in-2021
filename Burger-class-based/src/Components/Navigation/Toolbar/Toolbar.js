import React from 'react';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import classes from './Toolbar.css'

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle opened={props.opened}></DrawerToggle>
            <div className={classes.Logo}>
                <Logo></Logo>
            </div>
            <nav className={classes.desktopOnly}><NavigationItems></NavigationItems></nav>
        </header >
    )
}

export default toolbar;
