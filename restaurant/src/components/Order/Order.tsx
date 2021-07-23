import React from 'react';
import classes from './Order.module.css';

const Order = () => {
  return (
    <div className={classes['order']}>
      <ul className={classes['order-list']}>
        <li className={classes['order-item']}>
          <div className={classes['order-item__left']}>
            <h4 className={classes['order-item__name']}>Sushi</h4>
            <p className={classes['order-item__description']}>
              Finest fish and veggies
            </p>
            <p className={classes['order-item__price']}>$22.99</p>
          </div>
          <div className={classes['order-item__right']}>
            <label htmlFor="amount" className={classes['order-item__label']}>
              Amount
            </label>
            <input
              id="amount"
              type="number"
              className={classes['order-item__input']}
              defaultValue="1"
            />
            <button className={classes['order-item__btn']}>Add</button>
          </div>
        </li>
        <li className={classes['order-item']}>
          <div className={classes['order-item__left']}>
            <h4 className={classes['order-item__name']}>Sushi</h4>
            <p className={classes['order-item__description']}>
              Finest fish and veggies
            </p>
            <p className={classes['order-item__price']}>$22.99</p>
          </div>
          <div className={classes['order-item__right']}>
            <label htmlFor="" className={classes['order-item__label']}>
              Amount
            </label>
            <input type="text" className={classes['order-item__input']} />
            <button className={classes['order-item__btn']}>Add</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Order;
