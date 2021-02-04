import React, { Component } from 'react';

// class UserInput extends Component {
//     render() {
//         return (
//             <input onChange={this.props.updateUsername} value={this.props.username}></input>
//         )
//     }
// }

// export default UserInput


function UserInput(props) {
    return (
        <div>
            <input onChange={props.updateUsername} value={props.username}></input>
        </div>
    )
}

export default UserInput
