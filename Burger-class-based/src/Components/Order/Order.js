import React from 'react';
import classes from './Order.css';

const Order = (props) => {
  console.log(props.order);
  const ingredients = [];
  for (let ingredient in props.order.ingredients) {
    const item = {
      name: ingredient,
      amount: props.order.ingredients[ingredient],
    };
    ingredients.push(item);
  }

  const ingredientOutput = ingredients.map((ingredient) => (
    <span
      key={ingredient.name}
      style={{
        textTransform: 'capitalize',
        display: 'inline-block',
        margin: '0 8px',
        padding: '5px',
        border: '1px solid #ccc',
      }}>
      {ingredient.name} ({ingredient.amount})
    </span>
  ));
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price:{' '}
        <strong>
          USD {Number.parseFloat(props.order.totalPrice).toFixed(2)}
        </strong>
      </p>
    </div>
  );
};

export default Order;
