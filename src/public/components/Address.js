import React from 'react';
import { connect } from 'react-redux';
import { updateAddress, updateAddressLine1, showAddressModal, hideAddressModal } from '../actions';
import Modal from './Modal';
import AddressModal from './AddressModal';

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedAddressLine1: '',
      updatedAddressLine2: ''
    };
    this.handleUpdateAddressLine1 = this.handleUpdateAddressLine1.bind(this);
    this.handleUpdateAddressLine2 = this.handleUpdateAddressLine2.bind(this);
    this.handleSubmitUpdatedAddress = this.handleSubmitUpdatedAddress.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleUpdateAddressLine1(e) {
    this.setState({
      updatedAddressLine1: e.target.value
    });
  }
  handleUpdateAddressLine2(e) {
    this.setState({
      updatedAddressLine2: e.target.value
    });
  }
  handleSubmitUpdatedAddress() {
    this.props.updateAddress({
      line1: this.state.updatedAddressLine1,
      line2: this.state.updatedAddressLine2
    });
  }
  handleCancel() {
    this.setState({
      updatedAddressLine1: this.props.address.line1,
      updatedAddressLine2: this.props.address.line2
    });
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
        {this.props.displayAddressModal ? (
          <Modal>
            <AddressModal
              address={this.props.address}
              updateAddress={this.props.updateAddress}
              handleUpdateAddress={this.handleUpdateAddress}
              handleUpdateAddressLine1={this.handleUpdateAddressLine1}
              handleUpdateAddressLine2={this.handleUpdateAddressLine2}
              handleSubmitUpdatedAddress={this.handleSubmitUpdatedAddress}
              hideAddressModal={this.props.hideAddressModal}
              handleCancel={this.handleCancel}
            />
          </Modal>
        ) : null}
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
