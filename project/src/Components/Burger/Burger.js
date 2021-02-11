import React from 'react'
import PropTypes from 'prop-types'

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = props => {
    const ingredientKeys = Object.keys(props.ingredients);
    let burgerIngredients = ingredientKeys.map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map((_, i) => <BurgerIngredient key={ingredientKey + (i + 1)} type={ingredientKey} />)
    }).reduce((arr, el) => arr.concat(el), [])

    if (burgerIngredients.length === 0) {
        burgerIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {burgerIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )
}

burger.propTypes = {
    ingredients: PropTypes.object
}

export default burger;
