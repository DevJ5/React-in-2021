import React, { Component } from 'react'

export class UserOutput extends Component {
    render() {
        return (
            <div>
                <p>{this.props.username}</p>
                <p>Ernie</p>
            </div>
        )
    }
}

export default UserOutput
