import React from 'react';
import { connect } from 'react-redux';
import { showModal, hideModal } from '../actions';
import Modal from './Modal';

class Address extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="address-container">
        <div className="address-wrapper">
          <div className="address-details">
            <span className="address-containerTitle">Address</span>
            <span>123 Bowl Lane</span>
            <span>NY, NY 10021</span>
          </div>
          <div>
            <button
              className="address-editButton"
              onClick={() => this.props.showModal()}
            >
              Edit Address
            </button>
          </div>
        </div>
        {this.props.displayModal ? <Modal /> : ''}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  displayModal: state.displayModal
});
const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(showModal()),
  hideModal: () => dispatch(hideModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
