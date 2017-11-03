import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const modal = document.createElement('div');
    modal.id = 'modal-container';
    document.body.appendChild(modal);
  }
  render() {
    return null;
  }
}

export default Modal;
