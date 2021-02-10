import React, { Component } from 'react'
import Burger from '../../Components/Burger/Burger'
import Aux from '../../HOC/auxiliary'

export default class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger />
                <div>Build Controls</div>
            </Aux>
        )
    }
}
