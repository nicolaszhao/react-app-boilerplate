import React, { Component } from 'react';
import Modal from '../Modal';
import style from './error-message.scss';

class ErrorMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.error !== prevProps.error && this.props.error) {
      this.setState({ visible: true });
    }
  }

  handleClose = () => {
    this.setState({ visible: false });
  }

  render() {
    const { error } = this.props,
      { visible } = this.state;

    return (
      <Modal title="Error" visible={visible} onClose={this.handleClose}>
        <h2 className={style.title}>Error message:</h2>
        <p className={style.content}>{error && error.message}</p>
      </Modal>
    );
  }
}

export default ErrorMessage;
