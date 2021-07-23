import React from 'react';
import classes from './Header.module.css';

const Header = ({ onToggleModal }: { onToggleModal: any }) => {
  return (
    <header className={classes.header}>
      <div className={classes.row}>
        <h1 className={classes['heading-primary']}>Restaurant</h1>
        <button className={classes['cart-btn']} onClick={onToggleModal}>
          <svg className={classes['cart-icon']}>
            <use xlinkHref="./sprite.svg#icon-shopping-cart"></use>
          </svg>
          <span>Your Cart</span>
          <span className={classes['cart-amount']}>2</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
