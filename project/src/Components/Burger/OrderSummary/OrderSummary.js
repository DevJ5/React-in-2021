import React from 'react'
import Aux from '../../../HOC/auxiliary';

const orderSummary = (props) => {
    const ingredients = props.ingredients;

    const ingredientSummary = Object.entries(ingredients).map(([ingredient, amount]) => <li key={ingredient}><span style={{ textTransform: 'capitalize' }}>{ingredient}: </span>{amount}</li>);

    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
        </Aux>
    )
}

export default orderSummary;
