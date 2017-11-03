import React from 'react';
import { connect } from 'react-redux';
import { showAddressModal, hideAddressModal } from '../actions';
import Modal from './Modal';
import AddressModal from './AddressModal';

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
              onClick={() => this.props.showAddressModal()}
            >
              Edit Address
            </button>
          </div>
        </div>
        {this.props.displayAddressModal ? (
          <Modal>
            <AddressModal hideAddressModal={this.props.hideAddressModal} />
          </Modal>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  displayAddressModal: state.displayAddressModal
});
const mapDispatchToProps = dispatch => ({
  showAddressModal: () => dispatch(showAddressModal()),
  hideAddressModal: () => dispatch(hideAddressModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
