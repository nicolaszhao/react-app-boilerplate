import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class Portal extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('div');
    
  }

  createContainer() {
    (this.props.container || document.body).appendChild(this.container);
  }

  removeContainer() {
    this.container.parentNode.removeChild(this.container);
  }

  componentDidMount() {
    this.createContainer();
  }

  componentWillUnmount() {
    this.removeContainer();
  }

  render() {
    return createPortal(
      this.props.children,
      this.container
    );
  }
}

export default Portal;
