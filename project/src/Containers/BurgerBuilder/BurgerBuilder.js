import React, { Component } from 'react'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import Burger from '../../Components/Burger/Burger'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'
import Modal from '../../Components/UI/Modal/Modal'
import Aux from '../../HOC/auxiliary'


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

export default class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        isOrderNowButtonDisabled: true,
        isModalOpen: false
    }

    addIngredientHandler = (type) => {
        const newAmount = this.state.ingredients[type] + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = newAmount;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice }, this.orderNowButtonStatusUpdate);
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] > 0) {
            const newAmount = this.state.ingredients[type] - 1;
            const updatedIngredients = { ...this.state.ingredients };
            updatedIngredients[type] = newAmount;
            const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
            this.setState({ ingredients: updatedIngredients, totalPrice: newPrice }, this.orderNowButtonStatusUpdate);
        }
    }

    orderNowButtonStatusUpdate = () => {
        const ingredients = { ...this.state.ingredients };
        const sum = Object.values(ingredients).reduce((sum, el) => sum + el, 0);
        this.setState({ isOrderNowButtonDisabled: sum <= 0 })
    }

    updateModalStatus = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }

    render() {
        const removeButtonsDisabled = { ...this.state.ingredients }
        for (const key in removeButtonsDisabled) {
            removeButtonsDisabled[key] = removeButtonsDisabled[key] <= 0;
        }

        return (
            <Aux>
                <Modal isModalOpen={this.state.isModalOpen} updateModalStatus={this.updateModalStatus}>
                    <OrderSummary ingredients={this.state.ingredients}></OrderSummary>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    removeButtonsDisabled={removeButtonsDisabled}
                    orderNowButtonDisabled={this.state.isOrderNowButtonDisabled}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    totalPrice={this.state.totalPrice}
                    updateModalStatus={this.updateModalStatus} />
            </Aux>
        )
    }
}
