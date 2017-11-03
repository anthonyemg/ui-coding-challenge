// import React from 'react';
// import ReactDOM from 'react-dom';

//React
import React from 'react';
import ReactDOM from 'react-dom';
//Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers';

class Modal extends React.Component {
  componentWillMount() {
    const modal = document.createElement('div');
    modal.id = 'modal-container';
    document.body.appendChild(modal);

    // ReactDOM.render(<div className="modal-wrapper">{this.props.children}</div>, modal);

    const store = createStore(reducer);

    ReactDOM.render(
      <Provider store={store}>
        <div className="modal-wrapper">{this.props.children}</div>
      </Provider>,
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
