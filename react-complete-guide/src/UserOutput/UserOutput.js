import React, { Component } from 'react'

export class UserOutput extends Component {
    render() {
        return (
            <div>
                <p>{this.props.length}</p>
            </div>
        )
    }
}

export default UserOutput
