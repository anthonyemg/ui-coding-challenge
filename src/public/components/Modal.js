import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
  // create and render a div that inherites the children
  componentWillMount() {
    const modal = document.createElement('div');
    modal.id = 'modal-container';
    document.body.appendChild(modal);
    ReactDOM.render(<div className="modal-wrapper">{this.props.children}</div>, modal);
  }
  // remove the modal from the document.body when closed
  componentWillUnmount() {
    document.body.removeChild(document.getElementById('modal-container'));
  }
  // not rendering anything here since rendering above
  render() {
    return null;
  }
}

export default Modal;
