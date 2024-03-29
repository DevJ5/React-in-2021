import React, { Component } from 'react';
import Modal from '../Components/UI/Modal/Modal';
import Aux from './Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        error: null,
      };
      axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error });
        }
      );
    }

    componentDidMount() {}

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal
            isModalOpen={this.state.error}
            updateModalStatus={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props}></WrappedComponent>
        </Aux>
      );
    }
  };
};
export default withErrorHandler;
