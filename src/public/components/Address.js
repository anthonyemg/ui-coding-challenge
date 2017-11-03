import React from 'react';
import { connect } from 'react-redux';
import { updateAddress, showAddressModal, hideAddressModal } from '../actions';
import Modal from './Modal';
import AddressModal from './AddressModal';

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.adddress };
    this.handleUpdateAddress = this.handleUpdateAddress.bind(this);
    this.handleSubmitUpdatedAddress = this.handleSubmitUpdatedAddress.bind(this);
  }
  // updates the specific address line in the component's state
  handleUpdateAddress(e, line) {
    const newState = {};
    newState[line] = e.target.value;
    this.setState(newState);
  }
  // updates the store's address as long as neither of the input fields are not empty, if had more time I'd add a warning to make sure both fields are completed
  handleSubmitUpdatedAddress() {
    this.props.updateAddress({ ...this.state });
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
            <button className="component-editButton" onClick={() => this.props.showAddressModal()}>
              Edit Address
            </button>
          </div>
        </div>
        {this.props.displayAddressModal && (
          <Modal>
            <AddressModal
              address={this.props.address}
              updateAddress={this.props.updateAddress}
              handleUpdateAddress={this.handleUpdateAddress}
              handleSubmitUpdatedAddress={this.handleSubmitUpdatedAddress}
              hideAddressModal={this.props.hideAddressModal}
            />
          </Modal>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  address: state.address,
  displayAddressModal: state.displayAddressModal
});
const mapDispatchToProps = dispatch => ({
  updateAddress: address => dispatch(updateAddress(address)),
  showAddressModal: () => dispatch(showAddressModal()),
  hideAddressModal: () => dispatch(hideAddressModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
