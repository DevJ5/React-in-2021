import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../../Assets/mondrian-logo.png';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = () => {
  return (
    <header className={styles.Toolbar}>
      <div className={styles.Menu}>Menu</div>
      <div className={styles.Logo}>
        <img src={Logo} />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
