import React, { Fragment } from 'react';
import Order from '../Order/Order';

const Home = () => {
  return (
    <Fragment>
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
        <Order />
      </div>
    </Fragment>
  );
};

export default Home;
