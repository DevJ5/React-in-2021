import React from 'react';

import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p><strong>{props.totalPrice.toFixed(2)}</strong></p>
        {controls.map((ctrl) => {
            return (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    addIngredient={() => props.addIngredient(ctrl.type)}
                    removeIngredient={() => props.removeIngredient(ctrl.type)}
                    isDisabled={props.removeButtonsDisabled[ctrl.type]}
                />)
        }
        )}
        <button className={classes.OrderButton} disabled={props.orderNowButtonDisabled} onClick={props.updateModalStatus}>ORDER NOW</button>
    </div>
)


export default buildControls;
