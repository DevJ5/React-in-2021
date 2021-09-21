import React, { Component } from 'react';
import Aux from '../../HOC/Auxiliary';
import PropTypes from 'prop-types';
import Sidebar from '../Navigation/Sidebar/Sidebar';
import Toolbar from '../Navigation/Toolbar/Toolbar';

class Layout extends Component {
  state = {
    isMenuSidebarOpen: false,
  };

  toggleSidebarHandler = () => {
    console.log('sidebar toggled');
    this.setState((state) => {
      return { isMenuSidebarOpen: !state.isMenuSidebarOpen };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar toggleSidebar={this.toggleSidebarHandler}></Toolbar>
        <Sidebar
          toggleSidebar={this.toggleSidebarHandler}
          isMenuSidebarOpen={this.state.isMenuSidebarOpen}></Sidebar>
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
