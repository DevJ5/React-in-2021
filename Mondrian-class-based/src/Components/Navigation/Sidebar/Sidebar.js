import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './Sidebar.module.css';
import PropTypes from 'prop-types';
import Aux from '../../../HOC/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';

const Sidebar = (props) => {
  const classes = [
    styles.Sidebar,
    props.isMenuSidebarOpen ? styles.isOpen : null,
  ];
  return (
    <Aux>
      <Backdrop
        isOpen={props.isMenuSidebarOpen}
        click={props.toggleSidebar}></Backdrop>
      <div className={classes.join(' ')}>
        <NavigationItems></NavigationItems>
      </div>
    </Aux>
  );
};

Sidebar.propTypes = {
  isMenuSidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
