import React from 'react';
import classes from './Header.module.css';

interface IProps {
  onToggleCartModal: () => void;
}

const Header: React.FC<IProps> = ({ onToggleCartModal }) => {
  return (
    <header className={classes.header}>
      <div className={classes.row}>
        <h1 className={classes['heading-primary']}>Restaurant</h1>
        <button className={classes['cart-btn']} onClick={onToggleCartModal}>
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
