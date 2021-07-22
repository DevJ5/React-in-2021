import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="row">
          <h1 className="heading-primary">Restaurant</h1>
          <button className="cart-btn">
            <svg className="cart-icon">
              <use xlinkHref="./sprite.svg#icon-shopping-cart"></use>
            </svg>
            <span>Your Cart</span>
            <span className="cart-amount">2</span>
          </button>
        </div>
      </header>
      <div className="hero"></div>
      <div className="content">
        <div className="text">
          <h2 className="heading-secondary">Get some awesome food!</h2>
          <p>
            Chose your meal from a broad selection and enjoy a delicious lunch
            or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </div>
        <div className="order-summary">
          <ul className="order-list">
            <li className="order-item">
              <div className="order-item__left">
                <h4 className="order-item__name">Sushi</h4>
                <p className="order-item__description">
                  Finest fish and veggies
                </p>
                <p className="order-item__price">$22.99</p>
              </div>
              <div className="order-item__right">
                <label htmlFor="" className="order-item__label">
                  Amount
                </label>
                <input type="text" className="order-item__input" />
                <button className="order-item__btn">Add</button>
              </div>
            </li>
            <li className="order-item">
              <div className="order-item__left">
                <h4 className="order-item__name">Sushi</h4>
                <p className="order-item__description">
                  Finest fish and veggies
                </p>
                <p className="order-item__price">$22.99</p>
              </div>
              <div className="order-item__right">
                <label htmlFor="" className="order-item__label">
                  Amount
                </label>
                <input type="text" className="order-item__input" />
                <button className="order-item__btn">Add</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
