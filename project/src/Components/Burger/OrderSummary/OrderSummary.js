import React, { Component } from 'react'
import Aux from '../../../HOC/Auxiliary';
import Button from '../../UI/Button/Button'

class orderSummary extends Component {

    render() {

        const ingredients = this.props.ingredients;

        const ingredientSummary = Object.entries(ingredients).map(([ingredient, amount]) => <li key={ingredient}><span style={{ textTransform: 'capitalize' }}>{ingredient}: </span>{amount}</li>);

        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType='Danger' clicked={this.props.purchaseCancel}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        )
    }

}
export default orderSummary;
