import React, { Component } from 'react';
import Aux from '../../HOC/Auxiliary';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        // When using previous state in a call to setState:
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar opened={this.sideDrawerToggleHandler}></Toolbar>
                <SideDrawer isShown={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}></SideDrawer>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;