import React, { Component } from 'react'

export default class ValidationComponent extends Component {
    render() {
        const validationMessage = this.props.length > 4 ? 'Text long enough' : 'Text too short';

        return (
            <div>
                {validationMessage}
            </div>
        )
    }
}
