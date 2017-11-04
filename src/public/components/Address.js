import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateAddress, toggleAddressModal } from '../actions';
import Modal from './Modal';
import AddressModal from './AddressModal';

const propTypes = {
  address: PropTypes.object,
  displayAddressModal: PropTypes.bool.isRequired
};

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      line1: this.props.address.line1,
      line2: this.props.address.line2
    };
    this.handleUpdateAddress = this.handleUpdateAddress.bind(this);
    this.handleSubmitUpdatedAddress = this.handleSubmitUpdatedAddress.bind(this);
    this.handleToggleAddressModal = this.handleToggleAddressModal.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }
  // updates the specific address line in the component's state
  handleUpdateAddress(e, line) {
    const newState = {};
    newState[line] = e.target.value;
    this.setState(newState);
  }
  // updates the store's address as long as neither of the input fields are not empty, if had more time I'd add a warning to make sure both fields are completed
  handleSubmitUpdatedAddress() {
    if (this.state.line1 !== '' || this.state.line2 !== '') {
      this.props.updateAddress({ ...this.state });
      this.handlePost({ ...this.state });
    }
  }

  handleToggleAddressModal() {
    this.props.toggleAddressModal(!this.props.displayAddressModal);
  }
  // if user cancels after changing address in modal, this resets this components state to the store's address
  handleCancel() {
    this.setState({ ...this.props.address });
  }
  // updating our database with the updated address
  handlePost(updatedAddress) {
    fetch('/database', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address: updatedAddress })
    }).catch(err => console.log(err));
  }
  render() {
    return (
      <div className="component-container">
        <div className="component-wrapper">
          <div className="component-details">
            <span className="component-title">Address</span>
            <span className="component-text">{this.props.address.line1}</span>
            <span className="component-text">{this.props.address.line2}</span>
          </div>
          <div>
            <button
              className="component-editButton"
              onClick={() => this.handleToggleAddressModal()}
            >
              Edit Address
            </button>
          </div>
        </div>
        {this.props.displayAddressModal && (
          <Modal>
            <AddressModal
              address={this.props.address}
              handleUpdateAddress={this.handleUpdateAddress}
              handleSubmitUpdatedAddress={this.handleSubmitUpdatedAddress}
              handleToggleAddressModal={this.handleToggleAddressModal}
              handleCancel={this.handleCancel}
            />
          </Modal>
        )}
      </div>
    );
  }
}

Address.propTypes = propTypes;

const mapStateToProps = state => ({
  address: state.address,
  displayAddressModal: state.displayAddressModal
});
const mapDispatchToProps = dispatch => ({
  updateAddress: address => dispatch(updateAddress(address)),
  toggleAddressModal: boolean => dispatch(toggleAddressModal(boolean))
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
