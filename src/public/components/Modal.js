import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
  componentWillMount() {
    const modal = document.createElement('div');
    modal.id = 'modal-container';
    document.body.appendChild(modal);
    ReactDOM.render(
      <div className="modal-wrapper">{this.props.children}</div>,
      modal
    );
  }
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('modal-container'));
    document.body.removeChild(document.getElementById('modal-container'));
  }
  // componentDidUpdate() {
  //   React.render(
  //     <div {...this.props}>{this.props.children}</div>,
  //     document.getElementById('modal-container')
  //   );
  // }
  render() {
    return null;
  }
}

export default Modal;
